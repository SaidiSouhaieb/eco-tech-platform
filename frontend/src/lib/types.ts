export type UserRole = 'founder' | 'client' | null;

export type EcoScore = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Product {
  id: string;
  name: string;
  description: string;
  ecoScore: EcoScore;
  materials: Material[];
  recyclability: number;
  images: string[];
  capacity?: number;
  dimensions?: {
    height: number;
    width: number;
    depth: number;
  };
  manufacturer?: string;
  status: 'draft' | 'published';
  createdAt: string;
  views?: number;
  scans?: number;
}

export interface Material {
  name: string;
  percentage: number;
  recyclable: boolean;
  sustainable: boolean;
}

export interface RecyclingPoint {
  id: string;
  name: string;
  type: 'recycling' | 'buyback';
  lat: number;
  lng: number;
  address: string;
  hours: string;
  acceptedMaterials: string[];
  incentives?: string;
}

export interface AIMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestions?: any;
}

export interface FounderStats {
  totalProducts: number;
  publishedProducts: number;
  pendingProducts: number;
  totalViews: number;
  totalScans: number;
}

export interface ClientStats {
  totalScans: number;
  savedProducts: number;
  co2Saved: number;
  itemsRecycled: number;
}
