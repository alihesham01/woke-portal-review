import React from 'react'

export default function TipsTricksContent() {
  return (
    <div className="space-y-8">
      {/* ══════════════════════════════════════════════════════════ */}
      {/* INTRO */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-orange-900 mb-4">🎮 Cheat Codes for Data Analysts</h2>
        <div className="text-orange-800">
          <p className="mb-4">
            <strong>Level up fast:</strong> These are the shortcuts, hacks, and undocumented strategies that can accelerate 
            your career by 2-5 years. Use them wisely - with great power comes great responsibility.
          </p>
          <div className="bg-white rounded-lg p-4 border border-orange-200">
            <p className="font-semibold text-orange-900 mb-2">⚠️ Ethical Warning:</p>
            <p>These are force multipliers, not replacements for real skill. Build your foundation first, then use these to amplify your impact.</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* CAREER ACCELERATION CHEATS */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚀 Career Acceleration Cheats</h2>
        
        <div className="space-y-4">
          {/* Cheat 1 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">Cheat Code #1: The "First 90 Days" Blitz</h3>
            <p className="text-purple-700 mb-3">Compress 1 year of impact into 3 months:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">Day 1-7:</span>
                <p className="text-sm text-gray-700">Map all decision makers and their pain points. Create a stakeholder map.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">Day 8-30:</span>
                <p className="text-sm text-gray-700">Deliver 3 quick wins that solve visible problems. Document everything.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">Day 31-90:</span>
                <p className="text-sm text-gray-700">Launch your "signature project" that will become your legacy.</p>
              </div>
            </div>
            <div className="mt-3 p-2 bg-purple-100 rounded text-purple-900 text-sm font-medium">
              💡 Result: You'll be seen as a high-performer and given more opportunities
            </div>
          </div>

          {/* Cheat 2 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Cheat Code #2: The "Invisible Hand" Technique</h3>
            <p className="text-blue-700 mb-3">Make others look good while you pull the strings:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Find smart people with good ideas but poor presentation</li>
              <li>• Help them refine and present their ideas</li>
              <li>• Let them get the credit publicly</li>
              <li>• They become your loyal allies and owe you favors</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-100 rounded text-blue-900 text-sm font-medium">
              💡 Result: Build a network of advocates who amplify your influence
            </div>
          </div>

          {/* Cheat 3 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Cheat Code #3: The "Pattern Recognition" Hack</h3>
            <p className="text-green-700 mb-3">See what others miss by connecting disparate data:</p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-medium text-gray-900 mb-1">Obvious Connections:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Sales data ↔ Marketing campaigns</li>
                  <li>• Website traffic ↔ Conversions</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">Hidden Connections:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Weather ↔ Product returns</li>
                  <li>• Support tickets ↔ Churn risk</li>
                  <li>• Internal metrics ↔ External events</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 p-2 bg-green-100 rounded text-green-900 text-sm font-medium">
              💡 Result: You'll predict outcomes others can't explain
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* TECHNICAL SHORTCUTS */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">⚡ Technical Shortcuts</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Power BI */}
          <div className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Power BI Pro Moves</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">The "One-Click" Dashboard</p>
                <p className="text-sm text-gray-600 mt-1">Create a master measure file. Copy-paste into every new project.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">Dynamic Formatting</p>
                <p className="text-sm text-gray-600 mt-1">Use conditional formatting with field values for auto-updating visuals.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">Bookmark Navigation</p>
                <p className="text-sm text-gray-600 mt-1">Create story-telling flows that guide executives through insights.</p>
              </div>
            </div>
          </div>

          {/* SQL */}
          <div className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">SQL Magic Tricks</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">Window Functions for Everything</p>
                <p className="text-sm text-gray-600 mt-1">Replace complex joins with LAG/LEAD for performance analysis.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">CTE Chain Method</p>
                <p className="text-sm text-gray-600 mt-1">Build complex queries step by step for readability and debugging.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">UNION ALL for Speed</p>
                <p className="text-sm text-gray-600 mt-1">Faster than UNION when you know there are no duplicates.</p>
              </div>
            </div>
          </div>

          {/* Python */}
          <div className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Python Life Hacks</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">pandas-profiling</p>
                <p className="text-sm text-gray-600 mt-1">One-line EDA reports that impress stakeholders.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">Jupyter Shortcuts</p>
                <p className="text-sm text-gray-600 mt-1">Master ? and ?? for documentation. Use %timeit for optimization.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">List Comprehensions</p>
                <p className="text-sm text-gray-600 mt-1">Replace loops with one-liners for cleaner, faster code.</p>
              </div>
            </div>
          </div>

          {/* Excel */}
          <div className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Excel Ninja Moves</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">Power Query Everything</p>
                <p className="text-sm text-gray-600 mt-1">Transform messy data in clicks, not formulas.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">Dynamic Arrays</p>
                <p className="text-sm text-gray-600 mt-1">FILTER, SORT, UNIQUE replace complex INDEX/MATCH.</p>
              </div>
              <div className="p-3 bg-gray-50 rounded">
                <p className="font-medium text-gray-900">Data Model & DAX</p>
                <p className="text-sm text-gray-600 mt-1">Handle millions of rows like Power BI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* COMMUNICATION HACKS */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🗣️ Communication Hacks</h2>
        
        <div className="space-y-4">
          {/* The Pyramid Principle */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">The "Executive Summary" Formula</h3>
            <p className="text-yellow-800 mb-3">Structure every communication for maximum impact:</p>
            <div className="bg-white rounded p-4 font-mono text-sm">
              <p className="text-gray-700">1. Bottom Line Up Front (BLUF)</p>
              <p className="text-gray-700">2. 3 Supporting Points</p>
              <p className="text-gray-700">3. Evidence/Data for each</p>
              <p className="text-gray-700">4. Recommended Action</p>
            </div>
            <div className="mt-3 text-yellow-900 text-sm">
              <strong>Example:</strong> "We should increase marketing budget by 20% (BLUF). It will generate $500K ROI, beat competitors, and capture market share. The data shows..."
            </div>
          </div>

          {/* The Analogy Trick */}
          <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">The "Complex to Simple" Analogy Trick</h3>
            <p className="text-indigo-800 mb-3">Make complex concepts instantly understandable:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-indigo-600">→</span>
                <div>
                  <p className="font-medium text-gray-900">Network Effect:</p>
                  <p className="text-sm text-gray-700">"It's like a telephone - one phone is useless, but millions make it indispensable."</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-indigo-600">→</span>
                <div>
                  <p className="font-medium text-gray-900">Data Pipeline:</p>
                  <p className="text-sm text-gray-700">"Think of it as an assembly line - raw data in, insights out."</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-indigo-600">→</span>
                <div>
                  <p className="font-medium text-gray-900">Machine Learning:</p>
                  <p className="text-sm text-gray-700">"Like teaching a child - show examples, it learns patterns."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      /* PRODUCTIVITY HACKS */
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">⏱️ Productivity Multipliers</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {/* The 2-Minute Rule */}
          <div className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">The 2-Minute Rule</h3>
            <p className="text-sm text-gray-600 mb-3">If it takes less than 2 minutes, do it now:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Quick data checks</li>
              <li>• Email responses</li>
              <li>• Code documentation</li>
              <li>• Meeting notes</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">Saves 5+ hours weekly in context switching</p>
          </div>

          {/* Time Blocking */}
          <div className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Work Blocks</h3>
            <p className="text-sm text-gray-600 mb-3">Schedule uninterrupted focus time:</p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>9-11 AM:</span>
                <span className="font-medium">Complex Analysis</span>
              </div>
              <div className="flex justify-between">
                <span>2-4 PM:</span>
                <span className="font-medium">Dashboard Building</span>
              </div>
              <div className="flex justify-between">
                <span>4-5 PM:</span>
                <span className="font-medium">Email & Admin</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">3x productivity on deep tasks</p>
          </div>

          {/* Template Library */}
          <div className="bg-white border rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Template Everything</h3>
            <p className="text-sm text-gray-600 mb-3">Never start from scratch:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• SQL query templates</li>
              <li>• PowerPoint slide layouts</li>
              <li>• Email response templates</li>
              <li>• Project checklists</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">Cuts 70% of initial project time</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      /* ADVANCED CHEATS */
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Advanced Unlocks</h2>
        
        <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-4">⚠️ Use These Wisely - High Impact, High Risk</h3>
          
          <div class="space-y-4">
            {/* The Pre-mortem */}
            <div class="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">The "Pre-mortem" Technique</h4>
              <p className="text-sm text-gray-600 mb-2">Before starting any project, gather stakeholders and ask: "Imagine this project failed completely. What went wrong?"</p>
              <p className="text-xs text-red-600 font-medium">Why it works: You identify risks before they happen and appear prophetic when you prevent them.</p>
            </div>

            {/* The 80/20 Data */}
            <div class="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">The "80/20 Data" Principle</h4>
              <p className="text-sm text-gray-600 mb-2">Find the 20% of data/metrics that drive 80% of value. Ignore everything else initially.</p>
              <p className="text-xs text-red-600 font-medium">Why it works: You deliver insights 5x faster while others drown in data.</p>
            </div>

            {/* The Strategic "No" */}
            <div class="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">The Strategic "No"</h4>
              <p className="text-sm text-gray-600 mb-2">Say no to 50% of requests, but always offer an alternative: "I can't do X, but I can do Y which will give you 80% of the value."</p>
              <p className="text-xs text-red-600 font-medium">Why it works: You appear selective and valuable, not a order-taker.</p>
            </div>

            {/* The Information Broker */}
            <div class="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">The "Information Broker" Play</h4>
              <p className="text-sm text-gray-600 mb-2">Connect people who need information with those who have it. Never give direct answers - facilitate conversations.</p>
              <p className="text-xs text-red-600 font-medium">Why it works: You become the central hub of all valuable information flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      /* QUICK REFERENCE */
      {/* ══════════════════════════════════════════════════════════ */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">📋 Quick Reference Cheat Sheet</h2>
        
        <div class="bg-gray-900 text-white rounded-lg p-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-yellow-400">Career Commands:</h4>
              <div class="space-y-2 font-mono text-sm">
                <p><span className="text-green-400">career.boost()</span> = First 90 days blitz</p>
                <p><span className="text-green-400">network.build()</span> = Help 3 people succeed</p>
                <p><span className="text-green-400">visibility.increase()</span> = Present to executives</p>
                <p><span className="text-green-400">skills.future_proof()</span> = Learn AI + domain</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-yellow-400">Technical Shortcuts:</h4>
              <div class="space-y-2 font-mono text-sm">
                <p><span className="text-blue-400">sql.window_functions()</span> = Replace complex joins</p>
                <p><span className="text-blue-400">bi.template_reuse()</span> = Copy master file</p>
                <p><span className="text-blue-400">python.automate()</span> = Script repetitive tasks</p>
                <p><span className="text-blue-400">data.80_20_rule()</span> = Focus on critical metrics</p>
              </div>
            </div>
          </div>
          
          <div class="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-sm text-gray-400">
              <strong>Remember:</strong> These are accelerators, not replacements. Build your skills first, then use cheats to multiply your impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
