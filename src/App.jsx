import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { 
  ChartBarIcon, 
  CogIcon, 
  BookOpenIcon, 
  ExclamationTriangleIcon,
  LightBulbIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LightBulbIcon as TipsIcon
} from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

// Import all content components
import DeepDiveContent from './components/DeepDiveContent.jsx'
import ShopifyIntegrationContent from './components/ShopifyIntegrationContent.jsx'
import DecisionIntelligenceContent from './components/DecisionIntelligenceContent.jsx'
import MissingAutomationsContent from './components/MissingAutomationsContent.jsx'
import CodebaseReviewContent from './components/CodebaseReviewContent.jsx'
import BrandDifferentiationContent from './components/BrandDifferentiationContent.jsx'
import PerformanceOptimizationContent from './components/PerformanceOptimizationContent.jsx'
import SecurityComplianceContent from './components/SecurityComplianceContent.jsx'
import CostROIContent from './components/CostROIContent.jsx'
import BusinessDependencyContent from './components/BusinessDependencyContent.jsx'
import TipsTricksContent from './components/TipsTricksContent.jsx'

const tabs = [
  { 
    name: 'Deep Dive', 
    href: '/', 
    icon: ChartBarIcon,
    description: 'Rating: 8.0/10 - All 4 phases complete, production-ready for 40 brands'
  },
  { 
    name: 'Shopify Integration', 
    href: '/shopify', 
    icon: BookOpenIcon,
    description: 'E-commerce integration with real-time sync & order management'
  },
  { 
    name: 'Decision Intelligence', 
    href: '/decision-intelligence', 
    icon: SparklesIcon,
    description: 'ML roadmap: demand forecasting, inventory optimization, pricing insights'
  },
  { 
    name: 'Missing Automations', 
    href: '/missing-automations', 
    icon: CogIcon,
    description: 'Automated workflows: alerts, reports, webhooks, and task automation'
  },
  { 
    name: 'Codebase Review', 
    href: '/codebase-review', 
    icon: ExclamationTriangleIcon,
    description: 'Architecture analysis: multi-tenancy, performance, and code quality'
  },
  { 
    name: 'Brand Differentiation', 
    href: '/brand-differentiation', 
    icon: UserGroupIcon,
    description: 'Customization strategies: branding, features, and unique value props'
  },
  { 
    name: 'Performance', 
    href: '/performance', 
    icon: RocketLaunchIcon,
    description: 'Optimization results: 40-brand load testing, caching, and speed gains'
  },
  { 
    name: 'Security & Compliance', 
    href: '/security', 
    icon: ShieldCheckIcon,
    description: 'RBAC, data encryption, audit logs, and compliance frameworks'
  },
  { 
    name: 'Cost & ROI', 
    href: '/cost-roi', 
    icon: CurrencyDollarIcon,
    description: 'TCO analysis: infrastructure costs, revenue projections, and ROI metrics'
  },
  { 
    name: 'Business Dependency', 
    href: '/business-dependency', 
    icon: LinkIcon,
    description: 'Strategic playbook: becoming indispensable and ensuring long-term value'
  },
  { 
    name: 'Tips & Tricks', 
    href: '/tips-tricks', 
    icon: TipsIcon,
    description: 'Cheat codes: shortcuts, hacks, and career acceleration strategies'
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Woke Portal Review</h1>
              <span className="ml-2 text-sm text-gray-500 hidden sm:inline">40-Brand Scalability Analysis</span>
            </div>
            
            {/* Mobile menu button */}
            <button
              type="button"
              className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden sm:block bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const isActive = location.pathname === tab.href
                return (
                  <Link
                    key={tab.name}
                    to={tab.href}
                    className={classNames(
                      isActive
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center'
                    )}
                  >
                    <tab.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                    {tab.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu - Fixed positioning to stay visible */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-16 bg-white border-b border-gray-200 shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.href
              return (
                <Link
                  key={tab.name}
                  to={tab.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={classNames(
                    isActive
                      ? 'bg-blue-50 border-blue-500 text-blue-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium flex items-center'
                  )}
                >
                  <tab.icon className="h-5 w-5 mr-3" aria-hidden="true" />
                  <div>
                    <div className="font-medium">{tab.name}</div>
                    <div className="text-sm text-gray-500">{tab.description}</div>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 ml-auto" aria-hidden="true" />
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<DeepDiveContent />} />
          <Route path="/shopify" element={<ShopifyIntegrationContent />} />
          <Route path="/decision-intelligence" element={<DecisionIntelligenceContent />} />
          <Route path="/missing-automations" element={<MissingAutomationsContent />} />
          <Route path="/codebase-review" element={<CodebaseReviewContent />} />
          <Route path="/brand-differentiation" element={<BrandDifferentiationContent />} />
          <Route path="/performance" element={<PerformanceOptimizationContent />} />
          <Route path="/security" element={<SecurityComplianceContent />} />
          <Route path="/cost-roi" element={<CostROIContent />} />
          <Route path="/business-dependency" element={<BusinessDependencyContent />} />
          <Route path="/tips-tricks" element={<TipsTricksContent />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Woke Portal System Review • Generated on {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  )
}
