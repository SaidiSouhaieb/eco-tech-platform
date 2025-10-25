import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../lib/mock-data';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Slider } from '../components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';

interface ClientCatalogProps {
  onNavigate: (page: string) => void;
}

export function ClientCatalog({ onNavigate }: ClientCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const products = mockProducts.filter(p => p.status === 'published');

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2">Eco Product Catalog</h1>
          <p className="text-muted-foreground">
            Discover sustainable alternatives for everyday products
          </p>
        </div>

        {/* Search & Filters */}
        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <SlidersHorizontal className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Eco-Score</label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer">A</Badge>
                        <Badge variant="outline" className="cursor-pointer">B</Badge>
                        <Badge variant="outline" className="cursor-pointer">C</Badge>
                        <Badge variant="outline" className="cursor-pointer">D</Badge>
                        <Badge variant="outline" className="cursor-pointer">E</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Material Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="All materials" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Materials</SelectItem>
                          <SelectItem value="rpet">rPET</SelectItem>
                          <SelectItem value="glass">Glass</SelectItem>
                          <SelectItem value="steel">Stainless Steel</SelectItem>
                          <SelectItem value="bamboo">Bamboo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Recyclability (%)</label>
                      <Slider defaultValue={[80]} min={0} max={100} step={5} />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer">Bottles</Badge>
              <Badge variant="outline" className="cursor-pointer">Containers</Badge>
              <Badge variant="outline" className="cursor-pointer">Cups</Badge>
              <Badge variant="outline" className="cursor-pointer">Packaging</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onNavigate('scanner')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
