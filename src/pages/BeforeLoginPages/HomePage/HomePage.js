import React from 'react'
import HomeFirstSection from '../../../Components/BeforeLoginComponents/HomeFirstSection/HomeFirstSection'
import HomeSecondSection from './../../../Components/BeforeLoginComponents/HomeSecondSection/HomeSecondSection';
import HomeThirdSection from './../../../Components/BeforeLoginComponents/HomeThirdSection/HomeThirdSection';
import HomeFourthSection from './../../../Components/BeforeLoginComponents/HomeFourthSection/HomeFourthSection';
import Header from '../../../Components/BeforeLoginComponents/Header/Header';
import Footer from '../../../Components/BeforeLoginComponents/Footer/Footer';

export default function HomePage() {
    return (
        <div className="bg-white">
            <Header />
            <HomeFirstSection />
            <HomeSecondSection />
            <HomeThirdSection />
            <HomeFourthSection />
            <Footer />
        </div>
    )
}
