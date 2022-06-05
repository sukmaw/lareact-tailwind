import React from "react";

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    processing,
    children,
}) {
    let variants = {
        primary:
            "text-purple-600 border-purple-200 hover:bg-purple-600 focus:ring-purple-600",
    };
    className += ` ${variants[variant]}`;

    return (
        <button
            type={type}
            className={
                `px-4 py-1 text-sm font-semibold border hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    processing && "opacity-25"
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
