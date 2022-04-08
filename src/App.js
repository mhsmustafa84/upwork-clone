/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import "./App.css";


function App() {
    console.log(process.env.REACT_APP_BASE_ROUTE);
    return (
        <BrowserRouter>
            <LayOut />
        </BrowserRouter>
    );
}

export default App;
