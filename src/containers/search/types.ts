import * as React from 'react';

export enum HouseTypeEnum {
  APARTMENT = 'APARTMENT',
  TOWNHOUSE = 'TOWNHOUSE',
  SINGLE_HOUSE = 'SINGLE_HOUSE'
}

export interface IHouseType {
  houseType: HouseTypeEnum;
}

export interface ISearchState {
  priceRange: string;
  facilities: string[];
  houseType: string;
}
