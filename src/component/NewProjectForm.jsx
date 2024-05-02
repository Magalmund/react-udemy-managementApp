import React, {useRef, useState} from 'react';
import Button from "./UI/Button.jsx";
import {fields} from "../data/data.js";
import Element from "./Element.jsx";
import {FormContext} from "../FormContext.js";
import Modal from "./UI/Modal.jsx";

const NewProjectForm = ({onAdd, onCancel}) => {

    const [elements, setElements] = useState(fields);
    const modalRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        let data = {};
        elements.forEach((element) => {
            data[element.field_id] = element.field_value;
        });

        const isEmpty = (value) => value === "";

        if (Object.values(data).some(isEmpty)) {
            modalRef.current.open();
            return;
        }

        onAdd(data)
    }

    const handleChange = (id, event) => {
        const newElements = [...elements];
        newElements.forEach(field => {
            let {field_id} = field;
            if (id === field_id) {
                field.field_value = event.target.value;
            }
            setElements(newElements);
        })
    }

    return (

        <FormContext.Provider value={{handleChange}}>
            <Modal ref={modalRef} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid input</h2>
                <p className="text-stone-600 mb-4">Oops...looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <form onSubmit={handleSubmit} className="w-[35rem] mt-16 ">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><Button color="white" onClick={onCancel}>Cancel</Button></li>
                    <li><Button color="dark-stone" onClick={handleSubmit}>Save</Button></li>
                </menu>
                <div>
                    {fields
                        ? fields.map((field) => (
                            <Element key={field.field_id} field={field}/>
                        ))
                        : null
                    }
                </div>
            </form>
        </FormContext.Provider>
    );
};

export default NewProjectForm;
