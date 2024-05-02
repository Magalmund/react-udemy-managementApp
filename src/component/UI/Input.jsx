import React, {useContext} from 'react';
import {FormContext} from "../../FormContext.js";

const Input = ({field}) => {

    const {handleChange} = useContext(FormContext);

    return (
        <p className="flex flex-col gap-1 my-4">
            <label
                className="text-sm font-bold uppercase text-stone-500"
                htmlFor={field.field_id}
            >
                {field.field_label}
            </label>
            <input
                id={field.field_id}
                name={field.field_id}
                type={field.field_type}
                placeholder={field.field_placeholder ? field.field_placeholder : ''}
                required={field.field_mandatory}
                value={field.field_value}
                onChange={event => handleChange(field.field_id, event)}
                className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            />
        </p>
    );
};

export default Input;
