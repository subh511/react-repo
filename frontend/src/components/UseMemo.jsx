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
      <br />
      <button>counter {counter}</button>
    </div>
  );
}
