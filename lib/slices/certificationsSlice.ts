import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string; // Format: "Month YYYY" e.g., "January 2023"
  expiryDate?: string; // Format: "Month YYYY" or leave undefined if no expiry
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  description?: string;
}

interface CertificationsState {
  title: string;
  description?: string;
  certifications: Certification[];
}

const initialState: CertificationsState = {
  title: 'Certifications',
  description: 'Professional certifications and credentials I have earned.',
  certifications: [
    {
      name: 'Influential Communication Programme',
      logo: '/images/bureau-zuidema.png',
      description: 'A 4 day programme that teaches you how to communicate with influence and impact.',
      issuer: 'Bureau Zuidema',
      issueDate: 'June 2023',
    },
  ],
};

const certificationsSlice = createSlice({
  name: 'certifications',
  initialState,
  reducers: {
    updateCertifications: (state, action: PayloadAction<Partial<CertificationsState>>) => {
      return { ...state, ...action.payload };
    },
    updateCertificationsList: (state, action: PayloadAction<Certification[]>) => {
      state.certifications = action.payload;
    },
    addCertification: (state, action: PayloadAction<Certification>) => {
      state.certifications.push(action.payload);
    },
    removeCertification: (state, action: PayloadAction<number>) => {
      state.certifications.splice(action.payload, 1);
    },
  },
});

export const { updateCertifications, updateCertificationsList, addCertification, removeCertification } = certificationsSlice.actions;
export default certificationsSlice.reducer;

