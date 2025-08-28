import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
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

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [feedInfo, setFeedInfo] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get API key from environment variable and decode it
        const apiKey = import.meta.env.VITE_MEDIUM_API_KEY;
        if (!apiKey) {
          throw new Error('Medium API key not found.');
        }

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
          // Transform the data to match our BlogPost interface
          const transformedBlogs = data.items.map((post: BlogPost) => {
            // Clean description - remove HTML tags and get clean text
            const cleanDescription =
              post.description || post.content || 'No description available';
            const hasContent =
              cleanDescription &&
              cleanDescription.trim() !== '' &&
              cleanDescription !== 'No description available';

            return {
              title: post.title || 'Untitled',
              description: hasContent
                ? cleanDescription
                : 'No description available',
              link: post.link || '#',
              thumbnail:
                post.thumbnail ||
                data.feed.image ||
                'https://via.placeholder.com/400x250?text=Blog+Image',
              pubDate: post.pubDate || new Date().toISOString(),
              author: post.author || 'Unknown Author',
              guid: post.guid,
              categories: post.categories || [],
            };
          });

          setBlogs(transformedBlogs);
          setFeedInfo({
            title: data.feed.title,
            description: data.feed.description,
            image: data.feed.image,
          });
        } else {
          throw new Error('Invalid data format received from API');
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleSort = () => {
    setSortOrder(prev => (prev === 'newest' ? 'oldest' : 'newest'));
  };

  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.pubDate).getTime();
    const dateB = new Date(b.pubDate).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  const visibleBlogs = sortedBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < sortedBlogs.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500 mx-auto"></div>
            <h2 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
              Loading Blogs...
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Fetching the latest content from Medium
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900">
              <svg
                className="h-6 w-6 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
              Error Loading Blogs
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              {error}
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {feedInfo && (
            <div className="flex items-center justify-center mb-6">
              {feedInfo.image && (
                <img
                  src={feedInfo.image}
                  alt="Blog Feed"
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
              )}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {feedInfo.title || 'Our Blog'}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                  {feedInfo.description ||
                    'Discover insights and stories from our team'}
                </p>
              </div>
            </div>
          )}
          {!feedInfo && (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover insights, tutorials, and stories from our team of
                experts. Stay updated with the latest trends in technology and
                innovation.
              </p>
            </>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {visibleBlogs.length} of {sortedBlogs.length} blogs
          </div>
          <Button
            onClick={handleSort}
            variant="outline"
            className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            {sortOrder === 'newest' ? (
              <>
                <ArrowDownIcon className="h-4 w-4" />
                Newest First
              </>
            ) : (
              <>
                <ArrowUpIcon className="h-4 w-4" />
                Oldest First
              </>
            )}
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleBlogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{blog.author}</span>
                  <span>•</span>
                  <span>{new Date(blog.pubDate).toLocaleDateString()}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description with HTML rendering */}
                <div className="text-gray-600 dark:text-gray-400 mb-4">
                  {blog.description &&
                  blog.description !== 'No description available' ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: blog.description }}
                      className="prose prose-sm dark:prose-invert max-w-none line-clamp-3 prose-p:mb-2 prose-p:last:mb-0 prose-img:rounded-lg prose-img:max-w-full prose-img:h-auto"
                    />
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400 italic">
                      No description available
                    </p>
                  )}
                </div>

                {/* Categories */}
                {blog.categories && blog.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors"
                >
                  Read More
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button
              onClick={handleLoadMore}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-semibold transition-all hover:-translate-y-0.5"
            >
              Load More Blogs
            </Button>
          </div>
        )}

        {/* No blogs message */}
        {blogs.length === 0 && !loading && !error && (
          <div className="text-center py-20">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900 dark:text-white">
              No blogs found
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Check back later for new content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
