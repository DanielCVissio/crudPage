import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import "./styles.css";
import { CrudRouter } from "./router/CrudRouter";
// import { Provider } from 'react-redux';
// import { store } from './store/store'


ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
      <CrudRouter/>
    </BrowserRouter>

);