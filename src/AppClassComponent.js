import React, { createRef } from 'react';
import Counter from './Counter';

class AppClassComponent extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const references = createRef();
    const handleIncrementFromApp = () => {
      references.current.handleIncrement();
      console.log(references);
    };

    const handleDecrementFromApp = () => {
      references.current.handleDecrement();
      console.log(references);
    };
    return (
      <>
        <h3> Class Component Parent </h3>
        <button onClick={handleIncrementFromApp}>Increment From App</button>
        &nbsp;
        <button onClick={handleDecrementFromApp}> Decrement From App </button>
        <Counter ref={references} />
      </>
    );
  }
}

export default AppClassComponent;
