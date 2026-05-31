import Link from 'next/link';
import Image from 'next/image';
import { 
  Headphones, 
  PhoneCall, 
  BarChart, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function CallCenterSolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30">
      {/* Hero Section */}
      <section className="min-h-[70vh] md:min-h-[85vh] flex flex-col justify-center relative px-6 py-20">
        <div className="absolute top-12 left-0 right-0 max-w-7xl mx-auto px-6 w-full">
          <Link
            href="/#services"
            className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>
        </div>
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center w-full mt-20 md:mt-28">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Call Center <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-12 max-w-4xl">
            Our call center team handles customer conversations with clear scripts, QA monitoring, and KPI-based reporting so every call contributes to better business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/923358746804"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-md font-medium hover:bg-zinc-200 transition cursor-pointer select-none"
            >
              Book a Call
            </a>
            <Link
              href="/#services"
              className="w-full sm:w-auto bg-transparent text-white px-8 py-3.5 rounded-md font-medium border border-white/70 hover:bg-white/10 transition cursor-pointer select-none"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>



      {/* Core Services Section */}
      <section id="features" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Comprehensive Call Center Services</h2>
           
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Inbound Customer Support',
                description: 'Professional handling of customer inquiries, technical support, and order processing with high first-call resolution.',
                icon: Headphones,
              },
              {
                title: 'Outbound Sales & Lead Gen',
                description: 'Strategic outbound campaigns to qualify leads, set appointments, and close sales effectively.',
                icon: PhoneCall,
              },
              {
                title: 'Omnichannel Support',
                description: 'Seamless customer experience across voice, email, live chat, and social media platforms.',
                icon: MessageSquare,
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous monitoring and scorecards to ensure every interaction meets your exact brand standards.',
                icon: ShieldCheck,
              },
              {
                title: '24/7 Operations',
                description: 'Round-the-clock availability ensuring your customers get help whenever they need it, in any timezone.',
                icon: Clock,
              },
              {
                title: 'Data & Analytics',
                description: 'Detailed weekly reporting on KPIs, call volumes, and actionable insights to improve performance.',
                icon: BarChart,
              },
            ].map((feature) => (
              <div 
                key={feature.title}
                className="bg-zinc-50 border border-black/10 p-8 rounded-2xl hover:bg-zinc-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6 text-white">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: '850K+', label: 'Calls Handled Annually' },
              { value: '92%', label: 'CSAT Score' },
              { value: '< 30s', label: 'Avg Speed of Answer' },
              { value: '24/7', label: 'Support Coverage' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">{stat.value}</div>
                <div className="text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="py-24 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Advanced Call Center Technology</h2>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              We equip our teams with state-of-the-art tools and integrate directly with your existing systems. From real-time analytics to AI-assisted quality assurance, we ensure every call is optimized for success.
            </p>
            
            <ul className="space-y-4">
              {[
                'Native CRM integration (Salesforce, HubSpot, Zendesk)',
                'Live performance dashboards and call monitoring',
                'AI-driven sentiment analysis and QA scorecards',
                'Automated ticket routing for faster resolutions'
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 mr-4 shrink-0" />
                  <span className="text-zinc-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image 
              src="/images/CallCentreSolutions.png" 
              alt="Call Center Solutions Dashboard" 
              width={800} 
              height={600} 
              className="w-full h-auto object-contain rounded-2xl shadow-xl border border-black/10"
              priority
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Ready to upgrade your support?</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how our dedicated call center team can reduce your operational costs and boost customer satisfaction.
          </p>
          <a
            href="https://wa.me/923358746804"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-md font-semibold hover:bg-zinc-200 transition-colors text-lg"
          >
            <PhoneCall className="w-5 h-5 mr-3" />
            Book a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
