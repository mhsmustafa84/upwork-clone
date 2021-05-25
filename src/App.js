import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { langAction } from "./Store/actions/lang";

function App() {
  let lang = useSelector(state => state.lang);
  // const dispatch = useDispatch();
  let dir;
  // const [dir, setdir] = useState('ltr');
  lang === 'ar' ? dir = 'rtl' : dir = 'ltr';

  useEffect(() => {
    // dispatch(langAction(lang));
    document.body.dir = dir
  }, [lang]);

  return (
    <>
      <BrowserRouter>
        {/* <div dir={lang === 'ar' ? 'rtl' : 'ltr'}> */}
        <LayOut />
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
