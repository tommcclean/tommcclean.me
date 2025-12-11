import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}

interface ProjectsState {
  title: string;
  description: string;
  projects: Project[];
}

const initialState: ProjectsState = {
  title: 'Projects',
  description: 'I am always working on something fun, I am driven to build new technologies that I can personally use and share with others to enjoy.',
  projects: [
    {
      title: 'BattleBlox',
      description: 'An addictive web based game you can play against friends or the AI, a hybrid between Risk and Go.',
      tech: ['Web Game', 'JavaScript', 'Nuxt', 'Vue.JS', 'Static Site Generation', 'Cloudflare Pages'],
      image: '/images/battleblox.png',
      link: 'https://battleblox.tommcclean.me',
    },
    {
      title: 'Animal Crossing Portal',
      description: 'The internet authority on popularity of characters in the Animal Crossing game. Visitors can vote and participate in the conversation.',
      tech: ['Next.JS', 'Vue.JS', 'Azure Cosmos DB', 'Azure Blob Storage', 'Azure Functions', 'Cloudflare Pages', 'Google Ads'],
      image: '/images/animalcrossingportal.png',
      link: 'https://www.animalcrossingportal.com',
    },
    {
      title: 'Manager Toolkit',
      description: 'A new project that has not yet launched, designed for Technology Managers like me to solve common challenges in a simple and consistent way.',
      tech: ['Management Tools', 'Next.JS', 'React', 'Cursor', 'Artificial Intelligence', 'MongoDB', 'Auth0'],
      image: '/images/coming-soon.webp',
    },
  ],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    updateProjects: (state, action: PayloadAction<Partial<ProjectsState>>) => {
      return { ...state, ...action.payload };
    },
    updateProjectsList: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects.splice(action.payload, 1);
    },
  },
});

export const { updateProjects, updateProjectsList, addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;


