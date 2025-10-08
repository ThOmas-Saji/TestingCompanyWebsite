import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Modal } from '../components/ui/modal';
import { ContactForm } from '../components/ui/contact-form';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactSubmit = () => {
    // console.log('Contact form submitted:', data);
    // The form now handles the email sending via EmailJS
    setIsContactModalOpen(false);
    // This callback is optional and can be used for additional actions
  };

  return (
    <footer
      id="contact"
      className="bg-gray-100 dark:bg-zinc-900 py-20 border-t border-gray-200/50 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center">
          <div className="place-self-center h-full">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">
              YlogX
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed mb-8 text-lg">
              Empowering enterprises through AI-driven digital transformation.
              We deliver cutting-edge solutions that drive innovation and
              sustainable growth.
            </p>
            <div className="flex gap-4">
              <Link
                to="#"
                className="w-10 h-10 bg-gray-200/50 dark:bg-white/5 rounded-full flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-gray-200/50 dark:bg-white/5 rounded-full flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-gray-200/50 dark:bg-white/5 rounded-full flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                to="#"
                className="w-10 h-10 bg-gray-200/50 dark:bg-white/5 rounded-full flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="place-self-center h-full">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Information
            </h4>
            <ul className="space-y-3 text-lg">
              <li>
                <Link
                  to="#about"
                  className="text-gray-600 dark:text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  to="#team"
                  className="text-gray-600 dark:text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="#case-studies"
                  className="text-gray-600 dark:text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link
                  to="#services"
                  className="text-gray-600 dark:text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#blog"
                  className="text-gray-600 dark:text-zinc-400 hover:text-emerald-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="place-self-center h-full">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-3 text-gray-600 dark:text-zinc-400 mb-4 text-lg">
              <p>vivek@ylogx.io</p>
              <p>ganapathy@ylogx.io</p>
            </div>
            <Button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg"
            >
              Contact
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-white/10 text-center text-gray-600 dark:text-zinc-400 text-lg">
          <p>
            © 2025 YlogX. All rights reserved. Empowering enterprises through
            AI-driven digital transformation.
          </p>
        </div>
      </div>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get in Touch"
      >
        <ContactForm onSubmit={handleContactSubmit} />
      </Modal>
    </footer>
  );
}
