import React from "react";
import { Card } from "./Components/Card";
import { useState } from "react";
import { useEffect } from "react";
import "./Components/Card.css";
import CardList from "./Components/CardList/CardList";
const App = () =>{
  return (
    <div>
      <CardList/>
    </div>
  )
}
export default App