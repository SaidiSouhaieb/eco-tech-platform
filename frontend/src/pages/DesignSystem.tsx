import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Slider } from "../components/ui/slider";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { EcoScoreBadge } from "../components/EcoScoreBadge";
import { Separator } from "../components/ui/separator";
import { 
  Scan, Recycle, Sparkles, MessageSquare, Award, 
  MapPin, Wine, GitCompare, Leaf, Package, 
  Search, Upload, Filter, ShoppingCart, User,
  BarChart, Settings, Bell, Heart, Star
} from "lucide-react";
import { useApp } from "../lib/context";

export default function DesignSystem() {
  const { theme } = useApp();
  
  const colors = {
    primary: [
      { name: 'Eco Green Primary', value: '#2B7A0B', var: '--eco-green-primary' },
      { name: 'Eco Green Dark', value: '#102A12', var: '--eco-green-dark' },
      { name: 'Eco Green Light', value: '#E9F6EA', var: '--eco-green-light' },
    ],
    secondary: [
      { name: 'Tech Blue', value: '#2F80ED', var: '--tech-blue' },
    ],
    scores: [
      { name: 'Score A (Green)', value: '#2B7A0B', var: '--score-a' },
      { name: 'Score B (Blue)', value: '#2F80ED', var: '--score-b' },
      { name: 'Score C (Yellow)', value: '#F2C94C', var: '--score-c' },
      { name: 'Score D (Orange)', value: '#F2994A', var: '--score-d' },
      { name: 'Score E (Red)', value: '#EB5757', var: '--score-e' },
    ],
    neutrals: [
      { name: 'Neutral 0', value: '#FFFFFF', var: '--neutral-0' },
      { name: 'Neutral 50', value: '#F9FAFB', var: '--neutral-50' },
      { name: 'Neutral 100', value: '#F3F4F6', var: '--neutral-100' },
      { name: 'Neutral 200', value: '#E5E7EB', var: '--neutral-200' },
      { name: 'Neutral 300', value: '#D1D5DB', var: '--neutral-300' },
      { name: 'Neutral 400', value: '#9CA3AF', var: '--neutral-400' },
      { name: 'Neutral 500', value: '#6B7280', var: '--neutral-500' },
      { name: 'Neutral 600', value: '#4B5563', var: '--neutral-600' },
      { name: 'Neutral 700', value: '#374151', var: '--neutral-700' },
      { name: 'Neutral 800', value: '#1F2937', var: '--neutral-800' },
      { name: 'Neutral 900', value: '#111827', var: '--neutral-900' },
      { name: 'Neutral 950', value: '#0B0B0C', var: '--neutral-950' },
    ]
  };

  const icons = [
    { Icon: Scan, name: 'Scan' },
    { Icon: Recycle, name: 'Recycle' },
    { Icon: Sparkles, name: 'AI' },
    { Icon: MessageSquare, name: 'Chat' },
    { Icon: Award, name: 'Quality Badge' },
    { Icon: MapPin, name: 'Map Pin' },
    { Icon: Wine, name: 'Bottle' },
    { Icon: GitCompare, name: 'Compare' },
    { Icon: Leaf, name: 'Eco' },
    { Icon: Package, name: 'Package' },
    { Icon: Search, name: 'Search' },
    { Icon: Upload, name: 'Upload' },
    { Icon: Filter, name: 'Filter' },
    { Icon: ShoppingCart, name: 'Cart' },
    { Icon: User, name: 'User' },
    { Icon: BarChart, name: 'Analytics' },
    { Icon: Settings, name: 'Settings' },
    { Icon: Bell, name: 'Notifications' },
    { Icon: Heart, name: 'Favorite' },
    { Icon: Star, name: 'Rating' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">🧩 Design System</h1>
          <p className="text-muted-foreground">
            Complete design system documentation for the Eco-Tech platform. This system supports responsive layouts (Desktop 1440px, Tablet 1024px, Mobile 390px), light/dark modes, and RTL layouts.
          </p>
        </div>

        <Tabs defaultValue="colors" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Colors (Eco Green)</CardTitle>
                <CardDescription>
                  Main brand colors representing sustainability and nature
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {colors.primary.map((color) => (
                    <div key={color.var} className="space-y-2">
                      <div 
                        className="h-24 rounded-lg border"
                        style={{ backgroundColor: color.value }}
                      />
                      <div>
                        <div className="font-medium">{color.name}</div>
                        <div className="text-sm text-muted-foreground">{color.value}</div>
                        <code className="text-xs bg-muted px-2 py-1 rounded">var({color.var})</code>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Colors (Tech Blue)</CardTitle>
                <CardDescription>
                  Technology and innovation accent color
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {colors.secondary.map((color) => (
                    <div key={color.var} className="space-y-2">
                      <div 
                        className="h-24 rounded-lg border"
                        style={{ backgroundColor: color.value }}
                      />
                      <div>
                        <div className="font-medium">{color.name}</div>
                        <div className="text-sm text-muted-foreground">{color.value}</div>
                        <code className="text-xs bg-muted px-2 py-1 rounded">var({color.var})</code>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eco Score Colors</CardTitle>
                <CardDescription>
                  Color-coded system for environmental ratings (A to E)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {colors.scores.map((color) => (
                    <div key={color.var} className="space-y-2">
                      <div 
                        className="h-24 rounded-lg border"
                        style={{ backgroundColor: color.value }}
                      />
                      <div>
                        <div className="font-medium text-sm">{color.name}</div>
                        <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">var({color.var})</code>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Neutral Colors</CardTitle>
                <CardDescription>
                  Grayscale palette for UI elements and typography
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2">
                  {colors.neutrals.map((color) => (
                    <div key={color.var} className="space-y-1">
                      <div 
                        className="h-16 rounded border"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="text-xs font-medium">{color.name.split(' ')[1]}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Typography Scale</CardTitle>
                <CardDescription>
                  Font family: System default (Inter, SF Pro, or system fonts)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h1>Heading 1 - Main page titles</h1>
                  <h2>Heading 2 - Section titles</h2>
                  <h3>Heading 3 - Subsection titles</h3>
                  <h4>Heading 4 - Component titles</h4>
                  <p>Body text - Regular paragraph content with comfortable reading line height</p>
                  <p className="text-sm text-muted-foreground">Caption - Small text for metadata and hints</p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3>RTL Typography (Arabic)</h3>
                  <div dir="rtl" className="space-y-2">
                    <h2>عنوان رئيسي</h2>
                    <p>النص الأساسي للفقرة مع دعم كامل للغة العربية</p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="font-medium">Font Weights</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="font-normal">Normal (400) - Body text</div>
                    <div className="font-medium">Medium (500) - Headings, buttons, labels</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Spacing Tab */}
          <TabsContent value="spacing" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale (4px base)</CardTitle>
                <CardDescription>
                  Consistent spacing system for layouts and components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((space) => (
                    <div key={space} className="flex items-center gap-4">
                      <code className="text-sm w-24">--space-{space}</code>
                      <div className="bg-primary h-6" style={{ width: `${space * 4}px` }} />
                      <span className="text-sm text-muted-foreground">{space * 4}px</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grid System</CardTitle>
                <CardDescription>
                  Responsive grid columns for different breakpoints
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium mb-2">Desktop (1440px) - 12 columns</div>
                  <div className="grid grid-cols-12 gap-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="bg-primary/20 h-12 rounded" />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-2">Tablet (1024px) - 8 columns</div>
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="bg-secondary/20 h-12 rounded" />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-2">Mobile (390px) - 4 columns</div>
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="bg-accent h-12 rounded" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Icons Tab */}
          <TabsContent value="icons" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Icon System</CardTitle>
                <CardDescription>
                  Lucide React icons - consistent 24px size with 1.5px stroke
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-4">
                  {icons.map(({ Icon, name }) => (
                    <div key={name} className="flex flex-col items-center gap-2 p-3 rounded hover:bg-muted transition-colors">
                      <Icon className="w-6 h-6" />
                      <span className="text-xs text-center">{name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>
                  Interactive buttons with multiple variants and states
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="font-medium mb-3">Variants</div>
                    <div className="flex flex-wrap gap-3">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="font-medium mb-3">Sizes</div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="font-medium mb-3">With Icons</div>
                    <div className="flex flex-wrap gap-3">
                      <Button><Scan className="w-4 h-4 mr-2" />Scan Product</Button>
                      <Button variant="secondary"><Sparkles className="w-4 h-4 mr-2" />AI Create</Button>
                      <Button variant="outline"><MapPin className="w-4 h-4 mr-2" />Find Location</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="font-medium mb-3">States</div>
                    <div className="flex flex-wrap gap-3">
                      <Button disabled>Disabled</Button>
                      <Button className="opacity-80">Hover Effect</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Form Inputs</CardTitle>
                <CardDescription>
                  Input fields with various configurations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label>Text Input</label>
                  <Input placeholder="Enter text..." />
                </div>
                <div className="space-y-2">
                  <label>Search Input</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search products..." className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label>Slider</label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="example" />
                  <label htmlFor="example">Toggle switch</label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eco Score Badges</CardTitle>
                <CardDescription>
                  Environmental rating indicators (A to E)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <EcoScoreBadge score="A" />
                  <EcoScoreBadge score="B" />
                  <EcoScoreBadge score="C" />
                  <EcoScoreBadge score="D" />
                  <EcoScoreBadge score="E" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>
                  Labels and status indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge className="bg-eco-green-primary text-white">Recycled 80%</Badge>
                  <Badge className="bg-tech-blue text-white">BPA Free</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Patterns Tab */}
          <TabsContent value="patterns" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Card Patterns</CardTitle>
                <CardDescription>
                  Reusable card layouts for content display
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Product Card</CardTitle>
                      <CardDescription>Standard product display</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-square bg-muted rounded-lg mb-4" />
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4>Eco Bottle</h4>
                          <EcoScoreBadge score="A" />
                        </div>
                        <p className="text-sm text-muted-foreground">Recyclable 95%</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Stat Card</CardTitle>
                      <CardDescription>Dashboard metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-3xl">1,234</div>
                        <p className="text-sm text-muted-foreground">Total Products</p>
                        <div className="text-sm text-eco-green-primary">↑ 12% from last month</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibility Guidelines</CardTitle>
                <CardDescription>
                  WCAG 2.1 AA compliance standards
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4>✓ Color Contrast</h4>
                  <p className="text-sm text-muted-foreground">
                    All text meets minimum 4.5:1 contrast ratio, large text 3:1
                  </p>
                </div>
                <div className="space-y-2">
                  <h4>✓ Focus States</h4>
                  <p className="text-sm text-muted-foreground">
                    All interactive elements have visible focus indicators
                  </p>
                </div>
                <div className="space-y-2">
                  <h4>✓ Touch Targets</h4>
                  <p className="text-sm text-muted-foreground">
                    Minimum 44x44px click/touch areas for mobile
                  </p>
                </div>
                <div className="space-y-2">
                  <h4>✓ Scalable Typography</h4>
                  <p className="text-sm text-muted-foreground">
                    Text scales properly with browser zoom up to 200%
                  </p>
                </div>
                <div className="space-y-2">
                  <h4>✓ Semantic HTML</h4>
                  <p className="text-sm text-muted-foreground">
                    Proper heading hierarchy and ARIA labels where needed
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
