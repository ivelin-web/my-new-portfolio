import React from "react";

export default function SocialItem({ Icon, src, rounded }) {
    const handleClick = () => {
        window.open(src, "_blank").focus();
    };

    return (
        <span onClick={handleClick} className={`social-item ${rounded ? "rounded-full" : "rounded-md"} p-3`}>
            <Icon style={{ color: "#fff" }} />
        </span>
    );
}
