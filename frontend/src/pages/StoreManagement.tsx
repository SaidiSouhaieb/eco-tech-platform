import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { mockProducts } from '../lib/mock-data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { Search, Eye, Edit, Trash2, MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface StoreManagementProps {
  onNavigate: (page: string) => void;
}

export function StoreManagement({ onNavigate }: StoreManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [products] = useState(mockProducts);

  const publishedProducts = products.filter(p => p.status === 'published');
  const draftProducts = products.filter(p => p.status === 'draft');

  const ProductTable = ({ items }: { items: typeof products }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Eco-Score</TableHead>
          <TableHead>Recyclability</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Scans</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <div>
                <div className="font-medium">{product.name}</div>
                <div className="text-sm text-muted-foreground line-clamp-1">
                  {product.description}
                </div>
              </div>
            </TableCell>
            <TableCell>
              <EcoScoreBadge score={product.ecoScore} size="sm" showLabel={false} />
            </TableCell>
            <TableCell>{product.recyclability}%</TableCell>
            <TableCell>{product.views?.toLocaleString() || '-'}</TableCell>
            <TableCell>{product.scans?.toLocaleString() || '-'}</TableCell>
            <TableCell>
              <Badge variant={product.status === 'published' ? 'default' : 'secondary'}>
                {product.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => onNavigate('product-detail')}>
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2">Store Management</h1>
          <p className="text-muted-foreground">
            Manage your product inventory
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button onClick={() => onNavigate('ai-creator')}>
                Create Product
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Products ({products.length})</TabsTrigger>
            <TabsTrigger value="published">Published ({publishedProducts.length})</TabsTrigger>
            <TabsTrigger value="drafts">Drafts ({draftProducts.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <ProductTable items={products} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="published" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <ProductTable items={publishedProducts} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drafts" className="mt-6">
            <Card>
              <CardContent className="p-0">
                <ProductTable items={draftProducts} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
