import React from "react";
import "./TextArea.css";

function TextArea(props) {
    return (
        <div className="dispGrid ">
            <label for="title">{props.title}</label>
            <textarea
                className={props.className}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
            <span className="errorMsg">{props.errorMessage}</span>

        </div>
    )
}

export default TextArea;