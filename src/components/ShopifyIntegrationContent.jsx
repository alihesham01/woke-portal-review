import React from 'react'

export default function ShopifyIntegrationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Shopify Integration Design</h1>
        <p className="text-lg text-gray-600">Comprehensive strategy for integrating Shopify online transactions with multi-courier support</p>
      </div>

      <div className="space-y-8">
        {/* Overview */}
        <section className="bg-green-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Integration Overview</h2>
          <div className="text-green-800">
            <p className="mb-4">This integration bridges your offline POS data with Shopify online sales, creating a unified inventory and analytics platform across all 40 brands.</p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 className="font-semibold mb-2">📦 What It Handles</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Real-time inventory sync</li>
                  <li>• Order consolidation</li>
                  <li>• Customer data unification</li>
                  <li>• Multi-courier tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🚀 Benefits</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Prevent overselling</li>
                  <li>• Unified customer view</li>
                  <li>• Accurate analytics</li>
                  <li>• Automated fulfillment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Architecture Design</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Data Flow Architecture</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white px-3 py-1 rounded">Shopify</div>
                <span>→</span>
                <div className="bg-purple-500 text-white px-3 py-1 rounded">Webhooks</div>
                <span>→</span>
                <div className="bg-green-500 text-white px-3 py-1 rounded">Your API</div>
                <span>→</span>
                <div className="bg-orange-500 text-white px-3 py-1 rounded">PostgreSQL</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white px-3 py-1 rounded">POS System</div>
                <span>→</span>
                <div className="bg-purple-500 text-white px-3 py-1 rounded">Scrapers</div>
                <span>→</span>
                <div className="bg-green-500 text-white px-3 py-1 rounded">Your API</div>
                <span>→</span>
                <div className="bg-orange-500 text-white px-3 py-1 rounded">PostgreSQL</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Core Components</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Webhook Handler</h4>
              <p className="text-sm text-gray-600">Receives real-time Shopify events (orders, inventory updates)</p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Data Mapper</h4>
              <p className="text-sm text-gray-600">Transforms Shopify data to match your schema</p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Courier Integration</h4>
              <p className="text-sm text-gray-600">Tracks shipments across multiple delivery services</p>
            </div>
          </div>
        </section>

        {/* Database Schema */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Database Schema Extensions</h2>
          
          <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
            <h3 className="text-lg font-semibold mb-4">Database Schema Extensions</h3>
            <p className="text-sm text-gray-300">
              You'll need to add new tables to track Shopify data: store connections, online orders, and shipment tracking. 
              The shopify_stores table links each brand to their Shopify store with API credentials. 
              The shopify_orders table captures all online orders with customer and payment details. 
              The courier_shipments table tracks delivery status across multiple shipping companies.
            </p>
          </div>
        </section>

        {/* Implementation Strategy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Implementation Strategy</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Phase 1: Basic Integration (Week 1)</h3>
              <ul className="space-y-2 text-blue-800">
                <li>✅ Set up Shopify App in partner dashboard</li>
                <li>✅ Implement OAuth authentication flow</li>
                <li>✅ Create webhook endpoints for orders</li>
                <li>✅ Build basic order import functionality</li>
                <li>✅ Add shopify_stores table to schema</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Phase 2: Inventory Sync (Week 2)</h3>
              <ul className="space-y-2 text-purple-800">
                <li>🔄 Implement bidirectional inventory sync</li>
                <li>🔄 Handle product variants and SKUs</li>
                <li>🔄 Add inventory adjustment tracking</li>
                <li>🔄 Implement conflict resolution</li>
                <li>🔄 Set up webhooks for inventory updates</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">Phase 3: Courier Integration (Week 3)</h3>
              <ul className="space-y-2 text-green-800">
                <li>📦 Integrate with major couriers (Aramex, FedEx, DHL)</li>
                <li>📦 Implement tracking number capture</li>
                <li>📦 Add delivery status updates</li>
                <li>📦 Build customer notification system</li>
                <li>📦 Create shipment analytics dashboard</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Phase 4: Advanced Features (Week 4)</h3>
              <ul className="space-y-2 text-orange-800">
                <li>🎯 Implement order routing logic</li>
                <li>🎯 Add multi-location inventory</li>
                <li>🎯 Build customer segmentation</li>
                <li>🎯 Create automated fulfillment rules</li>
                <li>🎯 Add returns and refund handling</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Handling Messy Courier Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handling Messy Courier Data</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-900 mb-3">🚨 The Reality of Local Couriers</h3>
            <p className="text-red-800">
              Unlike FedEx/DHL with their clean APIs, local couriers like Bosta, Turuq, and Floatex present significant data challenges. 
              Their systems often lack proper documentation, change without notice, and require extensive manual cleaning.
            </p>
          </div>

          <div className="space-y-6">
            {/* Common Issues */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4">Common Data Issues & Solutions</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">📛 Inconsistent Tracking Numbers</h4>
                  <p className="text-yellow-700 text-sm mb-2">Formats change randomly, duplicates, missing digits</p>
                  <div className="bg-yellow-100 rounded p-3">
                    <p className="text-xs font-mono text-yellow-900">
                      <strong>Solution:</strong><br/>
                      // Normalize tracking numbers<br/>
                      function normalizeTracking(num) {'{'}<br/>
                      &nbsp;&nbsp;// Remove spaces, dashes<br/>
                      &nbsp;&nbsp;num = num.replace(/[\s-]/g, '')<br/>
                      &nbsp;&nbsp;// Add country code if missing<br/>
                      &nbsp;&nbsp;if (num.length === 12) num = 'EG' + num<br/>
                      &nbsp;&nbsp;return num.toUpperCase()<br/>
                      {'}'}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">📍 Messy Address Data</h4>
                  <p className="text-yellow-700 text-sm mb-2">Mixed languages, no postal codes, informal areas</p>
                  <div className="bg-yellow-100 rounded p-3">
                    <p className="text-xs font-mono text-yellow-900">
                      <strong>Solution:</strong><br/>
                      // Address standardization<br/>
                      - Google Geocoding API<br/>
                      - Area name mapping table<br/>
                      - Manual review queue<br/>
                      - ML for pattern recognition
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">⏰ Inconsistent Status Updates</h4>
                  <p className="text-yellow-700 text-sm mb-2">Different languages, custom statuses, delays</p>
                  <div className="bg-yellow-100 rounded p-3">
                    <p className="text-xs font-mono text-yellow-900">
                      <strong>Solution:</strong><br/>
                      // Status mapping<br/>
                      STATUS_MAP = {'{'}<br/>
                      &nbsp;&nbsp;'تم التسليم': 'delivered',<br/>
                      &nbsp;&nbsp;'قيد التوصيل': 'out_for_delivery',<br/>
                      &nbsp;&nbsp;'تم الاستلام': 'picked_up'<br/>
                      {'}'}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-yellow-800 mb-3">📊 Missing/Incorrect Metrics</h4>
                  <p className="text-yellow-700 text-sm mb-2">Wrong weights, dimensions, delivery fees</p>
                  <div className="bg-yellow-100 rounded p-3">
                    <p className="text-xs font-mono text-yellow-900">
                      <strong>Solution:</strong><br/>
                      // Data validation rules<br/>
                      - Weight ranges by product<br/>
                      - Fee verification<br/>
                      - Historical comparison<br/>
                      - Flag for manual review
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Courier-Specific Strategies */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Courier-Specific Strategies</h3>
              
              <div className="space-y-4">
                {/* Bosta */}
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🚴 Bosta Challenges & Solutions</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-red-600 mb-1">Issues:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• API returns HTML instead of JSON</li>
                        <li>• Status in Arabic/English mix</li>
                        <li>• Rate limits not documented</li>
                        <li>• Sandbox environment unreliable</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-green-600 mb-1">Solutions:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• HTML parser fallback</li>
                        <li>• Translation layer</li>
                        <li>• Exponential backoff</li>
                        <li>• Mock data for testing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Turuq */}
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🏍️ Turuq Challenges & Solutions</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-red-600 mb-1">Issues:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• No webhook support</li>
                        <li>• CSV-only bulk operations</li>
                        <li>• Manual driver assignments</li>
                        <li>• No delivery time estimates</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-green-600 mb-1">Solutions:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Scheduled polling every 5 min</li>
                        <li>• CSV parser & generator</li>
                        <li>• Assignment automation</li>
                        <li>• ML-based ETA prediction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Floatex */}
                <div className="bg-white border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🚚 Floatex Challenges & Solutions</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-red-600 mb-1">Issues:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• FTP-only data access</li>
                        <li>• Fixed-width file format</li>
                        <li>• Daily batch updates only</li>
                        <li>• No real-time tracking</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-green-600 mb-1">Solutions:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• FTP watcher service</li>
                        <li>• Custom file parser</li>
                        <li>• Stale data detection</li>
                        <li>• Status inference logic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Cleaning Pipeline */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">🔄 Automated Data Cleaning Pipeline</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Raw Data</div>
                  <span>→</span>
                  <div className="bg-purple-500 text-white px-3 py-1 rounded text-sm">Validation</div>
                  <span>→</span>
                  <div className="bg-green-500 text-white px-3 py-1 rounded text-sm">Normalization</div>
                  <span>→</span>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm">Enrichment</div>
                  <span>→</span>
                  <div className="bg-red-500 text-white px-3 py-1 rounded text-sm">Clean Data</div>
                </div>

                <div className="grid md:grid-cols-5 gap-2 text-xs">
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold">Raw Data</p>
                    <ul className="mt-1 space-y-1 text-gray-600">
                      <li>• JSON/HTML/CSV</li>
                      <li>• Mixed encodings</li>
                      <li>• Missing fields</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold">Validation</p>
                    <ul className="mt-1 space-y-1 text-gray-600">
                      <li>• Schema check</li>
                      <li>• Required fields</li>
                      <li>• Data types</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold">Normalization</p>
                    <ul className="mt-1 space-y-1 text-gray-600">
                      <li>• Standard formats</li>
                      <li>• Language unify</li>
                      <li>• Code mapping</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold">Enrichment</p>
                    <ul className="mt-1 space-y-1 text-gray-600">
                      <li>• Geocoding</li>
                      <li>• Time zones</li>
                      <li>• Cost calculation</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="font-semibold">Clean Data</p>
                    <ul className="mt-1 space-y-1 text-gray-600">
                      <li>• Ready for use</li>
                      <li>• Audit trail</li>
                      <li>• Quality score</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Manual Review Queue */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">👥 Manual Review Queue System</h3>
              
              <p className="text-purple-800 mb-4">
                Not everything can be automated. Build a smart queue for human intervention:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Auto-Flag Conditions</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Confidence score &lt; 80%</li>
                    <li>• Address not found</li>
                    <li>• Duplicate tracking</li>
                    <li>• Unusual weight/size</li>
                    <li>• Failed API calls &gt; 3x</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Priority Levels</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>🔴 Critical: Customer complaints</li>
                    <li>🟡 High: Delivery delays &gt; 24h</li>
                    <li>🟢 Medium: Data inconsistencies</li>
                    <li>⚪ Low: Formatting issues</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Resolution Types</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✅ Fixed manually</li>
                    <li>🔄 Sent to courier</li>
                    <li>🤖 ML learns from fix</li>
                    <li>📝 Update rules</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">💡 Best Practices for Messy Data</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Technical Approaches</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Always version your data parsers</li>
                    <li>• Keep raw data untouched for 30 days</li>
                    <li>• Log all transformations with reasons</li>
                    <li>• Build rollback capabilities</li>
                    <li>• Monitor data quality scores daily</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Operational Strategies</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Daily data quality reports</li>
                    <li>• Weekly pattern reviews</li>
                    <li>• Monthly courier performance</li>
                    <li>• Quarterly parser updates</li>
                    <li>• Always have backup manual process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Courier Support */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Multi-Courier Support</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Supported Couriers</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
                  <div>
                    <strong>Aramex</strong>
                    <p className="text-sm text-gray-600">Middle East & North Africa</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
                  <div>
                    <strong>FedEx</strong>
                    <p className="text-sm text-gray-600">International express</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
                  <div>
                    <strong>DHL</strong>
                    <p className="text-sm text-gray-600">European & Asian markets</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-500 w-3 h-3 rounded-full mr-3"></span>
                  <div>
                    <strong>Local Couriers</strong>
                    <p className="text-sm text-gray-600">Country-specific services</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Courier Features</h3>
              <ul className="space-y-2">
                <li>✅ Real-time tracking</li>
                <li>✅ Delivery estimates</li>
                <li>✅ Proof of delivery</li>
                <li>✅ Exception handling</li>
                <li>✅ Bulk label printing</li>
                <li>✅ Rate shopping</li>
                <li>✅ Address validation</li>
                <li>✅ Customs documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Automation Strategies */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Automation Strategies</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🤖 Smart Order Routing</h3>
              <p className="text-blue-800 mb-3">Automatically route orders to optimal fulfillment center:</p>
              <div className="bg-white rounded p-4">
                <pre className="text-sm text-gray-700">
{`IF order.destination = "Cairo" AND product.stock["Cairo"] > qty
  THEN fulfill_from = "Cairo"
ELSE IF order.destination = "Alexandria" AND product.stock["Alex"] > qty
  THEN fulfill_from = "Alexandria"
ELSE
  fulfill_from = "Central" + split_shipment
ENDIF`}
                </pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">📦 Inventory Replenishment</h3>
              <p className="text-green-800 mb-3">Auto-generate purchase orders when stock is low:</p>
              <div className="bg-white rounded p-4">
                <pre className="text-sm text-gray-700">
{`WHEN product.stock_level < product.reorder_point
  AND product.days_of_stock < 7
THEN CREATE purchase_order
  SET quantity = product.max_stock - product.stock_level
  SET priority = "HIGH"
ENDIF`}
                </pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">📧 Customer Communications</h3>
              <p className="text-purple-800 mb-3">Triggered messages based on order status:</p>
              <div className="bg-white rounded p-4">
                <pre className="text-sm text-gray-700">
{`Order Confirmed → Email + SMS
Order Shipped → Tracking details
Out for Delivery → ETA notification
Delivered → Review request
Return Initiated → Return label`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* API Examples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">API Implementation Examples</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded p-6 mb-6">
            <h3 className="text-lg font-semibold mb-4">Shopify Webhook Handler</h3>
            <p className="text-sm text-gray-700">
              Create a secure webhook endpoint that receives real-time notifications from Shopify. 
              When a customer places an order, Shopify instantly sends the order details to your system. 
              Your system verifies it's really from Shopify using a secret key, then saves the order to your database. 
              This happens automatically 24/7, ensuring your inventory is always up to date.
            </p>
          </div>

            <div className="bg-gray-900 text-gray-100 rounded-lg p-6 overflow-x-auto">
            <h3 className="text-lg font-semibold mb-3">Courier Integration System</h3>
            <p className="text-sm text-gray-300">
              Build a flexible system that works with multiple delivery companies. 
              Each courier (Aramex, FedEx, DHL) has different APIs and tracking formats. 
              Your system needs an adapter that translates each courier's data into a standard format. 
              This allows you to track all deliveries in one place, regardless of which courier is used.
            </p>
          </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Success Metrics</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Integration Metrics</h3>
              <ul className="space-y-1 text-blue-100">
                <li>• &lt;5min order sync delay</li>
                <li>• 99.9% webhook success rate</li>
                <li>• &lt;1% data mismatch rate</li>
                <li>• 40 brands supported</li>
              </ul>
            </div>
            
            <div className="bg-green-500 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Operational Metrics</h3>
              <ul className="space-y-1 text-green-100">
                <li>• 95% inventory accuracy</li>
                <li>• &lt;2% overselling rate</li>
                <li>• 24hr fulfillment SLA</li>
                <li>• 90% on-time delivery</li>
              </ul>
            </div>
            
            <div className="bg-purple-500 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Business Impact</h3>
              <ul className="space-y-1 text-purple-100">
                <li>• 30% reduction in stockouts</li>
                <li>• 50% faster fulfillment</li>
                <li>• 25% lower shipping costs</li>
                <li>• 40% higher customer satisfaction</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
