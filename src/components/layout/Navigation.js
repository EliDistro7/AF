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
  ArrowRight,
  Sparkles
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
      description: 'Strategic planning, market analysis, and sustainable growth solutions',
      icon: Briefcase,
      href: '/services/business-development',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Tax Consultancy',
      description: 'Comprehensive tax planning, compliance, and optimization strategies',
      icon: Calculator,
      href: '/services/tax-consultancy',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Financial Planning',
      description: 'Advanced financial analysis, budgeting, and policy frameworks',
      icon: Users,
      href: '/services/financial-planning',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Skills Training',
      description: 'Executive development and specialized training programs',
      icon: GraduationCap,
      href: '/services/training',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cultural Products',
      description: 'Authentic Maasai arts, crafts, and cultural heritage items',
      icon: Palette,
      href: '/services/cultural-products',
      color: 'from-rose-500 to-rose-600'
    },
    {
      title: 'Equipment Trading',
      description: 'Premium road building and construction equipment solutions',
      icon: Truck,
      href: '/services/equipment',
      color: 'from-slate-500 to-slate-600'
    }
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-2xl bg-white/85 shadow-2xl shadow-slate-900/10 border-b border-slate-200/50' 
          : 'backdrop-blur-xl bg-white/75'
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between lg:h-24">
            
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 shadow-2xl lg:h-14 lg:w-14 group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="h-7 w-7 text-white lg:h-8 lg:w-8 drop-shadow-lg" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-90 animate-pulse"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center space-x-2">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent lg:text-2xl tracking-tight">
                    A & F Advisory
                  </h1>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-200">
                    Limited
                  </span>
                </div>
                <p className="text-sm text-slate-500 font-medium tracking-wide lg:text-base mt-0.5">
                  Strategic Business Partners
                </p>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              
              {/* Navigation Links */}
              <Link
                href="/"
                className="relative text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>

              <Link
                href="/about"
                className="relative text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group py-2"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>

              {/* Enhanced Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('services')}
                  className="relative flex items-center space-x-1 text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-all duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'
                  }`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-4 w-[420px] backdrop-blur-2xl bg-white/95 rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-200/50 overflow-hidden animate-in slide-in-from-top-2 duration-300">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-slate-100">
                        <Sparkles className="h-5 w-5 text-blue-600" />
                        <h3 className="text-lg font-bold text-slate-800">Our Services</h3>
                      </div>
                      <div className="grid gap-2">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50/50 transition-all duration-300 group border border-transparent hover:border-blue-100"
                          >
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <service.icon className="h-6 w-6 text-white drop-shadow-sm" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300 mb-1">
                                {service.title}
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="relative text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group py-2"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>

              <Link
                href="/contact"
                className="relative text-slate-700 hover:text-blue-600 transition-all duration-300 font-semibold text-base group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>

              {/* Enhanced CTA Button */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Link
                  href="/consultation"
                  className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3.5 rounded-2xl font-bold text-base hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2 group-hover:scale-105"
                >
                  <span>Free Consultation</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-2xl text-slate-700 hover:bg-slate-100 backdrop-blur-sm transition-all duration-300 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200/50 backdrop-blur-2xl bg-white/95">
            <div className="px-6 py-6 space-y-6">
              
              {/* Mobile Links */}
              <Link
                href="/"
                className="block py-3 text-slate-700 hover:text-blue-600 transition-colors duration-300 font-semibold text-lg border-b border-slate-100 hover:border-blue-200"
              >
                Home
              </Link>
              
              <Link
                href="/about"
                className="block py-3 text-slate-700 hover:text-blue-600 transition-colors duration-300 font-semibold text-lg border-b border-slate-100 hover:border-blue-200"
              >
                About Us
              </Link>

              {/* Enhanced Mobile Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-services')}
                  className="flex items-center justify-between w-full py-3 text-slate-700 hover:text-blue-600 transition-colors duration-300 font-semibold text-lg border-b border-slate-100 hover:border-blue-200"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                    activeDropdown === 'mobile-services' ? 'rotate-180 text-blue-600' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'mobile-services' && (
                  <div className="mt-4 space-y-3 backdrop-blur-sm bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-4 border border-slate-200/50">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="flex items-center space-x-4 py-3 text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} shadow-md`}>
                          <service.icon className="h-5 w-5 text-white" />
                        </div>
                        <span>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/portfolio"
                className="block py-3 text-slate-700 hover:text-blue-600 transition-colors duration-300 font-semibold text-lg border-b border-slate-100 hover:border-blue-200"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="block py-3 text-slate-700 hover:text-blue-600 transition-colors duration-300 font-semibold text-lg border-b border-slate-100 hover:border-blue-200"
              >
                Contact
              </Link>

              {/* Enhanced Mobile CTA */}
              <div className="pt-4">
                <Link
                  href="/consultation"
                  className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Free Consultation</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              {/* Enhanced Contact Info */}
              <div className="pt-6 border-t border-slate-200 space-y-4 backdrop-blur-sm bg-gradient-to-r from-slate-50 to-blue-50/30 rounded-2xl p-5 border border-slate-200/50">
                <h4 className="text-lg font-bold text-slate-800 mb-3">Get in Touch</h4>
                <div className="flex items-center space-x-4 text-slate-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200">
                    <MapPin className="h-5 w-5 text-slate-600" />
                  </div>
                  <span className="font-medium">Dar es Salaam, Tanzania</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium">+255 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-200">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-medium">info@afadvisory.co.tz</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Backdrop */}
      {activeDropdown && (
        <div 
          className="fixed inset-0 z-40 backdrop-blur-sm bg-slate-900/20 lg:block hidden transition-opacity duration-300"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </>
  );
};

export default Navigation;