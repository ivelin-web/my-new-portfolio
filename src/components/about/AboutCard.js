import React from "react";

export default function AboutCard({ Icon, heading, text }) {
    return (
        <div className="flex flex-col gap-2 items-center mb-5 lg:mb-0">
            <div className="hexagon relative bg-primary mx-auto" style={{ width: 100, height: 57.74, marginTop: 28.87, marginBottom: 28.87 }}>
                <Icon style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: 50, color: "#fff" }} />
            </div>
            <h4 className="text-center text-2xl text-gray-700 font-medium">{heading}</h4>
            <p className="text-center font-light text-gray-600">{text}</p>
        </div>
    );
}
