import type {RawAddressInfo, AddressInfo} from './types';
import axios from 'axios';

const isZipCode           = (input: string): boolean => /^\d{3}-?\d{4}$/.test(input);
const normalizeZipCode    = (input: string): string => input.split('-').join('');
const getZipCodeJsonUrl   = (input: string): string => {
  const zipcode = normalizeZipCode(input);
  // eslint-disable-next-line no-magic-numbers
  return `https://kmdsbng.github.io/zipcode_jp/zip_code/${zipcode.slice(0, 3)}/${zipcode}.json`;
};
const parseRawAddressInfo = (info: RawAddressInfo): AddressInfo => ({
  zipCode: info.zip_code,
  prefectureJisCode: info.prefecture_jis_code,
  prefectureName: info.prefecture_name,
  prefectureNameKana: info.prefecture_name_kana,
  cityJisCode: info.city_jis_code,
  cityName: info.city_name,
  cityNameKana: info.city_name_kana,
  townName: info.town_name,
  townNameKana: info.town_name_kana,
});
export const getAddress   = async(input?: string): Promise<AddressInfo | null> => {
  if (!input || !isZipCode(input)) {
    return null;
  }

  try {
    return parseRawAddressInfo((await axios.get(getZipCodeJsonUrl(input))).data[0]);
  } catch {
    return null;
  }
};
