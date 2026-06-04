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
    "I'm Thomas, a Technology Manager and Software Engineer based in Bristol. I spend my days leading engineering teams at Just Eat Takeaway and my evenings building things I wish existed.",
    "I'm drawn to software that starts as a personal itch and grows into something others find useful. Privacy and transparency are a design principle in everything I build, not an afterthought.",
    "After 15 years in the industry I still get the same buzz from shipping something new. Whether it's a tool for managers, a browser game or a diagramming app, I care about the craft."
  ],
  hobbies: {
    title: 'Outside of Work',
    description: 'Leicester City supporter, occasional runner and enthusiastic home cook. When I\'m not at the keyboard I\'m usually playing RTS or simulation games.',
  },
  technicalSkills: {
    title: 'Technical Skills',
    skills: ['Cloudflare', 'Cloudflare Workers', 'Cloudflare Pages', 'AWS Lambda', 'Github Actions', 'Nuxt.js', 'Vue.js', 'React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Node.js', 'AWS', 'EC2', 'EKS', 'Cursor', 'Gemini', 'Claude'],
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

