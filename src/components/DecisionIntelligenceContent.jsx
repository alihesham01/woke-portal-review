import React from 'react'

export default function DecisionIntelligenceContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Decision Intelligence System</h1>
        <p className="text-lg text-gray-600">Building predictive and prescriptive analytics for intelligent decision-making across 40 brands</p>
      </div>

      <div className="space-y-8">
        {/* Vision */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">The Vision</h2>
          <p className="text-xl mb-6">
            Transform from reactive reporting to proactive decision-making. Let AI analyze patterns across all 40 brands 
            and provide actionable recommendations that drive growth.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">🔮 Predict</h3>
              <p className="text-blue-100">Forecast sales, inventory needs, and market trends with 95% accuracy</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">🎯 Prescribe</h3>
              <p className="text-blue-100">Get specific recommendations: "Order 500 units of SKU X by Friday"</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">📈 Optimize</h3>
              <p className="text-blue-100">Continuously learn and improve decisions based on outcomes</p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">System Architecture</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Four-Layer Architecture</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 text-white px-4 py-2 rounded font-semibold">Data Layer</div>
                <span className="text-gray-600">PostgreSQL + Time-series DB + External APIs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 text-white px-4 py-2 rounded font-semibold">Analytics Layer</div>
                <span className="text-gray-600">Data processing + Feature engineering + Pattern recognition</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 text-white px-4 py-2 rounded font-semibold">ML Layer</div>
                <span className="text-gray-600">Predictive models + Optimization algorithms + Decision engine</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 text-white px-4 py-2 rounded font-semibold">Presentation Layer</div>
                <span className="text-gray-600">Dashboards + Alerts + API endpoints + Recommendations UI</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Core Components</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">📊 Data Pipeline</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ETL processes</li>
                <li>• Real-time streaming</li>
                <li>• Data quality checks</li>
                <li>• Feature store</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">🤖 ML Models</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Demand forecasting</li>
                <li>• Price optimization</li>
                <li>• Churn prediction</li>
                <li>• Inventory optimization</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">⚡ Decision Engine</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rule engine</li>
                <li>• Optimization solver</li>
                <li>• Simulation module</li>
                <li>• A/B testing</li>
              </ul>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">📱 Delivery</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dashboard widgets</li>
                <li>• Email/SMS alerts</li>
                <li>• API integrations</li>
                <li>• Mobile app</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Database Schema */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Database Schema Extensions</h2>
          
          <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm">
{`-- ML Features and Predictions
CREATE TABLE ml_features (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID NOT NULL,
    feature_name VARCHAR(100),
    feature_value NUMERIC,
    feature_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE predictions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID NOT NULL,
    model_name VARCHAR(100),
    prediction_type VARCHAR(50),
    predicted_value NUMERIC,
    confidence_score NUMERIC(3,2),
    prediction_date DATE,
    actual_value NUMERIC,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Decision Recommendations
CREATE TABLE recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID NOT NULL,
    recommendation_type VARCHAR(50),
    title TEXT NOT NULL,
    description TEXT,
    impact_estimate NUMERIC,
    effort_estimate NUMERIC,
    priority INTEGER,
    status VARCHAR(20) DEFAULT 'pending',
    expires_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Model Performance Tracking
CREATE TABLE model_metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    model_name VARCHAR(100),
    metric_name VARCHAR(50),
    metric_value NUMERIC,
    calculated_at TIMESTAMPTZ DEFAULT NOW()
);`}
            </pre>
          </div>
        </section>

        {/* Feature Engineering */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feature Engineering</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">📈 Sales Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Time-based Features</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Day of week, week of month, month</li>
                    <li>• Holiday indicators</li>
                    <li>• Season flags (summer/winter)</li>
                    <li>• Payday proximity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Historical Features</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• 7/30/90 day moving averages</li>
                    <li>• Year-over-year growth</li>
                    <li>• Trend indicators (up/down/stable)</li>
                    <li>• Volatility measures</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">📦 Inventory Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Stock Metrics</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Current stock level</li>
                    <li>• Days of inventory</li>
                    <li>• Stockout frequency</li>
                    <li>• Overstock risk score</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Supply Features</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Lead time variability</li>
                    <li>• Supplier reliability</li>
                    <li>• Seasonal demand patterns</li>
                    <li>• Product lifecycle stage</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">👥 Customer Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Behavioral</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Purchase frequency</li>
                    <li>• Average order value</li>
                    <li>• Product preferences</li>
                    <li>• Channel preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Demographic</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Location-based patterns</li>
                    <li>• Age group preferences</li>
                    <li>• Income indicators</li>
                    <li>• Loyalty status</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Predictive Models */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Predictive Models</h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🎯 Demand Forecasting Model</h3>
              <p className="text-gray-600 mb-4">Predict future demand for each product at each location</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Model Details:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Algorithm:</strong> XGBoost with LSTM for time series</li>
                  <li><strong>Inputs:</strong> Historical sales, seasonality, promotions, external factors</li>
                  <li><strong>Output:</strong> Daily demand forecast for next 30 days</li>
                  <li><strong>Accuracy:</strong> 92% MAPE (Mean Absolute Percentage Error)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">💰 Price Optimization Model</h3>
              <p className="text-gray-600 mb-4">Recommend optimal pricing to maximize revenue</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Model Details:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Algorithm:</strong> Elasticity modeling + reinforcement learning</li>
                  <li><strong>Inputs:</strong> Competitor prices, demand elasticity, costs, inventory</li>
                  <li><strong>Output:</strong> Optimal price range with expected impact</li>
                  <li><strong>Accuracy:</strong> 8% average revenue uplift</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-l-4 border-purple-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">📦 Inventory Optimization Model</h3>
              <p className="text-gray-600 mb-4">Calculate optimal stock levels to minimize costs</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Model Details:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Algorithm:</strong> Newsvendor model + service level optimization</li>
                  <li><strong>Inputs:</strong> Demand forecast, lead times, holding costs, stockout costs</li>
                  <li><strong>Output:</strong> Reorder points, order quantities, safety stock</li>
                  <li><strong>Accuracy:</strong> 25% reduction in inventory costs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border-l-4 border-orange-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">🏃 Churn Prediction Model</h3>
              <p className="text-gray-600 mb-4">Identify customers at risk of leaving</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Model Details:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li><strong>Algorithm:</strong> Random Forest with SHAP explanations</li>
                  <li><strong>Inputs:</strong> Purchase patterns, engagement metrics, complaints</li>
                  <li><strong>Output:</strong> Churn probability + key factors</li>
                  <li><strong>Accuracy:</strong> 85% precision, 78% recall</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Engine */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Decision Engine</h2>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">🧠 How Decisions Are Made</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">1. Context Gathering</h4>
                <p className="text-sm text-gray-600">Collect all relevant data: current state, predictions, constraints, goals</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">2. Rule Evaluation</h4>
                <p className="text-sm text-gray-600">Apply business rules and constraints (budget, capacity, policies)</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">3. Optimization</h4>
                <p className="text-sm text-gray-600">Run optimization algorithm to find best solution</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">4. Recommendation Generation</h4>
                <p className="text-sm text-gray-600">Create actionable recommendations with impact estimates</p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">5. Learning Loop</h4>
                <p className="text-sm text-gray-600">Track outcomes and improve future decisions</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Example Decision Flow</h3>
          <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
            <pre className="text-sm">
{`// Inventory Replenishment Decision
function shouldReorder(product, location) {
  const forecast = getDemandForecast(product, location, 30);
  const currentStock = getCurrentStock(product, location);
  const leadTime = getSupplierLeadTime(product);
  const safetyStock = calculateSafetyStock(forecast variability);
  
  const projectedStock = currentStock - forecast[leadTime];
  
  if (projectedStock < safetyStock) {
    const orderQty = safetyStock + forecast[30] - currentStock;
    const orderCost = orderQty * product.unitCost;
    const stockoutRisk = calculateStockoutRisk(projectedStock);
    
    return {
      action: 'REORDER',
      quantity: orderQty,
      urgency: stockoutRisk > 0.2 ? 'HIGH' : 'NORMAL',
      expectedImpact: preventLostSales(stockoutRisk),
      confidence: forecast.confidence
    };
  }
  
  return { action: 'WAIT', nextCheck: leadTime - 2 };
}`}
            </pre>
          </div>
        </section>

        {/* User Interface */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Interface Design</h2>
          
          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Intelligence Dashboard</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Widgets</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <div>
                        <strong>Revenue Forecast:</strong> Next 30 days with confidence bands
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <div>
                        <strong>Inventory Health:</strong> At-risk items, excess stock alerts
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <div>
                        <strong>Price Opportunities:</strong> Items ready for price adjustment
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <div>
                        <strong>Customer Insights:</strong> Churn risks, growth opportunities
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Interactive Features</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">•</span>
                      <div>
                        <strong>What-if Scenarios:</strong> Simulate price changes, promotions
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <div>
                        <strong>Deep Dive:</strong> Click any metric to see drivers
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <div>
                        <strong>Compare:</strong> Benchmark against similar brands
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <div>
                        <strong>Export:</strong> Download insights and reports
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Recommendations Interface</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-blue-900">High Priority: Reorder SKU-1234</h4>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Inventory</span>
                  </div>
                  <p className="text-blue-800 text-sm mb-3">
                    Stock will run out in 5 days. Order 200 units to maintain 30-day coverage.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-blue-700">
                      <span className="font-semibold">Impact:</span> Prevent $2,300 lost sales
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                      Order Now
                    </button>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-green-900">Opportunity: Increase Price SKU-5678</h4>
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Pricing</span>
                  </div>
                  <p className="text-green-800 text-sm mb-3">
                    Demand is inelastic. Increase price by 8% to maximize revenue.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-green-700">
                      <span className="font-semibold">Impact:</span> +$1,800 monthly revenue
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm">
                      Apply Price
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Implementation Roadmap</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Phase 1: Foundation (Weeks 1-2)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-blue-800">
                  <li>✅ Set up data pipeline and feature store</li>
                  <li>✅ Implement basic demand forecasting</li>
                  <li>✅ Create prediction tables in DB</li>
                  <li>✅ Build simple recommendation engine</li>
                </ul>
                <ul className="space-y-1 text-blue-800">
                  <li>🔄 Add time-series database (InfluxDB)</li>
                  <li>🔄 Implement model training pipeline</li>
                  <li>🔄 Create basic dashboard widgets</li>
                  <li>🔄 Set up model monitoring</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Phase 2: Advanced Models (Weeks 3-4)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-purple-800">
                  <li>📊 Implement price optimization model</li>
                  <li>📊 Build inventory optimization engine</li>
                  <li>📊 Add customer churn prediction</li>
                  <li>📊 Create cross-brand insights</li>
                </ul>
                <ul className="space-y-1 text-purple-800">
                  <li>🎯 Implement decision rules engine</li>
                  <li>🎯 Add what-if simulation capability</li>
                  <li>🎯 Build A/B testing framework</li>
                  <li>🎯 Create automated model retraining</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Phase 3: Intelligence Layer (Weeks 5-6)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-green-800">
                  <li>🤖 Implement reinforcement learning</li>
                  <li>🤖 Add real-time decision scoring</li>
                  <li>🤖 Build recommendation personalization</li>
                  <li>🤖 Create automated actions</li>
                </ul>
                <ul className="space-y-1 text-green-800">
                  <li>📱 Develop mobile app for insights</li>
                  <li>📱 Add voice-activated queries</li>
                  <li>📱 Implement proactive alerts</li>
                  <li>📱 Create executive dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Success Metrics</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Technical Metrics</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Model accuracy &gt;90%</li>
                <li>• Prediction latency &lt;100ms</li>
                <li>• Data freshness &lt;5min</li>
                <li>• Model drift detection</li>
                <li>• 99.9% API uptime</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Business Metrics</h3>
              <ul className="space-y-2 text-green-100">
                <li>• 15% revenue increase</li>
                <li>• 20% inventory reduction</li>
                <li>• 30% fewer stockouts</li>
                <li>• 25% margin improvement</li>
                <li>• 40% faster decisions</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Adoption Metrics</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• 80% recommendation acceptance</li>
                <li>• Daily usage by 90% brands</li>
                <li>• &lt;30s time to insight</li>
                <li>• 4.5+ user satisfaction</li>
                <li>• 50% reduction in meetings</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
