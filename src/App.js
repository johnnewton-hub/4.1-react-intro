import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'; // Make sure to import your component if you're going to use it in any file!
import HelloYourName from './HelloYourName';
import HelloStudents from './HelloStudents';

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloYourName name="Shivani" favFood="Pizza" />
      <HelloYourName name="Ashutosh" favFood="Noodles" />
      <HelloStudents />
    </div>
  );
}

export default App;
