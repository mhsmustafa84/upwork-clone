import React from 'react'
import HomeFirstSection from '../../Components/BeforeLoginComponents/HomeFirstSection/HomeFirstSection'
import Header from '../../Components/BeforeLoginComponents/Header/Header';
import Footer from '../../Components/BeforeLoginComponents/Footer/Footer';

export const HomePage = () => {
    return (
        <div className="bg-white">
            <Header />
            <HomeFirstSection />
            <Footer />
        </div>
    )
}
