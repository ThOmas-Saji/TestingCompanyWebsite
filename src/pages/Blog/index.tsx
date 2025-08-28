import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface BlogPost {
  title: string;
  description: string;
  content?: string;
  link: string;
  thumbnail: string;
  pubDate: string;
  author: string;
  guid?: string;
  categories?: string[];
}

interface ApiResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: BlogPost[];
}

export function Blog() {
  const [articles, setArticles] = useState([
    {
      category: 'AI Strategy',
      date: '02 May 2025',
      title: 'The Future of Generative AI in Enterprise',
      gradient: 'from-emerald-500 to-blue-500',
      link: '#',
    },
    {
      category: 'Implementation',
      date: '02 May 2025',
      title: 'Building Scalable AI Solutions',
      gradient: 'from-yellow-300 to-cyan-400',
      link: '#',
    },
  ]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fylogx`,
          params: {},
        });

        const data: ApiResponse = response.data;

        if (
          data &&
          data.status === 'ok' &&
          data.items &&
          Array.isArray(data.items)
        ) {
          // Take only the first 2 blog posts and transform them
          const transformedArticles = data.items
            .slice(0, 2)
            .map((post, index) => {
              // Get first category or use default
              const category =
                post.categories && post.categories.length > 0
                  ? post.categories[0]
                  : 'Technology';

              // Format date
              const date = post.pubDate
                ? new Date(post.pubDate).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })
                : 'Recent';

              // Use predefined gradients
              const gradients = [
                'from-emerald-500 to-blue-500',
                'from-yellow-300 to-cyan-400',
              ];

              return {
                category: category,
                date: date,
                title: post.title || 'Untitled',
                gradient: gradients[index] || gradients[0],
                link: post.link || '#',
              };
            });

          setArticles(transformedArticles);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        // Keep default articles if fetch fails
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      id="blog"
      className="py-32 bg-white-900 dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
              Recent Blog
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 text-gray-900 dark:text-white">
              Updated Journal
            </h2>
            <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed mb-10">
              Stay updated with the latest trends, insights, and innovations in
              AI, data science, and digital transformation from our experts.
            </p>
            <a
              href="/blogs"
              className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
            >
              All Articles <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-gray-100/80 dark:bg-white/5 rounded-3xl overflow-hidden transition-all hover:-translate-y-2"
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
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-zinc-400 mb-4">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-5 leading-tight">
                    {article.title}
                  </h3>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
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
