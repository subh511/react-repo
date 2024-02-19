import { useState } from "react"


export default function Todo(title,description){

    const [todos,setTodos] = useState([{
        id:1,
        title:"go to gym",
        description:"go to gym today"
    },{
        id:2,
        title:"eat food",
        description:"lets go to kfc "  
    },{
        id:3,
        title:"go to supermarket",
        description:"grocery today"  
    }])

    function addTodo(){
        //1st way to insert a todos;
        setTodos(...todos,{
            id:4,
            description: Math.random(),
            title: Math.random()
        })
    }

    return(
        <>
        <button onClick={addTodo}>Adds todo</button>
        {
            todos.map((elem)=>{
                return(
                    <div key={elem.id}>
                    <h1>{elem.title}</h1>
                    <h2>{elem.descriptiondescription}</h2>
                    </div>
                )
            })
        }
        </>
    )
}