import React from "react";
import { GitHub, Facebook, Instagram } from "@material-ui/icons";
import SocialItem from "./SocialItem";
import { Fade, Bounce } from "react-reveal";

export default function Footer() {
    return (
        <footer className="my-container py-10 bg-dark-blue">
            <div className="flex flex-wrap justify-center gap-6 mb-5">
                <Fade left duration={1250}>
                    <SocialItem Icon={GitHub} src="https://github.com/ivelin-web" />
                </Fade>
                <Fade bottom duration={1250}>
                    <SocialItem Icon={Facebook} src="https://www.facebook.com/ivelinivanov99/" />
                </Fade>
                <Fade right duration={1250}>
                    <SocialItem Icon={Instagram} src="https://www.instagram.com/ivelin_ivanov99/" />
                </Fade>
            </div>
            <Bounce left cascade duration={1250}>
                <p className="text-gray-500 font-light uppercase text-center tracking-widest">
                    Ivelin Ivanov <span className="text-secondary">&copy;2021</span>
                </p>
            </Bounce>
        </footer>
    );
}
