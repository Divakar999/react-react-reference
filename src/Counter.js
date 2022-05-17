import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: 5,
    };
  }
  handleIncrement = () => {
    this.setState({ value: ++this.state.value });
  };

  handleDecrement = () => {
    this.setState({ value: --this.state.value });
  };

  handleReset = () => {
    this.setState({ value: 5 });
  };

  render() {
    return (
      <>
        <h3> Counter Component </h3>
        Value : {this.state.value} <br /> <br />
        <button onClick={this.handleIncrement}>Increment</button>
        &nbsp; &nbsp;
        <button onClick={this.handleDecrement}>Decrement</button>
        &nbsp; &nbsp;
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}

export default Counter;
