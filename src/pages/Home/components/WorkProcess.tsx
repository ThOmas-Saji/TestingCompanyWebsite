export function WorkProcess() {
  const workItems = [
    {
      title: 'AI Strategy',
      description:
        'Strategic advisory services to define your data and AI roadmap, enabling data-driven decision making and helping scale your AI practice.',
      image: '/assets/images/WIP/ai-strategy.webp',
    },
    {
      title: 'Development',
      description:
        'Machine learning, forecasting, recommendation engines, reinforcement learning, computer vision, NLP, and complete model governance with MLOps.',
      image: '/assets/images/WIP/Development.webp',
    },
    {
      title: 'Implementation',
      description:
        'Data modeling, warehousing, data lakes, ETL pipelines, cloud data solutions, governance, visualization, and conversational BI platforms.',
      image: '/assets/images/WIP/deployment.webp',
    },
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-lg font-semibold uppercase tracking-wide mb-5">
          Processing
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
          Co-Creating the Future With Yo
        </h2>
        <p className="text-xl text-gray-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-2">
          Comprehensive AI and data solutions designed to transform your
          business operations and deliver measurable, sustainable results across
          your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {workItems.map((item, index) => (
            <div key={index} className="text-center">
              {item?.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-48 h-48 mx-auto mb-2`}
                />
              )}
              <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
