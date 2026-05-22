const CLIENT_LOGOS = [
  { name: 'AcmeCorp', className: 'text-2xl font-bold font-serif tracking-tighter' },
  { name: 'Globalist', className: 'text-2xl font-black tracking-widest uppercase' },
  { name: 'TechFlow', className: 'text-2xl font-semibold italic' },
  { name: 'NEXUS', className: 'text-2xl font-extrabold' },
  { name: 'Prime', className: 'text-2xl font-medium tracking-tight' },
];

export function ClientLogosSection() {
  return (
    <section className="bg-white py-24 px-6 text-center text-black border-t border-zinc-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 leading-tight">
          $50 million generated and 5 million calls handled for customers in the past year
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
