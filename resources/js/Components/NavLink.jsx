import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center px-1 pt-1 border-b-2 border-primary text-sm font-medium leading-5 text-base-content focus:outline-none focus:border-primary-focus transition duration-150 ease-in-out"
                    : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-base-content hover:text-base-content hover:border-base-content focus:outline-none focus:text-gray-700 focus:border-base-content transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
