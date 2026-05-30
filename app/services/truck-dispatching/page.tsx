import Link from 'next/link';

export default function TruckDispatchingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#services"
          className="inline-flex text-sm text-white/80 hover:text-white underline underline-offset-4"
        >
          Back to services
        </Link>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">Truck Dispatching</h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-4xl leading-relaxed">
          We support dispatch operations with load planning, carrier coordination, and real-time communication to keep drivers moving and reduce deadhead miles.
        </p>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold mb-5">What We Handle</h2>
            <ul className="space-y-4 text-white/85">
              <li className="leading-relaxed">Load booking and lane matching based on profitability</li>
              <li className="leading-relaxed">Broker and shipper communication throughout the trip</li>
              <li className="leading-relaxed">Route support, delay handling, and POD follow-up</li>
              <li className="leading-relaxed">Daily dispatch summaries with completed and pending loads</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold mb-5">Expected Outcomes</h2>
            <ul className="space-y-4 text-white/85">
              <li className="leading-relaxed">Improved truck utilization</li>
              <li className="leading-relaxed">Better on-time pickup and delivery rates</li>
              <li className="leading-relaxed">Smoother day-to-day dispatch operations</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
