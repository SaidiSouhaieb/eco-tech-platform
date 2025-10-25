import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { Switch } from '../components/ui/switch';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { Progress } from '../components/ui/progress';
import { 
  ArrowLeft, Download, Eye, Scan, Edit, 
  Calendar, Package, Ruler, Droplet, 
  Recycle, Leaf, Factory, Image as ImageIcon,
  History, FileText
} from 'lucide-react';
import { Product } from '../lib/types';

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: string) => void;
}

export function ProductDetailPage({ product, onNavigate }: ProductDetailPageProps) {
  const [isPublished, setIsPublished] = useState(product.status === 'published');

  const exportPDF = () => {
    // Placeholder for PDF export
    alert('Exporting product specifications as PDF...');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onNavigate('store-management')}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h2>{product.name}</h2>
                <p className="text-sm text-muted-foreground">
                  Created {new Date(product.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Label htmlFor="publish">Published</Label>
                <Switch 
                  id="publish"
                  checked={isPublished}
                  onCheckedChange={setIsPublished}
                />
              </div>
              <Button variant="outline" onClick={exportPDF}>
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button onClick={() => onNavigate('ai-creator')}>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specs</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            <TabsTrigger value="ai-history">AI History</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Name</div>
                      <div>{product.name}</div>
                    </div>
                    <Separator />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Description</div>
                      <p>{product.description}</p>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Status</div>
                        <Badge variant={isPublished ? 'default' : 'secondary'}>
                          {isPublished ? 'Published' : 'Draft'}
                        </Badge>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Eco Score</div>
                        <EcoScoreBadge score={product.ecoScore} />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Product Images</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {product.images.map((image, index) => (
                        <div key={index} className="aspect-square bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${product.name} - View ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span>Views</span>
                      </div>
                      <span>{product.views || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Scan className="w-4 h-4 text-muted-foreground" />
                        <span>Scans</span>
                      </div>
                      <span>{product.scans || 0}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>Created</span>
                      </div>
                      <span className="text-sm">{new Date(product.createdAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recyclability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Recyclable Materials</span>
                        <span>{product.recyclability}%</span>
                      </div>
                      <Progress value={product.recyclability} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Specs Tab */}
          <TabsContent value="specs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Technical Specifications</CardTitle>
                <CardDescription>Detailed product dimensions and capacity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Droplet className="w-4 h-4" />
                        <span>Capacity</span>
                      </div>
                      <div className="text-2xl">{product.capacity || 500} ml</div>
                    </div>
                    
                    {product.dimensions && (
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Ruler className="w-4 h-4" />
                          <span>Dimensions</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <div className="text-muted-foreground">Height</div>
                            <div>{product.dimensions.height} mm</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Width</div>
                            <div>{product.dimensions.width} mm</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Depth</div>
                            <div>{product.dimensions.depth} mm</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Package className="w-4 h-4" />
                        <span>Product Type</span>
                      </div>
                      <div>Reusable Container</div>
                    </div>
                    
                    {product.manufacturer && (
                      <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Factory className="w-4 h-4" />
                          <span>Manufacturer</span>
                        </div>
                        <div>{product.manufacturer}</div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Material Composition</CardTitle>
                <CardDescription>Breakdown of materials used in this product</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.materials.map((material, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="text-sm">{material.name}</div>
                          <div className="flex gap-2">
                            {material.recyclable && (
                              <Badge variant="outline" className="text-xs">
                                <Recycle className="w-3 h-3 mr-1" />
                                Recyclable
                              </Badge>
                            )}
                            {material.sustainable && (
                              <Badge variant="outline" className="text-xs">
                                <Leaf className="w-3 h-3 mr-1" />
                                Sustainable
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-sm">{material.percentage}%</div>
                      </div>
                      <Progress value={material.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Manufacturing Tab */}
          <TabsContent value="manufacturing">
            <Card>
              <CardHeader>
                <CardTitle>Manufacturing Information</CardTitle>
                <CardDescription>Production details and processes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4>Production Method</h4>
                    <p className="text-muted-foreground">Injection molding with recycled materials</p>
                  </div>
                  <Separator />
                  <div>
                    <h4>Quality Standards</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge>ISO 14001</Badge>
                      <Badge>FDA Approved</Badge>
                      <Badge>BPA Free</Badge>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4>Manufacturing Location</h4>
                    <p className="text-muted-foreground">Sustainable facility in Europe</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Sustainability Tab */}
          <TabsContent value="sustainability">
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Metrics</CardTitle>
                <CardDescription>Environmental impact and eco-friendliness</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4>Overall Eco Score</h4>
                    <EcoScoreBadge score={product.ecoScore} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This product achieves an excellent environmental rating based on materials, recyclability, and production methods.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Carbon Footprint</span>
                      <span className="text-sm">Low</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Water Usage</span>
                      <span className="text-sm">Minimal</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Recyclability</span>
                      <span className="text-sm">{product.recyclability}%</span>
                    </div>
                    <Progress value={product.recyclability} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI History Tab */}
          <TabsContent value="ai-history">
            <Card>
              <CardHeader>
                <CardTitle>AI Conversation History</CardTitle>
                <CardDescription>Design decisions made with AI assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <History className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="text-sm">
                        <span className="text-muted-foreground">You:</span> I need a reusable water bottle that's eco-friendly
                      </div>
                      <div className="text-sm bg-muted p-3 rounded-lg">
                        <span className="text-muted-foreground">AI:</span> I recommend using rPET (recycled PET) for the main body. It's 95% recyclable, durable, and has a lower carbon footprint than virgin plastic. Would you like me to suggest dimensions?
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Images Tab */}
          <TabsContent value="images">
            <Card>
              <CardHeader>
                <CardTitle>Product Images</CardTitle>
                <CardDescription>All generated and uploaded images</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <div key={index} className="space-y-2">
                      <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Product view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground text-center">
                        View {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
