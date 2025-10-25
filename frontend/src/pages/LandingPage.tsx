import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Sparkles, Scan, Recycle, TrendingUp, Users, Leaf, MapPin, Moon, Sun, Globe } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { mockProducts } from '../lib/mock-data';
import { useApp } from '../lib/context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const { theme, toggleTheme, locale, setLocale } = useApp();
  const featuredProducts = mockProducts.filter(p => p.status === 'published').slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Public Navigation Header */}
      <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => onNavigate('landing')}
                className="flex items-center gap-2"
              >
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-semibold">EcoTech</span>
              </button>

              <div className="hidden md:flex items-center gap-1">
                <Button variant="ghost" onClick={() => onNavigate('pricing')}>
                  Pricing
                </Button>
                <Button variant="ghost" onClick={() => onNavigate('design-system')}>
                  Design System
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLocale('en')}>
                    🇬🇧 English {locale === 'en' && '✓'}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocale('fr')}>
                    🇫🇷 Français {locale === 'fr' && '✓'}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLocale('ar')}>
                    🇸🇦 العربية {locale === 'ar' && '✓'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button onClick={() => onNavigate('signup')} variant="outline">
                Sign Up
              </Button>
              <Button onClick={() => onNavigate('login')}>
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-[hsl(var(--primary-light))] to-white dark:from-[hsl(var(--primary-dark))] dark:to-[hsl(var(--background))]">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-2 rounded-full border bg-card px-4 py-2 shadow-sm">
                  <Leaf className="h-4 w-4 text-[hsl(var(--primary))]" />
                  <span className="text-sm">Sustainable Innovation Platform</span>
                </div>
              </div>
              
              <h1 className="max-w-3xl">
                Transform Ideas into Sustainable Products
              </h1>
              
              <p className="max-w-2xl text-xl text-muted-foreground">
                Create eco-friendly products with AI, verify sustainability with smart scanning, 
                and connect with recycling networks. Join the circular economy revolution.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate('login')}
                  className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start as Founder
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => onNavigate('login')}
                >
                  <Scan className="mr-2 h-5 w-5" />
                  Explore Eco Products
                </Button>
              </div>

              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">10K+</div>
                  <div className="text-sm text-muted-foreground">Tons Recycled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">50K+</div>
                  <div className="text-sm text-muted-foreground">CO₂ Saved (kg)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[hsl(var(--primary))]">200+</div>
                  <div className="text-sm text-muted-foreground">Partners</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] p-1 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1487875961445-47a00398c267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxMjc1ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sustainable Technology"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 rounded-lg border bg-card p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--eco-a))] text-white">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Eco-Score A</div>
                    <div className="text-xs text-muted-foreground">95% Recyclable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-b py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4">How It Works</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Two powerful platforms for different needs
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Founder Flow */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="h-8 w-8" />
                  <h3 className="text-white">For Founders</h3>
                </div>
                <p className="text-white/90">Create sustainable products with AI assistance</p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary-light))] font-semibold text-[hsl(var(--primary))]">
                      1
                    </div>
                    <div>
                      <h4>Describe Your Vision</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Tell our AI what product you want to create
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary-light))] font-semibold text-[hsl(var(--primary))]">
                      2
                    </div>
                    <div>
                      <h4>AI Optimization</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Get material suggestions, dimensions, and sustainability scores
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--primary-light))] font-semibold text-[hsl(var(--primary))]">
                      3
                    </div>
                    <div>
                      <h4>Generate & Publish</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Create product specs, visuals, and launch to market
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Client Flow */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-br from-[hsl(var(--secondary))] to-[hsl(var(--primary))] p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Scan className="h-8 w-8" />
                  <h3 className="text-white">For Clients</h3>
                </div>
                <p className="text-white/90">Verify eco-friendliness and find alternatives</p>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--secondary))]/10 font-semibold text-[hsl(var(--secondary))]">
                      1
                    </div>
                    <div>
                      <h4>Scan Products</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Use your camera to check eco-scores instantly
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--secondary))]/10 font-semibold text-[hsl(var(--secondary))]">
                      2
                    </div>
                    <div>
                      <h4>Find Alternatives</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Discover similar eco-friendly products
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--secondary))]/10 font-semibold text-[hsl(var(--secondary))]">
                      3
                    </div>
                    <div>
                      <h4>Recycle Nearby</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Locate recycling and buyback points on the map
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="border-b py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-2">Featured Eco Products</h2>
              <p className="text-muted-foreground">
                Discover sustainable alternatives
              </p>
            </div>
            <Button variant="outline" onClick={() => onNavigate('client-catalog')}>
              View All
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product}
                onClick={() => onNavigate('client-catalog')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4">Platform Features</h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Everything you need for sustainable product development
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary-light))]">
                  <Sparkles className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h4 className="mb-2">AI-Powered Design</h4>
                <p className="text-sm text-muted-foreground">
                  Get intelligent suggestions for materials, dimensions, and sustainability optimization
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary-light))]">
                  <Scan className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h4 className="mb-2">Smart Scanning</h4>
                <p className="text-sm text-muted-foreground">
                  Instantly check eco-scores, materials, and recyclability of any product
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary-light))]">
                  <MapPin className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h4 className="mb-2">Recycling Network</h4>
                <p className="text-sm text-muted-foreground">
                  Find nearby recycling centers and buyback points with real-time availability
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary-light))]">
                  <TrendingUp className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h4 className="mb-2">Analytics Dashboard</h4>
                <p className="text-sm text-muted-foreground">
                  Track product performance, user engagement, and environmental impact
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary-light))]">
                  <Recycle className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h4 className="mb-2">Eco-Score System</h4>
                <p className="text-sm text-muted-foreground">
                  Transparent rating from A to E based on materials, recyclability, and impact
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(var(--primary-light))]">
                  <Users className="h-6 w-6 text-[hsl(var(--primary))]" />
                </div>
                <h4 className="mb-2">Community Platform</h4>
                <p className="text-sm text-muted-foreground">
                  Connect with eco-conscious founders and consumers worldwide
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--secondary))] py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-white">Ready to Make an Impact?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Join thousands of founders and consumers building a sustainable future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('signup')}
            >
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('pricing')}
              className="border-white text-white hover:bg-white/10"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-semibold">EcoTech</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Building a sustainable future through innovative technology and circular economy solutions.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => onNavigate('signup')} className="text-muted-foreground hover:text-foreground">For Founders</button></li>
                <li><button onClick={() => onNavigate('signup')} className="text-muted-foreground hover:text-foreground">For Clients</button></li>
                <li><button onClick={() => onNavigate('pricing')} className="text-muted-foreground hover:text-foreground">Pricing</button></li>
                <li><button onClick={() => onNavigate('design-system')} className="text-muted-foreground hover:text-foreground">Design System</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="text-muted-foreground">Documentation</span></li>
                <li><span className="text-muted-foreground">API Reference</span></li>
                <li><span className="text-muted-foreground">Community</span></li>
                <li><span className="text-muted-foreground">Blog</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Languages</h4>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => setLocale('en')}
                  className={`block ${locale === 'en' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  🇬🇧 English
                </button>
                <button 
                  onClick={() => setLocale('fr')}
                  className={`block ${locale === 'fr' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  🇫🇷 Français
                </button>
                <button 
                  onClick={() => setLocale('ar')}
                  className={`block ${locale === 'ar' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  🇸🇦 العربية
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 EcoTech Platform. All rights reserved. Built for sustainability.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
