import { Moon, Sun, Globe, Menu, X, Leaf, 
  LayoutDashboard, Sparkles, Store, BarChart, 
  Scan, Package, MapPin, User as UserIcon,
  LogOut, Settings } from 'lucide-react';
import { useApp } from '../lib/context';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { useState } from 'react';
import { cn } from './ui/utils';

interface NavigationProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  const { theme, toggleTheme, locale, setLocale, userRole, isAuthenticated, setIsAuthenticated, setUserRole } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    onNavigate('landing');
  };

  const founderLinks = [
    { name: 'Dashboard', page: 'founder-dashboard', icon: LayoutDashboard },
    { name: 'AI Creator', page: 'ai-creator', icon: Sparkles },
    { name: 'Store', page: 'store-management', icon: Store },
    { name: 'Analytics', page: 'analytics', icon: BarChart },
  ];

  const clientLinks = [
    { name: 'Scanner', page: 'scanner', icon: Scan },
    { name: 'Catalog', page: 'client-catalog', icon: Package },
    { name: 'Map', page: 'recycling-map', icon: MapPin },
    { name: 'Profile', page: 'client-profile', icon: UserIcon },
  ];

  const links = userRole === 'founder' ? founderLinks : clientLinks;

  // Sidebar for desktop
  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 border-b bg-card">
        <div className="flex h-16 items-center justify-between px-4">
          <button 
            onClick={() => onNavigate(userRole === 'founder' ? 'founder-dashboard' : 'scanner')}
            className="flex items-center gap-2"
          >
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-medium">EcoTech</span>
          </button>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t bg-card">
            <div className="p-4 space-y-2">
              {links.map(link => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.page}
                    variant={currentPage === link.page ? 'secondary' : 'ghost'}
                    onClick={() => {
                      onNavigate(link.page);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full justify-start"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {link.name}
                  </Button>
                );
              })}
              
              <div className="pt-2 border-t mt-2">
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="w-full justify-start text-destructive"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-card px-6">
          {/* Logo */}
          <div className="flex h-16 shrink-0 items-center gap-2 cursor-pointer"
               onClick={() => onNavigate(userRole === 'founder' ? 'founder-dashboard' : 'scanner')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold">EcoTech Platform</span>
          </div>

          {/* Role Badge */}
          <div className="px-3 py-2 rounded-lg bg-muted text-sm">
            <div className="text-muted-foreground text-xs mb-1">Role</div>
            <div className="font-medium capitalize">{userRole}</div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-1">
              {links.map(link => {
                const Icon = link.icon;
                return (
                  <li key={link.page}>
                    <Button
                      variant={currentPage === link.page ? 'secondary' : 'ghost'}
                      onClick={() => onNavigate(link.page)}
                      className="w-full justify-start"
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {link.name}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="space-y-3 pb-4">
            {/* Theme & Language */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="flex-1"
              >
                {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="flex-1">
                    <Globe className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
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
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full justify-start gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {userRole === 'founder' ? 'FD' : 'CL'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start flex-1 min-w-0">
                    <span className="text-sm truncate">User Account</span>
                    <span className="text-xs text-muted-foreground truncate">
                      {userRole === 'founder' ? 'Founder' : 'Client'}
                    </span>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onNavigate(userRole === 'founder' ? 'founder-dashboard' : 'client-profile')}>
                  <UserIcon className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>
    </>
  );
}
