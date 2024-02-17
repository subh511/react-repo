import { useState } from "react";
import Header from "./components/Header";

function App() {
  let [title, setTitle] = useState("samrat");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return (
    <>
      <button onClick={updateTitle}>Click Me to change the title</button>
      <Header title={title} />
      <Header title="samrat 2" />
    </>
  );
}

export default App;
