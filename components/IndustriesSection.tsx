const TABS = [
  'Customer Support',
  'Outbound Sales',
  'Social Media Marketing',
  'Lead Generation',
  'Brand Advertising',
  'Appointment Setting',
];

export function IndustriesSection() {
  return (
    <section className="bg-white py-24 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          Serving the industries that drive the economy
        </h2>

        <div className="flex overflow-x-auto overflow-y-hidden justify-start lg:justify-center gap-8 mb-16 border-b border-zinc-200 pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              className={`text-sm font-medium pb-4 -mb-[17px] whitespace-nowrap ${
                i === 0
                  ? 'text-black border-b-2 border-black'
                  : 'text-zinc-500 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100 order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
              alt="Industry operations"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 self-start">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-[1.1]">
              Deliver exceptional customer experiences at scale
            </h3>
            <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
             Provide professional inbound customer support services designed 
             to improve response times, strengthen customer relationships, 
             and maintain high satisfaction across every interaction.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-zinc-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
