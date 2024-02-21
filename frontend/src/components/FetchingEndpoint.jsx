//import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";


export default function FetchingEndpoint(){

    return(
        <div>
        <Todo id={2} />
        </div>
    )
}
function Todo({id}){

    const [todo,setTodo] = useState({});

    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=` + id)
        .then(function(response){
            setTodo(response.data.todo)
        })
    })

    return(
        <div>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        </div>
        )
}

