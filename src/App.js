import React from "react";
import { HashRouter as Router } from 'react-router-dom';
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <Portfolio />
    </Router>
  );
}

export default App;
