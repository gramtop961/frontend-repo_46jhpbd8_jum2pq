export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 pb-20">
      <div className="rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 p-8 text-white shadow-lg sm:p-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Start with a friendly hello</h3>
            <p className="mt-2 text-white/90">Spin this up anywhere. Tweak it easily. Share the vibe.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-rose-600 shadow hover:bg-rose-50"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
