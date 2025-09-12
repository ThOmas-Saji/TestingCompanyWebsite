export function WorkProcess() {
  const workItems = [
    {
      title: 'AI Strategy',
      description:
        'Strategic advisory services to define your data and AI roadmap, enabling data-driven decision making and helping scale your AI practice.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          <rect x="20" y="40" width="80" height="40" rx="20" fill="#10b981" />
          <circle cx="60" cy="25" r="15" fill="#FDB4A6" />
          <rect x="10" y="50" width="20" height="30" rx="10" fill="#10b981" />
          <rect x="90" y="50" width="20" height="30" rx="10" fill="#10b981" />
        </svg>
      ),
    },
    {
      title: 'Development',
      description:
        'Machine learning, forecasting, recommendation engines, reinforcement learning, computer vision, NLP, and complete model governance with MLOps.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          <rect x="30" y="30" width="60" height="60" rx="15" fill="#fef08a" />
          <circle cx="60" cy="60" r="20" fill="#10b981" />
          <rect x="50" y="10" width="20" height="20" rx="5" fill="#67e8f9" />
        </svg>
      ),
    },
    {
      title: 'Implementation',
      description:
        'Data modeling, warehousing, data lakes, ETL pipelines, cloud data solutions, governance, visualization, and conversational BI platforms.',
      icon: (
        <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
          <rect x="20" y="20" width="80" height="80" rx="20" fill="#059669" />
          <rect x="40" y="40" width="40" height="40" rx="10" fill="#ffffff" />
          <circle cx="60" cy="60" r="10" fill="#059669" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
          Processing
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
          Co-Creating the Future With Yo
        </h2>
        <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-20">
          Comprehensive AI and data solutions designed to transform your
          business operations and deliver measurable, sustainable results across
          your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {workItems.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto mb-8">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-5 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
