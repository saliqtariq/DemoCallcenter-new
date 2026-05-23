const ARTICLES = [
  {
    image:
      'https://images.unsplash.com/photo-1573497019707-1c04de26e58c?q=80&w=2070&auto=format&fit=crop',
    alt: 'Inbound support agents with headsets',
    title: 'Inbound Support Playbook: reduce repeat calls with better call flows',
    excerpt:
      'Learn how to structure call routing, escalation paths, and QA checkpoints so customers get faster, clearer help from first contact to resolution.',
    meta: 'Playbook',
    cta: 'Read Playbook',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop',
    alt: 'Outbound sales call and follow-up workflow',
    title:
      'Outbound Sales Script Framework for higher-quality customer conversations',
    excerpt:
      'Use a practical script structure for opening calls, handling objections, and qualifying intent while keeping conversations natural and customer-focused.',
    meta: 'Guide',
    cta: 'Read Guide',
  },
  {
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    alt: 'CRM dashboard for appointment setting',
    title: 'Appointment Setting SOP: from lead contact to confirmed booking',
    excerpt:
      'This step-by-step SOP helps teams manage lead outreach, follow-up timing, and handoff to sales calendars without losing opportunities.',
    meta: 'Template',
    cta: 'View SOP',
  },
];

export function BlogSection() {
  return (
    <section className="bg-white py-24 px-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
          Call Center Insights and Playbooks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map(({ image, alt, title, excerpt, meta, cta }) => (
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
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div className="text-sm text-zinc-500 font-medium">{meta}</div>
                  <span className="text-sm font-semibold text-black">{cta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
