import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import "./App.css";
import LangButton from "./Components/SharedComponents/LangButton/LangButton";

function App() {
  return (
    <>
      <BrowserRouter>
        <LangButton />
        <LayOut />
      </BrowserRouter>
    </>
  );
}

export default App;
