import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ChevronUp,
  Briefcase,
  Users,
  Calculator,
  GraduationCap,
  Palette,
  Truck,
  Globe,
  Award,
  Shield,
  Star
} from 'lucide-react';
import { useLanguage } from '@/contexts/language';

// Mock Link component for demonstration
const Link = ({ href, children, className, ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

const translations = {
  en: {
    companyName: 'A & F Advisory',
    tagline: 'Business Growth Partner',
    description: 'Empowering businesses across Tanzania with comprehensive advisory services, innovative solutions, and strategic growth partnerships since 2009.',
    ourServices: 'Our Services',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    stayUpdated: 'Stay Updated',
    newsletterDesc: 'Get insights and updates delivered to your inbox.',
    emailPlaceholder: 'Your email',
    freeConsultation: 'Free Consultation',
    officeAddress: 'Office Address',
    phone: 'Phone',
    email: 'Email',
    businessHours: 'Business Hours',
    website: 'Website',
    businessHoursText: {
      weekdays: 'Mon - Fri: 8:00 AM - 6:00 PM',
      saturday: 'Sat: 9:00 AM - 2:00 PM'
    },
    copyrightText: 'All rights reserved.',
    proudlyServing: 'Proudly serving businesses across Tanzania',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    services: {
      businessDevelopment: 'Business Development',
      taxConsultancy: 'Tax Consultancy',
      financialPlanning: 'Financial Planning',
      skillsTraining: 'Skills Training',
      culturalProducts: 'Cultural Products',
      equipmentTrading: 'Equipment Trading'
    },
    quickLinksItems: {
      aboutUs: 'About Us',
      portfolio: 'Portfolio',
      caseStudies: 'Case Studies',
      blog: 'Blog',
      careers: 'Careers',
      contact: 'Contact'
    },
    achievements: {
      clientsServed: 'Clients Served',
      yearsExperience: 'Years Experience',
      successRate: 'Success Rate',
      support: 'Support'
    }
  },
  sw: {
    companyName: 'A & F Advisory',
    tagline: 'Mshirika wa Ukuaji wa Biashara',
    description: 'Kuimarisha biashara kote Tanzania kwa huduma za ushauri wa kina, masuluhisho ya ubunifu, na ushirikiano wa mkakati tangu mwaka 2009.',
    ourServices: 'Huduma Zetu',
    quickLinks: 'Viungo vya Haraka',
    contactInfo: 'Maelezo ya Mawasiliano',
    stayUpdated: 'Pata Habari Mpya',
    newsletterDesc: 'Pata maarifa na habari mpya zilizopelekwa kwenye barua pepe yako.',
    emailPlaceholder: 'Barua pepe yako',
    freeConsultation: 'Ushauri wa Bure',
    officeAddress: 'Anwani ya Ofisi',
    phone: 'Simu',
    email: 'Barua Pepe',
    businessHours: 'Masaa ya Biashara',
    website: 'Tovuti',
    businessHoursText: {
      weekdays: 'Jumatatu - Ijumaa: 8:00 Asubuhi - 6:00 Jioni',
      saturday: 'Jumamosi: 9:00 Asubuhi - 2:00 Jioni'
    },
    copyrightText: 'Haki zote zimehifadhiwa.',
    proudlyServing: 'Kwa fahari tunahudumia biashara kote Tanzania',
    privacyPolicy: 'Sera ya Faragha',
    termsOfService: 'Masharti ya Huduma',
    cookiePolicy: 'Sera ya Vidakuzi',
    services: {
      businessDevelopment: 'Maendeleo ya Biashara',
      taxConsultancy: 'Ushauri wa Kodi',
      financialPlanning: 'Mipango ya Kifedha',
      skillsTraining: 'Mafunzo ya Ujuzi',
      culturalProducts: 'Bidhaa za Kitamaduni',
      equipmentTrading: 'Biashara ya Vifaa'
    },
    quickLinksItems: {
      aboutUs: 'Kutuhusu',
      portfolio: 'Kazi Zetu',
      caseStudies: 'Mifano ya Kesi',
      blog: 'Blogu',
      careers: 'Ajira',
      contact: 'Mawasiliano'
    },
    achievements: {
      clientsServed: 'Wateja Waliohudumika',
      yearsExperience: 'Miaka ya Uzoefu',
      successRate: 'Kiwango cha Mafanikio',
      support: 'Msaada'
    }
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: t.services.businessDevelopment, href: '/services/business-development', icon: Briefcase },
    { name: t.services.taxConsultancy, href: '/services/tax-consultancy', icon: Calculator },
    { name: t.services.financialPlanning, href: '/services/financial-planning', icon: Users },
    { name: t.services.skillsTraining, href: '/services/training', icon: GraduationCap },
    { name: t.services.culturalProducts, href: '/services/cultural-products', icon: Palette },
    { name: t.services.equipmentTrading, href: '/services/equipment', icon: Truck }
  ];

  const quickLinks = [
    { name: t.quickLinksItems.aboutUs, href: '/about' },
    { name: t.quickLinksItems.portfolio, href: '/portfolio' },
    { name: t.quickLinksItems.caseStudies, href: '/case-studies' },
    { name: t.quickLinksItems.blog, href: '/blog' },
    { name: t.quickLinksItems.careers, href: '/careers' },
    { name: t.quickLinksItems.contact, href: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-sky-500' },
    { name: 'LinkedIn', href: '#', icon: Linkedin, color: 'hover:text-blue-700' },
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-600' },
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-600' }
  ];

  const achievements = [
    { number: '500+', label: t.achievements.clientsServed, icon: Users },
    { number: '15+', label: t.achievements.yearsExperience, icon: Award },
    { number: '98%', label: t.achievements.successRate, icon: Star },
    { number: '24/7', label: t.achievements.support, icon: Shield }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-spin duration-[20s]"></div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-black/20 to-black/40"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                animate={floatingAnimation}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-corporate-lg">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white drop-shadow-lg">
                    {t.companyName}
                  </h2>
                  <p className="text-sm text-secondary-300 drop-shadow-sm">
                    {t.tagline}
                  </p>
                </div>
              </motion.div>
              
              <p className="text-secondary-300 mb-6 leading-relaxed drop-shadow-sm">
                {t.description}
              </p>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="backdrop-blur-md bg-white/10 rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <achievement.icon className="h-4 w-4 text-accent-400" />
                      <span className="text-lg font-bold text-white drop-shadow-sm">
                        {achievement.number}
                      </span>
                    </div>
                    <p className="text-xs text-secondary-300 drop-shadow-sm">
                      {achievement.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-secondary-300 ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-corporate-lg`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 drop-shadow-lg">
                {t.ourServices}
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-3 text-secondary-300 hover:text-accent-400 transition-all duration-300 group drop-shadow-sm hover:drop-shadow-md"
                    >
                      <service.icon className="h-4 w-4 group-hover:text-accent-400 transition-colors duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 drop-shadow-lg">
                {t.quickLinks}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-secondary-300 hover:text-accent-400 transition-all duration-300 group drop-shadow-sm hover:drop-shadow-md"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 p-4 backdrop-blur-md bg-white/10 rounded-lg border border-white/20"
              >
                <h4 className="text-sm font-semibold text-white mb-2 drop-shadow-sm">
                  {t.stayUpdated}
                </h4>
                <p className="text-xs text-secondary-300 mb-3 drop-shadow-sm">
                  {t.newsletterDesc}
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="flex-1 px-3 py-2 text-sm bg-white/20 border border-white/30 rounded-lg text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-lg font-bold text-white mb-6 drop-shadow-lg">
                {t.contactInfo}
              </h3>
              
              <div className="space-y-4">
                <motion.div 
                  variants={itemVariants}
                  className="flex items-start space-x-3 text-secondary-300 drop-shadow-sm"
                >
                  <MapPin className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">{t.officeAddress}</p>
                    <p className="text-sm">
                      Dar es Salaam, Tanzania<br />
                      Masaki Peninsula
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-secondary-300 drop-shadow-sm"
                >
                  <Phone className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">{t.phone}</p>
                    <p className="text-sm">+255 XXX XXX XXX</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-secondary-300 drop-shadow-sm"
                >
                  <Mail className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">{t.email}</p>
                    <p className="text-sm">info@afadvisory.co.tz</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-secondary-300 drop-shadow-sm"
                >
                  <Clock className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">{t.businessHours}</p>
                    <p className="text-sm">{t.businessHoursText.weekdays}</p>
                    <p className="text-sm">{t.businessHoursText.saturday}</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-3 text-secondary-300 drop-shadow-sm"
                >
                  <Globe className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">{t.website}</p>
                    <p className="text-sm">www.afadvisory.co.tz</p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-6">
                <Link
                  href="/consultation"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-corporate-lg hover:shadow-corporate-xl transform hover:-translate-y-0.5 backdrop-blur-sm group"
                >
                  <span>{t.freeConsultation}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/20 backdrop-blur-md bg-black/20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-secondary-300 drop-shadow-sm"
              >
                <p>&copy; {currentYear} {t.companyName}. {t.copyrightText}</p>
                <div className="flex items-center space-x-4">
                  <Link href="/privacy" className="hover:text-accent-400 transition-colors duration-300">
                    {t.privacyPolicy}
                  </Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-accent-400 transition-colors duration-300">
                    {t.termsOfService}
                  </Link>
                  <span>•</span>
                  <Link href="/cookies" className="hover:text-accent-400 transition-colors duration-300">
                    {t.cookiePolicy}
                  </Link>
                </div>
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="text-sm text-secondary-400 drop-shadow-sm"
              >
                {t.proudlyServing}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-corporate-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;