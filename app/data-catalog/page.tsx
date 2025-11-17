'use client'

import { Database, Search, Lock, Download, Eye, FileText } from 'lucide-react'
import SectionCard from '@/components/ui/SectionCard'
import Badge from '@/components/ui/Badge'
import StatCard from '@/components/ui/StatCard'

export default function DataCatalogPage() {
  const datasets = [
    { 
      id: 1, 
      name: 'Traffic Flow Data', 
      category: 'Transportation',
      records: '2.4M',
      updated: '2 hours ago',
      access: 'restricted',
      format: 'CSV, JSON'
    },
    { 
      id: 2, 
      name: 'Air Quality Measurements', 
      category: 'Environment',
      records: '890K',
      updated: '1 hour ago',
      access: 'public',
      format: 'JSON, XML'
    },
    { 
      id: 3, 
      name: 'Population Demographics', 
      category: 'Demographics',
      records: '125K',
      updated: '1 day ago',
      access: 'restricted',
      format: 'CSV'
    },
    { 
      id: 4, 
      name: 'Public Transport Routes', 
      category: 'Transportation',
      records: '45K',
      updated: '3 hours ago',
      access: 'public',
      format: 'GeoJSON'
    },
    { 
      id: 5, 
      name: 'Building Permits', 
      category: 'Urban Planning',
      records: '67K',
      updated: '5 hours ago',
      access: 'restricted',
      format: 'PDF, CSV'
    },
    { 
      id: 6, 
      name: 'CCTV Camera Locations', 
      category: 'Security',
      records: '250',
      updated: '1 week ago',
      access: 'confidential',
      format: 'JSON'
    },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Data Catalog</h1>
          <p className="text-gray-400">Centralized data repository and access management</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Download className="w-4 h-4" />
          Bulk Export
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Datasets"
          value="1,247"
          change="+23"
          changeType="positive"
          icon={Database}
          iconColor="text-primary-400"
        />
        <StatCard
          title="Total Records"
          value="15.2M"
          change="+340K"
          changeType="positive"
          icon={FileText}
          iconColor="text-green-400"
        />
        <StatCard
          title="Public Datasets"
          value="342"
          change="+12"
          changeType="positive"
          icon={Eye}
          iconColor="text-blue-400"
        />
        <StatCard
          title="Access Requests"
          value="89"
          change="+7"
          changeType="neutral"
          icon={Lock}
          iconColor="text-yellow-400"
        />
      </div>

      {/* Search & Filter */}
      <SectionCard title="Search Datasets" subtitle="Find and access data" icon={Search}>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, category, or keywords..."
                className="input-glass pl-10 pr-4 w-full"
              />
            </div>
            <button className="btn-secondary px-6">Filter</button>
          </div>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="primary">All Categories</Badge>
            <Badge variant="default">Transportation</Badge>
            <Badge variant="default">Environment</Badge>
            <Badge variant="default">Demographics</Badge>
            <Badge variant="default">Urban Planning</Badge>
            <Badge variant="default">Security</Badge>
          </div>
        </div>
      </SectionCard>

      {/* Dataset Table */}
      <SectionCard title="Available Datasets" subtitle={`${datasets.length} datasets found`} icon={Database}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Dataset Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Category</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Records</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Format</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Access</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Updated</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((dataset) => (
                <tr key={dataset.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                        <Database className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{dataset.name}</p>
                        <p className="text-xs text-gray-400">ID: DS-{dataset.id.toString().padStart(3, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="default" size="sm">{dataset.category}</Badge>
                  </td>
                  <td className="py-4 px-4 text-white">{dataset.records}</td>
                  <td className="py-4 px-4 text-sm text-gray-400">{dataset.format}</td>
                  <td className="py-4 px-4">
                    <Badge 
                      variant={
                        dataset.access === 'public' ? 'success' : 
                        dataset.access === 'restricted' ? 'warning' : 'error'
                      }
                      size="sm"
                    >
                      {dataset.access}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-400">{dataset.updated}</td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <button className="btn-secondary py-1 px-3 text-sm flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        View
                      </button>
                      {dataset.access === 'public' ? (
                        <button className="btn-primary py-1 px-3 text-sm flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          Download
                        </button>
                      ) : (
                        <button className="btn-secondary py-1 px-3 text-sm flex items-center gap-1">
                          <Lock className="w-3 h-3" />
                          Request
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Metadata Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard title="Dataset Metadata" subtitle="Detailed information" icon={FileText}>
          <div className="glass-card p-6 space-y-4">
            <div>
              <h4 className="text-sm text-gray-400 mb-1">Dataset Name</h4>
              <p className="text-white font-medium">Traffic Flow Data</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-1">Description</h4>
              <p className="text-sm text-gray-300">
                Real-time and historical traffic flow data collected from sensors across the city. 
                Includes vehicle counts, average speeds, and congestion levels.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-gray-400 mb-1">Created</h4>
                <p className="text-white">Jan 15, 2024</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-1">Last Updated</h4>
                <p className="text-white">2 hours ago</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-1">Update Frequency</h4>
                <p className="text-white">Real-time</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-1">Owner</h4>
                <p className="text-white">Transport Dept.</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm text-gray-400 mb-2">Tags</h4>
              <div className="flex gap-2 flex-wrap">
                <Badge size="sm">traffic</Badge>
                <Badge size="sm">transportation</Badge>
                <Badge size="sm">real-time</Badge>
                <Badge size="sm">sensors</Badge>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Access Control" subtitle="Data governance" icon={Lock}>
          <div className="space-y-4">
            <div className="glass-card p-4">
              <h4 className="text-sm font-medium text-white mb-3">Access Levels</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Public Access</span>
                  <Badge variant="success">342 datasets</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Restricted Access</span>
                  <Badge variant="warning">567 datasets</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Confidential</span>
                  <Badge variant="error">338 datasets</Badge>
                </div>
              </div>
            </div>

            <div className="glass-card p-4">
              <h4 className="text-sm font-medium text-white mb-3">Pending Access Requests</h4>
              <div className="space-y-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-white/5 rounded">
                    <div>
                      <p className="text-sm text-white">User Request #{i}</p>
                      <p className="text-xs text-gray-400">Population Data</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-primary py-1 px-2 text-xs">Approve</button>
                      <button className="btn-secondary py-1 px-2 text-xs">Deny</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-secondary w-full">
              View All Requests
            </button>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
