import React from "react";

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`btn px-3 py-1 ` + className}
            disabled={processing}
        >
            {processing ? (
                <progress className="progress w-10 after:!bg-base-content" />
            ) : (
                children
            )}
        </button>
    );
}
