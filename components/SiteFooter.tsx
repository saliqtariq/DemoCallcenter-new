const FOOTER_LINKS = {
  Services: ['Inbound Support', 'Outbound Sales', 'Appointment Setting'],
  Company: ['Case Studies', 'Insights', 'About Us', 'Contact'],
  Contact: ['hello@demotech.com', 'Mon-Sat, PKT', 'Book a Call'],
};

const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service'];

export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between mb-20 gap-16">
          <div className="max-w-sm">
            <div className="text-2xl font-bold tracking-tight mb-6">Demo Tech</div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Demo Tech helps businesses run inbound support, outbound sales, and appointment setting with dependable processes and trained call centre teams.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20">
            {Object.entries(FOOTER_LINKS).map(([heading, links], idx) => (
              <div
                key={heading}
                className={idx === 2 ? 'col-span-2 md:col-span-1' : undefined}
              >
                <h4 className="font-semibold mb-6">{heading}</h4>
                <ul className="space-y-4 text-sm text-zinc-400">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-zinc-800 text-xs text-zinc-500 gap-6">
          <div>© 2026 Demo Tech</div>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {LEGAL_LINKS.map((link) => (
              <a key={link} href="#" className="hover:text-zinc-300 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
