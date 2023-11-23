import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function App() {

  const handleSubmit = (term) => {
    console.log("Hi it's", term)
  }

  return (
    <div className="app">
      <AnimalShow onSubmit = {handleSubmit}/>
    </div>
  );
}
export default App;
