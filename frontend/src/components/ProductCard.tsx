import { Product } from '../lib/types';
import { EcoScoreBadge } from './EcoScoreBadge';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Recycle, Eye, Scan } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
  showStats?: boolean;
}

export function ProductCard({ product, onClick, showStats = false }: ProductCardProps) {
  return (
    <Card 
      className="overflow-hidden transition-all hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-square bg-muted">
        {product.images && product.images.length > 0 ? (
          <ImageWithFallback
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Recycle className="h-16 w-16 text-muted-foreground" />
          </div>
        )}
        <div className="absolute top-2 right-2">
          <EcoScoreBadge score={product.ecoScore} size="sm" showLabel={false} />
        </div>
        {product.status === 'draft' && (
          <div className="absolute top-2 left-2">
            <Badge variant="secondary">Draft</Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="mb-1 line-clamp-1">{product.name}</h3>
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-xs">
            <Recycle className="mr-1 h-3 w-3" />
            {product.recyclability}% Recyclable
          </Badge>
          {product.capacity && (
            <Badge variant="outline" className="text-xs">
              {product.capacity}ml
            </Badge>
          )}
        </div>
      </CardContent>

      {showStats && (product.views || product.scans) && (
        <CardFooter className="border-t bg-muted/50 p-3">
          <div className="flex gap-4 text-xs text-muted-foreground">
            {product.views && (
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {product.views.toLocaleString()}
              </div>
            )}
            {product.scans && (
              <div className="flex items-center gap-1">
                <Scan className="h-3 w-3" />
                {product.scans.toLocaleString()}
              </div>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
