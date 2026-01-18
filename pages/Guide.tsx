import React from 'react';
import { Download, Layout, Settings, Percent, Link2, Clock, Sparkles } from 'lucide-react';

const Guide: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">GanttGo User Guide</h1>
          <p className="text-xl text-gray-500">Get up and running in minutes. Here's everything you need to create stunning Gantt charts.</p>
        </div>

        {/* Section 1 */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-blue/10 p-3 rounded-xl text-monday-blue">
              <Download className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. Getting Started</h2>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              Add GanttGo to any monday.com board in seconds. No complex setup required.
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-4">
              <li>Open any monday.com board you want to visualize.</li>
              <li>Click the <strong>+</strong> icon in the views bar (next to "Main Table").</li>
              <li>Select <strong>Apps</strong> or "Explore more apps".</li>
              <li>Search for "GanttGo" and click <strong>Add to Board</strong>.</li>
            </ol>
          </div>

          {/* Plan comparison box */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-monday-blue" />
              <p className="font-bold text-gray-900">Choose Your Plan</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">Free</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">50</p>
                <p className="text-sm text-gray-500">items</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900">Trial</p>
                <p className="text-2xl font-bold text-monday-blue mt-1">1000</p>
                <p className="text-sm text-gray-500">items for 7 days</p>
              </div>
              <div className="bg-gradient-to-br from-monday-blue to-blue-600 p-4 rounded-lg text-white">
                <p className="font-semibold">Pro</p>
                <p className="text-2xl font-bold mt-1">1000</p>
                <p className="text-sm text-blue-100">items + all features</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200/50 mt-8">
            <img
              src="/images/guide-getting-started.jpg"
              alt="Adding GanttGo to a monday.com board via the Apps menu"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-green/10 p-3 rounded-xl text-monday-green">
              <Layout className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">2. Viewing Your Gantt Chart</h2>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              See your entire project timeline at a glance. GanttGo automatically transforms your board into a beautiful Gantt chart.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Zoom In or Out:</strong> Switch between Day, Week, Month, Quarter, and Year views to see the level of detail you need.</li>
              <li><strong>Organized by Groups:</strong> Your tasks stay organized exactly like your board. Collapse groups to focus on what matters.</li>
              <li><strong>Instant Status Colors:</strong> Bars are automatically colored based on your Status column—green for Done, orange for Working on it, red for Stuck.</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200/50">
            <img
              src="/images/guide-gantt-view.jpg"
              alt="GanttGo Gantt chart view showing tasks organized by groups with timeline bars"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 3 - Dependencies */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-purple/10 p-3 rounded-xl text-monday-purple">
              <Link2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Creating Dependencies</h2>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              Show which tasks need to finish before others can start. Dependencies help your team understand the order of work and avoid bottlenecks.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Create a Dependency</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Hover over any task bar—a connection handle appears on the right.</li>
              <li>Drag from the handle to another task.</li>
              <li>Release to link them. Done!</li>
            </ol>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Delete a Dependency</h4>
            <p>Simply click on any dependency line and confirm deletion.</p>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">See Your Critical Path</h4>
            <p>
              GanttGo automatically highlights the <strong>critical path</strong>—the sequence of tasks that directly affects your project's end date. Critical dependencies appear in <strong className="text-red-600">red</strong>, so you instantly know where delays will hurt most.
            </p>

            <div className="mt-6 bg-purple-50/50 p-4 rounded-lg border border-purple-100">
              <p className="text-sm text-gray-700">
                <strong>Pro Tip:</strong> Include or exclude dependencies in your PDF exports with a single checkbox.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 - Change Status */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-red/10 p-3 rounded-xl text-monday-red">
              <Percent className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Updating Task Progress</h2>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              Keep stakeholders informed without leaving your Gantt view. Update progress directly on the chart.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Visual Progress:</strong> Each task bar shows completion percentage at a glance.</li>
              <li><strong>Click to Update:</strong> Click any task to open details and adjust progress.</li>
              <li><strong>Real-Time Sync:</strong> Changes instantly sync back to your monday.com board.</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200/50">
            <img
              src="/images/guide-progress.jpg"
              alt="GanttGo task progress popup showing status, progress slider, and sync confirmation"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-green/10 p-3 rounded-xl text-monday-green">
              <Settings className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">5. Exporting to PDF</h2>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              Create professional, shareable Gantt charts in one click. Perfect for client presentations, stakeholder updates, or printing for your office wall.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Multiple Formats:</strong> A4, A3, Letter, or Legal—whatever fits your needs.</li>
              <li><strong>Orientation:</strong> Portrait or Landscape (we recommend landscape for long timelines).</li>
              <li><strong>Your Brand:</strong> Upload your company logo to appear on every export. <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-monday-blue/10 text-monday-blue">Pro</span></li>
              <li><strong>Show Dependencies:</strong> Toggle dependency arrows on or off in your export.</li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200/50">
            <img
              src="/images/guide-export.jpg"
              alt="GanttGo export menu showing PDF, PowerPoint, PNG, and Print options"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-yellow/10 p-3 rounded-xl text-monday-yellow">
              <Clock className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">6. Scheduled Reports</h2>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-monday-blue text-white">Pro</span>
            </div>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              Stop manually exporting and emailing Gantt charts. Set it once, and GanttGo automatically sends updated PDFs to your team or stakeholders on your schedule.
            </p>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50/50 p-5 rounded-xl border border-yellow-200 mt-6">
              <p className="font-semibold text-gray-900 mb-3">Teams use this to:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Send weekly project updates to clients every Monday morning</li>
                <li>Keep executives informed with monthly summary reports</li>
                <li>Share daily progress with distributed teams across time zones</li>
              </ul>
            </div>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">How to Set Up</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Open the <strong>Schedule</strong> tab in settings.</li>
              <li>Choose your frequency: <strong>Daily</strong>, <strong>Weekly</strong>, or <strong>Monthly</strong>.</li>
              <li>Pick the day and time that works for your team.</li>
              <li>Add recipient emails (comma separated).</li>
              <li>Hit save—you're done!</li>
            </ol>

            <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Customize Your Export</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Choose paper size (A4, A3, Letter, Legal)</li>
              <li>Set orientation and zoom level</li>
              <li>Include your company logo</li>
              <li>Show or hide dependencies</li>
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-gray-500">Free</p>
                <p className="text-gray-400 mt-1">—</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <p className="text-sm font-medium text-monday-blue">Trial</p>
                <p className="text-gray-700 mt-1">7 days</p>
              </div>
              <div className="bg-gradient-to-br from-monday-blue to-blue-600 p-3 rounded-lg text-white">
                <p className="text-sm font-medium">Pro</p>
                <p className="mt-1">Unlimited</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200/50">
            <img
              src="/images/guide-schedule.jpg"
              alt="GanttGo schedule PDF export dialog with frequency, day, time, and email recipient options"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Help CTA */}
        <div className="bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-md border border-white/50 rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Need help getting started?</h3>
          <p className="text-gray-600 mb-8">Our team typically responds within a few hours.</p>
          <a href="mailto:support@ganttgo.com" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-monday-blue hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Guide;
