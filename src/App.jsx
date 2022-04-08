/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Routes/layout";
import "./App.css";


function App() {
    console.log(process.env.REACT_APP_BASE_ROUTE);
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
