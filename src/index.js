import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Store/store";
import { Provider } from "react-redux";
import "./i18n";
import i18next from 'i18next';
import 'flag-icons/css/flag-icons.min.css';


const lang = localStorage.getItem("lang") || "en"
i18next.changeLanguage(lang);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
