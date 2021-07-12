import React from "react";
import { GitHub, Facebook, Instagram } from "@material-ui/icons";
import SocialItem from "./SocialItem";

export default function Footer() {
    return (
        <footer className="my-container py-10 bg-dark-blue">
            <div className="flex flex-wrap justify-center gap-6 mb-5">
                <SocialItem Icon={GitHub} src="https://github.com/ivelin-web" />
                <SocialItem Icon={Facebook} src="https://www.facebook.com/ivelinivanov99/" />
                <SocialItem Icon={Instagram} src="https://www.instagram.com/ivelin_ivanov99/" />
            </div>
            <p className="text-gray-500 font-light uppercase text-center tracking-widest">
                Ivelin Ivanov <span className="text-secondary">&copy;2021</span>
            </p>
        </footer>
    );
}
