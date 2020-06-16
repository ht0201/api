import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import ListPost from './components/ListPost';


function App() {
  return (
    <BrowserRouter>
      <div className="App">  
        <ListPost />
      </div>
    </BrowserRouter>
  );
}

export default App;
