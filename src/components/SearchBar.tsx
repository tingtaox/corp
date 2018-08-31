import * as React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { isEmpty } from 'lodash';

export interface ISearchBarOption {
  id: string;
  label: string;
}

export interface ISearchBarProps {
  options: ISearchBarOption[];
  selected: ISearchBarOption;
  handleSelect: (value: ISearchBarOption) => void;
}

const SearchBar: React.StatelessComponent<ISearchBarProps> = (props) => {

  const onSelect = (selectedOptions: ISearchBarOption[]) => {
    if (!isEmpty(selectedOptions)) {
      this.props.handleSelect(selectedOptions[0]);
    }
  }

  return (
    <div>
      <Typeahead
        onChange={onSelect}
        options={props.options}
        selected={[props.selected]}
      ></Typeahead>
    </div>
  );

}

export default SearchBar;