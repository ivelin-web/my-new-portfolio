import React from "react";
import { Speed, Devices, EmojiObjects, Timer } from "@material-ui/icons";
import AboutCard from "./AboutCard";
import avatar from "../../images/avatar.jpg";
import htmlLogo from "../../images/tech-logos/html.svg";
import cssLogo from "../../images/tech-logos/css.svg";
import sassLogo from "../../images/tech-logos/sass.svg";
import jsLogo from "../../images/tech-logos/js.svg";
import cPlusPlusLogo from "../../images/tech-logos/c-plus-plus.svg";
import cSharpLogo from "../../images/tech-logos/c-sharp.svg";
import unityLogo from "../../images/tech-logos/unity.svg";
import hackerrankLogo from "../../images/tech-logos/hackerrank.svg";
import tsLogo from "../../images/tech-logos/ts.svg";
import npmLogo from "../../images/tech-logos/npm.svg";
import jqueryLogo from "../../images/tech-logos/jquery.svg";
import reactLogo from "../../images/tech-logos/react.svg";
import angularLogo from "../../images/tech-logos/angular.svg";
import materialUiLogo from "../../images/tech-logos/material-ui.svg";
import bootstrapLogo from "../../images/tech-logos/bootstrap.svg";
import taiwindCssLogo from "../../images/tech-logos/tailwindcss.svg";
import mySqlLogo from "../../images/tech-logos/mysql.svg";
import firebaseLogo from "../../images/tech-logos/firebase.svg";
import gitLogo from "../../images/tech-logos/git.svg";
import phpLogo from "../../images/tech-logos/php.svg";
import symfonyLogo from "../../images/tech-logos/symfony.svg";
import laravelLogo from "../../images/tech-logos/laravel.svg";
import nodeJsLogo from "../../images/tech-logos/nodejs.svg";
import mongoDbLogo from "../../images/tech-logos/mongodb.svg";
import TechCard from "./TechCard";
import { Bounce, LightSpeed, Fade } from "react-reveal";

export default function About() {
    return (
        <section id="about" className="my-container py-10">
            <h2 className="section-heading">About</h2>
            <div className="grid grid-cols-1 gap-10 content-center items-center sm:grid-cols-2 lg:grid-cols-4 my-20">
                <Bounce bottom duration={1500}>
                    <AboutCard Icon={Speed} heading="Fast" text="Fast load times and lag free interaction is my highest priority." />
                </Bounce>
                <Bounce bottom duration={1500} delay={window.innerWidth >= 640 ? 250 : 0}>
                    <AboutCard Icon={Devices} heading="Responsive" text="My layouts will work on any device, big or small." />
                </Bounce>
                <Bounce bottom duration={1500} delay={window.innerWidth >= 640 ? 500 : 0}>
                    <AboutCard Icon={EmojiObjects} heading="Intuitive" text="Strong preference for easy to use, intuitive UX/UI." />
                </Bounce>
                <Bounce bottom duration={1500} delay={window.innerWidth >= 640 ? 750 : 0}>
                    <AboutCard Icon={Timer} heading="Dynamic" text="Websites don't have to be static, I love making pages come to life." />
                </Bounce>
            </div>
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-16">
                <div className="flex flex-col gap-4 items-center">
                    <Fade left>
                        <div className="hexagon-avatar relative mx-0 border-l-4 border-r-4 border-primary" style={{ width: 250, height: 144.34, marginTop: 72.17, marginBottom: 72.17, backgroundImage: `url(${avatar})`, backgroundSize: "auto 277.1281px", backgroundPosition: "center" }}>
                            <div className="hex-avatar-top absolute overflow-hidden" style={{ zIndex: 1, width: 176.78, height: 176.78, transform: "scaleY(0.5774) rotate(-45deg)", background: "inherit", left: 31.61 }}></div>
                            <div className="hex-avatar-bottom absolute overflow-hidden" style={{ zIndex: 1, width: 176.78, height: 176.78, transform: "scaleY(0.5774) rotate(-45deg)", background: "inherit", left: 31.61 }}></div>
                        </div>
                    </Fade>
                    <LightSpeed left>
                        <h4 className="text-2xl text-gray-700 font-medium">Who is this guy?</h4>
                    </LightSpeed>
                    <LightSpeed left>
                        <p className="text-center font-light text-gray-600">Hello, there! I feel honoured to introduce myself to you! I am currently a student in University of Veliko Tarnovo with a major in Informatics.</p>
                    </LightSpeed>
                    <LightSpeed left>
                        <p className="text-center font-light text-gray-600">I like to deal with software, Full-Stack and game development and I am definitely most interested in the web technologies.</p>
                    </LightSpeed>
                    <LightSpeed left>
                        <p className="text-center font-light text-gray-600">I like to spend my time while studying new technologies, connected to my major, to play sports, meet and get the chance to communicate with new, interesting people.</p>
                    </LightSpeed>
                    <LightSpeed left>
                        <p className="text-center font-light text-gray-600">An absolute hobby of mine is to develop different skills both in professional (such as resolving different problems and algorithms) and personal plan.</p>
                    </LightSpeed>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <LightSpeed right>
                        <h4 className="text-2xl text-gray-700 font-medium">What i do?</h4>
                    </LightSpeed>
                    <LightSpeed right>
                        <p className="text-center text-base sm:text-lg font-light text-gray-600 mb-5">I AM A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    </LightSpeed>
                    <div className="flex flex-col items-center">
                        <LightSpeed right>
                            <h6 className="text-lg text-gray-600 mb-2">Proficient:</h6>
                        </LightSpeed>
                        <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7 gap-3">
                            <Bounce duration={1250}>
                                <TechCard logo={htmlLogo} />
                            </Bounce>
                            <Bounce duration={1250}>
                                <TechCard logo={cssLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={sassLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={jsLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={cPlusPlusLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={cSharpLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={unityLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={hackerrankLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={tsLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={jqueryLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={reactLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={angularLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={materialUiLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={bootstrapLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={taiwindCssLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={npmLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={gitLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={phpLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={symfonyLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={mySqlLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={firebaseLogo} />
                            </Bounce>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <LightSpeed right>
                            <h6 className="text-lg text-gray-600 mb-2">Learning:</h6>
                        </LightSpeed>
                        <div className="flex flex-wrap gap-3">
                            <Bounce duration={1500}>
                                <TechCard logo={laravelLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={nodeJsLogo} />
                            </Bounce>
                            <Bounce duration={1500}>
                                <TechCard logo={mongoDbLogo} />
                            </Bounce>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
