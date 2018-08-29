import * as React from 'react';
import { Counter, CounterProps } from '../components/Counter';
import { Button } from 'react-bootstrap';
import { remove, find, cloneDeep } from 'lodash';

interface CounterState {
  id: string;
  value: number;
}

interface CountersState {
  counters: CounterState[];
}

export class Counters extends React.Component<{}, CountersState> {

  constructor() {
    super(null);
    this.state = {
      counters: [{
        id: 'counter_0',
        value: 6
      }]
    }
  }

  render() {
    return (
      <div className="counter-container">
        {this.getCounters()}
        <Button
          bsStyle="primary"
          onClick={this.add}
        >Add</Button>
      </div>
    );
  }

  private getCounters = (): JSX.Element[] => {
    return this.state.counters.map(counter => {
      const props: CounterProps = {
        increase: this.increase,
        decrease: this.decrease,
        deleteCounter: this.deleteCounter,
        value: counter.value,
        id: counter.id
      };

      return <Counter key={props.id} {...props} />;
    });
  }

  private increase = (counterId: string) => {
    this.updateCounterValue(1, counterId);
  }

  private decrease = (counterId: string) => {
    this.updateCounterValue(-1, counterId);
  }

  private updateCounterValue = (value: number, counterId: string) => {
    let counters = cloneDeep(this.state.counters);
    let counter = find(counters, c => c.id === counterId);
    counter.value += value;
    this.setState({ counters });
  }

  private deleteCounter = (counterId: string) => {
    let counters = cloneDeep(this.state.counters);
    remove(counters, c => c.id === counterId);
    this.setState({ counters });
  }

  private add = () => {
    const counter: CounterState = {
      id: 'counter_' + this.state.counters.length,
      value: 0
    };
    const counters = this.state.counters.concat(counter);
    this.setState({ counters });
  }

} 
