# Zipcode to address

[![npm version](https://badge.fury.io/js/%40technote-space%2Fzipcode2address-jp.svg)](https://badge.fury.io/js/%40technote-space%2Fzipcode2address-jp)
[![CI Status](https://github.com/technote-space/zipcode2address-jp/workflows/CI/badge.svg)](https://github.com/technote-space/zipcode2address-jp/actions)
[![codecov](https://codecov.io/gh/technote-space/zipcode2address-jp/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/zipcode2address-jp)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/zipcode2address-jp/badge)](https://www.codefactor.io/repository/github/technote-space/zipcode2address-jp)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/zipcode2address-jp/blob/master/LICENSE)

This library provides method to get japanese address from zipcode.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Usage](#usage)
  - [Install](#install)
  - [Use](#use)
- [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

### Install

`yarn add @technote-space/zipcode2address-jp`

or

`npm i @technote-space/zipcode2address-jp`

### Use

e.g.

```ts
import {getAddress} from '@technote-space/zipcode2address-jp';

(async() => {
  console.log(await getAddress('1000001'));
  console.log(await getAddress('100-0001'));
  /*
  {
    zipCode: '1000001',
    prefectureJisCode: '13',
    prefectureName: '東京都',
    prefectureNameKana: 'ﾄｳｷｮｳﾄ',
    cityJisCode: '13101',
    cityName: '千代田区',
    cityNameKana: 'ﾁﾖﾀﾞｸ',
    townName: '千代田',
    townNameKana: 'ﾁﾖﾀﾞ'
  }
  */
})();
```

## Author

[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
