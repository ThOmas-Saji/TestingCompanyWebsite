import { ArrowRight } from 'lucide-react';

export function Blog() {
  const articles = [
    {
      category: 'AI Strategy',
      date: '02 May 2025',
      title: 'The Future of Generative AI in Enterprise',
      gradient: 'from-emerald-500 to-blue-500',
    },
    {
      category: 'Implementation',
      date: '02 May 2025',
      title: 'Building Scalable AI Solutions',
      gradient: 'from-yellow-300 to-cyan-400',
    },
  ];

  return (
    <section id="blog" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
              Recent Blog
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-white">
              Updated Journal
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10">
              Stay updated with the latest trends, insights, and innovations in
              AI, data science, and digital transformation from our experts.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              All Articles <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-3xl overflow-hidden transition-all hover:-translate-y-2"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${article.gradient} relative overflow-hidden`}
                >
                  {index === 0 && (
                    <div className="absolute bottom-5 left-5 w-16 h-20 bg-white rounded-xl flex items-center justify-center">
                      <div className="w-6 h-8 bg-emerald-500 rounded"></div>
                    </div>
                  )}
                  {index === 1 && (
                    <>
                      <div className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full"></div>
                      <div className="absolute bottom-5 left-5 w-20 h-16 bg-white rounded-xl"></div>
                    </>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex gap-4 text-sm text-zinc-400 mb-4">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-5 leading-tight">
                    {article.title}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-emerald-400 font-semibold"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
