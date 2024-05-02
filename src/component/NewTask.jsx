import React, {useState} from 'react';
import Button from "./UI/Button.jsx";

const NewTask = ({onAddTask}) => {
    const [enteredTask, setEnteredTask] = useState('');

    const handleChange = (event) => {
        setEnteredTask(event.target.value);
    }

    const handleClick = () => {
        onAddTask(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <Button color="dark-stone" onClick={handleClick}>Add Task</Button>
        </div>
    );
};

export default NewTask;
