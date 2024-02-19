import React from "react";
import { useState } from "react";

function App() {

  return(
    <div>
    </div>
  )
}


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
