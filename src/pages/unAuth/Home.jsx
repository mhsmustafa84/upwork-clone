import React from 'react'
import { HomeContent } from '../../components/unAuth/HomeContent'
import { Header } from '../../components/unAuth/Header';
import { Footer } from '../../components/shared/footer/Footer';

export const Home = () => {
    return (
        <>
            <Header />
            <HomeContent />
            <Footer />
        </>
    )
}
