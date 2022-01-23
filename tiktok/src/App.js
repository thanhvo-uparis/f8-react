import './App.css';
import {useState} from 'react';
import React from 'react';

function App() {

  const [info, setInfo] = useState({
    name: "Nicola Vincent",
    age: 23,
    addresse: "43 rue de République Paris",
  });

  const changeInfos = () => {
    return (
      <div>
        {setInfo({...info, bio: "Front end Developer"})}
      </div>
    )
  }
  

  return (
    <div className="App">
      <p>Welcome to my project</p>
      <p>{JSON.stringify(info)}</p>
      <button onClick={() => changeInfos()}>Click me</button>
    </div>
      
  );
}

export default App;
