const ARTICLES = [
  {
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    alt: 'Social Media',
    title: 'Q1 2026 digital marketing update: What brands should be watching now',
    excerpt:
      'Our Q1 Market Update highlights several signals that marketing leaders should be watching closely. While conditions vary by channel, planning cycles are shortening, and flexibility is becoming more valuable than ever.',
    meta: 'Mar 12, 2026 • News',
  },
  {
    image:
      'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop',
    alt: 'Call Center',
    title:
      'Eliminate friction across your inbound support flow—from first call to resolution',
    excerpt:
      "Today's customer service teams face growing complexity from fragmented systems and manual processes. This guide shows how integrating end-to-end support with a strategic partner can simplify operations.",
    meta: 'Jan 15, 2026 • Guides',
  },
  {
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8ed7c1590f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Dispatching',
    title: 'A guide to truck dispatching efficiency in 2026',
    excerpt:
      'As we move deeper into 2026, the logistics market is showing signs of change. To help mitigate risk, shippers should prepare for various market scenarios, and use real-time data to adapt to market conditions.',
    meta: 'Dec 19, 2025 • News',
  },
];

export function BlogSection() {
  return (
    <section className="bg-white py-24 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          Latest updates and recommended content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map(({ image, alt, title, excerpt, meta }) => (
            <div
              key={title}
              className="flex flex-col group cursor-pointer border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={alt}
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-4 leading-tight">{title}</h3>
                <p className="text-zinc-600 mb-8 flex-1 leading-relaxed">{excerpt}</p>
                <div className="text-sm text-zinc-500 font-medium">{meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
