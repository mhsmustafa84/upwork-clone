/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "../src/assets/Style/style.css";
import LayOut from "./LayOut/LayOut";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayOut />
      </BrowserRouter>
    </div>
  );
}

export default App;
