import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What is AI-driven digital transformation?',
      answer:
        'AI-driven digital transformation involves integrating artificial intelligence technologies into your business processes to optimize operations, enhance decision-making, and create new value propositions. We help enterprises leverage AI, machine learning, and data analytics to drive sustainable growth and competitive advantage.',
    },
    {
      question: 'How long does an AI implementation project take?',
      answer:
        'Project timelines vary based on complexity and scope. Typical implementations range from 3-6 months for focused solutions to 12-18 months for enterprise-wide transformations. We start with rapid POCs and MVPs to demonstrate value quickly, then scale incrementally.',
    },
    {
      question: 'What industries do you specialize in?',
      answer:
        'We have extensive experience across Banking & Financial Services, Insurance, Retail, Manufacturing, Healthcare, and Telecommunications. Our team brings 20+ years of domain expertise and understands the unique challenges and opportunities in each sector.',
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer:
        'Yes, we offer comprehensive support including model monitoring, performance optimization, system maintenance, and continuous improvement. Our MLOps and LLMOps frameworks ensure your AI solutions remain effective and up-to-date with evolving business needs.',
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer:
        'We follow industry best practices for data governance, security, and compliance. Our solutions are designed with privacy-by-design principles, and we ensure adherence to regulations like GDPR, CCPA, and industry-specific compliance requirements.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="inline-block bg-purple-500/10 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
              FAQ
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-10 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed mb-8">
              Find answers to common questions about our AI and data
              transformation services, implementation process, and how we can
              help your business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-emerald-400 font-semibold hover:gap-4 transition-all"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-8 flex items-center gap-8 text-left transition-all hover:pl-5"
                >
                  <span className="text-emerald-400 font-semibold min-w-[30px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xl lg:text-2xl font-semibold text-white flex-1">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <Minus className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Plus className="w-4 h-4 text-zinc-400" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-48 pb-8' : 'max-h-0'
                  }`}
                >
                  <div className="pl-16">
                    <p className="text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
