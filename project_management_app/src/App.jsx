import { useState } from 'react';
import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  function handleStartAddProject() {
    // create arrow function to update state so we dont lose prev state
    setProjectsState(prevState => { // null === no projected created / undefined === not adding project and no project selected
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  // allows cancel button to work by resetting selectedProjectId to 'undefined' so that the screen goes back to 'no project selected'
  function handleCancelAddProject() {
        // create arrow function to update state so we dont lose prev state
        setProjectsState(prevState => { // null === no projected created / undefined === not adding project and no project selected
          return {
            ...prevState,
            selectedProjectId: undefined,
          };
        });
  };

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  };

  // find element in an array by id
  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

  let content = <SelectedProject project={selectedProject} />; 
  // null === no projected created / undefined === not adding project and no project selected
  if(projectState.selectedProjectId === null) { 
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* get the projects by getting the project state and the array of projects */}
      <SideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} />
      {content}
    </main>
  );
}

export default App;
