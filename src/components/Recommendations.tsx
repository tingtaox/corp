import * as React from 'react';

export interface RecommendationsProps {
  countries: string[];
  cities: string[];
  schools: string[];
  onCountrySelect: (item: string) => void;
  onCitySelect: (item: string) => void;
  onSchoolSelect: (item: string) => void;
}

export type RecommendationsState = RecommendationsProps;

const Recommendations: React.StatelessComponent<RecommendationsProps> = (props) => {

  const countries = props.countries.map(country =>
    (<span key={country} onClick={() => props.onCountrySelect(country)}>
      {country}
    </span>)
  );

  const cities = props.cities.map(city =>
    (<span key={city} onClick={() => props.onCitySelect(city)}>
      {city}
    </span>)
  );

  const schools = props.schools.map(school =>
    (<span key={school} onClick={() => props.onSchoolSelect(school)}>
      {school}
    </span>)
  );

  return (
    <div className="recommendations">
      <div className="navtabs">
        {countries}
      </div>
      <div className="cities">
        <div className="title">城市</div>
        <div className="options">
          {cities}
        </div>
      </div>
      <div className="schools">
        <div className="title">学校</div>
        <div className="options">
          {schools}
        </div>
      </div>
    </div>
  );

}

export default Recommendations;