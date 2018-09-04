import * as React from 'react';
import { ISearchBarOption } from '../../components/SearchBar';
import { HouseDetail } from '../../components/HouseDetailTile';

export enum HouseTypeEnum {
  APARTMENT = 'APARTMENT',
  TOWNHOUSE = 'TOWNHOUSE',
  SINGLE_HOUSE = 'SINGLE_HOUSE'
}

export interface IHouseType {
  houseType: HouseTypeEnum;
}

export interface ISearchState {
  location: ISearchBarOption;
  priceRange: string;
  facilities: string[];
  houseType: string;
  rawListItems: HouseDetail[];
  filteredResult: HouseDetail[];
}

export type ListHouseData = ISearchState;