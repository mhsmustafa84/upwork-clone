/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Routes/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
    console.log(
        "file: App.jsx => App => REACT_APP_BASE_ROUTE",
        process.env.REACT_APP_BASE_ROUTE
    );
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
