import { useEffect, useState } from "react"
import axios from "axios";
export default function FetchingData(){

    const [todos,setTodos] = useState([])

    //using axios for fetching data through API

    useEffect(()=>{
       axios.get(`https://sum-server.100xdevs.com/todos`)
       .then(function(res){
        setTodos(res.data.todos)
       })
    },[])


    return(
        <div>
        {
            todos.map((todo)=>{
                return <div key={todo.id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                </div>
            })
        }
        </div>
    )
}