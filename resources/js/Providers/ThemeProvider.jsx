import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeThemeProvider } from "@/Redux/slices/theme";

const ThemeProvider = ({ children }) => {
    const dispatch = useDispatch();
    const themeValue = useSelector((state) => state.theme?.value);

    useEffect(() => {
        if (
            themeValue !== undefined ||
            html.getAttribute("data-theme") !== undefined
        ) {
            dispatch(
                changeThemeProvider(
                    themeValue || html.getAttribute("data-theme") === "dark"
                        ? true
                        : false
                )
            );
        } else {
            dispatch(changeThemeProvider(false));
        }
    }, []);

    return <>{children}</>;
};

export default ThemeProvider;
