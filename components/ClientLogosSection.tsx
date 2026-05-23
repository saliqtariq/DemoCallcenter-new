const CLIENT_LOGOS = [
  { name: 'Agencies', className: 'text-2xl font-bold tracking-tight' },
  { name: 'Zameen.com', className: 'text-2xl font-black tracking-tight' },
  { name: 'AdScale', className: 'text-2xl font-semibold italic' },
  { name: 'Startups', className: 'text-2xl font-extrabold tracking-tight' },
  { name: 'Services', className: 'text-2xl font-medium tracking-tight' },
];

export function ClientLogosSection() {
  return (
    <section className="bg-white pt-6 md:pt-8 pb-20 md:pb-24 px-6 text-center text-black border-t border-zinc-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 leading-tight">
          PKR 20+ million in supported revenue and 120,000+ customer calls handled in the last 12 months
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale">
          {CLIENT_LOGOS.map(({ name, className }) => (
            <div key={name} className={className}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
