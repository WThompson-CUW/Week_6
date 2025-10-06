import "./App.css";
import RandomButton from "./components/RandomButton"

/* I attempted to diagnose the error provided involving the path error but was unable to. I tried variations of ../ ./ /, specifying more of the path, and, file extensions.*/

function App() {
  return (
    <>
      <h1>Bible Verse Generator</h1>
      <RandomButton/>
    </>
  );
}

export default App;