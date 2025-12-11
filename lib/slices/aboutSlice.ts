import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AboutState {
  title: string;
  paragraphs: string[];
  hobbies: {
    title: string;
    description: string;
  };
  technicalSkills: {
    title: string;
    skills: string[];
  };
  managementSkills: {
    title: string;
    skills: string[];
  };
}

const initialState: AboutState = {
  title: 'About Me',
  paragraphs: [
    "My name is Thomas, I am a futurist and technology enthusiast. I currently work as a Technology Manager and I also have 15 years of experience as a Web focused Software Engineer.",
    "One of my main passions is building new technologies that I can personally use, I love to scale them once they are right for me to deliver value to others too.",
    "I am a keen advocate for privacy and transparency, often a key feature of the software I build because I would rather see a web that respects your data rather than profits from it."
  ],
  hobbies: {
    title: 'Hobbies',
    description: 'I am an avid football fan of Leicester City FC. I also enjoy running, walking and cookings. I play video games periodically too, mostly RTS (Real Time Strategy) and Simulation games.',
  },
  technicalSkills: {
    title: 'Technical Skills',
    skills: ['Cloudflare', 'Cloudflare Workers', 'Cloudflare Pages', 'AWS Lambda', 'Github Actions', 'Nuxt.js', 'Vue.js', 'React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Node.js', 'AWS', 'EC2', 'EKS'],
  },
  managementSkills: {
    title: 'Management Skills',
    skills: ['Team Leadership', 'Project Management', 'Agile Methodologies', 'Strategic Planning', 'Stakeholder Management', 'Organisation'],
  },
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    updateAbout: (state, action: PayloadAction<Partial<AboutState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateAbout } = aboutSlice.actions;
export default aboutSlice.reducer;

