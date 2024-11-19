// src/App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/store';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <button className='increment-btn' onClick={() => dispatch(increment())}>Increment</button>
      <button className='decrement-btn' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
