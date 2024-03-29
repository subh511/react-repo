import { useState } from "react";

let counter = 4;
export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "eat food",
      description: "lets go to kfc ",
    },
    {
      id: 3,
      title: "go to supermarket",
      description: "grocery today",
    },
  ]);

  function addTodo() {
    //1st way to insert a todos;
    // ...spread operator helps to spread all existing todos and adds a new todos
    setTodos([
      ...todos,
      {
        id: counter++, //dynamically adding id;
        description: Math.random(),
        title: Math.random(),
      },
    ]);

    //2nd way to add todos;

    // let newTodos = [];

    // for(let i=0; i< todos.length; i++){
    //     newTodos.push(todos[i])
    // }
    // newTodos.push({
    //         id:4,
    //         description: Math.random(),
    //         title: Math.random()
    // })
    // setTodos(newTodos)
  }

  return (
    <>
      <button onClick={addTodo}>Adds todo</button>
      {todos.map((elem) => {
        return (
          <div key={elem.id}>
            <h1>{elem.title}</h1>
            <h2>{elem.description}</h2>
          </div>
        );
      })}
    </>
  );
}
