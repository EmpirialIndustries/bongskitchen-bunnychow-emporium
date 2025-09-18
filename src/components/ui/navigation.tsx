import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Phone, Menu, User } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartItems = getTotalItems();
  
  // Mock user state - in real app, this would come from auth context
  const isLoggedIn = false;
  const user = { name: 'John Doe', email: 'john@example.com' };

  const isActive = (path: string) => location.pathname === path;

  const NavLinks = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
    <div className={`flex flex-col md:flex-row gap-6 ${className}`}>
      <Link 
        to="/" 
        className={`font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : ''}`}
        onClick={onClick}
      >
        Home
      </Link>
      <Link 
        to="/menu" 
        className={`font-medium transition-colors hover:text-primary ${isActive('/menu') ? 'text-primary' : ''}`}
        onClick={onClick}
      >
        Menu
      </Link>
      <Link 
        to="/about" 
        className={`font-medium transition-colors hover:text-primary ${isActive('/about') ? 'text-primary' : ''}`}
        onClick={onClick}
      >
        About
      </Link>
      <Link 
        to="/faq" 
        className={`font-medium transition-colors hover:text-primary ${isActive('/faq') ? 'text-primary' : ''}`}
        onClick={onClick}
      >
        FAQ
      </Link>
      <Link 
        to="/contact" 
        className={`font-medium transition-colors hover:text-primary ${isActive('/contact') ? 'text-primary' : ''}`}
        onClick={onClick}
      >
        Contact
      </Link>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold">Bong's Kitchen</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>064 762 3547</span>
            </Link>
            
            {/* User Account */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="relative">
                    <User className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-1.5">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">Order History</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/login">Sign In</Link>
              </Button>
            )}
            
            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="w-4 h-4" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="sm">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="flex flex-col gap-6 pt-6">
                  <NavLinks onClick={() => {}} />
                  <div className="border-t pt-6">
                    {!isLoggedIn && (
                      <div className="space-y-2 mb-4">
                        <Button asChild variant="outline" className="w-full">
                          <Link to="/login">Sign In</Link>
                        </Button>
                        <Button asChild className="w-full btn-hero">
                          <Link to="/register">Sign Up</Link>
                        </Button>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>064 762 3547</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};