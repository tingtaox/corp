import * as React from 'react';
import { connect } from 'react-redux';

interface BaseActionType {
  dispatch?: (params: any) => any;
}

interface CalculatorProps extends BaseActionType {
  count: number;
}

interface CalculatorState {
  count: number;
}

export class Calculator extends React.Component<CalculatorProps> {

  constructor(props: CalculatorProps) {
    super(props);
  }

  private increament = () => {
    this.props.dispatch({ type: "INCREAMENT" });
  }

  private decreament = () => {
    this.props.dispatch({ type: "DECREAMENT" });
  }

  render() {
    return (
      <div>
        <button onClick={this.decreament}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.increament}>+</button>
      </div>
    );
  }

}

function mapStateToProps(state: CalculatorState): CalculatorProps {
   return {
     count: state.count
   };
}

export default connect(mapStateToProps)(Calculator);