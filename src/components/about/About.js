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

export default function About() {
    return (
        <section id="about" className="my-container py-10">
            <h2 className="section-heading">About</h2>
            <div className="grid grid-cols-1 gap-10 content-center items-center sm:grid-cols-2 lg:grid-cols-4 my-20">
                <AboutCard Icon={Speed} heading="Fast" text="Fast load times and lag free interaction, my highest priority." />
                <AboutCard Icon={Devices} heading="Responsive" text="My layouts will work on any device, big or small." />
                <AboutCard Icon={EmojiObjects} heading="Intuitive" text="Strong preference for easy to use, intuitive UX/UI." />
                <AboutCard Icon={Timer} heading="Dynamic" text="Websites don't have to be static, I love making pages come to life." />
            </div>
            <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-16">
                <div className="flex flex-col gap-4 items-center">
                    <div className="hexagon-avatar relative mx-0 border-l-4 border-r-4 border-primary" style={{ width: 250, height: 144.34, marginTop: 72.17, marginBottom: 72.17, backgroundImage: `url(${avatar})`, backgroundSize: "auto 277.1281px", backgroundPosition: "center" }}>
                        <div className="hex-avatar-top absolute overflow-hidden" style={{ zIndex: 1, width: 176.78, height: 176.78, transform: "scaleY(0.5774) rotate(-45deg)", background: "inherit", left: 31.61 }}></div>
                        <div className="hex-avatar-bottom absolute overflow-hidden" style={{ zIndex: 1, width: 176.78, height: 176.78, transform: "scaleY(0.5774) rotate(-45deg)", background: "inherit", left: 31.61 }}></div>
                    </div>
                    <h4 className="text-2xl text-gray-700 font-medium">Who is this guy?</h4>
                    <p className="text-center font-light text-gray-600">Аз съм студент, учещ Информатика във Великотърновския Университет. Занимавам се със Software, Full-stack, и Game development, като Web технологиите са ми най - интересни. Също така в свободното си време обичам да уча нови технологии свързани с Информатиката, да спортувам, да комуникирам с хора, да се развивам в личен и в професионален план и да решавам по - сложни алгоритмични задачи.</p>
                </div>
                <div className="flex flex-col gap-4 items-center">
                    <h4 className="text-2xl text-gray-700 font-medium">What i do?</h4>
                    <p className="text-center text-lg font-light text-gray-600 mb-5">I AM A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                    <div className="flex flex-col items-center">
                        <h6 className="text-lg text-gray-600 mb-2">Proficient:</h6>
                        <div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7 gap-3">
                            <TechCard logo={htmlLogo} />
                            <TechCard logo={cssLogo} />
                            <TechCard logo={sassLogo} />
                            <TechCard logo={jsLogo} />
                            <TechCard logo={cPlusPlusLogo} />
                            <TechCard logo={cSharpLogo} />
                            <TechCard logo={unityLogo} />
                            <TechCard logo={hackerrankLogo} />
                            <TechCard logo={tsLogo} />
                            <TechCard logo={jqueryLogo} />
                            <TechCard logo={reactLogo} />
                            <TechCard logo={angularLogo} />
                            <TechCard logo={materialUiLogo} />
                            <TechCard logo={bootstrapLogo} />
                            <TechCard logo={taiwindCssLogo} />
                            <TechCard logo={npmLogo} />
                            <TechCard logo={gitLogo} />
                            <TechCard logo={phpLogo} />
                            <TechCard logo={symfonyLogo} />
                            <TechCard logo={mySqlLogo} />
                            <TechCard logo={firebaseLogo} />
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h6 className="text-lg text-gray-600 mb-2">Learning:</h6>
                        <div className="flex flex-wrap gap-3">
                            <TechCard logo={laravelLogo} />
                            <TechCard logo={nodeJsLogo} />
                            <TechCard logo={mongoDbLogo} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
