export function Team() {
  const teamMembers = [
    {
      name: 'Vivek Suresh',
      role: 'Co-Founder & Chief AI Strategist',
      bio: '20+ years in Data, Analytics, AI across BFS, Insurance, Retail. Former Global Practice Head with expertise in enterprise AI transformation.',
      initials: 'VS',
      bgColor: 'bg-emerald-500',
    },
    {
      name: 'Ganapathy N',
      role: 'Co-Founder & Chief Delivery Officer',
      bio: 'Expert in Telecom, Insurance, Cybersecurity. Strong background in global delivery operations and client success with proven track record.',
      initials: 'GN',
      bgColor: 'bg-yellow-300',
    },
  ];

  return (
    <section
      id="team"
      className="py-32 bg-gray-50 dark:bg-zinc-900 text-center transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
          Team
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
          Leadership Team
        </h2>
        <p className="text-lg text-gray-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-20">
          Our founding team brings decades of experience in data, AI, and
          digital transformation across industries, driving innovation and
          excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-32 h-32 ${member.bgColor} rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white`}
              >
                {member.initials}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {member.name}
              </h4>
              <div className="text-gray-600 dark:text-zinc-400 text-sm mb-5">
                {member.role}
              </div>
              <p className="text-zinc-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
