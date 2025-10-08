import { Rocket } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-xl bg-white/70 backdrop-blur-md shadow-sm ring-1 ring-black/5">
          <a href="#" className="flex items-center gap-2 px-4 py-2">
            <Rocket className="h-5 w-5 text-rose-500" />
            <span className="font-semibold tracking-tight">HelloWorld</span>
          </a>
          <nav className="flex items-center">
            <a
              href="#features"
              className="mx-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Features
            </a>
            <a
              href="#cta"
              className="mx-2 mr-3 rounded-md bg-rose-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-rose-600"
            >
              Get Started
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
