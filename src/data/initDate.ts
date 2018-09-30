import { CheckboxListProps } from '../components/CheckboxList';
import { HouseCardProps } from '../components/HouseCard';
import { RecommendationsContainerProps } from '../components/RecommendationsContainer';

export const cityCheckboxProps: CheckboxListProps = {
  checkboxes: [
    {
      id: 'new_york',
      label: '纽约',
      checked: true
    },
    {
      id: 'boston',
      label: '波士顿',
      checked: false
    },
    {
      id: 'chicago',
      label: '芝加哥',
      checked: false
    },
    {
      id: 'washington',
      label: '华盛顿',
      checked: false
    },
    {
      id: 'philadelphia',
      label: '费城',
      checked: false
    },
    {
      id: 'baltimore',
      label: '巴尔的摩',
      checked: false
    },
    {
      id: 'seattle',
      label: '西雅图',
      checked: false
    },
    {
      id: 'san_francisco',
      label: '旧金山',
      checked: false
    },
    {
      id: 'los_angeles',
      label: '洛杉矶',
      checked: false
    },
    {
      id: 'san_diego',
      label: '圣地亚哥',
      checked: false
    }
  ],
  onSelect: this.onCitySelected
};

export const priceCheckboxes: CheckboxListProps = {
  checkboxes: [
    {
      id: 'all',
      label: '不限',
      checked: true
    },
    {
      id: '500',
      label: '0-500',
      checked: false
    },
    {
      id: '1000',
      label: '500-1000',
      checked: false
    },
    {
      id: '1500',
      label: '1000-1500',
      checked: false
    },
    {
      id: '2000',
      label: '1500-2000',
      checked: false
    },
    {
      id: '2500',
      label: '2000-2500',
      checked: false
    },
    {
      id: '2500+',
      label: '2500+',
      checked: false
    }
  ],
  onSelect: this.onPriceRangeSelected
};

export const facilityCheckboxes: CheckboxListProps = {
  checkboxes: [
    {
      id: 'all',
      label: '不限',
      checked: true
    },
    {
      id: 'washer',
      label: '洗衣机',
      checked: false
    },
    {
      id: 'kitchen',
      label: '厨房',
      checked: false
    },
    {
      id: 'fridge',
      label: '冰箱',
      checked: false
    },
    {
      id: 'microwave',
      label: '微波炉',
      checked: false
    },
    {
      id: 'furniture',
      label: '家具',
      checked: false
    },
    {
      id: 'wifi',
      label: 'Wifi',
      checked: false
    },
    {
      id: 'bed',
      label: '床',
      checked: false
    },
    {
      id: 'desk',
      label: '书桌',
      checked: false
    },
    {
      id: 'ac',
      label: '空调',
      checked: false
    },
    {
      id: 'gym',
      label: '健身房',
      checked: false
    }
  ],
  onSelect: this.onFacilitySelected
};

export const houseTypeCheckboxes: CheckboxListProps = {
  checkboxes: [
    {
      id: 'all',
      label: '不限',
      checked: true
    },
    {
      id: 'whole',
      label: '整租',
      checked: false
    },
    {
      id: 'shared',
      label: '合租',
      checked: false
    }
  ],
  onSelect: this.onHouseTypeSelected
};

export const layoutCheckboxes: CheckboxListProps = {
  checkboxes: [
    {
      id: 'all',
      label: '不限',
      checked: true
    },
    {
      id: 'bedroom',
      label: '卧室数量',
      checked: false
    },
    {
      id: 'bathroom',
      label: '卫生间数量',
      checked: false
    }
  ],
  onSelect: this.onLayoutSelected
};

export const houseCards: HouseCardProps[] = [
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  },
  {
    title: '西雅图华大附近豪华2b2b暑假短租六月至九月',
    destination: '去往华盛顿大学',
    timeByCar: 7,
    timeByBike: 6,
    timeByWalk: 16,
    transportation: 'University 76 (0.11 km)',
    gasStation: 'Chevron (0.15km)',
    price: 1089
  }
];

export const recommendations: RecommendationsContainerProps = {
  countries: ['美国', '英国', '澳大利亚'],
  cities: ['纽约', '波士顿', '芝加哥', '华盛顿', '费城', '巴尔的摩', '西雅图', '旧金山', '圣何塞', '洛杉矶', '圣地亚哥'],
  schools: ['南加州大学', '加州大学洛杉矶分校', '东北大学', '华盛顿大学', '旧金山艺术大学', '哥伦比亚大学', '天普大学', '加州大学伯克利分校', '加州大学圣迭戈分校', '加州大学尔湾分校（欧文分校)', '波士顿大学(中心校区)', '佩斯大学', '纽约视觉设计艺术学院(SVA)', '福特汉姆大学-林肯中心校区']
};

export const initState = {
  recommendationsPanel: recommendations,
  filterOptions: {
    cityFilterOptions: cityCheckboxProps,
    priceFilterOptions: priceCheckboxes,
    facilityFilterOptions: facilityCheckboxes,
    houseTypeFilterOptions: houseTypeCheckboxes,
    floorplanFilterOptions: layoutCheckboxes
  },
  houseCards: houseCards,
  sortOrder: false
};