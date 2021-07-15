import React from "react";
import ProjectCard from "./ProjectCard";
import ngForumImage from "../../images/projects/ng-forum.jpg";
import instagramCloneImage from "../../images/projects/instagram-clone.jpg";
import facebookCloneImage from "../../images/projects/facebook-clone.jpg";
import jobsWebImage from "../../images/projects/jobsweb.jpg";
import { Fade } from "react-reveal";

export default function Projects() {
    return (
        <section id="projects" className="my-container py-10 bg-gray-100">
            <h2 className="section-heading">Projects</h2>
            <div className="py-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 sm:gap-8">
                <Fade duration={1250} bottom>
                    <ProjectCard img={ngForumImage} heading="Angular Forum" text="Angular forum application with login/register, post, comment and like functionality" live="https://ivelin-web.github.io/ng-forum/home" github="https://github.com/ivelin-web/ng-forum" />
                </Fade>
                <Fade duration={1250} bottom delay={window.innerWidth >= 768 ? 250 : 0}>
                    <ProjectCard img={instagramCloneImage} heading="Instagram Clone" text="React + firebase instagram clone application with upload image and post functionality" live="https://ivelin-web.github.io/react-instagram-clone/" github="https://github.com/ivelin-web/react-instagram-clone" />
                </Fade>
                <Fade duration={1250} bottom delay={window.innerWidth >= 768 ? 250 : 0}>
                    <ProjectCard img={jobsWebImage} heading="JobsWeb App" text="Symfony bigger application like jobs.bg with MySql database and multifunctionality" github="https://github.com/ivelin-web/Symfony-JobsWebApp" />
                </Fade>
                <Fade duration={1250} bottom delay={window.innerWidth >= 768 ? 250 : 0}>
                    <ProjectCard img={facebookCloneImage} heading="Facebook Clone" text="React + firebase facebook clone application with upload image and post functionality" live="https://ivelin-web.github.io/react-facebook-clone/" github="https://github.com/ivelin-web/react-facebook-clone" />
                </Fade>
            </div>
        </section>
    );
}
