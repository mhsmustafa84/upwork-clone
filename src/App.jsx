import { BrowserRouter } from 'react-router-dom';
import { Layout } from './routes/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
};
