import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Books from '@/components/Books';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <ScrollProgress />
      <Header />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Books />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
