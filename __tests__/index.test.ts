/* eslint-disable no-magic-numbers */
import nock from 'nock';
import {getAddress} from '../src';

beforeEach(() => {
  nock.abortPendingRequests();
  nock.cleanAll();
  nock.disableNetConnect();
});

describe('getAddress', () => {
  it('should get address info', async() => {
    nock('https://kmdsbng.github.io/zipcode_jp/zip_code')
      .persist()
      .get('/100/1000001.json')
      .reply(200, [{
        'prefecture_jis_code': '13',
        'city_jis_code': '13101',
        'zip_code': '1000001',
        'prefecture_name_kana': 'ﾄｳｷｮｳﾄ',
        'city_name_kana': 'ﾁﾖﾀﾞｸ',
        'town_name_kana': 'ﾁﾖﾀﾞ',
        'prefecture_name': '東京都',
        'city_name': '千代田区',
        'town_name': '千代田',
      }]);

    expect(await getAddress('1000001')).toEqual({
      cityJisCode: '13101',
      cityName: '千代田区',
      cityNameKana: 'ﾁﾖﾀﾞｸ',
      prefectureJisCode: '13',
      prefectureName: '東京都',
      prefectureNameKana: 'ﾄｳｷｮｳﾄ',
      townName: '千代田',
      townNameKana: 'ﾁﾖﾀﾞ',
      zipCode: '1000001',
    });

    expect(await getAddress('100-0001')).toEqual({
      cityJisCode: '13101',
      cityName: '千代田区',
      cityNameKana: 'ﾁﾖﾀﾞｸ',
      prefectureJisCode: '13',
      prefectureName: '東京都',
      prefectureNameKana: 'ﾄｳｷｮｳﾄ',
      townName: '千代田',
      townNameKana: 'ﾁﾖﾀﾞ',
      zipCode: '1000001',
    });
  });

  it('should return null if input is invalid', async() => {
    expect(await getAddress()).toBeNull();
    expect(await getAddress('')).toBeNull();
    expect(await getAddress('1')).toBeNull();
    expect(await getAddress('a')).toBeNull();
    expect(await getAddress('100000a')).toBeNull();
  });

  it('should return null if api error has occurred', async() => {
    nock('https://kmdsbng.github.io/zipcode_jp/zip_code')
      .get('/100/1000001.json')
      .reply(404);

    expect(await getAddress('100-0001')).toBeNull();
  });
});
