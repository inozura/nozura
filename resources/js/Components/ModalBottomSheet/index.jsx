import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

import "react-spring-bottom-sheet/dist/style.css";
import "./styles.css";

const ModalBottomSheet = ({
    open,
    onDismiss,
    children,
    classname,
    height,
    props,
}) => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    return (
        <BottomSheet
            open={open}
            onDismiss={onDismiss}
            className={classname}
            defaultSnap={({ maxHeight }) => maxHeight / 2}
            snapPoints={({ maxHeight }) =>
                height
                    ? mediaQuery.matches
                        ? maxHeight * height
                        : maxHeight * height * 1.25
                    : maxHeight - maxHeight / 10
            }
            {...props}
        >
            {children}
        </BottomSheet>
    );
};

export default ModalBottomSheet;
