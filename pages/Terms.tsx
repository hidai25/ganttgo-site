import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-2xl p-8 md:p-12 shadow-sm">
        <div className="prose prose-lg prose-blue mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service for GanttGo</h1>
          <p className="text-gray-600 mb-8 bg-blue-50/50 p-4 rounded-lg inline-block text-sm font-medium"><strong>Last Updated:</strong> December 2025</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By installing or using GanttGo ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 mb-4">GanttGo is a Monday.com board view application that:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Displays board items as interactive Gantt charts</li>
            <li>Exports Gantt charts to PDF format</li>
            <li>Provides scheduled PDF export functionality (Pro plan)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. User Accounts and Access</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.1 Monday.com Account</h3>
          <p className="text-gray-600 mb-4">You must have a valid Monday.com account to use this App. Your use of Monday.com is governed by Monday.com's own Terms of Service.</p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3.2 Authorization</h3>
          <p className="text-gray-600 mb-6">By installing the App, you authorize us to access your Monday.com board data as described in our Privacy Policy.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Subscription Plans</h2>
          
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4.1 Free Plan</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Up to 50 items per board</li>
            <li>A4 paper size exports</li>
            <li>Basic Gantt visualization</li>
            <li>Watermark on exported PDFs</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4.2 Pro Plan</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Up to 500 items per board</li>
            <li>All paper sizes (A3, A4, Letter, Legal)</li>
            <li>Company logo on exports</li>
            <li>No watermark</li>
            <li>Scheduled automatic exports</li>
            <li>Email delivery to team members</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4.3 Billing</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Pro subscriptions are billed monthly</li>
            <li>Payments are processed through Monday.com's billing system</li>
            <li>Prices are subject to change with 30 days notice</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Acceptable Use</h2>
          <p className="text-gray-600 mb-4">You agree NOT to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
            <li>Use the App for any unlawful purpose</li>
            <li>Attempt to reverse engineer or decompile the App</li>
            <li>Circumvent any usage limits or restrictions</li>
            <li>Share Pro features with non-subscribed users</li>
            <li>Use automated systems to abuse the service</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Intellectual Property</h2>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">6.1 Our Rights</h3>
          <p className="text-gray-600 mb-4">The App, including its code, design, and documentation, is owned by GanttGo and protected by intellectual property laws.</p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">6.2 Your Rights</h3>
          <p className="text-gray-600 mb-4">You retain all rights to your Monday.com data. We claim no ownership over your board content or exported PDFs.</p>
          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">6.3 Uploaded Content</h3>
          <p className="text-gray-600 mb-6">By uploading a company logo, you confirm you have the right to use that image and grant us permission to include it in your PDF exports.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-gray-600 mb-6 uppercase">
            THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY OR RELIABILITY OF DATA.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-600 mb-6 uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES, OR SERVICE INTERRUPTIONS.
            <br/><br/>
            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE PAST 12 MONTHS.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Service Availability</h2>
          <p className="text-gray-600 mb-6">
            We strive for high availability but do not guarantee uninterrupted service. We may perform maintenance with reasonable notice, modify or discontinue features, or suspend accounts that violate these Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Termination</h2>
          <p className="text-gray-600 mb-6">
            You may stop using the App and uninstall it at any time. We may terminate or suspend your access if you violate these Terms, engage in fraudulent activity, or abuse the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We may modify these Terms at any time. Continued use after changes constitutes acceptance.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Contact Information</h2>
          <p className="text-gray-600 mb-6">
            For questions about these Terms:<br/>
            <strong>Email:</strong> support@ganttgo.com
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">13. Entire Agreement</h2>
          <p className="text-gray-600 mb-6">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and GanttGo regarding the App.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;