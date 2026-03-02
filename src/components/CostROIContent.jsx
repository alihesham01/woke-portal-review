import React from 'react'

export default function CostROIContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Cost & ROI Analysis</h1>
        <p className="text-lg text-gray-600">Financial analysis of scaling to 40 brands and expected returns</p>
      </div>

      <div className="space-y-8">
        {/* Current Costs */}
        <section className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">💰 Current Operating Costs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Monthly Expenses</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Infrastructure: $500/month</li>
                <li>• Software licenses: $200/month</li>
                <li>• Development team: $15,000/month</li>
                <li>• Operations: $3,000/month</li>
                <li>• Support: $2,000/month</li>
                <li className="font-bold text-xl mt-3">• Total: $20,700/month</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Cost Per Brand (5 brands)</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Infrastructure per brand: $100</li>
                <li>• Development per brand: $3,000</li>
                <li>• Operations per brand: $600</li>
                <li>• Support per brand: $400</li>
                <li className="font-bold text-xl mt-3">• Total per brand: $4,100</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scaling Costs */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📈 Scaling to 40 Brands - Cost Analysis</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Scenario 1: Linear Scaling (Current Architecture)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Monthly Costs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure: $4,000 (8x current)</li>
                    <li>• Software licenses: $1,600 (8x)</li>
                    <li>• Development team: $60,000 (4x for complexity)</li>
                    <li>• Operations: $48,000 (16x for manual work)</li>
                    <li>• Support: $16,000 (8x)</li>
                    <li className="font-bold text-red-600">• Total: $129,600/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Per Brand Cost</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure: $100</li>
                    <li>• Software: $40</li>
                    <li>• Development: $1,500</li>
                    <li>• Operations: $1,200</li>
                    <li>• Support: $400</li>
                    <li className="font-bold text-red-600">• Total: $3,240/brand</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded">
                <p className="text-red-800 font-semibold">⚠️ Not sustainable - costs decrease per brand but complexity becomes unmanageable</p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Scenario 2: Optimized Scaling (Recommended)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Monthly Costs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure: $8,000 (optimized cloud)</li>
                    <li>• Software licenses: $3,000 (enterprise deals)</li>
                    <li>• Development team: $40,000 (automation)</li>
                    <li>• Operations: $12,000 (80% automated)</li>
                    <li>• Support: $8,000 (self-service)</li>
                    <li className="font-bold text-green-600">• Total: $71,000/month</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Per Brand Cost</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure: $200</li>
                    <li>• Software: $75</li>
                    <li>• Development: $1,000</li>
                    <li>• Operations: $300</li>
                    <li>• Support: $200</li>
                    <li className="font-bold text-green-600">• Total: $1,775/brand</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-green-800 font-semibold">✅ Sustainable - 45% cost reduction per brand through automation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Projections */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">💵 Revenue Projections</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-4">Expected Revenue per Brand</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Small Brands</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monthly revenue: $500</li>
                  <li>• Annual revenue: $6,000</li>
                  <li>• Brands: 20</li>
                  <li className="font-bold">• Total: $120,000/year</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Medium Brands</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monthly revenue: $1,500</li>
                  <li>• Annual revenue: $18,000</li>
                  <li>• Brands: 15</li>
                  <li className="font-bold">• Total: $270,000/year</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Large Brands</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monthly revenue: $5,000</li>
                  <li>• Annual revenue: $60,000</li>
                  <li>• Brands: 5</li>
                  <li className="font-bold">• Total: $300,000/year</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-green-700">Total Annual Revenue: $690,000</p>
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📊 ROI Analysis</h2>
          
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Year 1 ROI Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Linear Scaling (Not Recommended)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Annual costs: $1,555,200</li>
                    <li>• Annual revenue: $690,000</li>
                    <li>• Net loss: -$865,200</li>
                    <li>• ROI: -125%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Optimized Scaling (Recommended)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Annual costs: $852,000</li>
                    <li>• Annual revenue: $690,000</li>
                    <li>• Net loss: -$162,000</li>
                    <li>• ROI: -23%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Year 2-3 ROI (After Optimization)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">Year 2</p>
                  <p className="text-sm text-gray-600 mt-2">Revenue: $828,000 (+20%)</p>
                  <p className="text-sm text-gray-600">Costs: $650,000 (-24%)</p>
                  <p className="text-lg font-semibold text-green-600">Profit: $178,000</p>
                  <p className="text-sm text-gray-600">ROI: 21%</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">Year 3</p>
                  <p className="text-sm text-gray-600 mt-2">Revenue: $994,000 (+20%)</p>
                  <p className="text-sm text-gray-600">Costs: $550,000 (-15%)</p>
                  <p className="text-lg font-semibold text-green-600">Profit: $444,000</p>
                  <p className="text-sm text-gray-600">ROI: 54%</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">Year 5</p>
                  <p className="text-sm text-gray-600 mt-2">Revenue: $1,430,000</p>
                  <p className="text-sm text-gray-600">Costs: $450,000</p>
                  <p className="text-lg font-semibold text-green-600">Profit: $980,000</p>
                  <p className="text-sm text-gray-600">ROI: 118%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Required */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">💼 Investment Required for Optimization</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-purple-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">One-Time Investment Costs</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Technology Investment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Performance optimization: $75,000</li>
                    <li>• Security implementation: $50,000</li>
                    <li>• Automation tools: $40,000</li>
                    <li>• Monitoring systems: $25,000</li>
                    <li>• Infrastructure upgrade: $60,000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">People Investment</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• DevOps engineer: $100,000/year</li>
                    <li>• Security specialist: $90,000/year</li>
                    <li>• Automation engineer: $95,000/year</li>
                    <li>• Training programs: $30,000</li>
                    <li>• Consulting fees: $50,000</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 rounded">
                <p className="text-purple-800 font-semibold">Total first-year investment: $565,000</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">Payback Period</h3>
              <div className="space-y-2">
                <p className="text-yellow-800">With optimized scaling:</p>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Year 1: Net loss of $162,000 (including investment)</li>
                  <li>• Year 2: Net profit of $178,000</li>
                  <li>• <strong>Payback period: 18 months</strong></li>
                  <li>• 5-year net profit: $2,100,000</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Optimization Strategies */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🎯 Cost Optimization Strategies</h2>
          
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top 10 Cost Saving Opportunities</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">1.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Automated Onboarding</h4>
                      <p className="text-sm text-gray-600">Save $200,000/year in manual setup</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">2.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cloud Optimization</h4>
                      <p className="text-sm text-gray-600">Save $150,000/year with auto-scaling</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">3.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Self-Service Support</h4>
                      <p className="text-sm text-gray-600">Save $100,000/year in support costs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">4.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Automated Testing</h4>
                      <p className="text-sm text-gray-600">Save $80,000/year in QA costs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">5.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Database Optimization</h4>
                      <p className="text-sm text-gray-600">Save $70,000/year in infrastructure</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">6.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Background Job Processing</h4>
                      <p className="text-sm text-gray-600">Save $60,000/year in server costs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">7.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Caching Layer</h4>
                      <p className="text-sm text-gray-600">Save $50,000/year in database load</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">8.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Open Source Alternatives</h4>
                      <p className="text-sm text-gray-600">Save $40,000/year in licenses</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">9.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Predictive Scaling</h4>
                      <p className="text-sm text-gray-600">Save $30,000/year in over-provisioning</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-2">10.</span>
                    <div>
                      <h4 className="font-semibold text-gray-800">Automated Backups</h4>
                      <p className="text-sm text-gray-600">Save $20,000/year in manual work</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded">
                <p className="text-green-800 font-semibold">Total potential savings: $800,000/year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Risks */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">⚠️ Financial Risks & Mitigation</h2>
          
          <div className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">High-Impact Risks</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-red-700">Churn Rate Increase</h4>
                  <p className="text-sm text-red-600">Risk: 30% churn in first year</p>
                  <p className="text-sm text-gray-700">Mitigation: Improve onboarding, add success metrics, proactive support</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700">Security Breach</h4>
                  <p className="text-sm text-red-600">Risk: $500K+ in fines and lost revenue</p>
                  <p className="text-sm text-gray-700">Mitigation: Implement security measures, insurance, incident response plan</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-700">Technical Debt</h4>
                  <p className="text-sm text-red-600">Risk: System becomes unmaintainable</p>
                  <p className="text-sm text-gray-700">Mitigation: Regular refactoring, code reviews, technical debt budget</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Medium-Impact Risks</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-yellow-700">Competition</h4>
                  <p className="text-sm text-yellow-600">Risk: New competitors enter market</p>
                  <p className="text-sm text-gray-700">Mitigation: Differentiate with AI features, build moat with data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-700">Economic Downturn</h4>
                  <p className="text-sm text-yellow-600">Risk: Customers cut budgets</p>
                  <p className="text-sm text-gray-700">Mitigation: Show clear ROI, flexible pricing, value demonstration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics to Track */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📈 Key Financial Metrics to Track</h2>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Metrics</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer Acquisition Cost (CAC)</li>
                  <li>• Customer Lifetime Value (LTV)</li>
                  <li>• LTV/CAC Ratio (target: &gt;3)</li>
                  <li>• Monthly Churn Rate (target: &lt;5%)</li>
                  <li>• Net Revenue Retention (target: &gt;110%)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Operational Metrics</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cost Per Brand (target: &lt;$2,000)</li>
                  <li>• Support Tickets Per Brand</li>
                  <li>• Automation Rate (target: 80%)</li>
                  <li>• System Uptime (target: 99.9%)</li>
                  <li>• Response Time (target: &lt;200ms)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Metrics</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Monthly Recurring Revenue (MRR)</li>
                  <li>• Annual Recurring Revenue (ARR)</li>
                  <li>• Gross Margin (target: 80%)</li>
                  <li>• Net Profit Margin</li>
                  <li>• Cash Burn Rate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📋 Financial Summary</h2>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Investment Required</h3>
                <ul className="space-y-1 text-blue-100">
                  <li>• One-time: $565,000</li>
                  <li>• Year 1 additional: $285,000</li>
                  <li>• Total Year 1: $850,000</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Expected Returns</h3>
                <ul className="space-y-1 text-blue-100">
                  <li>• Break-even: Month 18</li>
                  <li>• 3-year profit: $722,000</li>
                  <li>• 5-year profit: $2,100,000</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl">
                <strong>Recommendation:</strong> Proceed with optimized scaling - sustainable long-term growth with strong ROI
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
