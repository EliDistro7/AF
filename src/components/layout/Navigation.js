import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown, 
  Briefcase, 
  Users, 
  Calculator, 
  GraduationCap, 
  Palette, 
  Truck,
  Phone,
  Mail,
  MapPin,
  ArrowRight
} from 'lucide-react';

// Mock Link component for demonstration
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Business Development',
      description: 'Business planning, analysis, and growth strategies',
      icon: Briefcase,
      href: '/services/business-development'
    },
    {
      title: 'Tax Consultancy',
      description: 'Tax planning, compliance, and optimization',
      icon: Calculator,
      href: '/services/tax-consultancy'
    },
    {
      title: 'Financial Planning',
      description: 'Financial analysis, budgeting, and policy design',
      icon: Users,
      href: '/services/financial-planning'
    },
    {
      title: 'Skills Training',
      description: 'Professional development and training programs',
      icon: GraduationCap,
      href: '/services/training'
    },
    {
      title: 'Cultural Products',
      description: 'Maasai arts, crafts, and cultural items',
      icon: Palette,
      href: '/services/cultural-products'
    },
    {
      title: 'Equipment Trading',
      description: 'Road building and construction equipment',
      icon: Truck,
      href: '/services/equipment'
    }
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-glass-lg' 
          : 'backdrop-blur-md bg-white/70'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 shadow-corporate-lg lg:h-12 lg:w-12">
                <Building2 className="h-6 w-6 text-white lg:h-7 lg:w-7" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-text-primary drop-shadow-sm lg:text-xl">
                  A & F Advisory
                </h1>
                <p className="text-xs text-text-tertiary drop-shadow-sm lg:text-sm">
                  Business Growth Partner
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              
              {/* Home */}
              <Link
                href="/"
                className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center space-x-1 text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 backdrop-blur-xl bg-white/90 rounded-2xl shadow-glass-lg border border-white/30 overflow-hidden">
                    <div className="p-4">
                      <div className="grid gap-3">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-all duration-200 group"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50/80 group-hover:bg-primary-100/90 transition-colors duration-200 backdrop-blur-sm">
                              <service.icon className="h-5 w-5 text-primary-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary-600 transition-colors duration-200 drop-shadow-sm">
                                {service.title}
                              </h3>
                              <p className="text-xs text-text-tertiary mt-1 drop-shadow-sm">
                                {service.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-text-light group-hover:text-primary-600 transition-colors duration-200" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Portfolio */}
              <Link
                href="/portfolio"
                className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                Portfolio
              </Link>

              {/* Contact Link*/}
              <Link
                href="/contact"
                className="text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                href="/consultation"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-corporate-lg hover:shadow-corporate-xl transform hover:-translate-y-0.5 backdrop-blur-sm"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-white/30 backdrop-blur-sm transition-all duration-200 border border-white/20"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-white/30 backdrop-blur-xl bg-white/90">
            <div className="px-4 py-4 space-y-4">
              
              {/* Mobile Links */}
              <Link
                href="/"
                className="block py-2 text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                Home
              </Link>
              
              <Link
                href="/about"
                className="block py-2 text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                About Us
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full py-2 text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 ml-4 space-y-2 backdrop-blur-sm bg-white/30 rounded-lg p-3 border border-white/20">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 py-2 text-sm text-text-tertiary hover:text-primary-600 transition-colors duration-200 drop-shadow-sm hover:drop-shadow-md"
                      >
                        <service.icon className="h-4 w-4" />
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="block py-2 text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="block py-2 text-text-secondary hover:text-primary-600 transition-colors duration-200 font-medium drop-shadow-sm hover:drop-shadow-md"
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/30">
                <Link
                  href="/consultation"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-corporate-lg backdrop-blur-sm"
                >
                  Free Consultation
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-white/30 space-y-3 backdrop-blur-sm bg-white/20 rounded-lg p-4 border border-white/20">
                <div className="flex items-center space-x-3 text-sm text-text-tertiary drop-shadow-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Dar es Salaam, Tanzania</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-text-tertiary drop-shadow-sm">
                  <Phone className="h-4 w-4" />
                  <span>+255 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-text-tertiary drop-shadow-sm">
                  <Mail className="h-4 w-4" />
                  <span>info@afadvisory.co.tz</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/10 lg:block hidden"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
};

export default Navigation;