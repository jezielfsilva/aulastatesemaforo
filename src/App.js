import React from 'react';
import logo from './logo.svg';
import './App.css';
import Semaforo from './components/semaforostate';
import Forml from './components/aulaformulario';

function App() {
  return (
    <div className="App">
      <Semaforo/>
      <Forml/>
    </div>
  );
}

export default App;
