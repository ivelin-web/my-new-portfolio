import React from "react";

const HACKERRANK_PROFILE = "https://www.hackerrank.com/ivelinivanov1999";

export default function Certificate({ img, title }) {
    const handleClick = () => {
        window.open(HACKERRANK_PROFILE, "_blank").focus();
    };

    return (
        <div onClick={handleClick} className="cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in">
            <h4 className="text-2xl text-center text-gray-700 font-medium mb-3">{title}</h4>
            <img className="block w-full h-auto object-contain" src={img} alt="Certificate Image" />
        </div>
    );
}
