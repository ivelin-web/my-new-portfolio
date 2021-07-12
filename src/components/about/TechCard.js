import React from "react";

export default function TechCard({ logo }) {
    return (
        <div className="w-16 h-16 rounded-full bg-white shadow-full flex items-center content-center mb-5">
            <img className="block w-8 h-8 mx-auto object-contain" src={logo} alt="Html Logo" />
        </div>
    );
}
