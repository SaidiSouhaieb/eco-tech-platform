import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '../components/ui/card';
import { Check, X } from 'lucide-react';
import { Badge } from '../components/ui/badge';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for getting started',
      features: [
        { name: 'Up to 3 products', included: true },
        { name: 'Basic AI assistance', included: true },
        { name: '10 image generations/month', included: true },
        { name: '100 MB storage', included: true },
        { name: 'Community support', included: true },
        { name: 'Advanced analytics', included: false },
        { name: 'Custom branding', included: false },
        { name: 'API access', included: false },
        { name: 'Priority support', included: false },
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '29',
      description: 'For growing eco-businesses',
      features: [
        { name: 'Unlimited products', included: true },
        { name: 'Advanced AI assistance', included: true },
        { name: '500 image generations/month', included: true },
        { name: '10 GB storage', included: true },
        { name: 'Priority support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom branding', included: true },
        { name: 'API access', included: false },
        { name: 'White-label solution', included: false },
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '99',
      description: 'For large organizations',
      features: [
        { name: 'Unlimited everything', included: true },
        { name: 'Premium AI assistance', included: true },
        { name: 'Unlimited image generations', included: true },
        { name: 'Unlimited storage', included: true },
        { name: 'Dedicated support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Full API access', included: true },
        { name: 'White-label solution', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-4">Pricing</Badge>
          <h1 className="mb-4">Choose Your Plan</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Start free and scale as you grow. All plans include core features.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative ${plan.popular ? 'border-[hsl(var(--primary))] shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[hsl(var(--primary))]">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-3">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 shrink-0 text-[hsl(var(--primary))]" />
                    ) : (
                      <X className="h-5 w-5 shrink-0 text-muted-foreground" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => onNavigate('login')}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Free</th>
                  <th className="p-4 text-center">Pro</th>
                  <th className="p-4 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4">Products</td>
                  <td className="p-4 text-center">3</td>
                  <td className="p-4 text-center">Unlimited</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4">AI Power</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Premium</td>
                </tr>
                <tr>
                  <td className="p-4">Image Generations</td>
                  <td className="p-4 text-center">10/mo</td>
                  <td className="p-4 text-center">500/mo</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4">Storage</td>
                  <td className="p-4 text-center">100 MB</td>
                  <td className="p-4 text-center">10 GB</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4">Analytics</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="p-4">API Access</td>
                  <td className="p-4 text-center"><X className="mx-auto h-5 w-5 text-muted-foreground" /></td>
                  <td className="p-4 text-center"><X className="mx-auto h-5 w-5 text-muted-foreground" /></td>
                  <td className="p-4 text-center"><Check className="mx-auto h-5 w-5 text-[hsl(var(--primary))]" /></td>
                </tr>
                <tr>
                  <td className="p-4">Support</td>
                  <td className="p-4 text-center">Community</td>
                  <td className="p-4 text-center">Priority</td>
                  <td className="p-4 text-center">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <Card>
              <CardHeader>
                <h4>Can I switch plans anytime?</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately,
                  and we'll prorate any differences in your billing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4>What payment methods do you accept?</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4>Is there a free trial for paid plans?</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Pro plan comes with a 14-day free trial. No credit card required to start.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4>What happens to my data if I cancel?</h4>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your data is yours forever. You can export all your products and data before canceling,
                  and we keep it accessible for 30 days after cancellation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
