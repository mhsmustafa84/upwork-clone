import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import store from "./Store/store";
import { Provider } from "react-redux";
import "./i18n";
import i18next from 'i18next';
import 'flag-icon-css/css/flag-icons.min.css';

const lang = localStorage.getItem("lang") || "en"
i18next.changeLanguage(lang);

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Provider store={store}><App /></Provider>);
