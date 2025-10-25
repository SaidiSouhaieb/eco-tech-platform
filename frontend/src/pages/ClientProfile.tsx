import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Progress } from '../components/ui/progress';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { 
  User, Mail, MapPin, Calendar, Scan, Heart, 
  Leaf, Recycle, TrendingUp, Award, Clock, ExternalLink
} from 'lucide-react';
import { mockProducts } from '../lib/mock-data';

interface ClientProfileProps {
  onNavigate: (page: string) => void;
}

export function ClientProfile({ onNavigate }: ClientProfileProps) {
  const scanHistory = [
    { 
      id: '1', 
      product: mockProducts[0], 
      scannedAt: '2024-10-20T10:30:00', 
      location: 'San Francisco, CA' 
    },
    { 
      id: '2', 
      product: mockProducts[1], 
      scannedAt: '2024-10-19T14:20:00', 
      location: 'San Francisco, CA' 
    },
    { 
      id: '3', 
      product: mockProducts[2], 
      scannedAt: '2024-10-18T09:15:00', 
      location: 'Oakland, CA' 
    },
  ];

  const savedProducts = mockProducts.slice(0, 4);

  const ecoImpactStats = {
    totalScans: 47,
    savedProducts: 12,
    co2Saved: 23.5, // kg
    itemsRecycled: 18,
    ecoPoints: 1250,
  };

  const achievements = [
    { icon: Scan, title: 'First Scan', description: 'Scanned your first product', earned: true },
    { icon: Recycle, title: 'Recycler', description: 'Recycled 10+ items', earned: true },
    { icon: Leaf, title: 'Eco Warrior', description: 'Saved 20kg CO₂', earned: true },
    { icon: Award, title: 'Top Contributor', description: 'Made 50+ scans', earned: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">JD</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h2>John Doe</h2>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>john.doe@email.com</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Joined Oct 2024</span>
                </div>
              </div>
            </div>
            
            <Button variant="outline">Edit Profile</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Impact Dashboard */}
        <div className="mb-8">
          <h3 className="mb-4">Your Eco Impact</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Scans</CardTitle>
                <Scan className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{ecoImpactStats.totalScans}</div>
                <p className="text-xs text-muted-foreground">Products checked</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Saved Products</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{ecoImpactStats.savedProducts}</div>
                <p className="text-xs text-muted-foreground">In your collection</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">CO₂ Saved</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{ecoImpactStats.co2Saved} kg</div>
                <p className="text-xs text-muted-foreground">Carbon footprint reduced</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Items Recycled</CardTitle>
                <Recycle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{ecoImpactStats.itemsRecycled}</div>
                <p className="text-xs text-muted-foreground">Successfully recycled</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eco Points</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{ecoImpactStats.ecoPoints}</div>
                <p className="text-xs text-muted-foreground">Reward points</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="history" className="space-y-6">
          <TabsList>
            <TabsTrigger value="history">Scan History</TabsTrigger>
            <TabsTrigger value="saved">Saved Products</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Scan History Tab */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Recent Scans</CardTitle>
                <CardDescription>Your product scanning activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scanHistory.map((scan) => (
                    <div 
                      key={scan.id}
                      className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => onNavigate('product-detail')}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={scan.product.images[0]} 
                          alt={scan.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="truncate">{scan.product.name}</h4>
                          <EcoScoreBadge score={scan.product.ecoScore} />
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {scan.product.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{new Date(scan.scannedAt).toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{scan.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Saved Products Tab */}
          <TabsContent value="saved">
            <Card>
              <CardHeader>
                <CardTitle>Saved Products</CardTitle>
                <CardDescription>Products you've bookmarked for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {savedProducts.map((product) => (
                    <div 
                      key={product.id}
                      className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => onNavigate('product-detail')}
                    >
                      <div className="aspect-square bg-muted">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm">{product.name}</h4>
                          <EcoScoreBadge score={product.ecoScore} />
                        </div>
                        <div className="flex items-center gap-2">
                          <Recycle className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {product.recyclability}% recyclable
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Eco Achievements</CardTitle>
                <CardDescription>Your sustainability milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Achievement Progress</span>
                      <span className="text-sm text-muted-foreground">3 of 4 earned</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div 
                          key={index}
                          className={`p-4 rounded-lg border ${
                            achievement.earned 
                              ? 'bg-primary/5 border-primary/20' 
                              : 'bg-muted/50 opacity-60'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              achievement.earned 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="text-sm">{achievement.title}</h4>
                                {achievement.earned && (
                                  <Badge variant="outline" className="text-xs">
                                    ✓ Earned
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
