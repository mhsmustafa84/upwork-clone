import React, { useEffect, useState } from "react";
import Logo from "./../../SharedComponents/Logo/Logo";
import HeaderSearchLg from "../../SharedComponents/HeaderSearchLg/HeaderSearchLg";
import NavLargScreen from './../NavLargScreen/NavLargScreen';
import NavSmallScreen from './../NavSmallScreen/NavSmallScreen';
import HeaderSearchSm from './../../SharedComponents/HeaderSearchSm/HeaderSearchSm';
import "./Header.css";

export default function Header() {

    const [showSearch, setShowSearch] = useState(false);
    const [showSearchIcon, setShowSearchIcon] = useState(true);

    useEffect(() => {

    }, [showSearch, showSearchIcon])

    const toggleSearchForm = () => {
        showSearch ? setShowSearch(false) : setShowSearch(true);
    }
    const hideSearchIcon = () => {
        showSearchIcon ? setShowSearchIcon(false) : setShowSearchIcon(true)
    }

    return (
        <>
            <header className="nav-bg-cn py-1">

                {/* Header in large screen */}
                <div id="nav-lg-id" className="container d-flex justify-content-between align-items-center">
                    <Logo />
                    <HeaderSearchLg />
                    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-0">
                        <NavLargScreen />
                    </nav>
                </div>


                {/* Header in Small screen */}
                <div id="nav-sm-id" className="container d-flex justify-content-between align-items-center">
                    {
                        showSearch ?
                            <div className="w-100"><HeaderSearchSm bg={showSearch} /></div>
                            :
                            <>
                                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-0">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                        aria-label="Toggle navigation" onClick={hideSearchIcon}>
                                        {showSearchIcon ? <span className="navbar-toggler-icon"></span> : <span><i className="fas fa-times text-white"></i></span>}
                                    </button>
                                </nav>
                                <Logo />
                            </>
                    }
                    <button id="search-btn-res-id" className="btn d-lg-none shadow-none" onClick={toggleSearchForm}>
                        {showSearchIcon &&
                            (showSearch
                                ? <i className="fas fa-times text-white"></i>
                                : <i className="fa fa-search text-white"></i>)
                        }
                    </button>
                </div>
                <div className="container">
                    <NavSmallScreen />
                </div>
            </header>
        </>
    );
}
