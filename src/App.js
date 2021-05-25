/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  let lang = useSelector(state => state.lang);
  let dir;
  lang === 'ar' ? dir = 'rtl' : dir = 'ltr';

  useEffect(() => {
    document.body.dir = dir
  }, [lang]);

  return (
    <>
      <BrowserRouter>
        <LayOut />
      </BrowserRouter>
    </>
  );
}

export default App;
