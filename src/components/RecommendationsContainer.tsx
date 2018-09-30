import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import Recommendations,
{ RecommendationsProps } from './Recommendations';
import { ApplicationState } from '../index';

import {
  createSearchAction,
  SearchTypes
} from '../actions/filterActions'

export interface RecommendationsContainerProps {
  countries: string[];
  cities: string[];
  schools: string[];
}

export type RecommendationsContainerState = RecommendationsContainerProps;

class RecommendationsContainer extends React.Component<RecommendationsContainerProps & DispatchProp<any>, any> {

  constructor(props: RecommendationsContainerProps & DispatchProp<any>) {
    super(props);
  }

  public render() {
    const { countries, cities, schools } = this.props;

    const recommendationsProps: RecommendationsProps = {
      countries, cities, schools,
      onCountrySelect: (id: string) => this.onSelected(SearchTypes.FILTER_COUNTRY, id),
      onCitySelect: (id: string) => this.onSelected(SearchTypes.FILTER_CITY, id),
      onSchoolSelect: (id: string) => this.onSelected(SearchTypes.FILTER_SCHOOL, id),
    };

    return (
      <Recommendations {...recommendationsProps} />
    );
  }

  private onSelected = (type: SearchTypes, id: string) => {
    this.props.dispatch(createSearchAction(type, id));
  }

}

const mapStateToProps = (state: ApplicationState) => {
  return state.recommendationsPanel;
}

export default connect(mapStateToProps)(RecommendationsContainer);