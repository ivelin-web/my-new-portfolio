import React from "react";
import { Button } from "@material-ui/core";

export default function ProjectCard({ img, heading, text, live, github }) {
    const handleLiveButtonClick = () => {
        window.open(live, "_blank").focus();
    };

    const handleGithubButtonClick = () => {
        window.open(github, "_blank").focus();
    };

    return (
        <div className="shadow-md md:hover:shadow-2xl cursor-pointer transform md:hover:scale-105 transition-all ease-in duration-300">
            <img className="block w-full h-64 xs:h-80 sm:h-96 md:h-64 lg:h-72 xl:h-64 object-cover" src={img} alt="Project Image" />
            <div className="p-5 flex flex-col items-center text-center gap-3">
                <h4 className="text-2xl text-gray-700 font-medium">{heading}</h4>
                <p className="text-gray-600">{text}</p>
                <div className="flex gap-5">
                    {live && (
                        <Button onClick={handleLiveButtonClick} variant="outlined" className="btn-outline-primary">
                            See Live
                        </Button>
                    )}
                    <Button onClick={handleGithubButtonClick} variant="outlined" className="btn-outline-primary">
                        Github
                    </Button>
                </div>
            </div>
        </div>
    );
}
