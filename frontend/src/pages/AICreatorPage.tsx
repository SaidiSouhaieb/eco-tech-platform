import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { AIChatbot } from '../components/AIChatbot';
import { Check, Upload, Sparkles, TrendingUp, Leaf, DollarSign } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { mockAISuggestions, mockAIAnalyses } from '../lib/mock-data';

interface AICreatorPageProps {
  onNavigate: (page: string) => void;
}

export function AICreatorPage({ onNavigate }: AICreatorPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: 'EcoBottle Pro 500ml',
    description: 'Premium reusable water bottle made from 100% recycled ocean plastic. Features leak-proof design, ergonomic grip, and sustainable materials. Perfect for daily hydration with style and environmental consciousness.',
    capacity: 500,
    height: 220,
    width: 70,
    depth: 70,
    material: 'rPET',
    thickness: 2.5,
  });

  const steps = [
    { id: 'idea', name: 'Idea' },
    { id: 'dimensions', name: 'Dimensions' },
    { id: 'materials', name: 'Materials' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'gallery', name: 'Description & Gallery' },
    { id: 'publish', name: 'Publish' },
  ];

  const handleApplySuggestion = (suggestion: any) => {
    if (suggestion) {
      setFormData({
        ...formData,
        capacity: suggestion.capacity || formData.capacity,
        height: suggestion.dimensions?.height || formData.height,
        width: suggestion.dimensions?.width || formData.width,
        depth: suggestion.dimensions?.depth || formData.depth,
      });
      toast.success('AI suggestions applied!');
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      toast.success('Product created successfully!');
      onNavigate('founder-dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2">AI Product Creator</h1>
          <p className="text-muted-foreground">
            Design sustainable products with AI assistance
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                      index <= currentStep
                        ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white'
                        : 'border-muted bg-muted text-muted-foreground'
                    }`}
                  >
                    {index < currentStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className={`mt-2 hidden text-xs md:block ${index <= currentStep ? '' : 'text-muted-foreground'}`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 w-12 lg:w-24 ${
                      index < currentStep ? 'bg-[hsl(var(--primary))]' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* Form Section */}
          <div className="space-y-6">
            {currentStep === 0 && (
              <Card>
                <CardHeader>
                  <h3>Product Idea</h3>
                  <p className="text-sm text-muted-foreground">
                    Tell us about your sustainable product
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., EcoBottle Pro 500ml"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe your product idea, target use case, and sustainability goals..."
                      rows={6}
                    />
                  </div>
                  <div className="rounded-lg border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary-light))]/50 p-4">
                    <div className="flex items-start gap-2">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                      <div>
                        <p className="text-sm font-medium">Pro Tip</p>
                        <p className="text-sm text-muted-foreground">
                          Use the AI assistant to get suggestions for your product specifications and materials.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <h3>Dimensions & Capacity</h3>
                  <p className="text-sm text-muted-foreground">
                    Define the physical specifications
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Capacity: {formData.capacity}ml</Label>
                    <Slider
                      value={[formData.capacity]}
                      onValueChange={([value]) => setFormData({ ...formData, capacity: value })}
                      min={100}
                      max={2000}
                      step={50}
                    />
                  </div>
                  <Separator />
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (mm)</Label>
                      <Input
                        id="height"
                        type="number"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: Number(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="width">Width (mm)</Label>
                      <Input
                        id="width"
                        type="number"
                        value={formData.width}
                        onChange={(e) => setFormData({ ...formData, width: Number(e.target.value) })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="depth">Depth (mm)</Label>
                      <Input
                        id="depth"
                        type="number"
                        value={formData.depth}
                        onChange={(e) => setFormData({ ...formData, depth: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Wall Thickness: {formData.thickness}mm</Label>
                    <Slider
                      value={[formData.thickness]}
                      onValueChange={([value]) => setFormData({ ...formData, thickness: value })}
                      min={1}
                      max={5}
                      step={0.1}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <h3>Materials Selection</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose sustainable materials
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Primary Material</Label>
                    <Select value={formData.material} onValueChange={(value) => setFormData({ ...formData, material: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rPET">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[hsl(var(--eco-a))]">A</Badge>
                            <span>rPET (Recycled PET)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="tritan">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[hsl(var(--eco-a))]">A</Badge>
                            <span>Tritan (BPA-free)</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="stainless">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[hsl(var(--eco-b))]">B</Badge>
                            <span>Stainless Steel 304</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="aluminum">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[hsl(var(--eco-b))]">B</Badge>
                            <span>Aluminum</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="glass">
                          <div className="flex items-center gap-2">
                            <Badge className="bg-[hsl(var(--eco-a))]">A</Badge>
                            <span>Borosilicate Glass</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="rounded-lg border bg-muted/50 p-4">
                    <h4 className="mb-2 text-sm">Material Properties</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Recyclability:</span>
                        <span className="font-medium">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Durability:</span>
                        <span className="font-medium">High</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cost Factor:</span>
                        <span className="font-medium">Medium</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Carbon Footprint:</span>
                        <span className="font-medium">-60% vs virgin plastic</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 3 && (
              <Card>
                <CardHeader>
                  <h3>Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">
                    Production specifications
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Manufacturing Process</Label>
                    <Select defaultValue="injection">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="injection">Injection Molding</SelectItem>
                        <SelectItem value="blow">Blow Molding</SelectItem>
                        <SelectItem value="thermoforming">Thermoforming</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Finishing</Label>
                    <Select defaultValue="matte">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matte">Matte</SelectItem>
                        <SelectItem value="glossy">Glossy</SelectItem>
                        <SelectItem value="textured">Textured</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Certifications</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">FDA Approved</Badge>
                      <Badge variant="outline">BPA-Free</Badge>
                      <Badge variant="outline">Food Safe</Badge>
                      <Badge variant="outline">ISO 14001</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 4 && (
              <Card>
                <CardHeader>
                  <h3>Images & Gallery</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate or upload product visuals
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="aspect-square rounded-lg border-2 border-dashed bg-muted/50 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-muted transition-colors">
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">3D View</p>
                      <p className="text-xs text-muted-foreground">Click to upload</p>
                    </div>
                    <div className="aspect-square rounded-lg border-2 border-dashed bg-muted/50 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-muted transition-colors">
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Lifestyle Photo</p>
                      <p className="text-xs text-muted-foreground">Click to upload</p>
                    </div>
                    <div className="aspect-square rounded-lg border-2 border-dashed bg-muted/50 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-muted transition-colors">
                      <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">Exploded View</p>
                      <p className="text-xs text-muted-foreground">Click to upload</p>
                    </div>
                    <div className="aspect-square rounded-lg border-2 border-dashed bg-muted/50 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-muted transition-colors">
                      <Sparkles className="h-8 w-8 mb-2 text-[hsl(var(--primary))]" />
                      <p className="text-sm">Generate with AI</p>
                      <p className="text-xs text-muted-foreground">Coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentStep === 5 && (
              <Card>
                <CardHeader>
                  <h3>Review & Publish</h3>
                  <p className="text-sm text-muted-foreground">
                    Final review before publishing your product
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Product Header */}
                  <div className="rounded-lg border-2 border-[hsl(var(--primary))]/20 bg-gradient-to-r from-[hsl(var(--primary-light))]/30 to-[hsl(var(--secondary-light))]/30 p-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-[hsl(var(--primary))] mb-2">{formData.name}</h2>
                      <p className="text-muted-foreground mb-4">{formData.description}</p>
                      <div className="flex items-center justify-center gap-4">
                        <Badge className="bg-[hsl(var(--eco-a))] text-white px-3 py-1">Eco-Score: A</Badge>
                        <Badge variant="outline" className="px-3 py-1">95% Recyclable</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Product Specifications */}
                  <div className="rounded-lg border bg-muted/50 p-4">
                    <h4 className="mb-4 font-semibold">Product Specifications</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Capacity:</span>
                          <span className="font-medium">{formData.capacity}ml</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Material:</span>
                          <span className="font-medium">{formData.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Wall Thickness:</span>
                          <span className="font-medium">{formData.thickness}mm</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span className="font-medium">{formData.height}×{formData.width}×{formData.depth}mm</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Recyclability:</span>
                          <span className="font-medium">95%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Carbon Footprint:</span>
                          <span className="font-medium">-60% vs virgin plastic</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ready to Publish */}
                  <div className="rounded-lg border border-green-600/20 bg-green-50 dark:bg-green-900/10 p-4">
                    <div className="flex items-start gap-2">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Ready to Publish</p>
                        <p className="text-sm text-muted-foreground">
                          Your product "{formData.name}" meets all sustainability criteria and is ready to go live.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button onClick={handleNext}>
                {currentStep === steps.length - 1 ? 'Publish Product' : 'Next Step'}
              </Button>
            </div>
          </div>

          {/* AI Assistant - Only show on the publish step (last step) */}
          {currentStep === steps.length - 1 && (
            <Card className="mt-8">
              <CardHeader className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  <h3 className="text-white">AI Final Analysis & Recommendations</h3>
                </div>
                <p className="text-sm text-white/90">
                  Complete analysis before publishing your product
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* AI Recommendations */}
                  <div className="space-y-4">
                    <div className="rounded-lg bg-muted p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="h-4 w-4 text-[hsl(var(--primary))]" />
                        <span className="font-medium">Final AI Recommendations</span>
                      </div>
                      <p className="text-muted-foreground mb-3">Based on your "{formData.name}" specification:</p>
                      <ul className="space-y-1 list-disc list-inside text-muted-foreground mb-4">
                        <li>Capacity: {formData.capacity}ml</li>
                        <li>Dimensions: {formData.height}mm × {formData.width}mm × {formData.depth}mm</li>
                        <li>Material: {formData.material}</li>
                        <li>Wall thickness: {formData.thickness}mm</li>
                      </ul>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleApplySuggestion({ capacity: formData.capacity, dimensions: { height: formData.height, width: formData.width, depth: formData.depth } })}
                      >
                        Apply Final Suggestions
                      </Button>
                    </div>

                    {/* Material Suggestions */}
                    <div className="rounded-lg border border-[hsl(var(--primary))]/20 bg-[hsl(var(--primary-light))]/30 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Material Analysis</span>
                      </div>
                      {mockAISuggestions.materials
                        .filter(m => m.name.toLowerCase().includes(formData.material.toLowerCase()) || formData.material === 'rPET')
                        .slice(0, 1)
                        .map((material, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-[hsl(var(--eco-a))]">{material.ecoScore}</Badge>
                              <span className="font-medium">{material.name}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Recyclability:</span>
                                <span className="font-medium">{material.recyclability}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Carbon Reduction:</span>
                                <span className="font-medium">{material.carbonReduction}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Cost:</span>
                                <span className="font-medium">{material.cost}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Durability:</span>
                                <span className="font-medium">High</span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Sustainability & Cost Analysis */}
                  <div className="space-y-4">
                    {/* Sustainability Features */}
                    <div className="rounded-lg border border-green-600/20 bg-green-50 dark:bg-green-900/10 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="font-medium">Sustainability Features</span>
                      </div>
                      <div className="space-y-3">
                        {mockAISuggestions.sustainability.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <span className="text-sm font-medium">{feature.feature}</span>
                              <p className="text-xs text-muted-foreground">{feature.description}</p>
                            </div>
                            <div className="text-right">
                              <Badge variant="outline" className="text-xs">
                                {feature.impact} Impact
                              </Badge>
                              <p className="text-xs text-muted-foreground mt-1">{feature.cost}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cost Analysis */}
                    <div className="rounded-lg border border-blue-600/20 bg-blue-50 dark:bg-blue-900/10 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <DollarSign className="h-4 w-4 text-blue-600" />
                        <span className="font-medium">Final Cost Analysis</span>
                      </div>
                      {mockAIAnalyses
                        .filter(analysis => analysis.productId === '1')
                        .map((analysis, index) => (
                          <div key={index} className="space-y-3">
                            <div className="grid grid-cols-3 gap-3 text-sm">
                              <div className="text-center">
                                <p className="text-muted-foreground">Material</p>
                                <p className="font-medium text-lg">${analysis.costAnalysis.material}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-muted-foreground">Manufacturing</p>
                                <p className="font-medium text-lg">${analysis.costAnalysis.manufacturing}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-muted-foreground">Total</p>
                                <p className="font-medium text-lg">${analysis.costAnalysis.total}</p>
                              </div>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Carbon Footprint:</span>
                              <span className="font-medium">{analysis.carbonFootprint}kg CO₂</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Mobile AI Chatbot - Only show on mobile and only on publish step */}
      {currentStep === steps.length - 1 && (
        <div className="lg:hidden mt-8">
          <Card>
            <CardHeader className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <h3 className="text-white">AI Final Analysis</h3>
              </div>
              <p className="text-sm text-white/90">
                Complete analysis before publishing
              </p>
            </CardHeader>
            <CardContent className="p-4">
              <AIChatbot onApplySuggestion={handleApplySuggestion} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
