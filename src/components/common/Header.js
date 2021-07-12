import React, { useState, useEffect } from "react";
import { AccountCircle, Menu } from "@material-ui/icons";

const MOBILE_MENU_CLOSE_DURATION = 1000;

let time;

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileMenuCloseDurationPassed, setIsMobileMenuCloseDurationPassed] = useState(true);
    const [isHeaderAnimationOn, setIsHeaderAnimationOn] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            return;
        }

        setIsMobileMenuOpen(false);
        setIsMobileMenuCloseDurationPassed(true);
    };

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setIsHeaderAnimationOn(true);
        } else if (window.scrollY < 100) {
            setIsHeaderAnimationOn(false);
        }
    };

    const handleClickButton = () => {
        if (window.innerWidth >= 768) {
            return;
        }

        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);

            // When close menu, wait before open again.
            time = setTimeout(() => {
                setIsMobileMenuCloseDurationPassed(true);
            }, MOBILE_MENU_CLOSE_DURATION);
        } else {
            if (!isMobileMenuCloseDurationPassed) {
                return;
            }

            clearTimeout(time);
            setIsMobileMenuOpen(true);
            setIsMobileMenuCloseDurationPassed(false);
        }
    };

    return (
        <header className={`flex flex-wrap flex-row justify-between md:items-center md:space-x-4 py-3 bg-dark-blue text-white shadow-md fixed top-0 w-full border-b-3 border-primary ${!isHeaderAnimationOn ? "md:bg-transparent md:shadow-none md:border-0" : ""} transition-all duration-300 ease-in`} style={{ zIndex: 1000 }}>
            <a href="#" className="my-container text-white hover:text-primary transition-colors duration-500 text-2xl font-medium block">
                <span className="mr-2">Ivelin Ivanov</span>
                <AccountCircle style={{ fontSize: 30 }} />
            </a>

            <button onClick={handleClickButton} className="my-container block md:hidden text-white">
                <Menu fontSize="large" />
            </button>

            <nav className="relative navbar w-full md:w-auto my-container">
                <ul className={`bg-dark-blue md:bg-transparent absolute md:relative w-full md:w-auto top-3.5 left-0 md:top-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none z-50 font-semibold overflow-hidden max-h-0 md:max-h-full my-container md:px-0 ${isMobileMenuOpen ? "burger-active py-3" : ""}`}>
                    <li onClick={handleClickButton} className="nav-item">
                        <a className="nav-link active" href="#home">
                            Home
                        </a>
                    </li>
                    <li onClick={handleClickButton} className="nav-item">
                        <a className="nav-link" href="#about">
                            About
                        </a>
                    </li>
                    <li onClick={handleClickButton} className="nav-item">
                        <a className="nav-link" href="#projects">
                            Projects
                        </a>
                    </li>
                    <li onClick={handleClickButton} className="nav-item">
                        <a className="nav-link" href="#certificates">
                            Certificates
                        </a>
                    </li>
                    <li onClick={handleClickButton} className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
