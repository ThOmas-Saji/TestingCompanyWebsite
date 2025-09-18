import Card3DTilt from '@/components/animations/Card3DTilt';

export function Team() {
  const teamMembers = [
    {
      name: 'Ganapathy N',
      role: 'Co-Founder & Chief Delivery Officer',
      bio: 'Expert in Telecom, Insurance, Cybersecurity. Strong background in global delivery operations and client success with proven track record.',
      initials: 'GN',
      bgColor: 'bg-yellow-300',
      image:
        'https://cdn.prod.website-files.com/689adc69c73d8d39c5dcc508/68c9d5fee24ca64553611a49_New-Project-2025-02-27T161602.957.webp',
    },
    {
      name: 'Vivek Suresh',
      role: 'Co-Founder & Chief AI Strategist',
      bio: '20+ years in Data, Analytics, AI across BFS, Insurance, Retail. Former Global Practice Head with expertise in enterprise AI transformation.',
      initials: 'VS',
      bgColor: 'bg-emerald-500',
      image:
        'https://cdn.prod.website-files.com/689adc69c73d8d39c5dcc508/68c9d65b23fdfefb379aee0d_New-Project-2025-02-27T161749.796.webp',
    },
  ];

  return (
    <section
      id="team"
      className="py-32 bg-gray-50 dark:bg-zinc-900 text-center transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-lg font-semibold uppercase tracking-wide mb-5">
          Team
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
          Leadership Team
        </h2>
        <p className="text-xl text-gray-600 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto mb-20">
          Our founding team brings decades of experience in data, AI, and
          digital transformation across industries, driving innovation and
          excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              {/* 3D Tilt Card Container */}
              <Card3DTilt
                className="w-full aspect-square"
                intensity={10}
                perspective={1000}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* Content positioned at bottom center */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h4 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {member.name}
                    </h4>
                    <div className="text-emerald-300 text-xl font-semibold drop-shadow-lg">
                      {member.role}
                    </div>
                  </div>
                </div>
              </Card3DTilt>

              {/* Bio text below the card */}
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-xl">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
