import React from "react";

const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            {/* Your custom arrow icon or content, e.g., using an SVG */}
            <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M11 0 L0 10 L11 20 Z" fill="blue" />
            </svg>
        </div>
    );
};

export default CustomPrevArrow;
