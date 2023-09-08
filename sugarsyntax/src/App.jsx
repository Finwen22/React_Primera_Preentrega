import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import "./App.css"; 

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-container">
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;