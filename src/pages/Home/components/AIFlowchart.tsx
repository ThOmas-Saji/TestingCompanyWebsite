import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ProgressCardProps {
  color: 'green' | 'orange' | 'blue' | 'purple';
  label: string;
}

// SVG Icons for Impact Cards
const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const DollarIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProgressCard = React.memo(({ color, label }: ProgressCardProps) => {
  const colorClasses = {
    green: 'border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-900/20',
    orange: 'border-amber-500/40 bg-amber-50/50 dark:bg-amber-900/20',
    blue: 'border-blue-500/40 bg-blue-50/50 dark:bg-blue-900/20',
    purple: 'border-purple-500/40 bg-purple-50/50 dark:bg-purple-900/20',
  } as const;

  const textColorClasses = {
    green: 'text-emerald-700 dark:text-emerald-300',
    orange: 'text-amber-700 dark:text-amber-300',
    blue: 'text-blue-700 dark:text-blue-300',
    purple: 'text-purple-700 dark:text-purple-300',
  } as const;

  return (
    <div
      className={`mb-4 p-4 rounded-xl border ${colorClasses[color]} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <div
        className={`text-lg font-semibold text-center ${textColorClasses[color]}`}
      >
        {label}
      </div>
    </div>
  );
});
ProgressCard.displayName = 'ProgressCard';

const IconItem = React.memo(
  ({
    icon,
    label,
    isDark,
  }: {
    icon: string;
    label: string;
    isDark: boolean;
  }) => (
    <div
      className={`flex flex-col items-center gap-2 p-4 rounded-2xl backdrop-blur-md border border-gray-400 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl ${
        isDark
          ? 'bg-slate-800/80 border-slate-600/50 hover:bg-slate-700/80 hover:border-slate-500/60'
          : 'bg-white/80 border-gray-200/50 hover:bg-gray-50/80 hover:border-gray-300/60'
      }`}
    >
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl text-white transition-all duration-300 hover:scale-110 hover:brightness-125">
        {icon}
      </div>
      <div
        className={`text-lg text-center font-semibold ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {label}
      </div>
    </div>
  )
);
IconItem.displayName = 'IconItem';

const TechTag = React.memo(
  ({ children, isDark }: { children: string; isDark: boolean }) => (
    <div
      className={`px-4 py-2 rounded-full text-lg text-center font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
        isDark
          ? 'bg-slate-700/80 border border-slate-500/60 text-white hover:bg-slate-600/80 hover:border-slate-400/70'
          : 'bg-gray-100/80 border border-gray-300/60 text-gray-900 hover:bg-gray-200/80 hover:border-gray-400/70'
      }`}
    >
      {children}
    </div>
  )
);
TechTag.displayName = 'TechTag';

const ImpactCard = React.memo(
  ({
    icon,
    title,
    color,
    isDark,
  }: {
    icon: React.ReactNode;
    title: string;
    color: 'green' | 'orange' | 'purple' | 'blue';
    isDark: boolean;
  }) => {
    const colorClasses = {
      green:
        'border-emerald-500/40 hover:shadow-emerald-500/20 from-emerald-500 to-emerald-400',
      orange:
        'border-amber-500/40 hover:shadow-amber-500/20 from-amber-500 to-amber-400',
      purple:
        'border-purple-500/40 hover:shadow-purple-500/20 from-purple-500 to-pink-500',
      blue: 'border-blue-500/40 hover:shadow-blue-500/20 from-blue-500 to-blue-400',
    } as const;

    const gradientClasses = {
      green: 'from-emerald-500 to-emerald-400',
      orange: 'from-amber-500 to-amber-400',
      purple: 'from-purple-500 to-pink-500',
      blue: 'from-blue-500 to-blue-400',
    } as const;

    return (
      <div
        className={`
                backdrop-blur-md border rounded-2xl p-6 text-center transition-all duration-300 
                hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl
                ${colorClasses[color]}
                ${isDark ? 'bg-slate-800/80 hover:bg-slate-700/80 hover:border-slate-500/60' : 'bg-white/80 hover:bg-gray-50/80 hover:border-gray-300/60 border-gray-400'}
            `}
      >
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradientClasses[color]} flex items-center justify-center text-white mx-auto mb-3 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:brightness-125`}
        >
          {icon}
        </div>
        <div
          className={`text-xl font-semibold leading-tight ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {title}
        </div>
      </div>
    );
  }
);
ImpactCard.displayName = 'ImpactCard';

export default function AIFlowchart() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={`min-h-screen p-15 overflow-x-hidden transition-colors duration-300 relative ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-purple-900/50 to-indigo-900'
          : 'bg-gradient-to-br from-gray-200 via-blue-50/50 to-indigo-50'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-20 items-start py-16 px-10 sm:px-0 relative">
        {/* Strategic Partnership Column */}
        <div className="flex flex-col gap-6">
          <div
            className={`text-xl font-bold tracking-widest uppercase text-center mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Strategic Partnership
          </div>

          <div className="grid grid-cols-1 gap-2 mb-6">
            <IconItem icon="🤝" label="Collaboration" isDark={isDark} />
            <IconItem icon="🧠" label="AI Experts" isDark={isDark} />
            <IconItem icon="⭐" label="Excellence" isDark={isDark} />
          </div>

          <div
            className={`backdrop-blur-xl border border-gray-400 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${
              isDark
                ? 'bg-slate-800/80 border-slate-600/50 hover:bg-slate-700/80 hover:border-slate-500/60 hover:shadow-purple-500/20'
                : 'bg-white/80 border-gray-200/50 hover:bg-gray-50/80 hover:border-gray-300/60 hover:shadow-purple-500/20'
            }`}
          >
            <h3
              className={`text-xl font-bold mb-6 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Strategic Planning
            </h3>
            <ProgressCard
              color="green"
              label="Business goals and ROI Planning"
            />
            <ProgressCard color="orange" label="Roadmap definition" />
            <ProgressCard color="blue" label="Technology selection" />
            <ProgressCard color="purple" label="Usability thinking" />
          </div>
        </div>

        {/* Arrow 1 - Positioned absolutely */}
        <div className="flex justify-center sm:absolute sm:top-1/2 sm:left-1/3 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
          <ArrowIcon
            className={`w-8 h-8  rotate-90 sm:rotate-0 transition-colors duration-300 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          />
        </div>

        {/* Solutions Development Column */}
        <div className="flex flex-col gap-6">
          <div
            className={`text-xl font-bold tracking-widest uppercase text-center mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Bespoke Development
          </div>

          <div
            className={`border backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl relative ${
              isDark
                ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-gray-700 hover:shadow-blue-500/30'
                : 'bg-gradient-to-br from-blue-100/50 to-purple-100/50  hover:shadow-blue-500/20 border-gray-400'
            }`}
          >
            <div
              className={`absolute inset-0 rounded-3xl ${
                isDark ? 'bg-slate-800/60' : 'bg-white/60'
              }`}
            ></div>
            <div className="relative z-10">
              <div
                className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center text-4xl ${
                  isDark ? 'bg-white' : 'bg-gray-100'
                }`}
              >
                💻
              </div>
              <h3
                className={`text-xl font-bold mb-6 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Solutions Development
              </h3>

              <div className="flex justify-center gap-3 flex-wrap">
                <TechTag isDark={isDark}>Data engineering</TechTag>
                <TechTag isDark={isDark}>Analytics and AI </TechTag>
                <TechTag isDark={isDark}>Gen AI and Agentic AI</TechTag>
                <TechTag isDark={isDark}>Product engineering</TechTag>
              </div>
            </div>
          </div>

          <div
            className={`border backdrop-blur-xl rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl relative ${
              isDark
                ? 'bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-gray-700 hover:shadow-purple-500/30'
                : 'bg-gradient-to-br from-purple-100/50 to-violet-100/50 border-gray-400 hover:shadow-purple-500/20'
            }`}
          >
            <div
              className={`absolute inset-0 rounded-3xl ${
                isDark ? 'bg-slate-800/60' : 'bg-white/60'
              }`}
            ></div>
            <div className="relative z-10">
              <div className="flex flex-col gap-3">
                <div
                  className={`p-3.5 rounded-2xl text-lg font-medium text-center transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'bg-slate-700/80 border border-slate-500/60 text-white hover:bg-slate-600/80 hover:border-slate-400/70'
                      : 'bg-gray-100/80 border border-gray-400 text-gray-900 hover:bg-gray-200/80 hover:border-gray-400/70'
                  }`}
                >
                  Human-centric design
                </div>
                <div
                  className={`p-3.5 rounded-2xl text-lg font-medium text-center transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'bg-slate-700/80 border border-slate-500/60 text-white hover:bg-slate-600/80 hover:border-slate-400/70'
                      : 'bg-gray-100/80 border border-gray-400 text-gray-900 hover:bg-gray-200/80 hover:border-gray-400/70'
                  }`}
                >
                  Engineering experts
                </div>
                <div
                  className={`p-3.5 rounded-2xl text-lg font-medium text-center transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'bg-slate-700/80 border border-slate-500/60 text-white hover:bg-slate-600/80 hover:border-slate-400/70'
                      : 'bg-gray-100/80 border border-gray-400 text-gray-900 hover:bg-gray-200/80 hover:border-gray-400/70'
                  }`}
                >
                  YlogX Solution Accelerates
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow 2 - Positioned absolutely */}
        <div className="flex justify-center sm:absolute sm:top-1/2 sm:left-2/3 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 z-10">
          <ArrowIcon
            className={`w-8 h-8 rotate-90 sm:rotate-0 transition-colors duration-300 ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          />
        </div>

        {/* Measurable Business Impact Column */}
        <div className="flex flex-col gap-6">
          <div
            className={`text-xl font-bold tracking-widest uppercase text-center mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Measurable Business Impact
          </div>

          <div className="grid gap-4">
            <ImpactCard
              icon={<ClockIcon className="w-6 h-6" />}
              title="Faster GTM"
              color="green"
              isDark={isDark}
            />
            <ImpactCard
              icon={<TrendingUpIcon className="w-6 h-6" />}
              title="Revenue uptick"
              color="orange"
              isDark={isDark}
            />
            <ImpactCard
              icon={<DollarIcon className="w-6 h-6" />}
              title="Cost reduction"
              color="purple"
              isDark={isDark}
            />
            <ImpactCard
              icon={<ShieldIcon className="w-6 h-6" />}
              title="Improved end-user experience"
              color="blue"
              isDark={isDark}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
