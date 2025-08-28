import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-100 dark:bg-zinc-900 py-20 border-t border-gray-200/50 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-5 uppercase tracking-wider">
              YlogX
            </h3>
            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed mb-8">
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

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Information
            </h4>
            <ul className="space-y-3">
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

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-3 text-gray-600 dark:text-zinc-400">
              <p>Kanayannur, Kerala, India</p>
              <p>+91 (555) 123-4567</p>
              <p>vivek@ylogx.io</p>
              <p>ganapathy@ylogx.io</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Newsletter
            </h4>
            <p className="text-gray-600 dark:text-zinc-400 mb-5">
              Enter your email
            </p>
            <div className="flex mb-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-200/50 dark:bg-white/5 border-gray-300/50 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-zinc-500 rounded-r-none"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 rounded-l-none px-5">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <label className="flex items-start gap-3 text-xs text-gray-600 dark:text-zinc-400">
              <input type="checkbox" className="mt-0.5" />
              I'm okay with getting emails and having that activity tracked to
              improve my experience.
            </label>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-white/10 text-center text-gray-600 dark:text-zinc-400">
          <p>
            © 2025 YlogX. All rights reserved. Empowering enterprises through
            AI-driven digital transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}
