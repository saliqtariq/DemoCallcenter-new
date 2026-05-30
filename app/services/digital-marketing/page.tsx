import Link from 'next/link';

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#services"
          className="inline-flex text-sm text-white/80 hover:text-white underline underline-offset-4"
        >
          Back to services
        </Link>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">Digital Marketing</h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-4xl leading-relaxed">
          Our social media and paid ads team builds data-backed campaigns that attract the right audience and convert attention into booked calls, inquiries, and sales opportunities.
        </p>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold mb-5">What We Handle</h2>
            <ul className="space-y-4 text-white/85">
              <li className="leading-relaxed">Paid ads setup and optimization (Meta and Google)</li>
              <li className="leading-relaxed">Content calendars for consistent brand presence</li>
              <li className="leading-relaxed">Lead form and landing page funnel coordination</li>
              <li className="leading-relaxed">Weekly reporting on CPL, ROAS, and conversion quality</li>
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold mb-5">Expected Outcomes</h2>
            <ul className="space-y-4 text-white/85">
              <li className="leading-relaxed">Lower cost per qualified lead</li>
              <li className="leading-relaxed">More consistent monthly lead flow</li>
              <li className="leading-relaxed">Clear performance visibility for budget decisions</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
