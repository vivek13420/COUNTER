import React from "react";
import Counter from "../components/Counter";
import "./styles.css";

export default function App() {
  let initialValue = 5;
  return (
    <div className="App">
      <Counter initialValue={initialValue} />
    </div>
  );
}
