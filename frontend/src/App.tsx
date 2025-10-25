import { useState } from 'react';
import { AppProvider, useApp } from './lib/context';
import { Navigation } from './components/Navigation';
import { AIChatbot } from './components/AIChatbot';
import { Toaster } from './components/ui/sonner';

// Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { PricingPage } from './pages/PricingPage';
import DesignSystem from './pages/DesignSystem';

// Founder Pages
import { FounderDashboard } from './pages/FounderDashboard';
import { AICreatorPage } from './pages/AICreatorPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { StoreManagement } from './pages/StoreManagement';
import { AnalyticsPage } from './pages/AnalyticsPage';

// Client Pages
import { ScannerPage } from './pages/ScannerPage';
import { ClientCatalog } from './pages/ClientCatalog';
import { SimilarProductsPage } from './pages/SimilarProductsPage';
import { RecyclingMap } from './pages/RecyclingMap';
import { ClientProfile } from './pages/ClientProfile';

import { mockProducts } from './lib/mock-data';

type Page = 
  | 'landing' 
  | 'login' 
  | 'signup' 
  | 'pricing' 
  | 'design-system'
  | 'founder-dashboard' 
  | 'ai-creator' 
  | 'product-detail'
  | 'store-management'
  | 'analytics'
  | 'scanner' 
  | 'client-catalog'
  | 'similar-products'
  | 'recycling-map'
  | 'client-profile';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);
  const { isAuthenticated, userRole } = useApp();

  const handleNavigate = (page: string, productId?: string) => {
    if (productId) {
      const product = mockProducts.find(p => p.id === productId);
      if (product) setSelectedProduct(product);
    }
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'signup':
        return <SignupPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'design-system':
        return <DesignSystem />;
      
      // Founder pages
      case 'founder-dashboard':
        return <FounderDashboard onNavigate={handleNavigate} />;
      case 'ai-creator':
        return <AICreatorPage onNavigate={handleNavigate} />;
      case 'product-detail':
        return <ProductDetailPage product={selectedProduct} onNavigate={handleNavigate} />;
      case 'store-management':
        return <StoreManagement onNavigate={handleNavigate} />;
      case 'analytics':
        return <AnalyticsPage onNavigate={handleNavigate} />;
      
      // Client pages
      case 'scanner':
        return <ScannerPage onNavigate={handleNavigate} />;
      case 'client-catalog':
        return <ClientCatalog onNavigate={handleNavigate} />;
      case 'similar-products':
        return <SimilarProductsPage originalProduct={selectedProduct.name} onNavigate={handleNavigate} />;
      case 'recycling-map':
        return <RecyclingMap onNavigate={handleNavigate} />;
      case 'client-profile':
        return <ClientProfile onNavigate={handleNavigate} />;
      
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  const showNavigation = isAuthenticated && currentPage !== 'landing' && currentPage !== 'login' && currentPage !== 'signup' && currentPage !== 'design-system';
  const showChatbot = isAuthenticated && userRole === 'founder' && 
    (currentPage === 'founder-dashboard' || currentPage === 'ai-creator' || currentPage === 'product-detail');

  return (
    <div className="min-h-screen bg-background">
      {showNavigation && <Navigation currentPage={currentPage} onNavigate={handleNavigate} />}
      <main className={showNavigation ? 'lg:pl-64' : ''}>
        {renderPage()}
      </main>
      {showChatbot && <AIChatbot />}
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
