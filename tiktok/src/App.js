import './App.css';
import {useState} from 'react';
import React from 'react';

function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    return (
      <div>
        {setCount(count +1)}
      </div>
    )
  }
  

  return (
    <div className="App">
      <p>Welcome to my project</p>
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
      
  );
}

export default App;
