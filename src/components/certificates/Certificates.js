import React from "react";
import problemSolvingCertificate from "../../images/certificates/problem-solving.png";
import cSharpCertificate from "../../images/certificates/c-sharp.png";
import jsCertificate from "../../images/certificates/js.png";
import cssCertificate from "../../images/certificates/css.png";
import Certificate from "./Certificate";

export default function Certificates() {
    return (
        <section id="certificates" className="bg-white">
            <div className="my-container py-10">
                <h2 className="section-heading mb-20">Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-x-6 lg:gap-20 lg:gap-x-20">
                    <Certificate img={problemSolvingCertificate} title="Problem Solving" />
                    <Certificate img={cSharpCertificate} title="C#" />
                    <Certificate img={jsCertificate} title="JavaScript" />
                    <Certificate img={cssCertificate} title="CSS" />
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path fill="#252934" fill-opacity="1" d="M0,32L720,160L1440,0L1440,320L720,320L0,320Z"></path>
            </svg>
        </section>
    );
}
