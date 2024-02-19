import React from "react";
//import UseEffect from "./components/UseEffect";
//import Todo from "./components/Todo";

import { useState,useEffect } from "react";

function App() {

  const [todos,setTodos] = useState([])

  useEffect(()=>{
      fetch(`https://sum-server.100xdevs.com/todos`)
      .then(async function(res){
          const json = await res.json();
          setTodos(json.todos)
      })
  },[])

  return (
    <div>
    {

        todos.map((elem)=> <Todo key={elem.id} title={elem.title} description={elem.description}/>)
    }
    </div>
  );
  //<CardWrapper>hi there!</CardWrapper>
  //<CardWrapper>Another card</CardWrapper>
  // return(
  //   <div>
  //   <Todo/>
  //   </div>
  // )
}

function Todo(description,title){

  return(
      <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      </div>
  )
}

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
