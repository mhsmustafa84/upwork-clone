import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import "./App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  let lang = useSelector(state => state.lang);
  let dir;
  //const [dir, setdir] = useState('ltr');
  lang ==='ar'?dir='rtl':dir='ltr';
  
  useEffect(() => {
     document.body.dir=dir
  }, [dir]);

  return (
    <>
      <BrowserRouter>
        <LayOut />
      </BrowserRouter>
    </>
  );
}

export default App;
