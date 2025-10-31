import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#opportunities', label: 'Opportunities' },
    { href: '/#about', label: 'About' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-green shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 text-white hover:text-bright-green transition-colors">
            <img 
              src="/byrd-logo.png" 
              alt="Byrd Consulting Group" 
              className="w-12 h-12 md:w-14 md:h-14"
            />
            <div>
              <div className="text-xl md:text-2xl font-black">BYRD</div>
              <div className="hidden md:block text-xs font-medium -mt-1">
                Consulting Group
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-bright-green transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-bright-green text-primary-green hover:bg-accent-gold hover:text-primary-green font-bold"
              onClick={() => window.open('https://www.byrdconsulting.group/appointments', '_blank')}
            >
              Schedule Reveal Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-bright-green transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-bright-green transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="default" 
                className="bg-bright-green text-primary-green hover:bg-accent-gold hover:text-primary-green font-bold w-full"
                onClick={() => window.open('https://www.byrdconsulting.group/appointments', '_blank')}
              >
                Schedule Reveal Session
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
