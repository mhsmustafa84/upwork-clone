/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Routes/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
