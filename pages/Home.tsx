import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FileDown, Calendar, Layout as LayoutIcon, Palette, Zap, Clock, Shield, Check, Mail } from 'lucide-react';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl mb-6">
            <span className="block mb-2">Transform Boards</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-monday-blue to-monday-purple">
              into Gantt PDFs
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Instantly visualize your Monday.com projects, manage dependencies, and export professional Gantt charts in one click.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://monday.com/marketplace"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-monday-blue hover:bg-blue-600 transition-all shadow-lg hover:shadow-monday-blue/30 hover:-translate-y-1"
            >
              Add to Monday.com
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-lg font-medium rounded-xl text-gray-700 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-gray-300 transition-all shadow-sm hover:shadow-md"
            >
              View Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-monday-blue tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for perfect project visualization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'One-Click PDF Export',
                description: 'Export your Gantt charts in A4, A3, Letter, or Legal formats instantly.',
                icon: FileDown,
                color: 'text-monday-blue',
                bg: 'bg-blue-50'
              },
              {
                title: 'Flexible Views',
                description: 'Switch between Day, Week, Month, Quarter, and Year views to see the big picture.',
                icon: Calendar,
                color: 'text-monday-green',
                bg: 'bg-green-50'
              },
              {
                title: 'Visual Dependencies',
                description: 'Connect tasks visually to understand critical paths and bottlenecks.',
                icon: LayoutIcon,
                color: 'text-monday-purple',
                bg: 'bg-purple-50'
              },
              {
                title: 'Status Coloring',
                description: 'Tasks automatically colored by status: Done (Green), Working (Orange), Stuck (Red).',
                icon: Palette,
                color: 'text-monday-yellow',
                bg: 'bg-yellow-50'
              },
              {
                title: 'Branded Exports',
                description: 'Add your company logo to every PDF export for professional reporting.',
                icon: Shield,
                color: 'text-monday-red',
                bg: 'bg-red-50'
              },
              {
                title: 'Scheduled Reports',
                description: 'Automatically email updated Gantt charts to your team on a schedule.',
                icon: Clock,
                color: 'text-gray-600',
                bg: 'bg-gray-100'
              },
            ].map((feature) => (
              <div key={feature.title} className="group bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`${feature.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-monday-blue tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white/60 backdrop-blur-md border border-white/50 rounded-3xl p-8 flex flex-col relative shadow-sm hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-gray-900">Free</h3>
              <p className="text-gray-500 mt-2">For small projects and individual use.</p>
              <div className="mt-6 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900">$0</span>
                <span className="ml-2 text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                <li className="flex items-center text-gray-700">
                  <div className="bg-monday-green/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-green" /></div>
                  Up to 50 items
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="bg-monday-green/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-green" /></div>
                  A4 paper size
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="bg-monday-green/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-green" /></div>
                  Standard Support
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-5 mr-3 text-center">•</span>
                  Watermarked PDFs
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="https://monday.com/marketplace"
                  className="block w-full bg-white border border-gray-200 text-gray-900 text-center py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                >
                  Install Free
                </a>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white/80 backdrop-blur-xl border-2 border-monday-blue rounded-3xl p-8 flex flex-col relative shadow-2xl shadow-monday-blue/10 transform md:-translate-y-6">
              <div className="absolute top-0 right-0 -mt-4 mr-4">
                <span className="bg-monday-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
              <p className="text-gray-500 mt-2">For professional teams and branding.</p>
              <div className="mt-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900">$12</span>
                  <span className="ml-2 text-gray-500">/month</span>
                </div>
                <p className="mt-2 text-sm text-monday-blue font-medium">or $9/month billed annually</p>
              </div>
              <ul className="mt-8 space-y-4 flex-1">
                <li className="flex items-center text-gray-900 font-medium">
                  <div className="bg-monday-blue/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-blue" /></div>
                  Up to 500 items
                </li>
                <li className="flex items-center text-gray-900 font-medium">
                  <div className="bg-monday-blue/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-blue" /></div>
                  All paper sizes (A3, Letter, Legal)
                </li>
                <li className="flex items-center text-gray-900 font-medium">
                  <div className="bg-monday-blue/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-blue" /></div>
                  Company Logo Upload
                </li>
                <li className="flex items-center text-gray-900 font-medium">
                  <div className="bg-monday-blue/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-blue" /></div>
                  No Watermark
                </li>
                <li className="flex items-center text-gray-900 font-medium">
                  <div className="bg-monday-blue/20 p-1 rounded-full mr-3"><Check className="h-3 w-3 text-monday-blue" /></div>
                  Scheduled Email Exports
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="https://monday.com/marketplace"
                  className="block w-full bg-monday-blue text-white text-center py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-monday-blue/30"
                >
                  Start Pro Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-monday-blue to-blue-600 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
            
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl relative z-10">
              Ready to upgrade your project visualization?
            </h2>
            <p className="mt-4 text-xl text-blue-100 relative z-10 max-w-2xl mx-auto">
              Join thousands of teams using GanttGo to report better and faster.
            </p>
            <div className="mt-10 relative z-10">
              <a
                href="https://monday.com/marketplace"
                className="inline-block bg-white text-monday-blue px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
              >
                Get GanttGo Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;