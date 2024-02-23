import { useState, memo, useCallback } from "react";

export default function UseCallback() {
  const [count, setcount] = useState(0);

  const inputFunction = useCallback(()=>{
    console.log("hi there")
  },[])

  return (
    <div>
      <ButtonComponent inputFunction={inputFunction}/>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        increaseCount
      </button>
    </div>
  );
}

const ButtonComponent = memo(function({inputFunction}){

    console.log("child render")
    return (
        <div>
          <button>Button Clicked</button>
        </div>
      );
})