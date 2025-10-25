import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { mockProducts } from '../lib/mock-data';
import { Product } from '../lib/types';
import { Scan, Search, Camera, MapPin, Sparkles } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Separator } from '../components/ui/separator';

interface ScannerPageProps {
  onNavigate: (page: string) => void;
}

export function ScannerPage({ onNavigate }: ScannerPageProps) {
  const [scannedProduct, setScannedProduct] = useState<Product | null>(null);
  const [barcode, setBarcode] = useState('');

  const handleScan = () => {
    const product = mockProducts[0];
    setScannedProduct(product);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2">Eco-Check Scanner</h1>
          <p className="text-muted-foreground">
            Scan products to check their eco-friendliness
          </p>
        </div>

        {!scannedProduct ? (
          <div className="space-y-6">
            {/* Mobile Scanner */}
            <Card>
              <CardHeader>
                <h3>Scan with Camera</h3>
                <p className="text-sm text-muted-foreground">
                  Point your camera at a barcode or QR code
                </p>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg border-2 border-dashed bg-muted/50 flex flex-col items-center justify-center gap-4">
                  <div className="rounded-full bg-[hsl(var(--primary-light))] p-6">
                    <Camera className="h-12 w-12 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium">Camera Scanner</p>
                    <p className="text-sm text-muted-foreground">Tap to activate camera</p>
                  </div>
                  <Button size="lg" onClick={handleScan}>
                    <Scan className="mr-2 h-5 w-5" />
                    Start Scanning
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Manual Input */}
            <Card>
              <CardHeader>
                <h3>Manual Entry</h3>
                <p className="text-sm text-muted-foreground">
                  Enter barcode or product name manually
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Enter barcode or search product..."
                      value={barcode}
                      onChange={(e) => setBarcode(e.target.value)}
                      className="pl-9"
                      onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                    />
                  </div>
                  <Button onClick={handleScan}>Search</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Product Result */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2>{scannedProduct.name}</h2>
                      <p className="text-muted-foreground">{scannedProduct.description}</p>
                    </div>
                    <EcoScoreBadge score={scannedProduct.ecoScore} size="lg" />
                  </div>
                  <div className="aspect-square w-48 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Scan className="h-16 w-16 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Materials Breakdown */}
            <Card>
              <CardHeader>
                <h3>Materials Breakdown</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {scannedProduct.materials.map((material, index) => (
                  <div key={index}>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{material.name}</span>
                        {material.sustainable && (
                          <Badge variant="outline" className="text-xs">
                            Sustainable
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{material.percentage}%</span>
                    </div>
                    <Progress value={material.percentage} className="h-2" />
                  </div>
                ))}
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="font-medium">Overall Recyclability</span>
                  <span className="text-lg font-bold text-[hsl(var(--primary))]">
                    {scannedProduct.recyclability}%
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="cursor-pointer transition-all hover:shadow-lg" onClick={() => onNavigate('similar-products')}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[hsl(var(--secondary))]/10 p-3">
                      <Sparkles className="h-6 w-6 text-[hsl(var(--secondary))]" />
                    </div>
                    <div>
                      <h4>Find Similar Products</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Discover eco-friendly alternatives
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="cursor-pointer transition-all hover:shadow-lg" onClick={() => onNavigate('recycling-map')}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[hsl(var(--primary))]/10 p-3">
                      <MapPin className="h-6 w-6 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <h4>Recycling Locations</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Find nearby recycling points
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" size="lg" onClick={() => setScannedProduct(null)}>
                <Scan className="mr-2 h-5 w-5" />
                Scan Another Product
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
