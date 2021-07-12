import React from "react";

export default function SocialItem({ Icon, src }) {
    const handleClick = () => {
        window.open(src, "_blank").focus();
    };

    return (
        <span onClick={handleClick} className="social-item rounded-md">
            <Icon style={{ color: "#fff" }} />
        </span>
    );
}
