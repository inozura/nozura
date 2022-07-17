import React from "react";

export default function Label({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={
                `label label-text block font-medium text-sm ` + className
            }
        >
            {value ? value : children}
        </label>
    );
}
