import { ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    { number: '01', name: 'Generative AI' },
    { number: '02', name: 'Data Science & ML' },
    { number: '03', name: 'Data Engineering' },
    { number: '04', name: 'AI Consulting' },
  ];

  return (
    <section id="services" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
              Services
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-10 text-white">
              Our full AI & Data services for you
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              We are constantly rethinking the future by creating the next
              generation of AI products, platforms and solutions from a hybrid
              perspective.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 text-emerald-400 font-semibold hover:gap-4 transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div>
            <ul className="space-y-0">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-8 border-b border-white/10 cursor-pointer transition-all hover:pl-5 group"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-emerald-400 font-semibold">
                      {service.number}
                    </span>
                    <span className="text-2xl lg:text-4xl font-bold text-white">
                      {service.name}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-2 transition-all" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
