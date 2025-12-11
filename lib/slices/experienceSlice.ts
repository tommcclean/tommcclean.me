import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Job {
  company: string;
  position: string;
  period: string;
  description: string[];
  location?: string;
  startDate?: string; // Format: "Month YYYY" e.g., "January 2023"
  endDate?: string | 'Present'; // Format: "Month YYYY" e.g., "December 2023" or "Present"
  logo?: string;
}

interface ExperienceState {
  title: string;
  description?: string;
  jobs: Job[];
}

const initialState: ExperienceState = {
  title: 'Experience',
  description: 'I have been working in the tech industry for nearly 20 years, mostly as an Engineer focused on the Web as a platform.',
  jobs: [
    {
      company: 'Just Eat Takeaway',
      position: 'Technology Manager',
      period: 'Present',
      location: 'Bristol, UK',
      logo: '/images/just-eat-takeaway.jpg',
      startDate: 'September 2023',
      endDate: 'Present',
      description: [
        'I lead the Web Foundations team at Just Eat Takeaway, we are a force multiplier team which enables all other teams to deliver the features our customers love.',
        'I manage a team of 8 engineers who are responsible for the core infrastructure of our web applications.',
        'My role also involves managing the roadmap and projects to ensure we deliver the most valuable work at the right time, in the right way.',
        'I played a significant and prominent role in the consolidation of multiple web platforms into one.'
      ],
    },
    {
      company: 'Just Eat Takeaway',
      position: 'Senior Software Engineer',
      period: 'Previous',
      location: 'Bristol, UK',
      logo: '/images/just-eat-takeaway.jpg',
      startDate: 'January 2019',
      endDate: 'September 2023',
      description: [
        'I joined the Web Core Team at JET to build the foundations of the customer facing website',
        'Over my time I worked across the full stack and full domain, I was proud to engineer the next generation version of the website architecture.',
        'I developed my collaboration, negotiation and communication skills, necessary to work in such a large organisation.',
      ],
    },
    {
      company: 'Team River',
      position: 'Senior Software Engineer',
      period: 'Previous',
      logo: '/images/team-river.png',
      startDate: 'January 2018',
      endDate: 'January 2019',
      description: [
        'Built a SaaS tool for companies to monitor and collaborate around improving key KPIs',
        'Developed features for real-time KPI tracking and team collaboration',
        'Created intuitive interfaces for data visualization and performance metrics',
      ],
    },
    {
      company: 'River Agency',
      position: 'Software Engineer',
      period: 'Previous',
      logo: '/images/team-river.png',
      startDate: 'January 2015',
      endDate: 'January 2019',
      description: [
        'Built websites for the automotive sector to improve key metrics and drive dealerships towards excellent customer service',
        'Developed custom web solutions tailored to automotive dealership needs such as their goals to improve customer experiences.',
        'Focused on improving user experience and conversion metrics for automotive clients',
      ],
    },
    {
      company: 'EDM Group',
      position: 'Software Engineer',
      period: 'Previous',
      logo: '/images/edm.png',
      startDate: 'December 2010',
      endDate: 'January 2015',
      description: [
        'I joined EDM Group straight out of University. I was successful in completing the Graduate Programme',
        'I worked on both external solutions for clients in the automotive sector, providing Pensions Auto Enrollment solutions.',
        'I worked extensively to build internal software used by the companies various digitisation facilities (including on site) to create consistent and simple processes.'
      ],
    },
  ],
};

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    updateExperience: (state, action: PayloadAction<Partial<ExperienceState>>) => {
      return { ...state, ...action.payload };
    },
    updateJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
    addJob: (state, action: PayloadAction<Job>) => {
      state.jobs.push(action.payload);
    },
    removeJob: (state, action: PayloadAction<number>) => {
      state.jobs.splice(action.payload, 1);
    },
  },
});

export const { updateExperience, updateJobs, addJob, removeJob } = experienceSlice.actions;
export default experienceSlice.reducer;

