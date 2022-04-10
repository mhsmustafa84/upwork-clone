/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter } from 'react-router-dom'
import { Layout } from './routes/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}
