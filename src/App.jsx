import Sidebar from "./component/Sidebar.jsx";
import NewProjectForm from "./component/NewProjectForm.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import SelectedProject from "./component/SelectedProject.jsx";


function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
    });

    const handleAddTask = (task) => {
        setProjectsState((prevState) => {
            const taskId = uuidv4();
            const newTask = {
                task: task,
                projectId: prevState.selectedProjectId,
                id: taskId
            };

            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks]
            }
    });
    };

    const handleDeleteTask = (id) => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id)
            };
        });
    }

    const handleSelectProject = (id) => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id
            }
        })

    }

    const handleStartAddProject = () => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        })
    }

    const handleCancelAddProject = () => {
        setProjectsState(prevState => {
            return {
                ...prevState,
                selectedProjectId:  undefined
            }
        })
    }

    const handleAddProject = (projectData) => {
        setProjectsState((prevState) => {
            const projectId = uuidv4();
            const newProject = {
                ...projectData,
                id: projectId
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            }
        });
    }

    const handleDeleteProject = () => {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
            };
        });
    }

    const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId)

    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks}
        />
    );

    if (projectsState.selectedProjectId === null) {
        content = <NewProjectForm onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <Sidebar
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectsState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
