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

export class SearchBar extends React.Component<ISearchBarProps, any> {

  constructor(props: ISearchBarProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
        <Typeahead
          onChange={this.onSelect}
          options={this.props.options}
          selected={[this.props.selected]}
        ></Typeahead>
      </div>
    );
  }

  private onSelect = (selectedOptions: ISearchBarOption[]) => {
    if (!isEmpty(selectedOptions)) {
      this.props.handleSelect(selectedOptions[0]);
    }
  }

}
