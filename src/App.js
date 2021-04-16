/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayOut from "./LayOut/LayOut";
// import { Switch, Route } from 'react-router-dom';


function App() {
    return (
        <>
            <BrowserRouter>
                <LayOut />
            </BrowserRouter>
        </>
    );
}

export default App;
