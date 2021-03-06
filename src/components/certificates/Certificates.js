import React from "react";
import problemSolvingCertificate from "../../images/certificates/problem-solving.png";
import cSharpCertificate from "../../images/certificates/c-sharp.png";
import jsCertificate from "../../images/certificates/js.png";
import cssCertificate from "../../images/certificates/css.png";
import reactCertificate from "../../images/certificates/react.png";
import angularCertificate from "../../images/certificates/angular.png";
import Certificate from "./Certificate";
import { Fade } from "react-reveal";

export default function Certificates() {
    return (
        <section id="certificates" className="bg-white">
            <div className="my-container py-10">
                <h2 className="section-heading mb-20">Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20 md:gap-y-12 md:gap-x-6 lg:gap-x-8">
                    <Fade bottom duration={1500} delay={window.innerWidth >= 1280 ? 250 : 0}>
                        <Certificate img={problemSolvingCertificate} title="Problem Solving" />
                    </Fade>
                    <Fade bottom duration={1500} delay={window.innerWidth >= 1280 ? 500 : 0}>
                        <Certificate img={cSharpCertificate} title="C#" />
                    </Fade>
                    <Fade bottom duration={1500} delay={window.innerWidth >= 1280 ? 750 : 0}>
                        <Certificate img={jsCertificate} title="JavaScript" />
                    </Fade>
                    <Fade bottom duration={1500} delay={window.innerWidth >= 1280 ? 250 : 0}>
                        <Certificate img={reactCertificate} title="React" />
                    </Fade>
                    <Fade bottom duration={1500} delay={window.innerWidth >= 1280 ? 500 : 0}>
                        <Certificate img={angularCertificate} title="Angular" />
                    </Fade>
                    <Fade bottom duration={1500} delay={window.innerWidth >= 1280 ? 750 : 0}>
                        <Certificate img={cssCertificate} title="CSS" />
                    </Fade>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#252934" fillOpacity="1" d="M0,32L720,160L1440,0L1440,320L720,320L0,320Z"></path>
            </svg>
        </section>
    );
}
