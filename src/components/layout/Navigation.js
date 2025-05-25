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
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200' 
          : 'bg-white'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg lg:h-12 lg:w-12">
                <Building2 className="h-6 w-6 text-white lg:h-7 lg:w-7" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-neutral-900 lg:text-xl">
                  A & F Advisory
                </h1>
                <p className="text-xs text-neutral-600 lg:text-sm">
                  Business Growth Partner
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              
              {/* Home */}
              <Link
                href="/"
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
                    <div className="p-4">
                      <div className="grid gap-3">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200 group"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-200">
                              <service.icon className="h-5 w-5 text-primary-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                                {service.title}
                              </h3>
                              <p className="text-xs text-neutral-600 mt-1">
                                {service.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-primary-600 transition-colors duration-200" />
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
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Portfolio
              </Link>

              {/* Contact Link*/}
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                href="/consultation"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2.5 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors duration-200"
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
          <div className="lg:hidden border-t border-neutral-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              
              {/* Mobile Links */}
              <Link
                href="/"
                className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              
              <Link
                href="/about"
                className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                About Us
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                    activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-3 py-2 text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-200"
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
                className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-neutral-200">
                <Link
                  href="/consultation"
                  className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-md"
                >
                  Free Consultation
                </Link>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-neutral-600">
                  <MapPin className="h-4 w-4" />
                  <span>Dar es Salaam, Tanzania</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-600">
                  <Phone className="h-4 w-4" />
                  <span>+255 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-neutral-600">
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
          className="fixed inset-0 z-40 bg-black/10 lg:block hidden"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
};

