import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Books from '@/components/Books';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Books />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
