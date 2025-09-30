import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ProgressCardProps {
  color: 'green' | 'orange' | 'blue' | 'purple';
  label: string;
}

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
      className={`mb-3 p-2 rounded-xl border ${colorClasses[color]} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
    >
      <div
        className={`text-md font-semibold text-center ${textColorClasses[color]}`}
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
      className={`flex flex-col items-center gap-2 p-2 rounded-2xl backdrop-blur-md border border-gray-400 transition-all duration-300 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl ${
        isDark
          ? 'bg-slate-800/80 border-slate-600/50 hover:bg-slate-700/80 hover:border-slate-500/60'
          : 'bg-white/80 border-gray-200/50 hover:bg-gray-50/80 hover:border-gray-300/60'
      }`}
    >
      <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-200' : ''}`}>
        {icon && <img src={icon} alt={label} className={`w-6 h-6`} />}
      </div>

      <div
        className={`text-md text-center font-semibold ${
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
      className={`p-2 rounded-full text-sm text-center font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
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
    svgIcon,
    title,
    isDark,
  }: {
    icon?: React.ReactNode;
    svgIcon?: string;
    title: string;
    color: 'green' | 'orange' | 'purple' | 'blue';
    isDark: boolean;
  }) => {
    return (
      <div
        className={`
                backdrop-blur-md border rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 hover:shadow-2xl border-gray-500`}
      >
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-white mx-auto mb-2 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:brightness-125  ${isDark ? 'bg-gray-200' : ''}`}
        >
          {svgIcon && <img src={svgIcon} alt={title} className="w-6 h-6" />}
          {icon && icon}
        </div>
        <div
          className={`text-lg font-semibold leading-tight ${
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

  const MainTitle = React.memo(
    ({ title, isDark }: { title: string; isDark: boolean }) => (
      <div
        className={`text-lg font-bold tracking-widest uppercase text-center mb-4 ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        {title}
      </div>
    )
  );
  MainTitle.displayName = 'MainTitle';

  return (
    <section
      className={`min-h-screen py-8 px-4 overflow-x-hidden transition-colors duration-300 relative ${
        isDark
          ? 'bg-gradient-to-br from-slate-900 via-purple-900/50 to-indigo-900'
          : 'bg-gradient-to-br from-gray-200 via-blue-50/50 to-indigo-50'
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start py-8 px-4 relative">
        {/* Strategic Partnership Column */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
          <MainTitle title="Strategic Partnership" isDark={isDark} />

          <div className="grid grid-cols-1 gap-2 mb-4">
            <IconItem
              icon="/assets/svg/AiChart/collaboration.svg"
              label="Collaboration"
              isDark={isDark}
            />
            <IconItem
              icon="/assets/svg/AiChart/ai-expert.svg"
              label="AI Experts"
              isDark={isDark}
            />
            <IconItem
              icon="/assets/svg/AiChart/excellence.svg"
              label="Excellence"
              isDark={isDark}
            />
          </div>

          <div
            className={`backdrop-blur-xl border border-gray-400 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl ${
              isDark
                ? 'bg-slate-800/80 border-slate-600/50 hover:bg-slate-700/80 hover:border-slate-500/60 hover:shadow-purple-500/20'
                : 'bg-white/80 border-gray-200/50 hover:bg-gray-50/80 hover:border-gray-300/60 hover:shadow-purple-500/20'
            }`}
          >
            <h3
              className={`text-lg font-bold mb-4 text-center ${
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
        <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
          <MainTitle title="Bespoke Development" isDark={isDark} />

          <div
            className={`border backdrop-blur-xl rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl relative ${
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
              <img
                src="/assets/images/AiChart/solution-dev.webp"
                alt="Solutions Development"
                className={`w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto -mt-8 sm:-mt-10 lg:-mt-14`}
              />

              <div className="-mt-4 sm:-mt-5 lg:-mt-6">
                <h3
                  className={`text-lg font-bold mb-4 text-center ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Solutions Development
                </h3>

                <div className="flex justify-center gap-2 flex-wrap">
                  <TechTag isDark={isDark}>Data engineering</TechTag>
                  <TechTag isDark={isDark}>Analytics and AI </TechTag>
                  <TechTag isDark={isDark}>Gen AI and Agentic AI</TechTag>
                  <TechTag isDark={isDark}>Product engineering</TechTag>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`border backdrop-blur-xl rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl relative ${
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
              <div className="flex flex-col gap-2">
                <div
                  className={`p-2 rounded-2xl text-md font-medium text-center transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'bg-slate-700/80 border border-slate-500/60 text-white hover:bg-slate-600/80 hover:border-slate-400/70'
                      : 'bg-gray-100/80 border border-gray-400 text-gray-900 hover:bg-gray-200/80 hover:border-gray-400/70'
                  }`}
                >
                  Human-centric design
                </div>
                <div
                  className={`p-2 rounded-2xl text-md font-medium text-center transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'bg-slate-700/80 border border-slate-500/60 text-white hover:bg-slate-600/80 hover:border-slate-400/70'
                      : 'bg-gray-100/80 border border-gray-400 text-gray-900 hover:bg-gray-200/80 hover:border-gray-400/70'
                  }`}
                >
                  Engineering experts
                </div>
                <div
                  className={`p-2 rounded-2xl text-md font-medium text-center transition-all duration-300 hover:translate-x-1 ${
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
        <div className="flex flex-col gap-4 max-w-sm mx-auto lg:mx-0">
          <MainTitle title="Measurable Business Impact" isDark={isDark} />

          <div className="grid gap-8">
            <ImpactCard
              svgIcon="/assets/svg/AiChart/fastergtm.svg"
              title="Faster GTM"
              color="green"
              isDark={isDark}
            />
            <ImpactCard
              svgIcon="/assets/svg/AiChart/revenue-uppick.svg"
              title="Revenue uptick"
              color="orange"
              isDark={isDark}
            />
            <ImpactCard
              svgIcon="/assets/svg/AiChart/cost-reduction.svg"
              title="Cost reduction"
              color="purple"
              isDark={isDark}
            />
            <ImpactCard
              svgIcon="/assets/svg/AiChart/improved-ui.svg"
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
