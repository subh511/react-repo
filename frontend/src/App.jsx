//import React from "react";
//import { useEffect, useState } from "react";
//import axios from "react";
//import FetchingData from "./components/FetchingData";
//import FetchingEndpoint from "./components/FetchingEndpoint";
//import UseCallback from "./components/UseCallback";
//import UseMemo from "./components/UseMemo";
//import GetTodo from "./components/GetTodo";
//import UseEffect from "./components/UseEffect";
//import Todo from "./components/Todo";

import CustomHooks from "./components/CustomHooks";

//import { useState,useEffect } from "react";

function App() {
  // const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
    <CustomHooks/>
    </div>
  );
}

//<UseMemo/>

//   <FetchingEndpoint/>

// <button onClick={function () {setSelectedId(1)}}>1</button>
// <button onClick={function () {setSelectedId(2)}}>2</button>
// <button onClick={function () {setSelectedId(3)}}>3</button>
// <button onClick={function () {setSelectedId(4)}}>4</button>
// <Todo id={selectedId} />

  // function Todo({id}) {
  //   const [todos, setTodos] = useState({});
  //   useEffect(() => {
  //     axios
  //       .get(`https://sum-server.100xdevs.com/todo?id=${id}`)
  //       .then((response) => {
  //         setTodos(response.data.todo);
  //       });
  //   }, [id]);

  //   return (
  //     <div>
  //       <h1>{todos.title}</h1>
  //       <h4>{todos.description}</h4>
  //     </div>
  //   );
  // }

  // function Todo({ id }) {

  //   const [todo, setTodo] = useState({});

  //   useEffect(() => {
  //     axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
  //       .then(response => {
  //         setTodo(response.data.todo);
  //       });
  //   }, []);

  //   return (
  //     <div>
  //       <h1>{todo.title}</h1>
  //       <h2>{todo.description}</h2>
  //     </div>
  //   );
  // }

  //<FetchingData/>

  // {

  //     todos.map((elem)=> <Todo key={elem.id} title={elem.title} description={elem.description}/>)
  // }
  //<CardWrapper>hi there!</CardWrapper>
  //<CardWrapper>Another card</CardWrapper>
  // return(
  //   <div>
  //   <Todo/>
  //   </div>
  // )

// function Todo(description,title){

//   return(
//       <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//       </div>
//   )
// }

// function CardWrapper({ children }) {
//   return (
//     <div style={{ border: "2px solid black", padding: "20px" }}>
//       {children}
//     </div>
//   );
// }

//should be entered into the App component;

// let [title, setTitle] = useState("samrat");

// function updateTitle() {
//   setTitle("my name is " + Math.random());
// }
// return (
//   <div>
//     <button onClick={updateTitle}>Click Me to change the title</button>
//     <Header title={title} />
//     <Header title="Samrat!" />
//     <Header title="Samrat Doe!" />
//   </div>
// );

//2nd way

// function HeaderWithButton(){

//   let [title, setTitle] = useState("samrat");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return(
//     <div>
//     <button onClick={updateTitle}>Click Me to change the title</button>
//     <Header title={title} />
//     </div>
//   )
// }

// function Header({title}){

//   console.log("rendered")
//   return(
//       <div>
//       {title}
//       </div>
//   )
// }

//introduced react memo for avoiding of re-rendering!!

//2nd way

// const Header = React.memo(function Header({ title }) {
//console.log("rendered");
//   return <div>{title}</div>;
// });

export default App;
