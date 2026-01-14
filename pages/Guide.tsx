import React from 'react';
import { Download, Layout, Settings, Mail } from 'lucide-react';

const Guide: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">GanttGo User Guide</h1>
          <p className="text-xl text-gray-500">Learn how to install, configure, and get the most out of GanttGo.</p>
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
              GanttGo is a Board View app. This means it lives directly on your monday.com board tabs.
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-4">
              <li>Open any monday.com board you want to visualize.</li>
              <li>Click the <strong>+</strong> icon in the views bar (next to "Main Table").</li>
              <li>Select <strong>Apps</strong> or "Explore more apps".</li>
              <li>Search for "GanttGo" and click <strong>Add to Board</strong>.</li>
            </ol>
          </div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200/50">
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
              Once added, GanttGo automatically detects your timeline or date columns.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Zoom Levels:</strong> Use the toggle in the top right to switch between Day, Week, Month, and Quarter views.</li>
              <li><strong>Groups:</strong> Tasks are organized by your board groups. Collapse groups to save space.</li>
              <li><strong>Status Colors:</strong> The bars automatically inherit colors from your Status column (Green for Done, Orange for Working on it, etc.).</li>
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

        {/* Section 3 */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-purple/10 p-3 rounded-xl text-monday-purple">
              <Settings className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Exporting to PDF</h2>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              Click the blue <strong>Export</strong> button in the top toolbar to open the settings.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Format:</strong> Choose between A4, A3, Letter, or Legal.</li>
              <li><strong>Orientation:</strong> Landscape is recommended for long timelines.</li>
              <li><strong>Logo (Pro):</strong> Upload your company logo to appear in the top-left corner of the PDF.</li>
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

        {/* Section 4 */}
        <div className="mb-12 bg-white/60 backdrop-blur-md border border-white/50 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-monday-yellow/10 p-3 rounded-xl text-monday-yellow">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Scheduled Reports (Pro)</h2>
          </div>
          <div className="prose prose-blue text-gray-600 mb-8 max-w-none">
            <p>
              Automate your reporting workflow with scheduled emails.
            </p>
            <ol className="list-decimal pl-5 space-y-2 mt-4">
              <li>Open the <strong>Schedule</strong> tab in the settings menu.</li>
              <li>Toggle "Enable Scheduled Exports".</li>
              <li>Select frequency (Daily, Weekly, Monthly).</li>
              <li>Add recipient email addresses (comma separated).</li>
            </ol>
            <p className="mt-4 text-sm text-gray-500 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
              Note: Scheduled exports are processed at 9:00 AM in your account's timezone.
            </p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-8">Our support team is happy to help you set up.</p>
          <a href="mailto:support@ganttgo.com" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-monday-blue hover:bg-blue-600 transition-all shadow-md hover:shadow-lg">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Guide;