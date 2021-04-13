/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import LayOut from './LayOut/LayOut';
import Header from './Components/ClientComponents/Header/Header';
// import Footer from './Components/SharedComponents/Footer/Footer';
// import Headers from './Components/TalentComponents/Header/Header';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <LayOut />
                {/* <Footer /> */}
                {/* <Headers /> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
