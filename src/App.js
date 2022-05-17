import React, { useRef } from 'react';
import './style.css';
import Counter from './Counter';

export default function App() {
  const reference = useRef();

  const handleIncrementFromApp = () => {
    reference.current.handleIncrement();
    console.log(reference);
  };

  const handleDecrementFromApp = () => {
    reference.current.handleDecrement();
    console.log(reference);
  };

  return (
    <div>
      <h3> App Component </h3>
      <button onClick={handleIncrementFromApp}>Increment From App</button>
      &nbsp;
      <button onClick={handleDecrementFromApp}> Decrement From App </button>
      <Counter ref={reference} componentName="Child Component" />
    </div>
  );
}
