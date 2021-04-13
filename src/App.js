/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LayOut from './LayOut/LayOut';
import Header from './Components/TalentComponents/Header/Header';
import Footer from './Components/SharedComponents/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <LayOut />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
