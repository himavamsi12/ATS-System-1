import React from 'react'

const SystemActivityLog = () => {
  const activities = [
    {
      id: 1,
      time: '2 mins ago',
      user: 'Robert Johnson',
      action: 'User permission update',
      status: 'success'
    },
    {
      id: 2,
      time: '15 mins ago',
      user: 'System',
      action: 'Backup completed',
      status: 'success'
    },
    {
      id: 3,
      time: '1 hour ago',
      user: 'Maria Garcia',
      action: 'Certificate template update',
      status: 'pending'
    },
    {
      id: 4,
      time: '2 hours ago',
      user: 'System',
      action: 'Server maintenance',
      status: 'failed'
    }
  ]

  const getStatusBadge = (status) => {
    switch (status) {
      case 'success':
        return <span className="status-badge status-success">Success</span>
      case 'pending':
        return <span className="status-badge status-pending">Pending</span>
      case 'failed':
        return <span className="status-badge status-failed">Failed</span>
      default:
        return <span className="status-badge">Unknown</span>
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">System Activity Log</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {activity.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {activity.user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {activity.action}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(activity.status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SystemActivityLog