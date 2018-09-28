import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import RecommendationInput, {
  RecommendationInputProps
} from '../../components/RecommendationInput';

import CheckboxList, {
  CheckboxListProps
} from '../../components/CheckboxList';

import Recommendations, {

} from '../../components/Recommendations';

import HouseCard, {
  HouseCardProps
} from '../../components/HouseCard';

import { ApplicationState } from '../../index';
import { ISearchState } from './types';
import {
  createFilterHouseTypeAction,
  createFilterFacilityAction,
  createFilterPriceAction,
  createQueryLocationAction,
  createObservableChainAction1
} from './actions';
import {
  createSearchByZipcodeAction
} from '../../services/actions';

interface ISearchHomeProps extends DispatchProp { }

export type AllProps = ISearchHomeProps & ISearchState;

class SearchHome extends React.Component<AllProps, any> {

  componentWillMount() {
  }

  render() {

    const recommendationInputProps: RecommendationInputProps = {
      onInputChange: this.onSearchInputChange,
      onFocus: this.onSearchInputFocus,
      onBlur: this.onSearchInputBlur,
      value: '',
      placeholder: '美国 西雅图',
      recommendations: <Recommendations />
    }

    const cityCheckboxProps: CheckboxListProps = {
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

    const priceCheckboxes: CheckboxListProps = {
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

    const facilityCheckboxes: CheckboxListProps = {
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

    const houseTypeCheckboxes: CheckboxListProps = {
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

    const layoutCheckboxes: CheckboxListProps = {
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

    const houseCards: HouseCardProps[] = [
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

    return (
      <div>
        <div className="header">
          <span className="text-container">
            <span>欢迎来到异乡好居~</span>
            <span className="login">登录</span>
            <span className="mod-lightyellow">注册</span>
            <span className="my-orders">我的订单</span>
            <span className="my-posts">发布房源</span>
            <span className="mod-lightyellow">400-991-5791</span>
          </span>
        </div>

        <div className="banner">
          <span className="logo">Image</span>
          <span>全球租房</span>
          <span>
            <span className="label">HOT</span>
            海外买房
          </span>
          <span>定制服务</span>
          <span>
            <span className="label">NEW</span>
            海外交房租
          </span>
        </div>

        <div className="breadcrumb">
          首页 > 美国民宿租房 > 西雅图民宿租房
        </div>

        <div className="filter-container">
          <span className="search-input">
            <span className="recommendation-input">
              <RecommendationInput {...recommendationInputProps} />
            </span>
            <button className="btn btn-warning search-button">搜索</button>
          </span>
          <span className="city">
            <span className="title">城市:</span>
            <CheckboxList {...cityCheckboxProps} />
          </span>
          <span className="price">
            <span className="title">价格:</span>
            <CheckboxList {...priceCheckboxes} />
          </span>
          <span className="facility">
            <span className="title">配套设施:</span>
            <CheckboxList {...facilityCheckboxes} />
          </span>
          <span className="house-type">
            <span className="title">房屋类型:</span>
            <CheckboxList {...houseTypeCheckboxes} />
          </span>
          <span className="layout">
            <span className="title">房间布局:</span>
            <CheckboxList {...layoutCheckboxes} />
          </span>
        </div>

        <div className="search-results">
          <div className="result-container">
            <div className="sort-bar">
              <span>推荐排序</span>
              <span className="selected">最新</span>
              <span>价格</span>
            </div>
            <div className="house-cards">
              {houseCards.map(houseCard => <HouseCard {...houseCard} />)}
            </div>
          </div>

          <div className="map-wrapper">
            <div className="map-fixed">maps</div>
          </div>
        </div>

      </div>
    );
  }

  private onSearchInputChange = (value: string) => {
    console.log(value);
  }

  private onSearchInputFocus = () => {
    console.log('focus');
  }

  private onSearchInputBlur = () => {
    console.log('blur');
  }

  private onCitySelected = (cityId: string) => {
    console.log(cityId);
  }

  private onPriceRangeSelected = (priceRangeId: string) => {
    // const filteredResult = this.props.rawListItems.filter(item => item.price === priceRangeId);
    // this.props.dispatch(createFilterPriceAction(priceRangeId, filteredResult));
  }

  private onFacilitySelected = (facilityId: string) => {
    console.log(facilityId);
  }

  private onHouseTypeSelected = (houseTypeId: string) => {
    console.log(houseTypeId);
  }

  private onLayoutSelected = (layoutId: string) => {
    console.log(layoutId);
  }

  private onFacilitiesSelected = (selectedIds: string[]) => {
    // this.props.dispatch(createFilterFacilityAction(selectedIds, { ...this.props.rawListItems }));
  }

  private triggerObservableChain = () => {
    this.props.dispatch(createSearchByZipcodeAction('98199'));
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return state.search;
};

export default connect(mapStateToProps)(SearchHome);