import React from "react";

export default function Counter({ initialValue }) {
  let [count, setCount] = React.useState(initialValue);
  function handleIncrement() {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleDouble = ()=>{
    setCount(count*2)
  }
  let style
  if(count%2===0){
    style="evencounter"
  }else{
    style="oddcounter"
  }
  return (
    <div>
      <h1 >Counter</h1>
      <h2 className={style}>{count}</h2>
      <button onClick={() => handleIncrement()}>Add</button>
      <button onClick={() => handleDecrement()}>Reduce</button>
      <button onClick={() => handleDouble()}>Double</button>
    </div>
  );
}
