import React from "react";
import Particles from "react-particles-js";
import reactLogo from "../../images/tech-logos/react.svg";
import angularLogo from "../../images/tech-logos/angular.svg";
import nodeJsLogo from "../../images/tech-logos/nodejs.svg";
import laravelLogo from "../../images/tech-logos/laravel.svg";
import { Button } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";

export default function Home() {
    const handleClick = (e) => {
        e.preventDefault();

        const href = e.currentTarget.getAttribute("href");

        const bonusOffsetTop = 50;
        const elementOffsetTop = document.querySelector(href).offsetTop - bonusOffsetTop;

        window.scroll({
            top: elementOffsetTop,
            behavior: "smooth",
        });
    };

    return (
        <section id="home" className="relative">
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 8,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        line_linked: {
                            enable: false,
                        },
                        move: {
                            speed: 1,
                            out_mode: "out",
                        },
                        shape: {
                            type: ["image"],
                            image: [
                                {
                                    src: reactLogo,
                                    height: 20,
                                    width: 20,
                                },
                                {
                                    src: angularLogo,
                                    height: 20,
                                    width: 20,
                                },
                                {
                                    src: nodeJsLogo,
                                    height: 20,
                                    width: 20,
                                },
                                {
                                    src: laravelLogo,
                                    height: 20,
                                    width: 20,
                                },
                            ],
                        },
                        color: {
                            value: "#CCC",
                        },
                        size: {
                            value: 30,
                            random: false,
                            anim: {
                                enable: true,
                                speed: 4,
                                size_min: 10,
                                sync: false,
                            },
                        },
                    },
                    retina_detect: false,
                }}
                height="100vh"
                className="bg-dark"
            />
            <div className="z-50 w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-normal sm:font-light tracking-wide sm:tracking-wider select-none my-container">
                <h1>
                    Hello, I'm <span className="text-secondary font-medium">Ivelin Ivanov</span>.
                </h1>
                <h1 className="mb-4">I'm a full-stack web developer</h1>
                <Button onClick={handleClick} href="#about" variant="outlined" size="large" endIcon={<ArrowForward />} style={{ color: "#fff", borderColor: "#fff" }} className="btn-home">
                    View my skills
                </Button>
            </div>
        </section>
    );
}
