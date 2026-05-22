import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, SERVICES } from '@/data/services';

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/#services"
          className="inline-flex text-sm text-white/80 hover:text-white underline underline-offset-4"
        >
          Back to services
        </Link>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">{service.title}</h1>
        <p className="mt-6 text-lg md:text-xl text-white/85 max-w-4xl leading-relaxed">
          {service.intro}
        </p>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold mb-5">What We Handle</h2>
            <ul className="space-y-4 text-white/85">
              {service.bullets.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-zinc-900 rounded-2xl border border-white/10 p-8">
            <h2 className="text-2xl font-semibold mb-5">Expected Outcomes</h2>
            <ul className="space-y-4 text-white/85">
              {service.outcomes.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
