import React from 'react'

export default function SecurityComplianceContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h1>
        <p className="text-lg text-gray-600">Essential security measures and compliance requirements for 40-brand operations</p>
      </div>

      <div className="space-y-8">
        {/* Security Assessment */}
        <section className="bg-red-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-red-900 mb-4">🚨 Current Security Vulnerabilities</h2>
          <div className="text-red-800">
            <p className="mb-4">Your system has critical security gaps that must be fixed immediately:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>No Encryption at Rest:</strong> Sensitive data stored in plaintext</li>
              <li><strong>Missing 2FA:</strong> Single-factor authentication only</li>
              <li><strong>No Input Validation:</strong> Vulnerable to SQL injection attacks</li>
              <li><strong>No Audit Trail:</strong> Cannot track who accessed what data</li>
              <li><strong>Shared Credentials:</strong> Portal passwords not encrypted</li>
            </ul>
            <p className="mt-4 font-semibold">Risk Level: CRITICAL - Data breach could expose all 40 brands</p>
          </div>
        </section>

        {/* Authentication Security */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔐 Authentication & Access Control</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">1. Implement Multi-Factor Authentication</h3>
              <p className="text-gray-600 mb-4">Password-only authentication is not secure enough.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Add 2FA using authenticator apps or SMS. Require 2FA for all admin users. 
                  Implement backup codes for account recovery. Use time-based OTP (TOTP) standard. 
                  This prevents unauthorized access even if passwords are stolen.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Priority: Critical</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 2 days</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">2. Role-Based Access Control (RBAC)</h3>
              <p className="text-gray-600 mb-4">All users have same permissions - major security risk.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Define roles: Super Admin, Brand Admin, Store Manager, Viewer. 
                  Each role has specific permissions. Users can only access data for their brand. 
                  Implement principle of least privilege - users get minimum access needed.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Priority: Critical</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 3 days</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">3. Session Management</h3>
              <p className="text-gray-600 mb-4">Sessions don't expire properly.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Set session timeout to 30 minutes of inactivity. Implement secure session storage. 
                  Use HTTP-only cookies for session tokens. Invalidate all sessions on password change. 
                  Track active sessions and allow users to logout from all devices.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Priority: High</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 1 day</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔒 Data Protection</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">1. Encryption at Rest</h3>
              <p className="text-gray-600 mb-4">Sensitive data stored as plain text.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Enable Transparent Data Encryption (TDE) on database. Encrypt sensitive columns 
                  like emails, phone numbers, and financial data. Use AES-256 encryption standard. 
                  Store encryption keys securely in AWS KMS or similar service.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Priority: Critical</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 2 days</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-red-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-3">2. Data Masking</h3>
              <p className="text-gray-600 mb-4">Developers can see production data.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Implement data masking for non-production environments. 
                  Mask PII (Personally Identifiable Information) in dev/staging databases. 
                  Use consistent masking algorithms. This prevents data leaks during development.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Priority: Critical</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 3 days</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">3. Secure Backups</h3>
              <p className="text-gray-600 mb-4">Backups not encrypted or protected.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Encrypt all backups before storage. Use different encryption keys for each backup. 
                  Store backups in secure, access-controlled location. Implement backup rotation 
                  and secure deletion. Test backup restoration regularly.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Priority: High</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 1 day</span>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Requirements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">⚖️ Compliance Requirements</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-purple-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">GDPR Compliance</h3>
              <p className="text-gray-600 mb-4">Not compliant with EU data protection laws.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Explicit consent for data collection</li>
                  <li>• Right to data portability (export user data)</li>
                  <li>• Right to be forgotten (delete user data)</li>
                  <li>• Data breach notification within 72 hours</li>
                  <li>• Privacy by design and default</li>
                  <li>• Data Protection Officer (DPO) appointment</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Legal Requirement</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 1 week</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">SOC 2 Type II</h3>
              <p className="text-gray-600 mb-4">Required for enterprise customers.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Security controls documentation</li>
                  <li>• Annual third-party audit</li>
                  <li>• Incident response procedures</li>
                  <li>• Vendor risk management</li>
                  <li>• Change management processes</li>
                  <li>• Continuous monitoring</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Business Critical</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 3 months</span>
              </div>
            </div>

            <div className="bg-white border-l-4 border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">PCI DSS (if handling payments)</h3>
              <p className="text-gray-600 mb-4">Required for credit card processing.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Use payment processor (avoid storing card data)</li>
                  <li>• Secure network architecture</li>
                  <li>• Strong access control measures</li>
                  <li>• Regular vulnerability scanning</li>
                  <li>• Penetration testing</li>
                  <li>• Quarterly network scans</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">If Processing Cards</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Effort: 2 months</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security Monitoring */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">📊 Security Monitoring</h2>
          
          <div className="space-y-4">
            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">1. Intrusion Detection</h3>
              <p className="text-gray-600 mb-4">No monitoring for security breaches.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Implement SIEM (Security Information and Event Management). 
                  Monitor for unusual login patterns, multiple failed attempts, 
                  data access anomalies. Set up real-time alerts for suspicious activities.
                </p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">2. Audit Logging</h3>
              <p className="text-gray-600 mb-4">Limited audit trail exists.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Log all sensitive actions: data exports, permission changes, 
                  failed logins, data modifications. Include user ID, timestamp, 
                  IP address, and action performed. Keep logs for 7 years.
                </p>
              </div>
            </div>

            <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">3. Vulnerability Management</h3>
              <p className="text-gray-600 mb-4">No regular security scanning.</p>
              <div className="bg-gray-50 rounded p-4">
                <h4 className="font-semibold mb-2">Solution:</h4>
                <p className="text-sm text-gray-700">
                  Weekly automated vulnerability scans. Monthly penetration testing. 
                  Track and prioritize vulnerabilities. Patch critical issues within 7 days. 
                  Use tools like Nessus, OWASP ZAP, and Burp Suite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">🚨 Incident Response Plan</h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-4">Security Incident Response Steps</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">1.</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Detection (0-1 hour)</h4>
                  <p className="text-sm text-gray-600">Automated alerts trigger, security team notified</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">2.</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment (1-2 hours)</h4>
                  <p className="text-sm text-gray-600">Determine scope, impact, and severity of breach</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">3.</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Containment (2-4 hours)</h4>
                  <p className="text-sm text-gray-600">Isolate affected systems, prevent further damage</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">4.</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Eradication (4-8 hours)</h4>
                  <p className="text-sm text-gray-600">Remove threat, patch vulnerabilities</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">5.</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Recovery (8-24 hours)</h4>
                  <p className="text-sm text-gray-600">Restore systems from clean backups</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3 font-bold">6.</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Post-Incident (24-72 hours)</h4>
                  <p className="text-sm text-gray-600">Analyze cause, improve defenses, notify if required</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Checklist */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">✅ Security Implementation Checklist</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Must-Have (Week 1)</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">□</span>
                  <span className="text-gray-700">Encrypt all sensitive data</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">□</span>
                  <span className="text-gray-700">Implement 2FA for all users</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">□</span>
                  <span className="text-gray-700">Add input validation</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">□</span>
                  <span className="text-gray-700">Set up audit logging</span>
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">□</span>
                  <span className="text-gray-700">Implement RBAC</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Should-Have (Month 1)</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">□</span>
                  <span className="text-gray-700">Security monitoring setup</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">□</span>
                  <span className="text-gray-700">Vulnerability scanning</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">□</span>
                  <span className="text-gray-700">GDPR compliance tools</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">□</span>
                  <span className="text-gray-700">Incident response plan</span>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">□</span>
                  <span className="text-gray-700">Security training for staff</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cost of Security */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">💰 Security Investment vs Risk</h2>
          
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Cost of Security Implementation</h3>
                <ul className="space-y-1 text-indigo-100">
                  <li>• Initial setup: $50,000</li>
                  <li>• Monthly monitoring: $5,000</li>
                  <li>• Annual audit: $20,000</li>
                  <li>• Staff training: $10,000/year</li>
                  <li>• Total first year: $130,000</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Cost of Security Breach</h3>
                <ul className="space-y-1 text-indigo-100">
                  <li>• Fines: $100,000 - $5M</li>
                  <li>• Customer churn: 20-40%</li>
                  <li>• Reputation damage: Priceless</li>
                  <li>• Legal fees: $50,000+</li>
                  <li>• Business loss: $500,000+</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xl">
                <strong>ROI:</strong> Every $1 spent on security saves $10+ in potential breach costs
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
