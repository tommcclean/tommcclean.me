import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
  badge?: string;
}

interface ProjectsState {
  title: string;
  description: string;
  projects: Project[];
}

const initialState: ProjectsState = {
  title: 'Projects',
  description: 'Side projects I have built and shipped. Each one started as something I wanted to exist and turned into something others use too.',
  projects: [
    {
      title: 'LiveDiagram',
      description: 'A collaborative diagramming tool that works in your browser. Real-time co-editing, no account required, and end-to-end encrypted.',
      tech: ['Diagramming', 'Real-time Collaboration', 'Browser-based', 'End-to-end Encryption'],
      image: '/images/livediagram.png',
      link: 'https://www.livediagram.app',
    },
    {
      title: 'Manager Toolkit',
      description: 'An all-in-one platform for people managers. Built to cut through the noise and give managers the clarity they need to do their best work.',
      tech: ['Management Tools', 'Next.JS', 'React', 'Cursor', 'OpenAI', 'Cloudflare D1', 'Clerk Auth'],
      image: '/images/toolkit.png',
      link: 'https://www.manager-toolkit.com',
    },
    {
      title: 'BattleBlox',
      description: 'A web-based strategy game that blends Risk and Go. Play against friends or the AI in quick, competitive rounds.',
      tech: ['Web Game', 'JavaScript', 'Nuxt', 'Vue.JS', 'Static Site Generation', 'Cloudflare Pages'],
      image: '/images/battleblox.png',
      link: 'https://battleblox.tommcclean.me',
    },
    {
      title: 'Animal Crossing Portal',
      description: 'A fan site tracking the popularity of Animal Crossing characters. Visitors vote, debate and keep the conversation going.',
      tech: ['Next.JS', 'Vue.JS', 'Azure Cosmos DB', 'Azure Blob Storage', 'Azure Functions', 'Cloudflare Pages', 'Google Ads'],
      image: '/images/animalcrossingportal.png',
      link: 'https://www.animalcrossingportal.com',
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


