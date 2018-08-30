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

export class TycheToggleButtonGroup extends React.Component<IToggleButtonGroupProps, any> {

  constructor(props: IToggleButtonGroupProps) {
    super(props);
  }

  render() {
    const buttonType: any = this.props.buttonType;
    return (
      <ToggleButtonGroup
        name={this.props.groupName}
        type={buttonType}
        value={this.props.selected}
        onChange={(values: any) => this.handleChange(values)}
      >
        {this.renderOptions()}
      </ToggleButtonGroup>
    );
  }

  private renderOptions = () => {
    return this.props.options.map(option => {
      return <ToggleButton
        key={option.id}
        value={option.id}
        name={option.label}>
        {option.label}
      </ToggleButton>
    });
  }

  private handleChange = (selectedIds: string | string[]) => {
    console.log(selectedIds);
    this.props.handleSelect(selectedIds);
  }

}