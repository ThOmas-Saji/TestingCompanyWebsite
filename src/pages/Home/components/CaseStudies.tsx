export function CaseStudies() {
  const results = [
    {
      number: '12%',
      description: 'Reduction in employee attrition through HR analytics',
    },
    {
      number: '25%',
      description: 'More onboardings with credit scoring automation',
    },
    {
      number: '50',
      description: 'Basis point CSAT improvement in call centers',
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-32 bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-lg font-semibold uppercase tracking-wide mb-5">
              Case Studies
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900 dark:text-white">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-zinc-400 leading-relaxed mb-12 max-w-2xl">
              Real-world success stories demonstrating the transformative impact
              of our AI and data solutions across industries and business
              functions.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 rounded-3xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/30"
                >
                  <div className="text-5xl font-bold text-emerald-400 mb-3">
                    {result.number}
                  </div>
                  <p className="text-gray-600 dark:text-zinc-400 text-xl">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-500 to-blue-500 rounded-3xl p-16 text-white text-center relative overflow-hidden">
              <div className="absolute top-5 right-5 w-20 h-10 bg-yellow-300 rounded-xl"></div>
              <div className="absolute top-16 left-5 w-16 h-16 bg-emerald-600 rounded-full"></div>
              <div className="relative z-10 mt-10">
                <h3 className="text-4xl font-bold mb-5">AI Success Metrics</h3>
                <div className="grid grid-cols-2 gap-5 mt-8">
                  <div className="bg-white/10 p-5 rounded-xl">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-xl opacity-80">Accuracy</div>
                  </div>
                  <div className="bg-white/10 p-5 rounded-xl">
                    <div className="text-3xl font-bold">80%</div>
                    <div className="text-xl opacity-80">Faster</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
