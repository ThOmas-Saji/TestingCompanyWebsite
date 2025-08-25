export function Features() {
  return (
    <section
      id="solutions"
      className="py-32 bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative bg-gray-50 dark:bg-zinc-100 rounded-3xl p-16 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute w-24 h-24 bg-emerald-500 rounded-full top-[20%] right-[10%]"></div>
              <div className="absolute w-16 h-16 bg-yellow-300 rounded-full bottom-[30%] left-[20%]"></div>
              <div className="absolute w-20 h-10 bg-emerald-600 rounded-2xl top-[60%] right-[30%]"></div>
            </div>
            <div className="relative z-10">
              <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
                <rect
                  x="50"
                  y="50"
                  width="200"
                  height="100"
                  rx="20"
                  fill="#10b981"
                />
                <circle cx="150" cy="80" r="15" fill="#FDB4A6" />
                <rect
                  x="20"
                  y="80"
                  width="30"
                  height="40"
                  rx="15"
                  fill="#10b981"
                />
                <rect
                  x="250"
                  y="80"
                  width="30"
                  height="40"
                  rx="15"
                  fill="#10b981"
                />
              </svg>
            </div>
          </div>

          <div>
            <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
              Solutions
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-10 text-gray-900 dark:text-white">
              Pre-built enterprise solutions our way.
            </h2>
            <div className="mt-10">
              <h4 className="text-emerald-400 text-sm font-semibold mb-4 uppercase tracking-wide">
                — Innovation
              </h4>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed mb-5">
                We are constantly rethinking the future by creating the next
                generation of AI products, platforms and intelligent solutions
                from a hybrid perspective.
              </p>
              <p className="text-gray-600 dark:text-zinc-400 leading-relaxed">
                Pre-built, enterprise-grade solutions that deliver immediate
                value and accelerate your digital transformation journey with
                proven ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
