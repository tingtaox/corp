import * as React from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

export enum ButtonGroupType {
  Checkbox = 'checkbox',
  Radio = 'radio'
}

type IButtonGroupType = ButtonGroupType.Checkbox | ButtonGroupType.Radio;

export interface IToggleButton {
  id: string;
  label: string;
}

export interface IToggleButtonGroupProps {
  handleSelect: (selectedIds: string | string[]) => void;
  options: IToggleButton[];
  selected: string | string[];
  buttonType: IButtonGroupType;
  groupName?: string;   // it is required when type is radio 
}

const TycheToggleButtonGroup: React.StatelessComponent<IToggleButtonGroupProps> = (props) => {

  const renderOptions = () => {
    return props.options.map(option => {
      return <ToggleButton
        key={option.id}
        value={option.id}
        name={option.label}>
        {option.label}
      </ToggleButton>
    });
  }

  const handleChange = (selectedIds: string | string[]) => {
    props.handleSelect(selectedIds);
  }

  const buttonType: any = props.buttonType;
  return (
    <ToggleButtonGroup
      name={props.groupName}
      type={buttonType}
      value={props.selected}
      onChange={(values: any) => handleChange(values)}
    >
      {renderOptions()}
    </ToggleButtonGroup>
  );

}

export default TycheToggleButtonGroup;