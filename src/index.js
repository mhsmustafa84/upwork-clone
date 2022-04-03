import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import store from "./Store/store";
import { Provider } from "react-redux";
import 'flag-icon-css/css/flag-icons.min.css';


const container = document.getElementById('app');
const root = createRoot(container);

root.render(<Provider store={store}><App /></Provider>);
