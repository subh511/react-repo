
import { useState } from "react";

export default function UseMemo(){

    const [count,setCount] = useState(0)

    // function addCount(){

    // }

    return(
        <div>
        <input type="text" placeholder="input area"/>
        <br/>
        <br/>
        <button>counter {count}</button>
        </div>
    )
}