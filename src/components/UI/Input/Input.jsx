import React from "react";
import classes from "./Input.module.sass";

const Input = ({ outline, text, placeholder, to }) => {
 
    return (
        <input className={classes.input}
            placeholder = {placeholder}
            type = 'text'
        >
            {text}
        </input>
    );
};

export default Input;
