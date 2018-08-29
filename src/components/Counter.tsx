import * as React from 'react';
import { Button } from 'react-bootstrap';

export interface CounterProps {
  id: string;
  value: number;
  increase: (counterId: string) => void;
  decrease: (counterId: string) => void;
  deleteCounter: (counterId: string) => void;
}

export class Counter extends React.Component<CounterProps, any> {
  constructor(props: CounterProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <span className="counter-value">{this.props.value}</span>
        <Button
          bsStyle="primary"
          onClick={() => {
            this.props.increase(this.props.id);
          }}
        >+</Button>
        <Button
          bsStyle="info"
          onClick={() => this.props.decrease(this.props.id)}
        >-</Button>
        <Button
          bsStyle="danger"
          onClick={() => this.props.deleteCounter(this.props.id)}
        >Delete</Button>
      </div>
    );
  }
}