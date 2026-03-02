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
            <pre className="text-sm">
{`-- Shopify stores per brand
CREATE TABLE shopify_stores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID NOT NULL REFERENCES brands(id),
    shop_domain VARCHAR(255) NOT NULL,
    access_token TEXT NOT NULL,
    webhook_secret TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Online orders from Shopify
CREATE TABLE shopify_orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    brand_id UUID NOT NULL,
    shopify_order_id BIGINT NOT NULL,
    shop_domain VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    financial_status VARCHAR(50),
    fulfillment_status VARCHAR(50),
    total_price DECIMAL(10,2),
    currency VARCHAR(3),
    created_at_shopify TIMESTAMPTZ,
    received_at TIMESTAMPTZ DEFAULT NOW()
);

-- Courier tracking information
CREATE TABLE courier_shipments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES shopify_orders(id),
    courier_name VARCHAR(100),
    tracking_number VARCHAR(255),
    status VARCHAR(50),
    estimated_delivery DATE,
    delivered_at TIMESTAMPTZ,
    tracking_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);`}
            </pre>
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

        {/* Handling Messy Data */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handling Messy Data</h2>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-4">Common Data Issues & Solutions</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-800">⚠️ SKU Mismatches</h4>
                <p className="text-yellow-700 text-sm mt-1">Online SKUs often differ from POS SKUs</p>
                <div className="bg-yellow-100 rounded p-3 mt-2">
                  <code className="text-xs">
                    SKU_MAPPING_TABLE: {'{'} online_sku: "SHIRT-RED-L", pos_sku: "S001" {'}'}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-800">⚠️ Customer Data Gaps</h4>
                <p className="text-yellow-700 text-sm mt-1">Missing emails, phone numbers, or addresses</p>
                <div className="bg-yellow-100 rounded p-3 mt-2">
                  <code className="text-xs">
                    Validation: Soft fail → Mark for review → Don't block order
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-800">⚠️ Duplicate Orders</h4>
                <p className="text-yellow-700 text-sm mt-1">Same order from multiple sources</p>
                <div className="bg-yellow-100 rounded p-3 mt-2">
                  <code className="text-xs">
                    Deduplication: customer_email + total_price + timestamp ±5min
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-yellow-800">⚠️ Courier Format Variations</h4>
                <p className="text-yellow-700 text-sm mt-1">Each courier has different API/track format</p>
                <div className="bg-yellow-100 rounded p-3 mt-2">
                  <code className="text-xs">
                    Adapter Pattern: Standardize → Process → Return original format
                  </code>
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
            <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Shopify Webhook Handler</h3>
              <pre className="text-sm overflow-x-auto">
{`// POST /api/shopify/webhooks/order
app.post('/webhooks/order', async (c) => {
  const signature = c.req.header('X-Shopify-Hmac-Sha256');
  const body = await c.req.text();
  
  // Verify webhook
  if (!verifyWebhook(body, signature, webhookSecret)) {
    return c.json({ error: 'Invalid signature' }, 401);
  }
  
  const order = JSON.parse(body);
  
  // Transform and save
  await saveShopifyOrder({
    brandId: await getBrandFromShop(order.shop_domain),
    shopifyOrderId: order.id,
    customerEmail: order.email,
    totalPrice: order.total_price,
    lineItems: order.line_items.map(item => ({
      sku: item.sku,
      quantity: item.quantity,
      price: item.price
    }))
  });
  
  return c.json({ success: true });
});`}
              </pre>
            </div>

            <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Courier Tracking Integration</h3>
              <pre className="text-sm overflow-x-auto">
{`// Courier adapter pattern
class CourierAdapter {
  async trackShipment(courier, trackingNumber) {
    switch(courier.toLowerCase()) {
      case 'aramex':
        return this.trackAramex(trackingNumber);
      case 'fedex':
        return this.trackFedEx(trackingNumber);
      case 'dhl':
        return this.trackDHL(trackingNumber);
      default:
        throw new Error(\`Unsupported courier: \${courier}\`);
    }
  }
  
  normalizeTracking(rawData) {
    return {
      status: rawData.status,
      location: rawData.currentLocation,
      timestamp: rawData.lastUpdate,
      estimatedDelivery: rawData.eta
    };
  }
}`}
              </pre>
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
