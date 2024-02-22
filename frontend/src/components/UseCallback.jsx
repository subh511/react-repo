import { useState,memo,useCallback } from "react"


export default function UseCallback(){

    const [count,setcount] = useState(0);

    return(
        <div>
        <h1>{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>increaseCount</button>
        </div>
    )
}