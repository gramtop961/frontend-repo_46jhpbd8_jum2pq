import { Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Simple by Design',
    desc: 'Clean, focused UI with minimal code so you can ship faster and with confidence.'
  },
  {
    icon: Shield,
    title: 'Secure & Modern',
    desc: 'Built on modern tooling and best practices to keep your project future-proof.'
  },
  {
    icon: Zap,
    title: 'Fast Performance',
    desc: 'Optimized assets and snappy interactions for a delightful experience.'
  }
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Why you’ll love it</h2>
        <p className="mt-3 text-gray-600">A tiny foundation that feels great and looks better.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <Icon className="h-6 w-6 text-rose-500" />
            <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
