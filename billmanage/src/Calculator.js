import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: 0,
      tax: 0.08
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const cost = event.target.value;
    this.setState(() => ({
      cost: cost
    }));
  }

  calculateTotal() {
    const total = this.state.cost + (this.state.cost * this.state.tax);
    return total;
  }

  render() {
    return (
      <div className="calculator">
        <label>
          Enter Cost:
          <input
            type="number"
            value={this.state.cost}
            onChange={this.handleChange}
          />
        </label>
        <p>
          Total: ${this.calculateTotal().toFixed(2)}
        </p>
      </div>
    );
  }
}

export default Calculator;