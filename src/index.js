import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import "./i18n";
import i18next from 'i18next';
import 'flag-icon-css/css/flag-icon.min.css';
import { langAction } from "./Store/actions/lang";


    const lang=localStorage.getItem("lang") || "en"
    //console.log(lang);
    i18next.changeLanguage(lang);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
