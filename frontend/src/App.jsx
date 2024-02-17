import { useState } from "react";
//import Header from "./components/Header";
// import HeaderWithButton from "./components/HeaderWithButton";

function App() {

  return (
    <div>
    <HeaderWithButton/>
    <Header title="Samrat!"/>
    <Header title="Samrat Doe!"/>
    </div>
  );
}

function HeaderWithButton(){

  let [title, setTitle] = useState("samrat");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return(
    <div>
    <button onClick={updateTitle}>Click Me to change the title</button>
    <Header title={title} />
    </div>
  )
}

function Header({title}){

  console.log("rendered")
  return(
      <div>
      {title}
      </div>
  )
}

export default App;
