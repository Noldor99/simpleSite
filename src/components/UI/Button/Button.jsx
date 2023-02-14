import React from "react";
import classes from "./Button.module.sass";

const Button = ({ outline, children, onClick, to }) => {
 
    return (
        <button className={classes.button}
        >
            {children}
        </button>
    );
};

export default Button;
