import React from 'react';
import Button from "./UI/Button.jsx";

const Sidebar = ({onStartAddProject, projects, onSelectProject, selectedProjectId}) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2>My Projects</h2>
            <div>
                <Button onClick={onStartAddProject} color="stone">+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {

                    let addCss;

                    if(project.id === selectedProjectId) {
                        addCss = ' bg-stone-800 text-stone-200'
                    } else {
                        addCss = ' text-stone-400'
                    }

                    return (
                        <li key={project.id}>
                            <Button
                                onClick={() => onSelectProject(project.id)}
                                customClasses={addCss}
                            >
                                {project.title}
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
