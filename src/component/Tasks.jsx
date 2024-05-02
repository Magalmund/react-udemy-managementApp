import React from 'react';
import NewTask from "./NewTask.jsx";
import Button from "./UI/Button.jsx";

const Tasks = ({tasks, project, onAddTask, onDeleteTask}) => {
    return (
        <section>
            <h2 className="text-2xl "></h2>
            <NewTask onAddTask={onAddTask} />
            {tasks.length === 0 && (
                <p className="text-stone-800 my-4">
                    This project doesn't have any task yet.
                </p>
            )}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.filter((task) => project.id === task.projectId).map((task => {
                        return (
                            <li key={task.id} className="flex justify-between my-4">
                                <span>{task.task}</span>
                                <Button
                                    customClasses="text-stone-700 hover:text-red-500"
                                    onClick={() => onDeleteTask(task.id)}
                                >
                                    Clear
                                </Button>
                            </li>
                        )
                    }))}
                </ul>
            )}
        </section>
    );
};

export default Tasks;
