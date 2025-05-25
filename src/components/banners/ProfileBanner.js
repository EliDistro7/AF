import React from 'react';
import { Star, Users, Globe, Award, Sparkles, ChevronRight, Building, TrendingUp, Briefcase, Target } from 'lucide-react';

const ProfileBanner = ({ language = 'en' }) => {
  const translations = {
    en: {
      transformingBusiness: 'Transforming Businesses',
      across: 'Across Tanzania',
      experienceExcellence: 'Your Business Clinic for Growth & Success',
      bookNow: 'Get Consultation',
      totalClients: 'Businesses Served',
      yearsExperience: 'Years Experience',
      servicesOffered: 'Services Offered',
      successRate: 'Success Rate',
      tagline: 'Business Development • Consultancy • Training • Equipment Solutions'
    },
    sw: {
      transformingBusiness: 'Kubadilisha Biashara',
      across: 'Nchini Tanzania',
      experienceExcellence: 'Kliniki yako ya Biashara kwa Ukuaji na Mafanikio',
      bookNow: 'Pata Ushauri',
      totalClients: 'Biashara Zilizotumikiwa',
      yearsExperience: 'Miaka ya Uzoefu',
      servicesOffered: 'Huduma Zinazopatikana',
      successRate: 'Kiwango cha Mafanikio',
      tagline: 'Maendeleo ya Biashara • Ushauri • Mafunzo • Suluhisho za Vifaa'
    }
  };

  const t = translations[language];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const stats = [
    { icon: Users, value: '500+', label: t.totalClients },
    { icon: TrendingUp, value: '10+', label: t.yearsExperience },
    { icon: Briefcase, value: '13+', label: t.servicesOffered },
    { icon: Target, value: '95%', label: t.successRate }
  ];

  const services = [
    'Business Development',
    'Financial Planning',
    'Tax Consultancy',
    'Training Programs',
    'Equipment Solutions',
    'Labor Market Linking'
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-700 to-blue-900" />
        
        {/* Animated gradient orbs */}
        <div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            animation: 'float 25s ease-in-out infinite reverse'
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-emerald-300" />
                <span className="text-sm font-semibold text-emerald-100">
                  {t.transformingBusiness} • {t.across}
                </span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-white">A & F</span>
                  <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">
                    ADVISORY
                  </span>
                  <span className="block text-2xl lg:text-3xl xl:text-4xl text-emerald-200 font-medium mt-2">
                    LIMITED
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-teal-100 font-medium">
                  {t.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-teal-200 leading-relaxed max-w-lg">
                {t.experienceExcellence}. We serve as your business clinic for micro, small, and medium enterprises as well as public sector organizations.
              </p>

              {/* Services List */}
              <div className="grid grid-cols-2 gap-2 text-sm">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2 text-teal-100">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:-translate-y-1">
                <span>{t.bookNow}</span>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>

              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center hover:scale-105 transition-transform"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                        <stat.icon className="w-6 h-6 text-emerald-300" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-teal-200">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main visual container */}
                <div className="relative z-10">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 p-6">
                    {/* Business visualization */}
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-100/20 to-teal-100/20 flex flex-col items-center justify-center space-y-8">
                      
                      {/* Central logo/icon */}
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl">
                          <Building className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-yellow-800" />
                        </div>
                      </div>

                      {/* Service icons */}
                      <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                        {[
                          { icon: TrendingUp, label: 'Growth' },
                          { icon: Users, label: 'Training' },
                          { icon: Target, label: 'Strategy' },
                          { icon: Briefcase, label: 'Consulting' },
                          { icon: Globe, label: 'Export/Import' },
                          { icon: Star, label: 'Quality' }
                        ].map((item, index) => (
                          <div 
                            key={index}
                            className="flex flex-col items-center space-y-2 p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
                          >
                            <item.icon className="w-6 h-6 text-emerald-300" />
                            <span className="text-xs text-white font-medium">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-teal-600/30 rounded-full blur-xl animate-pulse" />
                
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse" />

                {/* Achievement badge */}
                <div className="absolute top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/50 hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-800">
                      4.9
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    Trusted Partner
                  </p>
                </div>

                {/* Tanzania badge */}
                <div className="absolute bottom-6 -right-6 bg-gradient-to-r from-green-600 to-yellow-500 text-white rounded-2xl p-4 shadow-xl hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 mb-2 mx-auto" />
                  <p className="text-xs font-semibold text-center">
                    Tanzania
                  </p>
                  <p className="text-xs opacity-90 text-center">
                    Registered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default ProfileBanner;