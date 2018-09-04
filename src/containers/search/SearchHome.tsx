import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import SearchBar, {
  ISearchBarProps,
  ISearchBarOption
} from '../../components/SearchBar';
import TycheToggleButtonGroup, {
  ButtonGroupType,
  IToggleButton,
  IToggleButtonGroupProps,
} from '../../components/TycheToggleButtonGroup';
import HouseDetailTile, {
  HouseDetail
} from '../../components/HouseDetailTile';
import { locations, priceRanges, facilityOptions, houseTypeOptions, houses } from '../../data/FilterOptions';
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

  private locations: ISearchBarOption[];
  private priceRanges: IToggleButton[];
  private facilityOptions: IToggleButton[];
  private houseTypeOptions: IToggleButton[];
  private houses: HouseDetail[];

  componentWillMount() {
    this.locations = locations;
    this.priceRanges = priceRanges;
    this.facilityOptions = facilityOptions;
    this.houseTypeOptions = houseTypeOptions;
    this.houses = houses;
  }

  render() {
    const searchBarProps: ISearchBarProps = {
      handleSelect: this.onSearchQueryTyped,
      selected: this.props.location,
      options: this.locations
    };

    const priceRangeProps: IToggleButtonGroupProps = {
      handleSelect: this.onPriceRangeSelected,
      options: this.priceRanges,
      selected: this.props.priceRange,
      buttonType: ButtonGroupType.Radio,
      groupName: 'priceRange'
    };

    const facilitiesProps: IToggleButtonGroupProps = {
      handleSelect: this.onFacilitiesSelected,
      options: this.facilityOptions,
      selected: this.props.facilities,
      buttonType: ButtonGroupType.Checkbox,
      groupName: 'facilities'
    };

    const houseTypeProps: IToggleButtonGroupProps = {
      handleSelect: this.onHouseTypeSelected,
      options: this.houseTypeOptions,
      selected: this.props.houseType,
      buttonType: ButtonGroupType.Radio,
      groupName: 'houseType'
    };

    return (
      <div>
        <SearchBar {...searchBarProps} />
        <TycheToggleButtonGroup {...priceRangeProps} />
        <TycheToggleButtonGroup {...facilitiesProps} />
        <TycheToggleButtonGroup {...houseTypeProps} />
        <button onClick={this.triggerObservableChain}>Click me!</button>
        {this.props.filteredResult &&
          this.props.filteredResult.map(house => <HouseDetailTile key={house.id} {...house} />)
        }
      </div>
    );
  }

  private onSearchQueryTyped = (selected: ISearchBarOption) => {
    const filteredResult = this.props.rawListItems.filter(item => item.address !== selected.id);
    this.props.dispatch(createQueryLocationAction(selected.id, filteredResult));
  }

  private onPriceRangeSelected = (selectedId: string) => {
    const filteredResult = this.props.rawListItems.filter(item => item.price === selectedId);
    this.props.dispatch(createFilterPriceAction(selectedId, filteredResult));
  }

  private onFacilitiesSelected = (selectedIds: string[]) => {
    this.props.dispatch(createFilterFacilityAction(selectedIds, { ...this.props.rawListItems }));
  }

  private onHouseTypeSelected = (selectedHouseType: string) => {
    const filteredResult = this.props.rawListItems.filter(item => item.houseType === selectedHouseType);
    this.props.dispatch(createFilterHouseTypeAction(selectedHouseType, filteredResult));
  }

  private triggerObservableChain = () => {
    this.props.dispatch(createSearchByZipcodeAction('98199'));
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return state.search;
};

export default connect(mapStateToProps)(SearchHome);