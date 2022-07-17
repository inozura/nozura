import "./bootstrap";

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

// Redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./Redux/store";

// theme
const html = document.querySelector("html");
const localStorageTheme = window.localStorage.getItem("theme");
if (localStorageTheme) {
    html.setAttribute("data-theme", localStorageTheme);
} else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
    } else {
        html.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
    }
}

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(
            <ReduxProvider store={store}>
                <App {...props} />
            </ReduxProvider>,
            el
        );
    },
});

InertiaProgress.init({ showSpinner: true });
