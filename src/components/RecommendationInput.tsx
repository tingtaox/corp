import * as React from 'react';

export interface RecommendationInputProps {
  recommendations: JSX.Element;
  onInputChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value: string;
  placeholder?: string;
}

export type RecommendationInputState = RecommendationInputProps;

const RecommendationInput: React.StatelessComponent<RecommendationInputProps> = (props) => {

  const onInputChange = (evt: any) => {
    props.onInputChange(evt.target.value);
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={props.value}
        placeholder={props.placeholder}
        onChange={evt => onInputChange(evt)}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <div className="panel">{props.recommendations}</div>
    </div>
  );

}

export default RecommendationInput;