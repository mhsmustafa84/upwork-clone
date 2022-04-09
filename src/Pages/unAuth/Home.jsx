import React from 'react'
import { HomeContent } from '../../Components/BeforeLoginComponents/HomeContent'
import { Header } from '../../Components/BeforeLoginComponents/Header';
import Footer from '../../Components/SharedComponents/Footer/Footer';

export const Home = () => {
    return (
        <div className="bg-white">
            <Header />
            <HomeContent />
            <Footer />
        </div>
    )
}
