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
    <div className="relative overflow-hidden mt-10">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/af.jpeg')`
        }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="relative space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 hover:scale-105 transition-transform shadow-lg">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold text-white">
                  {t.transformingBusiness} • {t.across}
                </span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="block text-white drop-shadow-lg">A & F</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                    ADVISORY
                  </span>
                  <span className="block text-2xl lg:text-3xl xl:text-4xl text-yellow-400 font-bold mt-2 drop-shadow-md">
                    LIMITED
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 font-semibold drop-shadow-md">
                  {t.tagline}
                </p>
              </div>

              {/* Description */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-lg text-white leading-relaxed font-medium">
                  {t.experienceExcellence}. We serve as your business clinic for micro, small, and medium enterprises as well as public sector organizations.
                </p>
              </div>

              {/* Services List */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2 text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 hover:scale-105 hover:-translate-y-1">
                <span>{t.bookNow}</span>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </button>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main visual container */}
                <div className="relative z-10">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl p-6">
                    {/* Business visualization */}
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex flex-col items-center justify-center space-y-8">
                      
                      {/* Central logo/icon */}
                      <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
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
                            className="flex flex-col items-center space-y-2 p-3 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all border border-white/10"
                          >
                            <item.icon className="w-6 h-6 text-blue-300" />
                            <span className="text-xs text-white font-semibold">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
                
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-300/10 to-purple-400/10 rounded-full blur-xl animate-pulse" />

                {/* Achievement badge */}
                <div className="absolute top-6 -left-6 z-10 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/30 hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-black text-white">
                      4.9
                    </span>
                  </div>
                  <p className="text-xs text-gray-200 mt-1 font-semibold">
                    Trusted Partner
                  </p>
                </div>

                {/* Tanzania badge */}
                <div className="absolute bottom-6 -right-6 z-10 bg-gradient-to-r from-green-600 to-yellow-500 text-white rounded-2xl p-4 shadow-xl hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 mb-2 mx-auto" />
                  <p className="text-xs font-bold text-center">
                    Tanzania
                  </p>
                  <p className="text-xs opacity-90 text-center font-medium">
                    Registered
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row - Moved to bottom for better visibility */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-black text-white mb-1 drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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