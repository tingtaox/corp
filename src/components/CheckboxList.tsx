import * as React from 'react';

export interface Checkbox {
  label: string;
  id: string;
  checked: boolean;
}

export interface CheckboxListProps {
  checkboxes: Checkbox[];
  onSelect: (checkboxId: string) => void;
}

const CheckboxList: React.StatelessComponent<CheckboxListProps> = (props) => {

  const onSelect = (checkboxId: string) => {
    props.onSelect(checkboxId);
  }

  const checkboxList: JSX.Element[] = props.checkboxes.map(checkbox => {
    const classname = checkbox.checked ? 'selected' : null;
    return (<span className={classname}
      key={checkbox.id}
      onClick={() => onSelect(checkbox.id)}
    >{checkbox.label}</span>);
  });

  return (
    <span className="checkbox-list">
      <span className="options">{checkboxList}</span>
    </span>
  );
}

export default CheckboxList;