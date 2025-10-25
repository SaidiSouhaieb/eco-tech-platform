import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { TrendingUp, Eye, Scan, MapPin, Package } from 'lucide-react';

interface AnalyticsPageProps {
  onNavigate: (page: string) => void;
}

export function AnalyticsPage({ onNavigate }: AnalyticsPageProps) {
  const viewsData = [
    { month: 'Jan', views: 245, scans: 89 },
    { month: 'Feb', views: 312, scans: 124 },
    { month: 'Mar', views: 398, scans: 156 },
    { month: 'Apr', views: 467, scans: 189 },
    { month: 'May', views: 534, scans: 223 },
    { month: 'Jun', views: 621, scans: 267 },
  ];

  const productPerformance = [
    { name: 'Eco Bottle Pro', views: 1234, scans: 456, conversions: 89 },
    { name: 'Reusable Cup', views: 987, scans: 342, conversions: 67 },
    { name: 'Food Container', views: 756, scans: 289, conversions: 54 },
    { name: 'Lunch Box', views: 634, scans: 234, conversions: 43 },
    { name: 'Water Bottle', views: 521, scans: 198, conversions: 38 },
  ];

  const ecoScoreDistribution = [
    { name: 'A Grade', value: 12, color: 'var(--score-a)' },
    { name: 'B Grade', value: 8, color: 'var(--score-b)' },
    { name: 'C Grade', value: 3, color: 'var(--score-c)' },
    { name: 'D Grade', value: 1, color: 'var(--score-d)' },
    { name: 'E Grade', value: 0, color: 'var(--score-e)' },
  ];

  const locationData = [
    { city: 'San Francisco', scans: 234, engagement: 89 },
    { city: 'New York', scans: 198, engagement: 76 },
    { city: 'Los Angeles', scans: 167, engagement: 82 },
    { city: 'Seattle', scans: 145, engagement: 71 },
    { city: 'Austin', scans: 123, engagement: 68 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2>Analytics</h2>
              <p className="text-sm text-muted-foreground">
                Track your product performance and user engagement
              </p>
            </div>
            
            <Select defaultValue="30d">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">3,497</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">↑ 18%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
              <Scan className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">1,328</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">↑ 24%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Eco Score</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">A-</div>
              <p className="text-xs text-muted-foreground">
                Excellent sustainability rating
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl">24</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">↑ 3</span> new this month
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="geography">Geography</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Views & Scans Trend</CardTitle>
                  <CardDescription>Monthly performance over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={viewsData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis 
                        dataKey="month" 
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '0.5rem',
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="views" 
                        stroke="var(--eco-green-primary)" 
                        strokeWidth={2}
                        name="Views"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="scans" 
                        stroke="var(--tech-blue)" 
                        strokeWidth={2}
                        name="Scans"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eco Score Distribution</CardTitle>
                  <CardDescription>Breakdown of product ratings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={ecoScoreDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {ecoScoreDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '0.5rem',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            <Card>
              <CardHeader>
                <CardTitle>Product Performance</CardTitle>
                <CardDescription>Detailed metrics for each product</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={productPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="name" 
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis 
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border)',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Legend />
                    <Bar dataKey="views" fill="var(--eco-green-primary)" name="Views" />
                    <Bar dataKey="scans" fill="var(--tech-blue)" name="Scans" />
                    <Bar dataKey="conversions" fill="var(--score-c)" name="Conversions" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Geography Tab */}
          <TabsContent value="geography">
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Scans and engagement by location</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={locationData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis 
                        type="number"
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                      />
                      <YAxis 
                        dataKey="city" 
                        type="category"
                        stroke="var(--muted-foreground)"
                        fontSize={12}
                        width={100}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'var(--card)',
                          border: '1px solid var(--border)',
                          borderRadius: '0.5rem',
                        }}
                      />
                      <Legend />
                      <Bar dataKey="scans" fill="var(--eco-green-primary)" name="Scans" />
                      <Bar dataKey="engagement" fill="var(--tech-blue)" name="Engagement %" />
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h4>Top Locations</h4>
                    </div>
                    <div className="space-y-3">
                      {locationData.map((location, index) => (
                        <div key={location.city} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                              {index + 1}
                            </div>
                            <span>{location.city}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {location.scans} scans · {location.engagement}% engagement
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
