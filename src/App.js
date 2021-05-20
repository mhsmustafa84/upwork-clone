import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import "./App.css";
import LangButton from "./Components/SharedComponents/LangButton/LangButton";
import SavedJobs from "./Pages/TalentPages/SavedJobs/SavedJobs";
import ClientRoutes from "./Routes/ClientRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <LangButton />
        {/* <LayOut /> */}
        <ClientRoutes />
      </BrowserRouter>
      
    </>
  );
}

export default App;
