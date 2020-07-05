import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import View from "./View";

function App() {
  return (
    <BrowserRouter>
      <View />
    </BrowserRouter>
  );
}

export default App;
