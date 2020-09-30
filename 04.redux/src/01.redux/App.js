import React from 'react';


function App(props) {
  console.log(props)
  return (
    <div className="App">
       <h1>{props.value}</h1>
       <p>
         <button onClick={props.onIncrement}>increment</button>
         <button onClick={props.onDecrement}>decrement</button>
       </p>
    </div>
  );
}

export default App;
