import { HouseDetailTileProps } from '../components/HouseDetailTile';
import { HouseTypeEnum } from '../containers/search/types';

export const locations = [
  {
    id: 'null',
    label: ''
  },
  {
    id: 'usc',
    label: 'University of Southern California'
  },
  {
    id: 'ucla',
    label: 'University of California, Los Angeles'
  },
  {
    id: 'uw',
    label: 'University of Washington'
  }
];

export const priceRanges = [
  {
    id: 'all',
    label: 'All'
  },
  {
    id: '1500',
    label: '0-1500'
  },
  {
    id: '2500',
    label: '1500-2500'
  },
  {
    id: '3500',
    label: '2500-3500'
  },
  {
    id: '4500',
    label: '3500-4500'
  },
  {
    id: '5500',
    label: '4500-5500'
  },
  {
    id: '5500-',
    label: '5500+'
  }
];

export const facilityOptions = [
  {
    id: 'laundary_room',
    label: 'Laundary room'
  },
  {
    id: 'kitchen',
    label: 'Kitchen'
  },
  {
    id: 'Fridge',
    label: 'Fridge'
  },
  {
    id: 'microwave',
    label: 'Microwave'
  },
  {
    id: 'furniture',
    label: 'Furniture'
  },
  {
    id: 'wifi',
    label: 'Wi-Fi'
  },
  {
    id: 'bed',
    label: 'Bed'
  },
  {
    id: 'desk',
    label: 'Desk'
  },
  {
    id: 'ac',
    label: 'Air conditioner'
  },
  {
    id: 'canteen',
    label: 'Canteen'
  },
  {
    id: 'fitness_room',
    label: 'Fitness room'
  },
  {
    id: 'swimming_pool',
    label: 'Swimming pool'
  },
  {
    id: 'public_transportation',
    label: 'Public transportation'
  },
  {
    id: 'security',
    label: 'Security'
  }
];

export const houseTypeOptions = [
  {
    id: 'all',
    label: 'All'
  },
  {
    id: HouseTypeEnum.APARTMENT,
    label: 'Apartment'
  },
  {
    id: HouseTypeEnum.TOWNHOUSE,
    label: 'Townhouse'
  },
  {
    id: HouseTypeEnum.SINGLE_HOUSE,
    label: 'Single family house'
  }
];

export const houses: HouseDetailTileProps[] = [
  {
    id: '#2134',
    address: '2207 W Ruffner St, Seattle, WA 98199',
    price: '1500',
    houseType: HouseTypeEnum.TOWNHOUSE,
    bedroom: 3,
    bathroom: 3
  },
  {
    id: '#8234',
    address: '2700 Ellendale Place, Los Angeles, CA 90007',
    price: '1500',
    houseType: HouseTypeEnum.APARTMENT,
    bedroom: 2,
    bathroom: 1
  },
  {
    id: '#9234',
    address: '1133 W 37th St, Los Angeles, CA 90007',
    price: '2500',
    houseType: HouseTypeEnum.APARTMENT,
    bedroom: 2,
    bathroom: 1
  },
];