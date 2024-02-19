import { useEffect, useState } from "react"

//https://sum-server.100xdevs.com/todos

export default function UseEffect() {

    const [todos,setTodos] = useState([])

    useEffect(()=>{
        fetch(`https://sum-server.100xdevs.com/todos`)
        .then(async(res)=>{
            const json = await res.json();
            setTodos(json.todos)
        })
    },[])
    return(
        <div>
        {

            todos.map((elem)=> <Todo key={elem.id} title={elem.title} description={elem.description}/>)
            // todos.map((elem)=>{
            //     return <div key={elem.id}>
            //     <h1>{elem.title}</h1>
            //     <h2>{elem.description}</h2>
            //     </div>
            // })
        }
        </div>
    )
}

function Todo(description,title){

    return(
        <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        </div>
    )
}