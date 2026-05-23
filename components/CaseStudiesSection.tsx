const CASE_STUDIES = [
  {
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Inbound customer support team',
    title:
      'How an e-commerce brand improved customer support experience with our inbound call center team',
    cta: 'See Inbound Support Case',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop',
    alt: 'Outbound sales and lead qualification',
    title:
      'How a growing service business scaled outreach through outbound sales and lead qualification',
    cta: 'See Outbound Sales Case',
  },
  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    alt: 'Appointment setting workflow on CRM dashboard',
    title:
      'How a multi-location company streamlined appointment setting across channels with Demo Tech',
    cta: 'See Appointment Setting Case',
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-[#384DF5] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Call center case studies built around real customer conversations
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Explore how our teams solve real support and sales workflow challenges through practical call centre execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map(({ image, alt, title, cta }) => (
            <div
              key={title}
              className="bg-white text-black rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={image} className="w-full h-full object-cover" alt={alt} />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-8 leading-snug flex-1">{title}</h3>
                <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold w-max hover:bg-zinc-800 transition-colors">
                  {cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
