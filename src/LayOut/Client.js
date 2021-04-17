import React from 'react'
import Footer from '../Components/ClientComponents/Footer/Footer'
import Header from '../Components/ClientComponents/Header/Header'
import AllJobPosts from './../Pages/ClientPages/AllJobPost/AllJobPosts';
import AllContract from './../Pages/ClientPages/AllContract/AllContract';

export default function Client() {
    return (
        <>
           <Header/>
           {/* <h1>asdsasad</h1> */}
           <AllJobPosts/>
            <AllContract/>
           <Footer/>
        </>
    )
}
