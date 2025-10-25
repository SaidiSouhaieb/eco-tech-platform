import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { mockRecyclingPoints } from '../lib/mock-data';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { MapPin, Navigation, Clock, Package, DollarSign, Map, List, Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface RecyclingMapProps {
  onNavigate: (page: string) => void;
}

export function RecyclingMap({ onNavigate }: RecyclingMapProps) {
  const [selectedPoint, setSelectedPoint] = useState(mockRecyclingPoints[0]);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2">Recycling & Buyback Locations</h1>
          <p className="text-muted-foreground">
            Find nearby collection points and get rewarded
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by location, material type..."
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'map' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('map')}
                >
                  <Map className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer">All Types</Badge>
              <Badge variant="outline" className="cursor-pointer">Recycling Centers</Badge>
              <Badge variant="outline" className="cursor-pointer">Buyback Points</Badge>
              <Badge variant="outline" className="cursor-pointer">Open Now</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map View */}
          <Card className="lg:col-span-2">
            <CardContent className="p-0">
              {viewMode === 'map' ? (
                <div className="aspect-video bg-muted/50 rounded-lg overflow-hidden relative">
                  {/* Mock Map Interface */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 mx-auto mb-4 text-[hsl(var(--primary))]" />
                      <p className="font-medium">Interactive Map View</p>
                      <p className="text-sm text-muted-foreground">
                        In production, this would show an actual map with pins
                      </p>
                    </div>
                  </div>
                  
                  {/* Mock Map Pins */}
                  {mockRecyclingPoints.map((point, index) => (
                    <div
                      key={point.id}
                      className="absolute cursor-pointer transition-transform hover:scale-110"
                      style={{
                        left: `${20 + index * 20}%`,
                        top: `${30 + (index % 2) * 30}%`,
                      }}
                      onClick={() => setSelectedPoint(point)}
                    >
                      <div className="relative">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          point.type === 'buyback'
                            ? 'bg-green-500'
                            : 'bg-[hsl(var(--primary))]'
                        } text-white shadow-lg`}>
                          <MapPin className="h-5 w-5" />
                        </div>
                        {selectedPoint?.id === point.id && (
                          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 z-10">
                            <Card className="shadow-xl">
                              <CardContent className="p-3">
                                <p className="font-medium text-sm">{point.name}</p>
                                <p className="text-xs text-muted-foreground">{point.address}</p>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {mockRecyclingPoints.map((point) => (
                    <Card
                      key={point.id}
                      className={`cursor-pointer transition-all ${
                        selectedPoint?.id === point.id ? 'ring-2 ring-[hsl(var(--primary))]' : ''
                      }`}
                      onClick={() => setSelectedPoint(point)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            point.type === 'buyback' ? 'bg-green-100 text-green-600' : 'bg-[hsl(var(--primary-light))] text-[hsl(var(--primary))]'
                          }`}>
                            <MapPin className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-sm">{point.name}</h4>
                              <Badge variant={point.type === 'buyback' ? 'default' : 'secondary'}>
                                {point.type}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{point.address}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Details Panel */}
          {selectedPoint && (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3>{selectedPoint.name}</h3>
                    <Badge variant={selectedPoint.type === 'buyback' ? 'default' : 'secondary'} className="mt-2">
                      {selectedPoint.type === 'buyback' ? 'Buyback Point' : 'Recycling Center'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-muted-foreground">{selectedPoint.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Hours</p>
                    <p className="text-sm text-muted-foreground">{selectedPoint.hours}</p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-3">
                  <Package className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium mb-2">Accepted Materials</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedPoint.acceptedMaterials.map((material, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedPoint.incentives && (
                  <>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <DollarSign className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Incentives</p>
                        <p className="text-sm text-green-600">{selectedPoint.incentives}</p>
                      </div>
                    </div>
                  </>
                )}

                <Separator />

                <div className="space-y-2">
                  <Button className="w-full">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full">
                    Share Location
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Category Tabs */}
        <Card className="mt-6">
          <CardHeader>
            <h3>Browse by Material Type</h3>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="plastic">Plastic</TabsTrigger>
                <TabsTrigger value="glass">Glass</TabsTrigger>
                <TabsTrigger value="metal">Metal</TabsTrigger>
                <TabsTrigger value="electronics">Electronics</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Showing {mockRecyclingPoints.length} locations accepting all material types
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
