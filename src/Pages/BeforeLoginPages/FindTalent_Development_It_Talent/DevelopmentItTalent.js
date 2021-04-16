import React from 'react'
import HeaderForDevItTalent from '../../../Components/BeforeLoginComponents/HeaderForDevITTalent/HeaderForDevItTalent'
import "./DevelopmentItTalent.css"
import talentMainSectionArticle1DevIT from '../../../assets/img/talent-main-section-article1-Dev-IT.png'
import talentMainSectionArticle2DevIT from '../../../assets/img/talent-main-section-article2-Dev-IT.png'
import talentmainsectionarticle2MaskGroupDevIT from '../../../assets/img/talent-main-section-article2-Mask-Group-Dev-IT.svg'
import talentMainSectionFillDevIT from '../../../assets/img/talent_main-section-Fill-Dev-IT.svg'
import talentMainSectionArticle2MobileDevIT from '../../../assets/img/talent-main-section-article2-mobile-Dev-IT.png'
import ArticleCard from '../../../Components/BeforeLoginComponents/ArticleCard/ArticleCard'
import BusinessTrusted from '../../../Components/BeforeLoginComponents/BusinessTrusted/BusinessTrusted'
import TrustedRemote from '../../../Components/BeforeLoginComponents/TrustedRemote/TrustedRemote'
import BrowseBuyProjects from '../../../Components/BeforeLoginComponents/BrowseBuyProjects/BrowseBuyProjects'
import GetStarted from '../../../Components/BeforeLoginComponents/GetStarted/GetStarted'
import PlayingField from '../../../Components/BeforeLoginComponents/PlayingField/PlayingField'
import ProjectExamples from '../../../Components/BeforeLoginComponents/ProjectExamples/ProjectExamples'
import Flexera from '../../../Components/BeforeLoginComponents/Flexera/Flexera'
import Questions from '../../../Components/BeforeLoginComponents/Questions/Questions'
import FindSkills from '../../../Components/BeforeLoginComponents/FindSkills/FindSkills'
import Header from '../../../Components/BeforeLoginComponents/Header/Header'
import Footer from '../../../Components/BeforeLoginComponents/Footer/Footer'


export default function DevelopmentItTalent() {
    return (
        <div>
            <Header />
            <HeaderForDevItTalent />
            <section className="container" id="main-section-ID">
                <div className="row position-relative" id="article-section-ID">
                    <div className="row position-absolute d-lg-flex d-none justify-content-evenly me-3 ms-3" id="articles-ID">
                        <div className="col-5 d-lg-inline-block d-none px-5 py-4 rounded-3" id="article-ID">
                            <ArticleCard image={talentMainSectionArticle1DevIT} header="Talent that’s rated, reviewed, and ready" content="Find proven developers, engineers, IT professionals, and more." />
                        </div>
                        <div className="col-5 d-lg-inline-block d-none px-5 py-4 rounded-3" id="article-ID">
                            <ArticleCard image={talentMainSectionArticle2DevIT} header="Scale up, down, sideways, and smarter" content="Find support for any scope, from one-off jobs to complex
                initiatives." />
                        </div>
                        <img src={talentmainsectionarticle2MaskGroupDevIT} className="col-1 position-absolute" id="left-bg-article-image-ID" alt='' />
                        <img src={talentMainSectionFillDevIT} className="col-1 position-absolute" id="right-bg-article-image-ID" alt='' />
                    </div>
                    <div className="position-absolute d-lg-none" id="mobile-articles-ID">
                        <img className="w-50 mx-auto d-block" id="mobile-articles-image-ID" src={talentMainSectionArticle2MobileDevIT} alt='' />
                    </div>
                </div>

                <BusinessTrusted />
                <TrustedRemote />
                <BrowseBuyProjects />
                <GetStarted />
                <PlayingField />
                <ProjectExamples />
                <Flexera />
                <Questions />
                <FindSkills />
            </section>
            <Footer />
        </div>
    )
}
