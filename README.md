# Personal Website

A modern personal website built with Next.js, TypeScript, and Redux Toolkit.

## Features

- ⚡ **Next.js 16** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🔄 **Redux Toolkit** for state management
- 🌓 **Dark/Light theme** support
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
│   ├── Header.tsx        # Navigation header with theme toggle
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Footer.tsx        # Footer component
│   ├── ReduxProvider.tsx # Redux store provider
│   └── ThemeProvider.tsx # Theme management
├── lib/                  # Utilities and Redux setup
│   ├── store.ts          # Redux store configuration
│   ├── hooks.ts          # Typed Redux hooks
│   └── slices/           # Redux slices
│       ├── themeSlice.ts # Theme state management
│       └── userSlice.ts  # User info state management
└── public/               # Static assets
```

## Redux Setup

The project uses Redux Toolkit for state management. The store is configured in `lib/store.ts` and includes:

- **Theme Slice**: Manages light/dark/system theme preferences
- **User Slice**: Stores user information (name, title, bio, etc.)

### Using Redux in Components

```typescript
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { toggleTheme } from '@/lib/slices/themeSlice';

function MyComponent() {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();
  
  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Current theme: {theme}
    </button>
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
