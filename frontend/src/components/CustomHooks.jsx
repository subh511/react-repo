import { useMemo, useState } from "react";

export default function CustomHooks() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  let count = useMemo(function () {
    let finalCount = 0;
    for (let i = 1; i <inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  },[inputValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="your sum"
        onChange={function (e) {
          setInputValue(e.target.value);
        }}
      />
      <br />
      Your sum is {inputValue} is {count}
      <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        click ME! ({counter})
      </button>
    </div>
  );
}
