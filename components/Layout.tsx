import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Guide', path: '/guide' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden selection:bg-monday-blue selection:text-white">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-50/50" />
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-monday-blue/5 blur-[120px] animate-blob" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-monday-purple/5 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-monday-green/5 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Glassmorphic Header */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center">
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-monday-blue/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Logo className="h-10 w-12 relative z-10 drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight relative">
                GanttGo
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-gray-600 hover:text-monday-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-monday-blue transition-all group-hover:w-full" />
                </Link>
              ))}
              <a
                href="https://monday.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-monday-blue/90 hover:bg-monday-blue text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-monday-blue/20 hover:shadow-monday-blue/40 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Get it on monday.com
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 focus:outline-none backdrop-blur-sm"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-100 shadow-lg absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-monday-blue hover:bg-monday-blue/5 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://monday.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-monday-blue text-white px-5 py-3 rounded-xl text-base font-medium shadow-lg shadow-monday-blue/20"
              >
                Get it on monday.com
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>

      {/* Glassmorphic Footer */}
      <footer className="relative z-10 bg-white/40 backdrop-blur-lg border-t border-white/40">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                <Logo className="h-8 w-10 opacity-90 group-hover:opacity-100 transition-all" />
                <span className="text-lg font-bold text-gray-900">GanttGo</span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed">
                Professional Gantt chart exports for your monday.com boards.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/#features" className="text-base text-gray-500 hover:text-monday-blue transition-colors">Features</Link></li>
                <li><Link to="/#pricing" className="text-base text-gray-500 hover:text-monday-blue transition-colors">Pricing</Link></li>
                <li><Link to="/guide" className="text-base text-gray-500 hover:text-monday-blue transition-colors">User Guide</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-base text-gray-500 hover:text-monday-blue transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-base text-gray-500 hover:text-monday-blue transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:support@ganttgo.com" className="text-base text-gray-500 hover:text-monday-blue transition-colors">
                    support@ganttgo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} GanttGo. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Not affiliated with monday.com Ltd.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;