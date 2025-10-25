import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { mockProducts, mockFounderStats, mockAIConversations } from '../lib/mock-data';
import { ProductCard } from '../components/ProductCard';
import { PlusCircle, Package, Eye, Scan, TrendingUp, MessageSquare } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface FounderDashboardProps {
  onNavigate: (page: string) => void;
}

export function FounderDashboard({ onNavigate }: FounderDashboardProps) {
  const stats = mockFounderStats;
  const recentProducts = mockProducts.slice(0, 3);

  const ecoScoreData = [
    { name: 'A - Excellent', value: 5, color: 'hsl(var(--eco-a))' },
    { name: 'B - Good', value: 3, color: 'hsl(var(--eco-b))' },
    { name: 'C - Fair', value: 2, color: 'hsl(var(--eco-c))' },
    { name: 'D - Poor', value: 1, color: 'hsl(var(--eco-d))' },
    { name: 'E - Very Poor', value: 1, color: 'hsl(var(--eco-e))' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="mb-2">Founder Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your sustainable product portfolio
            </p>
          </div>
          <Button onClick={() => onNavigate('ai-creator')} size="lg">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Product with AI
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Products</p>
                  <p className="text-3xl font-bold">{stats.totalProducts}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--primary-light))]">
                  <Package className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Published</p>
                  <p className="text-3xl font-bold">{stats.publishedProducts}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-3xl font-bold">{stats.totalViews.toLocaleString()}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Scans</p>
                  <p className="text-3xl font-bold">{stats.totalScans.toLocaleString()}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Scan className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Eco-Score Distribution */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <h3>Eco-Score Distribution</h3>
              <p className="text-sm text-muted-foreground">
                Product sustainability ratings
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={ecoScoreData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    label
                  >
                    {ecoScoreData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Quick Actions & Recent Products */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <h3>Quick Actions</h3>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button 
                    variant="outline" 
                    className="h-auto flex-col items-start gap-2 p-4"
                    onClick={() => onNavigate('ai-creator')}
                  >
                    <PlusCircle className="h-6 w-6 text-[hsl(var(--primary))]" />
                    <div className="text-left">
                      <div className="font-semibold">Create Product</div>
                      <div className="text-xs text-muted-foreground">
                        Design with AI assistance
                      </div>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="h-auto flex-col items-start gap-2 p-4"
                    onClick={() => onNavigate('store-management')}
                  >
                    <Package className="h-6 w-6 text-[hsl(var(--secondary))]" />
                    <div className="text-left">
                      <div className="font-semibold">View Store</div>
                      <div className="text-xs text-muted-foreground">
                        Manage all products
                      </div>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="h-auto flex-col items-start gap-2 p-4"
                    onClick={() => onNavigate('analytics')}
                  >
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    <div className="text-left">
                      <div className="font-semibold">Analytics</div>
                      <div className="text-xs text-muted-foreground">
                        View detailed insights
                      </div>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="h-auto flex-col items-start gap-2 p-4"
                  >
                    <Scan className="h-6 w-6 text-purple-600" />
                    <div className="text-left">
                      <div className="font-semibold">Export Specs</div>
                      <div className="text-xs text-muted-foreground">
                        Download product data
                      </div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <h3>Recent Products</h3>
                  <p className="text-sm text-muted-foreground">
                    Your latest creations
                  </p>
                </div>
                <Button variant="outline" onClick={() => onNavigate('store-management')}>
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  {recentProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      showStats
                      onClick={() => onNavigate('product-detail')}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent AI Conversations */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <h3>Recent AI Conversations</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Continue where you left off with AI assistance
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAIConversations.slice(0, 3).map((conversation) => (
                <div
                  key={conversation.id}
                  className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50 cursor-pointer"
                  onClick={() => onNavigate('ai-creator')}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))]">
                    <span className="text-white">🤖</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium">{conversation.title}</h4>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          conversation.status === 'active' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : conversation.status === 'completed'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                        }`}>
                          {conversation.status}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">{conversation.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{conversation.preview}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-muted-foreground">
                        {conversation.messages.length} messages
                      </span>
                      {conversation.messages.filter(m => m.suggestions && m.suggestions.length > 0).length > 0 && (
                        <span className="text-xs text-[hsl(var(--primary))]">
                          {conversation.messages.filter(m => m.suggestions && m.suggestions.length > 0).length} suggestions
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <Button variant="outline" onClick={() => onNavigate('ai-creator')} className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" />
                Start New AI Conversation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
