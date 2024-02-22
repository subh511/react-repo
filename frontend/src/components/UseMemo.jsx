import { useMemo, useState } from "react";

export default function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  //useMemo is used for handling expensive calculation operation;
  //it is least used operation;

  //useEffect is used for effect on re-rendering;
  //but this hook is widely used in day to day life;

  let count = useMemo(()=>{
    console.log("memo is got called!")
    let finalCount = 0;
    for (let i = 1; i < inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount;
  },[inputValue])

  return (
    <div>
      <input type="text" placeholder="input area" onChange={function(event){
        setInputValue(event.target.value)
      }}/>
      <br />
      Your sum from {inputValue} is {count};
      <br />
      <button onClick={function(){
        setCounter(counter + 1)
      }}>counter ({counter})</button>
    </div>
  );
}
