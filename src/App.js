import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Home2 from "./Home2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Home2 />
      </div>
    </div>
  );
}

export default App;
