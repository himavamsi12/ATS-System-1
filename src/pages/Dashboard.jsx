import React from 'react'
import { Users, Shield, AlertTriangle } from 'lucide-react'
import MetricCard from '../components/MetricCard'
import SystemActivityLog from '../components/SystemActivityLog'
import QuickActions from '../components/QuickActions'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* View Toggle */}
      <div className="flex space-x-2">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          Technician View
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700">
          Admin View
        </button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MetricCard
          title="Active Users"
          value="156"
          trend="up"
          trendValue="8% from last month"
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="System Health"
          value="98.5%"
          trend="up"
          trendValue="1.2% from last week"
          icon={Shield}
          color="green"
        />
        <MetricCard
          title="System Alerts"
          value="3"
          trend="up"
          trendValue="2 new alerts"
          icon={AlertTriangle}
          color="yellow"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Activity Log */}
        <div className="lg:col-span-2">
          <SystemActivityLog />
        </div>
        
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <QuickActions />
        </div>
      </div>
    </div>
  )
}

export default Dashboard