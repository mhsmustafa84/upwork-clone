import React from 'react'
import HomeFirstSection from '../../../Components/BeforeLoginComponents/HomeFirstSection/HomeFirstSection'
import HomeSecondSection from './../../../Components/BeforeLoginComponents/HomeSecondSection/HomeSecondSection';
import HomeThirdSection from './../../../Components/BeforeLoginComponents/HomeThirdSection/HomeThirdSection';
import HomeFourthSection from './../../../Components/BeforeLoginComponents/HomeFourthSection/HomeFourthSection';
import Header from '../../../Components/BeforeLoginComponents/Header/Header';
import Footer from '../../../Components/BeforeLoginComponents/Footer/Footer';
import { db } from '../../../firebase';

export default function HomePage() {
    const add = () => {
        db.collection("mostafa").add({ name: "mostafa" }).then(res => console.log("add")).catch(err => console.log(err));
    }
    return (
        <div className="bg-white">
            <button onClick={add}>click</button>
            <Header />
            <HomeFirstSection />
            <HomeSecondSection />
            <HomeThirdSection />
            <HomeFourthSection />
            <Footer />
        </div>
    )
}
