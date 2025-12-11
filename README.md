# Personal Website

A modern personal website built with Next.js, TypeScript, and Redux Toolkit.

## Features

- ⚡ **Next.js 16** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🔄 **Redux Toolkit** for state management
- 🌓 **System theme** support (follows OS preference)
- 📱 **Responsive design**

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Redux provider
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx    # Experience section
│   ├── Projects.tsx      # Projects showcase
│   ├── Books.tsx         # Books section
│   ├── Certifications.tsx # Certifications section
│   ├── Contact.tsx       # Contact section
│   ├── ReduxProvider.tsx # Redux store provider
│   └── ThemeProvider.tsx # Theme management
├── lib/                  # Utilities and Redux setup
│   ├── store.ts          # Redux store configuration
│   ├── hooks.ts          # Typed Redux hooks
│   └── slices/           # Redux slices
│       ├── userSlice.ts       # User info state management
│       ├── socialSlice.ts     # Social media links
│       ├── aboutSlice.ts       # About section content
│       ├── experienceSlice.ts  # Experience/jobs data
│       ├── projectsSlice.ts    # Projects data
│       ├── booksSlice.ts       # Books data
│       ├── certificationsSlice.ts # Certifications data
│       ├── contactSlice.ts     # Contact section content
│       └── navigationSlice.ts  # Navigation menu items
└── public/               # Static assets
```

## Redux Setup

The project uses Redux Toolkit for state management. The store is configured in `lib/store.ts` and includes:

- **User Slice**: Stores user information (name, title, bio, location, profile picture)
- **Social Slice**: Stores social media links (LinkedIn, GitHub, Twitter)
- **About Slice**: Stores about section content (paragraphs, skills, hobbies)
- **Experience Slice**: Stores work experience/jobs data
- **Projects Slice**: Stores projects data
- **Books Slice**: Stores books data
- **Certifications Slice**: Stores certifications and credentials
- **Contact Slice**: Stores contact section content
- **Navigation Slice**: Stores navigation menu items

### Using Redux in Components

```typescript
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { updateUser } from '@/lib/slices/userSlice';

function MyComponent() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <p>{user.name}</p>
      <button onClick={() => dispatch(updateUser({ name: 'New Name' }))}>
        Update Name
      </button>
    </div>
  );
}
```

## Customization

### Update User Information

Edit `lib/slices/userSlice.ts` to update your personal information, or dispatch the `updateUser` action from any component.

### Add New Redux Slices

1. Create a new slice in `lib/slices/`
2. Add it to the store in `lib/store.ts`
3. Use typed hooks from `lib/hooks.ts` in your components

### Styling

The project uses Tailwind CSS. Modify `app/globals.css` for global styles, or use Tailwind classes directly in components.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
