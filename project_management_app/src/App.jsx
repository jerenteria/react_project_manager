import { useState } from 'react';
import SideBar from './components/SideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    // create arrow function to update state so we dont lose prev state
    setProjectsState(prevState => { // null === no projected created / undefined === not adding project and no project selected
      return {
        ...prevState,
        selectedProjectId: null,
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



  let content; 
  // null === no projected created / undefined === not adding project and no project selected
  if(projectState.selectedProjectId === null) { 
    content = <NewProject onAdd={handleAddProject} />
  } else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* get the projects by getting the project state and the array of projects */}
      <SideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} />
      {content}
    </main>
  );
}

export default App;
