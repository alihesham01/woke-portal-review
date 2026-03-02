import React from 'react'

export default function FreedomRoadmapContent() {
  return (
    <div className="space-y-8">
      {/* ══════════════════════════════════════════════════════════ */}
      {/* INTRO */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-teal-900 mb-4">🏖️ The Freedom Roadmap</h2>
        <div className="text-teal-800">
          <p className="mb-4">
            <strong>From daily grind to passive income:</strong> This roadmap shows how to systematically delegate, 
            automate, and structure your side hustle so it runs itself. The goal isn't to exit - it's to have 
            the option to not show up every day while income continues flowing.
          </p>
          <div className="bg-white rounded-lg p-4 border border-teal-200">
            <p className="font-semibold text-teal-900 mb-2">Core Philosophy:</p>
            <p>Build systems, not dependencies. Create processes, not daily tasks. Own the strategy, not the operations.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* THE DELEGATION PYRAMID */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">📊 The Delegation Pyramid</h2>
        
        <div className="space-y-6">
          {/* Level 1 */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-3">Level 1: Do Everything (Current State)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-red-700 mb-2">You're handling:</p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Daily data analysis</li>
                  <li>• Report generation</li>
                  <li>• Client meetings</li>
                  <li>• Technical issues</li>
                  <li>• Invoicing and admin</li>
                </ul>
              </div>
              <div>
                <p className="text-red-700 mb-2">Time commitment: 40+ hours/week</p>
                <p className="text-red-700 mb-2">Income: Active only</p>
                <p className="text-red-700 mb-2">Scalability: Limited by your time</p>
                <p className="text-red-700 font-semibold mt-2">⚠️ Burnout risk: High</p>
              </div>
            </div>
          </div>

          {/* Level 2 */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">Level 2: Delegate the Repeatable</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-yellow-700 mb-2">Delegate these first:</p>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Standard report generation</li>
                  <li>• Data cleaning and prep</li>
                  <li>• Basic dashboard updates</li>
                  <li>• Client support (Tier 1)</li>
                  <li>• Administrative tasks</li>
                </ul>
              </div>
              <div>
                <p className="text-yellow-700 mb-2">Time commitment: 25 hours/week</p>
                <p className="text-yellow-700 mb-2">Income: 90% active, 10% passive</p>
                <p className="text-yellow-700 mb-2">Team size: 1-2 freelancers</p>
                <p className="text-yellow-700 font-semibold mt-2">📈 Profit margin: 60%</p>
              </div>
            </div>
          </div>

          {/* Level 3 */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">Level 3: Build the Machine</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-blue-700 mb-2">You focus on:</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Strategy and client relationships</li>
                  <li>• Complex problem solving</li>
                  <li>• New service development</li>
                  <li>• Quality control</li>
                  <li>• Business development</li>
                </ul>
              </div>
              <div>
                <p className="text-blue-700 mb-2">Time commitment: 15 hours/week</p>
                <p className="text-blue-700 mb-2">Income: 60% active, 40% passive</p>
                <p className="text-blue-700 mb-2">Team size: 3-5 people</p>
                <p className="text-blue-700 font-semibold mt-2">📈 Profit margin: 70%</p>
              </div>
            </div>
          </div>

          {/* Level 4 */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Level 4: Own the System</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-green-700 mb-2">Your role evolves to:</p>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Vision and direction</li>
                  <li>• Key client relationships</li>
                  <li>• Major decisions only</li>
                  <li>• System optimization</li>
                  <li>• New market expansion</li>
                </ul>
              </div>
              <div>
                <p className="text-green-700 mb-2">Time commitment: 5 hours/week</p>
                <p className="text-green-700 mb-2">Income: 20% active, 80% passive</p>
                <p className="text-green-700 mb-2">Team size: 8+ with managers</p>
                <p className="text-green-700 font-semibold mt-2">📈 Profit margin: 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* DELEGATION STRATEGIES */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Smart Delegation Strategies</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* What to Delegate First */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Delegate This First</h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                <p className="font-medium text-red-900">❌ Anything you do more than twice</p>
                <p className="text-sm text-gray-600">If it's repeatable, it can be systemized</p>
              </div>
              <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                <p className="font-medium text-red-900">❌ Tasks below your hourly rate</p>
                <p className="text-sm text-gray-600">If you charge $100/hr, don't do $20/hr work</p>
              </div>
              <div className="p-3 bg-red-50 rounded border-l-4 border-red-500">
                <p className="font-medium text-red-900">❌ Anything that drains energy</p>
                <p className="text-sm text-gray-600">Save your energy for high-value work</p>
              </div>
            </div>
          </div>

          {/* What to Keep */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Keep For Yourself (For Now)</h3>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="font-medium text-green-900">✅ Client relationships</p>
                <p className="text-sm text-gray-600">The core of your business value</p>
              </div>
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="font-medium text-green-900">✅ Strategic decisions</p>
                <p className="text-sm text-gray-600">Direction setting and vision</p>
              </div>
              <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="font-medium text-green-900">✅ Quality control</p>
                <p className="text-sm text-gray-600">Until systems are proven</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* BUILDING YOUR TEAM */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">👥 Building Your Replacement</h2>
        
        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-3">Phase 1: The Freelancer (Months 1-3)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Who to Hire:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Junior analyst (2-3 years experience)</li>
                  <li>• Strong technical skills</li>
                  <li>• Good communication</li>
                  <li>• Looking for steady work</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">How to Structure:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Start with 10 hours/week</li>
                  <li>• Pay $25-40/hour</li>
                  <li>• Clear SOPs for every task</li>
                  <li>• Daily check-ins initially</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded border border-purple-200">
              <p className="text-sm text-purple-900"><strong>Key Insight:</strong> Document everything they do. Your future SOP library starts here.</p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Phase 2: The Specialist (Months 4-9)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Who to Hire:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mid-level analyst (5+ years)</li>
                  <li>• Industry expertise</li>
                  <li>• Client-facing skills</li>
                  <li>• Problem-solving ability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">How to Structure:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 20-30 hours/week</li>
                  <li>• Pay $50-70/hour or retainer</li>
                  <li>• Own specific clients</li>
                  <li>• Weekly strategy meetings</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded border border-blue-200">
              <p className="text-sm text-blue-900"><strong>Key Insight:</strong> Let them own client relationships. You become the strategic advisor.</p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Phase 3: The Manager (Months 10-18)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Who to Hire:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Operations manager</li>
                  <li>• Team leadership experience</li>
                  <li>• Process optimization</li>
                  <li>• Business acumen</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">How to Structure:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Full-time position</li>
                  <li>• Salary + performance bonus</li>
                  <li>• P&L responsibility</li>
                  <li>• Equity options possible</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded border border-green-200">
              <p className="text-sm text-green-900"><strong>Key Insight:</strong> This person runs the day-to-day. You only get involved for major decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SYSTEMIZATION BLUEPRINT */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">⚙️ Systemization Blueprint</h2>
        
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create These 7 Systems</h3>
          
          <div className="space-y-4">
            {/* System 1 */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">1. Client Onboarding System</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Input:</p>
                  <p className="text-gray-600">New client signs up</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Process:</p>
                  <p className="text-gray-600">Automated welcome sequence, data collection, kickoff call</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Output:</p>
                  <p className="text-gray-600">Client fully setup in systems, first report scheduled</p>
                </div>
              </div>
            </div>

            {/* System 2 */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">2. Report Production System</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Input:</p>
                  <p className="text-gray-600">Scheduled report date</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Process:</p>
                  <p className="text-gray-600">Auto data pull → Template → Review → Delivery</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Output:</p>
                  <p className="text-gray-600">Client receives report on schedule</p>
                </div>
              </div>
            </div>

            {/* System 3 */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">3. Quality Control System</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Input:</p>
                  <p className="text-gray-600">Completed deliverable</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Process:</p>
                  <p className="text-gray-600">Checklist → Peer review → Final sign-off</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Output:</p>
                  <p className="text-gray-600">Quality assured deliverable</p>
                </div>
              </div>
            </div>

            {/* System 4 */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">4. Client Communication System</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Input:</p>
                  <p className="text-gray-600">Client question/issue</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Process:</p>
                  <p className="text-gray-600">Tiered support → Escalation → Resolution</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Output:</p>
                  <p className="text-gray-600">Happy client with documented solution</p>
                </div>
              </div>
            </div>

            {/* System 5 */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">5. Financial Management System</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Input:</p>
                  <p className="text-gray-600">Time & expenses</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Process:</p>
                  <p className="text-gray-600">Automated tracking → Invoice → Payment</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Output:</p>
                  <p className="text-gray-600">Cash flow managed, reports generated</p>
                </div>
              </div>
            </div>

            {/* System 6 */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">6. Business Development System</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Input:</p>
                  <p className="text-gray-600">Lead generation</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Process:</p>
                  <p className="text-gray-600">Nurture → Proposal → Close</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Output:</p>
                  <p className="text-gray-600">New client onboarded</p>
                </div>
              </div>
            </div>

            {/* System 7 */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">7. Continuous Improvement System</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Input:</p>
                  <p className="text-gray-600">Feedback & metrics</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Process:</p>
                  <p className="text-gray-600">Analyze → Plan → Implement → Review</p>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Output:</p>
                  <p className="text-gray-600">Better processes, higher margins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* THE ESCAPE PLAN */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🏃‍♂️ The 18-Month Freedom Plan</h2>
        
        <div className="space-y-6">
          {/* Months 1-6 */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-3">Months 1-6: Foundation & First Hire</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p class="font-medium text-gray-900">Document Everything</p>
                  <p class="text-sm text-gray-600">Create SOPs for all repeatable tasks</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p class="font-medium text-gray-900">Hire First Freelancer</p>
                  <p class="text-sm text-gray-600">Start with 10 hours/week for basic tasks</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p class="font-medium text-gray-900">Standardize Deliverables</p>
                  <p class="text-sm text-gray-600">Templates for reports, dashboards, presentations</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <p class="font-medium text-gray-900">Automate Admin Tasks</p>
                  <p class="text-sm text-gray-600">Invoicing, scheduling, basic reporting</p>
                </div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-white rounded border border-orange-200">
              <p class="text-sm text-orange-900"><strong>Target:</strong> Reduce your hours to 30/week, maintain 100% income</p>
            </div>
          </div>

          {/* Months 7-12 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Months 7-12: Scale & Systems</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                <div>
                  <p class="font-medium text-gray-900">Hire Specialist</p>
                  <p class="text-sm text-gray-600">Mid-level person to handle client work</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">6</span>
                <div>
                  <p class="font-medium text-gray-900">Implement Systems</p>
                  <p class="text-sm text-gray-600">All 7 systems running smoothly</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">7</span>
                <div>
                  <p class="font-medium text-gray-900">Raise Prices</p>
                  <p class="text-sm text-gray-600">You're now selling expertise, not time</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">8</span>
                <div>
                  <p class="font-medium text-gray-900">Take First 1-Week Vacation</p>
                  <p class="text-sm text-gray-600">Test if systems work without you</p>
                </div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-white rounded border border-blue-200">
              <p class="text-sm text-blue-900"><strong>Target:</strong> Reduce to 15 hours/week, increase income by 20%</p>
            </div>
          </div>

          {/* Months 13-18 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Months 13-18: Freedom & Growth</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">9</span>
                <div>
                  <p class="font-medium text-gray-900">Hire Operations Manager</p>
                  <p class="text-sm text-gray-600">Someone to run the entire operation</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">10</span>
                <div>
                  <p class="font-medium text-gray-900">Create Advisory Board</p>
                  <p class="text-sm text-gray-600">Get guidance from those who've done it</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">11</span>
                <div>
                  <p class="font-medium text-gray-900">Productize Services</p>
                  <p class="text-sm text-gray-600">Fixed-price packages, recurring revenue</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">12</span>
                <div>
                  <p class="font-medium text-gray-900">Take Monthly Vacation</p>
                  <p class="text-sm text-gray-600">Business runs itself, you collect passive income</p>
                </div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-white rounded border border-green-200">
              <p class="text-sm text-green-900"><strong>Target:</strong> 5 hours/week, 80% passive income, business growing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* WARNING SIGNS */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">⚠️ Warning Signs & Red Flags</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">🚩 Delegation Mistakes to Avoid</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <p className="text-sm text-gray-700"><strong>Perfectionism:</strong> "No one can do it as well as me"</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <p className="text-sm text-gray-700"><strong>Under-documenting:</strong> Keeping knowledge in your head</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <p className="text-sm text-gray-700"><strong>Micromanaging:</strong> Controlling every detail</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <p className="text-sm text-gray-700"><strong>Hiring clones:</strong> People who think exactly like you</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <p className="text-sm text-gray-700"><strong>No accountability:</strong> Not measuring performance</p>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">✅ Signs You're on Track</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <p className="text-sm text-gray-700">Business runs for 1 week without daily input</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <p className="text-sm text-gray-700">Team solves problems without involving you</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <p className="text-sm text-gray-700">Profit margins increase as you delegate</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <p className="text-sm text-gray-700">You take vacations and come back to more money</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <p className="text-sm text-gray-700">Clients don't notice when you're not involved</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* FREEDOM CALCULATOR */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🧮 Freedom Calculator</h2>
        
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-white">
          <p className="mb-6">Calculate your path to freedom based on current metrics:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Current State</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Hours/week:</span>
                  <span className="font-mono">40</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly revenue:</span>
                  <span className="font-mono">$10,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Effective hourly:</span>
                  <span className="font-mono">$62.50</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-3">After 18 Months</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Hours/week:</span>
                  <span className="font-mono text-green-400">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly revenue:</span>
                  <span className="font-mono text-green-400">$15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Effective hourly:</span>
                  <span className="font-mono text-green-400">$750</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Freedom Metrics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Time freedom:</span>
                  <span className="font-mono text-green-400">87.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Location freedom:</span>
                  <span className="font-mono text-green-400">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>Income growth:</span>
                  <span className="font-mono text-green-400">+50%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <p className="text-center text-lg">
              <strong>Your Freedom Number:</strong> Work 5 hours/week at $750/hour = $3,750 for 5 hours of strategic work
            </p>
            <p className="text-center text-sm text-gray-300 mt-2">
              The rest is passive income from systems you built
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* FINAL WORDS */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">The Ultimate Goal</h2>
          <p className="text-lg mb-6">
            Freedom isn't about not working. It's about choosing when, how, and with whom you work.
            It's about building systems that generate value while you sleep, play, or build your next venture.
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-base">
              Start today. Document one process. Hire one freelancer. Build one system.
              Small steps compound into complete freedom. The question isn't whether you can do it - 
              it's whether you'll start.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
