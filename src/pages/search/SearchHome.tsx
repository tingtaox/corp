import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import RecommendationInput, {
  RecommendationInputProps
} from '../../components/RecommendationInput';
import CheckboxList, {
  CheckboxListState
} from '../../components/CheckboxList';
import HouseCard, {
  HouseCardState
} from '../../components/HouseCard';
import {
  RecommendationInputState
} from '../../components/RecommendationInput';
import RecommendationsContainer, {
  RecommendationsContainerState
} from '../../components/RecommendationsContainer';
import { ApplicationState } from '../../index';
import {
  SearchTypes,
  FilterTypes,
  createSearchAction,
  createFilterAction
} from '../../actions/filterActions';
import {
  createFetchHouseListAction,
  createFetchRecCountriesAction
} from '../../epics/apiEpics';

class SearchHome extends React.Component<ApplicationState & DispatchProp<any>, any> {

  constructor(props: ApplicationState & DispatchProp<any>) {
    super(props);
  }

  private createFilterOptionProps = (filterOptions: CheckboxListState, filterType: FilterTypes) => {
    const props = { ...filterOptions };
    props.onSelect = (id: string) => {
      this.onFilterSelected(filterType, id);
    };
    return props;
  }

  render() {
    const recommendationInputProps: RecommendationInputProps = {
      onInputChange: this.onSearchInputChange,
      onFocus: this.onSearchInputFocus,
      onBlur: this.onSearchInputBlur,
      value: '',
      placeholder: '美国 西雅图',
      recommendations: <RecommendationsContainer />
    }

    const priceFilterProps = this.createFilterOptionProps(
      this.props.filterOptions.priceFilterOptions, FilterTypes.FILTER_PRICE);

    const facilityFilterProps = this.createFilterOptionProps(
      this.props.filterOptions.facilityFilterOptions, FilterTypes.FILTER_FACILITY);

    const houseTypeFilterProps = this.createFilterOptionProps(
      this.props.filterOptions.houseTypeFilterOptions, FilterTypes.FILTER_HOUSE_TYPE);

    const floorplanFilterProps = this.createFilterOptionProps(
      this.props.filterOptions.floorplanFilterOptions, FilterTypes.FILTER_FLOORPLAN);

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
              <RecommendationInput {...this.props.recommendationInput} />
            </span>
            <button className="btn btn-warning search-button">搜索</button>
          </span>
          <span className="city">
            <span className="title">城市:</span>
            <CheckboxList {...this.props.filterOptions.cityFilterOptions} />
          </span>
          <span className="price">
            <span className="title">价格:</span>
            <CheckboxList {...priceFilterProps} />
          </span>
          <span className="facility">
            <span className="title">配套设施:</span>
            <CheckboxList {...facilityFilterProps} />
          </span>
          <span className="house-type">
            <span className="title">房屋类型:</span>
            <CheckboxList {...houseTypeFilterProps} />
          </span>
          <span className="layout">
            <span className="title">房间布局:</span>
            <CheckboxList {...floorplanFilterProps} />
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
              {this.props.houseCards.map((houseCard) => <HouseCard {...houseCard} />)}
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
  }

  private onSearchInputFocus = () => {
  }

  private onSearchInputBlur = () => {
  }

  private onSearchSelected = (type: SearchTypes, id: string) => {
    this.props.dispatch(createFetchRecCountriesAction());
    this.props.dispatch(createSearchAction(type, id));
  }

  private onFilterSelected = (type: FilterTypes, id: string) => {
    this.props.dispatch(createFilterAction(type, id));
  }

}

const mapStateToProps = (state: ApplicationState) => {
  return state;
};

export default connect(mapStateToProps)(SearchHome);