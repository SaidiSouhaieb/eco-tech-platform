import { Product, RecyclingPoint, FounderStats, ClientStats, Material } from './types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'EcoBottle Pro 500ml',
    description: 'Premium reusable water bottle made from 100% recycled ocean plastic',
    ecoScore: 'A',
    materials: [
      { name: 'rPET (Recycled PET)', percentage: 85, recyclable: true, sustainable: true },
      { name: 'Stainless Steel Cap', percentage: 10, recyclable: true, sustainable: true },
      { name: 'Silicone Seal', percentage: 5, recyclable: false, sustainable: true }
    ],
    recyclability: 95,
    images: ['https://images.unsplash.com/photo-1623684194967-48075185a58c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXVzYWJsZSUyMHdhdGVyJTIwYm90dGxlfGVufDF8fHx8MTc2MTMxNDc2Mnww&ixlib=rb-4.1.0&q=80&w=1080'],
    capacity: 500,
    dimensions: { height: 220, width: 70, depth: 70 },
    manufacturer: 'EcoTech Industries',
    status: 'published',
    createdAt: '2025-10-15T10:00:00Z',
    views: 1234,
    scans: 567
  },
  {
    id: '2',
    name: 'Sustainable Food Container',
    description: 'Biodegradable lunch container with leak-proof bamboo lid',
    ecoScore: 'A',
    materials: [
      { name: 'Bamboo Fiber', percentage: 60, recyclable: true, sustainable: true },
      { name: 'Corn Starch Polymer', percentage: 35, recyclable: true, sustainable: true },
      { name: 'Natural Rubber Seal', percentage: 5, recyclable: false, sustainable: true }
    ],
    recyclability: 98,
    images: ['https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBmb29kJTIwY29udGFpbmVyfGVufDF8fHx8MTc2MTMxOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080'],
    capacity: 750,
    dimensions: { height: 80, width: 180, depth: 120 },
    status: 'published',
    createdAt: '2025-10-10T14:30:00Z',
    views: 892,
    scans: 423
  },
  {
    id: '3',
    name: 'Reusable Coffee Cup',
    description: 'Insulated travel mug with double-wall stainless steel construction',
    ecoScore: 'B',
    materials: [
      { name: 'Stainless Steel 304', percentage: 80, recyclable: true, sustainable: true },
      { name: 'PP Plastic Lid', percentage: 15, recyclable: true, sustainable: false },
      { name: 'Silicone Grip', percentage: 5, recyclable: false, sustainable: true }
    ],
    recyclability: 85,
    images: ['https://images.unsplash.com/photo-1594602990685-2ad837215085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFpbmxlc3MlMjBzdGVlbCUyMGNvZmZlZSUyMGN1cHxlbnwxfHx8fDE3NjEzMTk2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'],
    capacity: 350,
    dimensions: { height: 160, width: 80, depth: 80 },
    status: 'published',
    createdAt: '2025-10-08T09:15:00Z',
    views: 2103,
    scans: 891
  },
  {
    id: '4',
    name: 'Plastic Water Bottle',
    description: 'Standard single-use plastic bottle',
    ecoScore: 'D',
    materials: [
      { name: 'Virgin PET', percentage: 95, recyclable: true, sustainable: false },
      { name: 'HDPE Cap', percentage: 5, recyclable: true, sustainable: false }
    ],
    recyclability: 60,
    images: ['https://images.unsplash.com/photo-1616118132534-381148898bb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwd2F0ZXIlMjBib3R0bGV8ZW58MXx8fHwxNzYxMzE5NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
    capacity: 500,
    status: 'published',
    createdAt: '2025-10-05T11:20:00Z',
    views: 543,
    scans: 234
  },
  {
    id: '5',
    name: 'Glass Storage Jar',
    description: 'Premium borosilicate glass container with bamboo lid',
    ecoScore: 'A',
    materials: [
      { name: 'Borosilicate Glass', percentage: 85, recyclable: true, sustainable: true },
      { name: 'Bamboo', percentage: 12, recyclable: true, sustainable: true },
      { name: 'Silicone Seal', percentage: 3, recyclable: false, sustainable: true }
    ],
    recyclability: 97,
    images: ['https://images.unsplash.com/photo-1577056870081-33a62dace065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMHN0b3JhZ2UlMjBqYXJ8ZW58MXx8fHwxNzYxMzE5NjQzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
    capacity: 1000,
    status: 'draft',
    createdAt: '2025-10-20T16:45:00Z'
  }
];

export const mockRecyclingPoints: RecyclingPoint[] = [
  {
    id: 'r1',
    name: 'EcoCenter Downtown',
    type: 'recycling',
    lat: 40.7589,
    lng: -73.9851,
    address: '123 Green Street, New York, NY 10001',
    hours: 'Mon-Sat: 8AM-6PM, Sun: 10AM-4PM',
    acceptedMaterials: ['PET', 'HDPE', 'Glass', 'Aluminum', 'Paper'],
    incentives: '$0.05 per container'
  },
  {
    id: 'r2',
    name: 'City Recycling Hub',
    type: 'recycling',
    lat: 40.7489,
    lng: -73.9680,
    address: '456 Eco Avenue, New York, NY 10002',
    hours: 'Mon-Fri: 7AM-7PM, Weekends: 9AM-5PM',
    acceptedMaterials: ['All Plastics', 'Metal', 'Electronics'],
  },
  {
    id: 'r3',
    name: 'GreenReturn Buyback',
    type: 'buyback',
    lat: 40.7389,
    lng: -73.9920,
    address: '789 Sustainable Blvd, New York, NY 10003',
    hours: 'Daily: 9AM-8PM',
    acceptedMaterials: ['Bottles', 'Cans', 'Premium Containers'],
    incentives: 'Up to $0.10 per item + loyalty points'
  },
  {
    id: 'r4',
    name: 'Ocean Plastic Collection',
    type: 'buyback',
    lat: 40.7289,
    lng: -73.9750,
    address: '321 Marine Way, New York, NY 10004',
    hours: 'Tue-Sun: 10AM-6PM',
    acceptedMaterials: ['Ocean-bound Plastic', 'PET', 'HDPE'],
    incentives: 'Premium rates for ocean plastic'
  }
];

export const mockFounderStats: FounderStats = {
  totalProducts: 12,
  publishedProducts: 8,
  pendingProducts: 4,
  totalViews: 15420,
  totalScans: 3891
};

export const mockClientStats: ClientStats = {
  totalScans: 47,
  savedProducts: 12,
  co2Saved: 23.5,
  itemsRecycled: 134
};

export const ecoScoreColors = {
  A: 'hsl(var(--eco-a))',
  B: 'hsl(var(--eco-b))',
  C: 'hsl(var(--eco-c))',
  D: 'hsl(var(--eco-d))',
  E: 'hsl(var(--eco-e))'
};

export const ecoScoreLabels = {
  A: 'Excellent',
  B: 'Good',
  C: 'Fair',
  D: 'Poor',
  E: 'Very Poor'
};

// AI Creation Mock Data
export interface AIConversation {
  id: string;
  title: string;
  date: string;
  preview: string;
  messages: AIMessage[];
  productId?: string;
  status: 'active' | 'completed' | 'archived';
}

export interface AIMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
  suggestions?: AISuggestion[];
}

export interface AISuggestion {
  id: string;
  type: 'material' | 'dimension' | 'design' | 'sustainability';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  applied: boolean;
}

export interface AIAnalysis {
  id: string;
  productId: string;
  sustainabilityScore: number;
  recommendations: string[];
  alternatives: Material[];
  carbonFootprint: number;
  recyclabilityScore: number;
  costAnalysis: {
    material: number;
    manufacturing: number;
    total: number;
  };
}

export const mockAIConversations: AIConversation[] = [
  {
    id: 'conv-1',
    title: 'Reusable Water Bottle Design',
    date: '2 hours ago',
    preview: 'Discussing rPET materials and capacity options...',
    status: 'active',
    productId: '1',
    messages: [
      {
        id: 'msg-1',
        type: 'user',
        content: 'I want to create a sustainable water bottle. What materials should I consider?',
        timestamp: '2025-01-25T10:30:00Z'
      },
      {
        id: 'msg-2',
        type: 'ai',
        content: 'For a sustainable water bottle, I recommend rPET (recycled PET) as the primary material. It offers excellent recyclability (95%) and reduces carbon footprint by 60% compared to virgin plastic. Would you like me to suggest specific dimensions based on your target capacity?',
        timestamp: '2025-01-25T10:30:15Z',
        suggestions: [
          {
            id: 'sug-1',
            type: 'material',
            title: 'rPET Material',
            description: 'Recycled PET offers 95% recyclability and 60% lower carbon footprint',
            impact: 'high',
            applied: true
          },
          {
            id: 'sug-2',
            type: 'sustainability',
            title: 'Ocean Plastic Source',
            description: 'Consider using ocean-bound plastic for premium positioning',
            impact: 'medium',
            applied: false
          }
        ]
      },
      {
        id: 'msg-3',
        type: 'user',
        content: 'What about the capacity? I want something around 500ml.',
        timestamp: '2025-01-25T10:32:00Z'
      },
      {
        id: 'msg-4',
        type: 'ai',
        content: 'For a 500ml capacity, I suggest dimensions of 220mm height × 70mm diameter with 2.5mm wall thickness. This provides optimal ergonomics and durability. The rPET material can handle these specifications while maintaining structural integrity.',
        timestamp: '2025-01-25T10:32:20Z',
        suggestions: [
          {
            id: 'sug-3',
            type: 'dimension',
            title: 'Optimal Dimensions',
            description: '220mm × 70mm × 2.5mm for 500ml capacity',
            impact: 'high',
            applied: true
          }
        ]
      }
    ]
  },
  {
    id: 'conv-2',
    title: 'Food Container Optimization',
    date: 'Yesterday',
    preview: 'Exploring bamboo fiber composite materials...',
    status: 'completed',
    productId: '2',
    messages: [
      {
        id: 'msg-5',
        type: 'user',
        content: 'I need a biodegradable food container. What are the best sustainable options?',
        timestamp: '2025-01-24T14:20:00Z'
      },
      {
        id: 'msg-6',
        type: 'ai',
        content: 'For biodegradable food containers, I recommend bamboo fiber composite (60%) with corn starch polymer (35%). This combination offers 98% recyclability and complete biodegradability in 6-12 months. The natural rubber seal (5%) ensures leak-proof functionality.',
        timestamp: '2025-01-24T14:20:30Z',
        suggestions: [
          {
            id: 'sug-4',
            type: 'material',
            title: 'Bamboo Fiber Composite',
            description: '60% bamboo fiber for strength and sustainability',
            impact: 'high',
            applied: true
          },
          {
            id: 'sug-5',
            type: 'sustainability',
            title: 'Corn Starch Polymer',
            description: '35% corn starch for biodegradability',
            impact: 'high',
            applied: true
          }
        ]
      }
    ]
  },
  {
    id: 'conv-3',
    title: 'Coffee Cup Insulation',
    date: '3 days ago',
    preview: 'Comparing stainless steel vs ceramic options...',
    status: 'archived',
    productId: '3',
    messages: [
      {
        id: 'msg-7',
        type: 'user',
        content: 'Should I use stainless steel or ceramic for a coffee cup?',
        timestamp: '2025-01-22T09:15:00Z'
      },
      {
        id: 'msg-8',
        type: 'ai',
        content: 'Stainless steel offers better durability and insulation properties. For a travel mug, I recommend 304 stainless steel (80%) with a PP plastic lid (15%) and silicone grip (5%). This provides excellent thermal retention while maintaining recyclability.',
        timestamp: '2025-01-22T09:15:45Z'
      }
    ]
  }
];

export const mockAIAnalyses: AIAnalysis[] = [
  {
    id: 'analysis-1',
    productId: '1',
    sustainabilityScore: 92,
    recommendations: [
      'Consider adding a bamboo cap option for 100% plant-based materials',
      'Implement QR code for recycling instructions',
      'Add carbon footprint tracking feature'
    ],
    alternatives: [
      { name: 'Tritan (BPA-free)', percentage: 100, recyclable: true, sustainable: true },
      { name: 'Borosilicate Glass', percentage: 100, recyclable: true, sustainable: true }
    ],
    carbonFootprint: 0.8,
    recyclabilityScore: 95,
    costAnalysis: {
      material: 2.50,
      manufacturing: 1.20,
      total: 3.70
    }
  },
  {
    id: 'analysis-2',
    productId: '2',
    sustainabilityScore: 98,
    recommendations: [
      'Perfect for premium eco-conscious market',
      'Consider adding compostable packaging',
      'Implement batch tracking for quality assurance'
    ],
    alternatives: [
      { name: 'Wheat Straw Composite', percentage: 100, recyclable: true, sustainable: true },
      { name: 'Bagasse (Sugarcane)', percentage: 100, recyclable: true, sustainable: true }
    ],
    carbonFootprint: 0.3,
    recyclabilityScore: 98,
    costAnalysis: {
      material: 1.80,
      manufacturing: 0.90,
      total: 2.70
    }
  }
];

export const mockAISuggestions = {
  materials: [
    {
      name: 'rPET (Recycled PET)',
      ecoScore: 'A',
      recyclability: 95,
      carbonReduction: 60,
      cost: 'Medium',
      description: 'Recycled ocean plastic with excellent durability'
    },
    {
      name: 'Bamboo Fiber Composite',
      ecoScore: 'A',
      recyclability: 98,
      carbonReduction: 80,
      cost: 'Low',
      description: 'Biodegradable and renewable resource'
    },
    {
      name: 'Tritan (BPA-free)',
      ecoScore: 'A',
      recyclability: 90,
      carbonReduction: 40,
      cost: 'High',
      description: 'Premium BPA-free plastic alternative'
    }
  ],
  dimensions: [
    {
      capacity: 500,
      height: 220,
      width: 70,
      depth: 70,
      thickness: 2.5,
      ergonomics: 'Excellent'
    },
    {
      capacity: 750,
      height: 180,
      width: 120,
      depth: 80,
      thickness: 2.0,
      ergonomics: 'Good'
    }
  ],
  sustainability: [
    {
      feature: 'Ocean Plastic Source',
      impact: 'High',
      description: 'Use ocean-bound plastic for premium positioning',
      cost: '+15%'
    },
    {
      feature: 'Carbon Tracking',
      impact: 'Medium',
      description: 'QR code for carbon footprint transparency',
      cost: '+5%'
    },
    {
      feature: 'Compostable Packaging',
      impact: 'High',
      description: 'Biodegradable packaging materials',
      cost: '+20%'
    }
  ]
};
