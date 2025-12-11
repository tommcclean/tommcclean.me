import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactState {
  title: string;
  description: string;
  formLabels: {
    name: string;
    email: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  buttonText: {
    submit: string;
    submitting: string;
  };
  messages: {
    success: string;
    error: string;
  };
}

const initialState: ContactState = {
  title: 'Contact Me',
  description: "Have a question or want to work together? Get in touch and I'll get back to you as soon as possible.",
  formLabels: {
    name: 'Name',
    email: 'Email',
    message: 'Message',
  },
  placeholders: {
    name: 'Your name',
    email: 'your.email@example.com',
    message: 'Your message...',
  },
  buttonText: {
    submit: 'Send Message',
    submitting: 'Sending...',
  },
  messages: {
    success: "Thank you! Your message has been sent. I'll get back to you soon.",
    error: 'Something went wrong. Please try again later.',
  },
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateContact: (state, action: PayloadAction<Partial<ContactState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateContact } = contactSlice.actions;
export default contactSlice.reducer;

