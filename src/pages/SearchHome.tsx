import * as React from 'react';
import {
  SearchBar,
  ISearchBarProps,
  ISearchBarOption
} from '../components/SearchBar';
import {
  ButtonGroupType,
  IToggleButton,
  IToggleButtonGroupProps,
  TycheToggleButtonGroup
} from '../components/TycheToggleButtonGroup';
import { locations, priceRanges, facilityOptions } from '../data/FilterOptions';

interface ISearchHomeState {
  selectedLocation: ISearchBarOption;
  selectedPriceRange: string;
  selectedFacilities: string[];
}

export class SearchHome extends React.Component<any, ISearchHomeState> {

  private locations: ISearchBarOption[];
  private priceRanges: IToggleButton[];
  private facilityOptions: IToggleButton[];

  componentWillMount() {
    this.locations = locations;
    this.priceRanges = priceRanges;
    this.facilityOptions = facilityOptions;

    this.setState({
      selectedLocation: this.locations[1],
      selectedPriceRange: this.priceRanges[0].id,
      selectedFacilities: null
    });
  }

  render() {
    const searchBarProps: ISearchBarProps = {
      handleSelect: this.onSearchQueryTyped,
      selected: this.state.selectedLocation,
      options: this.locations
    };

    const priceRangeProps: IToggleButtonGroupProps = {
      handleSelect: this.onPriceRangeSelected,
      options: this.priceRanges,
      selected: this.state.selectedPriceRange,
      buttonType: ButtonGroupType.Radio,
      groupName: 'priceRange'
    };

    const facilitiesProps: IToggleButtonGroupProps = {
      handleSelect: this.onFacilitiesSelected,
      options: this.facilityOptions,
      selected: this.state.selectedFacilities,
      buttonType: ButtonGroupType.Checkbox,
      groupName: 'facilities'
    };

    return (
      <div>
        <SearchBar {...searchBarProps} />
        <TycheToggleButtonGroup {...priceRangeProps} />
        <TycheToggleButtonGroup {...facilitiesProps} />
      </div>
    );
  }

  private onSearchQueryTyped = (selected: ISearchBarOption) => {
    this.setState({
      selectedLocation: selected
    });
  }

  private onPriceRangeSelected = (selectedId: string) => {
    this.setState({
      selectedPriceRange: selectedId
    });
  }

  private onFacilitiesSelected = (selectedIds: string[]) => {
    this.setState({
      selectedFacilities: selectedIds
    });
  }

}
