import { useState } from "react";

export default function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = 0;
  for (let i = 1; i < inputValue; i++) {
    count = count + i;
  }

  return (
    <div>
      <input type="text" placeholder="input area" onChange={function(event){
        setInputValue(event.target.value)
      }}/>
      <br />
      Your sum is {count}
      <br />
      <button onClick={function(){
        setCounter(counter + 1)
      }}>counter ({counter})</button>
    </div>
  );
}
