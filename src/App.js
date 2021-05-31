/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import { useSelector } from "react-redux";
import "./App.css";


function App() {
  let lang = useSelector(state => state.lang)
  return (
    <BrowserRouter>
      <div
        dir={lang === "ar" ? "rtl" : "ltr"}
        lang={lang === "ar" ? "ar" : "en"}
        style={{ fontFamily: "'Cairo', sans-serif !important" }}>
        <LayOut />
      </div>
    </BrowserRouter>
  );
}

export default App;
