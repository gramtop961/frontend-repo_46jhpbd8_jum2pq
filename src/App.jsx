import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-600">
        <p>
          Built with React, Vite, and Tailwind. Say hello to your next idea.
        </p>
      </footer>
    </div>
  );
}
