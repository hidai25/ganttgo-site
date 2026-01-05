import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="prose prose-lg prose-blue mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy for GanttGo</h1>
          <p className="text-gray-600 mb-8 bg-blue-50/50 p-4 rounded-lg inline-block text-sm font-medium"><strong>Last Updated:</strong> December 2025</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-6">
            GanttGo ("we", "our", or "the App") is a Monday.com application that enables users to visualize board items as Gantt charts and export them to PDF format. This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Data from Monday.com</h3>
          <p className="text-gray-600 mb-4">When you use GanttGo, we access the following data from your Monday.com account:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Board Data:</strong> Item names, timeline/date column values, status values, group information, and dependencies</li>
            <li><strong>Account Context:</strong> Your Monday.com account ID and board ID (for app functionality)</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Data You Provide</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Company Logo:</strong> If you upload a logo for PDF branding (Pro feature)</li>
            <li><strong>Email Addresses:</strong> Recipients for scheduled PDF exports (Pro feature)</li>
            <li><strong>Schedule Preferences:</strong> Frequency and timing for automated exports</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the collected information solely to:</p>
          <ol className="list-decimal pl-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Render Gantt Charts:</strong> Display your board items in a visual timeline format</li>
            <li><strong>Generate PDFs:</strong> Create exportable PDF documents of your Gantt charts</li>
            <li><strong>Send Scheduled Exports:</strong> Deliver automated PDF reports to specified email addresses (Pro feature)</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Storage</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Board Data:</strong> Processed in real-time and not stored on our servers. Data is fetched fresh from Monday.com each time you use the app.</li>
            <li><strong>Schedules:</strong> Stored securely using Monday.com's Secure Storage infrastructure</li>
            <li><strong>Logos:</strong> Stored locally in your browser session only</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Sharing</h2>
          <p className="text-gray-600 mb-4">We do <strong>NOT</strong>:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
            <li>Sell your data to third parties</li>
            <li>Share your data with advertisers</li>
            <li>Use your data for purposes other than app functionality</li>
          </ul>
          <p className="text-gray-600 mb-4">We <strong>MAY</strong> share data with:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Sentry</strong> (sentry.io): For error monitoring and crash reporting. Only technical error data is sent (no personal data or board content).</li>
            <li><strong>Resend</strong> (api.resend.com): To deliver scheduled PDF exports (email addresses and PDF attachments only).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-4">We implement industry-standard security measures:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>All API communications use HTTPS encryption</li>
            <li>Credentials are stored in Monday.com's Secure Storage</li>
            <li>No sensitive data is logged or cached unnecessarily</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Access:</strong> View what data the app accesses from your boards</li>
            <li><strong>Delete:</strong> Remove scheduled exports and uploaded logos at any time</li>
            <li><strong>Revoke:</strong> Uninstall the app to revoke all data access</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Data Retention</h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li><strong>Board Data:</strong> Not retained - fetched on-demand only</li>
            <li><strong>Schedules:</strong> Retained until you delete them or uninstall the app</li>
            <li><strong>Logs:</strong> Server logs retained for 30 days for debugging purposes</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Children's Privacy</h2>
          <p className="text-gray-600 mb-6">
            GanttGo is not intended for use by children under 13 years of age.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy periodically. We will notify users of significant changes through the app or Monday.com marketplace listing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For privacy-related questions or concerns, contact us at:<br/>
            <strong>Email:</strong> support@ganttgo.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Monday.com Compliance</h2>
          <p className="text-gray-600 mb-6">
            This app complies with Monday.com's App Marketplace Guidelines and API Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;