import { createSlice } from "@reduxjs/toolkit";
// ----------------------------------------------------------------------

const html = document.querySelector("html");
// ----------------------------------------------------------------------
const initialState = {
    value: html.getAttribute("data-theme") === "dark" ? true : false, // if false default theme is light, if true default theme is dark
};

const slice = createSlice({
    name: "web-theme",
    initialState,
    reducers: {
        manipulateTheme(state, action) {
            state.value = action.payload;
        },
    },
});

// Reducer
export default slice.reducer;

// Actions
export const changeThemeProvider = (value) => (dispatch, getState) => {
    const getThemeValue = getState().theme.value;

    if (value !== undefined) {
        dispatch(slice.actions.manipulateTheme(value));

        html.setAttribute("data-theme", value ? "dark" : "light");
    } else {
        dispatch(slice.actions.manipulateTheme(!getThemeValue));

        html.setAttribute(
            "data-theme",
            !getThemeValue === true ? "dark" : "light"
        );
    }
};
