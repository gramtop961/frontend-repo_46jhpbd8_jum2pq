import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[480px] w-full" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 drop-shadow-sm sm:text-5xl md:text-6xl">
          Hello, World.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          A minimalist landing page with an interactive, tactile grid. Click and drag to ripple the tiles.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#cta" className="rounded-md bg-rose-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-rose-600">
            Get Started
          </a>
          <a href="#features" className="rounded-md bg-white/80 px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10 backdrop-blur hover:bg-white">
            Learn More
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white" />
    </section>
  );
}
