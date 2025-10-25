import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { mockProducts } from '../lib/mock-data';
import { EcoScore } from '../lib/types';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet';

interface SimilarProductsPageProps {
  originalProduct?: string;
  onNavigate: (page: string) => void;
}

export function SimilarProductsPage({ originalProduct, onNavigate }: SimilarProductsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [selectedScore, setSelectedScore] = useState<EcoScore | 'all'>('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesScore = selectedScore === 'all' || product.ecoScore === selectedScore;
    const matchesStatus = showAvailableOnly ? product.status === 'published' : true;
    
    return matchesSearch && matchesScore && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('scanner')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h3>Similar Eco-Friendly Products</h3>
              {originalProduct && (
                <p className="text-sm text-muted-foreground">
                  Alternatives to: {originalProduct}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search eco-friendly products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Mobile Filter Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                  <SheetDescription>
                    Refine your search with these filters
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <FilterControls 
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
                    selectedScore={selectedScore}
                    setSelectedScore={setSelectedScore}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    showAvailableOnly={showAvailableOnly}
                    setShowAvailableOnly={setShowAvailableOnly}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Filters */}
          <Card className="hidden lg:block">
            <CardContent className="pt-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters:</span>
                </div>
                <div className="flex-1 grid grid-cols-4 gap-4">
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger>
                      <SelectValue placeholder="Material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Materials</SelectItem>
                      <SelectItem value="rpet">rPET</SelectItem>
                      <SelectItem value="glass">Glass</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectItem value="bamboo">Bamboo</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedScore} onValueChange={(value) => setSelectedScore(value as EcoScore | 'all')}>
                    <SelectTrigger>
                      <SelectValue placeholder="Eco Score" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Scores</SelectItem>
                      <SelectItem value="A">A - Excellent</SelectItem>
                      <SelectItem value="B">B - Very Good</SelectItem>
                      <SelectItem value="C">C - Good</SelectItem>
                      <SelectItem value="D">D - Fair</SelectItem>
                      <SelectItem value="E">E - Poor</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="space-y-2">
                    <label className="text-sm">Price Range</label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100}
                      step={5}
                      className="w-full"
                    />
                    <div className="text-xs text-muted-foreground">
                      ${priceRange[0]} - ${priceRange[1]}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="available"
                      checked={showAvailableOnly}
                      onChange={(e) => setShowAvailableOnly(e.target.checked)}
                      className="rounded"
                    />
                    <label htmlFor="available" className="text-sm cursor-pointer">
                      Available only
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Filters */}
          {(selectedMaterial !== 'all' || selectedScore !== 'all' || showAvailableOnly) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              {selectedMaterial !== 'all' && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedMaterial('all')}>
                  Material: {selectedMaterial} ×
                </Badge>
              )}
              {selectedScore !== 'all' && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedScore('all')}>
                  Score: {selectedScore} ×
                </Badge>
              )}
              {showAvailableOnly && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setShowAvailableOnly(false)}>
                  Available only ×
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => {
                  setSelectedMaterial('all');
                  setSelectedScore('all');
                  setShowAvailableOnly(false);
                }}
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} eco-friendly alternatives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onNavigate('product-detail')}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <Card className="py-12">
            <CardContent className="text-center">
              <p className="text-muted-foreground">No products match your filters. Try adjusting your search criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

interface FilterControlsProps {
  selectedMaterial: string;
  setSelectedMaterial: (value: string) => void;
  selectedScore: EcoScore | 'all';
  setSelectedScore: (value: EcoScore | 'all') => void;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  showAvailableOnly: boolean;
  setShowAvailableOnly: (value: boolean) => void;
}

function FilterControls({
  selectedMaterial,
  setSelectedMaterial,
  selectedScore,
  setSelectedScore,
  priceRange,
  setPriceRange,
  showAvailableOnly,
  setShowAvailableOnly,
}: FilterControlsProps) {
  return (
    <>
      <div className="space-y-2">
        <label className="text-sm">Material</label>
        <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
          <SelectTrigger>
            <SelectValue placeholder="Material" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Materials</SelectItem>
            <SelectItem value="rpet">rPET</SelectItem>
            <SelectItem value="glass">Glass</SelectItem>
            <SelectItem value="aluminum">Aluminum</SelectItem>
            <SelectItem value="bamboo">Bamboo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm">Eco Score</label>
        <Select value={selectedScore} onValueChange={(value) => setSelectedScore(value as EcoScore | 'all')}>
          <SelectTrigger>
            <SelectValue placeholder="Eco Score" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Scores</SelectItem>
            <SelectItem value="A">A - Excellent</SelectItem>
            <SelectItem value="B">B - Very Good</SelectItem>
            <SelectItem value="C">C - Good</SelectItem>
            <SelectItem value="D">D - Fair</SelectItem>
            <SelectItem value="E">E - Poor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm">Price Range</label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={5}
          className="w-full"
        />
        <div className="text-xs text-muted-foreground">
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="available-mobile"
          checked={showAvailableOnly}
          onChange={(e) => setShowAvailableOnly(e.target.checked)}
          className="rounded"
        />
        <label htmlFor="available-mobile" className="text-sm cursor-pointer">
          Show available products only
        </label>
      </div>
    </>
  );
}
