const STATS = [
  { value: '120K+', label: 'Inbound and outbound calls annually' },
  { value: '24/7', label: 'Support coverage (hours/days)' },
  { value: '42', label: 'Active retainer clients' },
  { value: '1.8x', label: 'Average paid social ROAS' },
  { value: '12', label: 'Industries served across PK, UK, and GCC' },
  { value: '98%', label: 'Average QA and client satisfaction score' },
];

export function StatsSection() {
  return (
    <section className="bg-[#f4f4f4] py-24 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Unlock a high performing network of inbound outbound and marketing experts
          </h2>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm border border-zinc-100"
            >
              <div className="text-5xl md:text-[3.5rem] font-bold tracking-tight mb-4">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
