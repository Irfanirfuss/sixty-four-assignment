import React from "react";
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            {/* Your custom arrow icon or content, e.g., using Font Awesome */}
            <i className="fas fa-chevron-right" style={{ color: "green" }}></i>
        </div>
    );
};

export default CustomNextArrow;
