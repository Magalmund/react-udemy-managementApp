import React from 'react';
import Input from "./UI/Input.jsx";
import TextArea from "./UI/TextArea.jsx";

const Element = ({field}) => {
    switch (field.field) {
        case 'input':
            return (<Input field={field}/>)
        case 'textarea':
            return (<TextArea field={field}/>)
        default:
            return null;
    }
};

export default Element;
