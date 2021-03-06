
import React, { useState, useEffect } from "react";
import { Logo } from "../../shared/Logo";
import NavLargScreen from "../NavLargScreen/NavLargScreen";
import HeaderSearchSm from "./../../shared/HeaderSearchSm/HeaderSearchSm";
import NavSmallScreen from "../NavSmallScreen/NavSmallScreen";
import HeaderSearchLg from "../HeaderSearchLg/HeaderSearchLg";
import "./Header.css";

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [showSearchIcon, setShowSearchIcon] = useState(true);

    useEffect(() => { }, [showSearch, showSearchIcon]);

    const toggleSearchForm = () => {
        showSearch ? setShowSearch(false) : setShowSearch(true);
    };
    const hideSearchIcon = () => {
        showSearchIcon ? setShowSearchIcon(false) : setShowSearchIcon(true);
    };

    return (
        <>
            <header className="nav-bg-cn py-1">
                {/* Header in large screen */}
                <div
                    id="nav-lg-id"
                    className="container d-flex justify-content-between align-items-center"
                >
                    <Logo url={process.env.PUBLIC_URL} />
                    <HeaderSearchLg />
                    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-0 mx-4">
                        <NavLargScreen />
                    </nav>
                </div>

                {/* Header in Small screen */}

                <div
                    id="nav-sm-id"
                    className="container d-flex justify-content-between align-items-center"
                >
                    {showSearch ? (
                        <div className="w-100">
                            <HeaderSearchSm bg={showSearch} />
                        </div>
                    ) : (
                        <>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent py-0">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick={hideSearchIcon}
                                >
                                    {showSearchIcon ? (
                                        <span className="navbar-toggler-icon"></span>
                                    ) : (
                                        <span>
                                            <i className="fas fa-times text-white"></i>
                                        </span>
                                    )}
                                </button>
                            </nav>
                            <Logo url={process.env.PUBLIC_URL} />
                        </>
                    )}
                    <button
                        id="search-btn-res-id"
                        className="btn d-lg-none shadow-none"
                        onClick={toggleSearchForm}
                    >
                        {showSearchIcon &&
                            (showSearch ? (
                                <i className="fas fa-times text-white"></i>
                            ) : (
                                <i className="fa fa-search text-white"></i>
                            ))}
                    </button>
                </div>
                <div className="container">
                    <NavSmallScreen />
                </div>
            </header>
        </>
    );
}
