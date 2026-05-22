const CASE_STUDIES = [
  {
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Call center',
    title:
      "How a global e-commerce brand saves millions with Demo Tech's strategic inbound partnership",
  },
  {
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop',
    alt: 'Truck dispatch',
    title:
      'How LogisticsPlus saves an average of $3.4 million annually with Demo Tech dispatching',
  },
  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    alt: 'Marketing',
    title:
      'How Demo Tech supported TechGrow through expansion and global complexity over 10 years',
  },
];

export function CaseStudiesSection() {
  return (
    <section className="bg-[#384DF5] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Proven results across complex business operations
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Customers partner with Demo Tech to improve operational efficiency, boost sales, and enhance customer experience. Our average client tenure is 5+ years with 98% retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map(({ image, alt, title }) => (
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
                  Read the Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
