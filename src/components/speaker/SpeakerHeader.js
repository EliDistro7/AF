import { Building2, MapPin, Calendar, Award, Users, Star, Globe, Briefcase } from 'lucide-react';
import React from 'react';

const CompanyAvatar = ({ src, alt, size = "lg", className = "" }) => {
  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-16 w-16", 
    lg: "h-24 w-24 sm:h-32 sm:w-32",
    xl: "h-32 w-32 sm:h-40 sm:w-40"
  };

  return (
    <div className={`${sizeClasses[size]} ${className} rounded-full overflow-hidden bg-white/20 flex items-center justify-center`}>
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <Building2 className="h-1/2 w-1/2 text-white" />
      )}
    </div>
  );
};

export const CompanyHeader = () => {
  const company = {
    name: "A & F ADVISORY LIMITED",
    tagline: "Your Business Growth Partner",
    registrationNumber: "182954411",
    establishedYear: "2025",
    location: "Dar es Salaam, Tanzania",
    rating: 4.8,
    clientsServed: "500+",
    yearsExperience: "Expert",
    specialties: [
      "Business Development",
      "Tax Consultancy", 
      "Financial Planning",
      "Skills Training",
      "Cultural Products",
      "Equipment Trading"
    ],
    isPremium: true
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background with enhanced gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)]"></div>
      </div>
      
      {/* Content */}
      <div className="relative px-4 py-8 text-white sm:px-6 md:px-8 lg:px-12 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            
            {/* Logo/Avatar Section */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-white/20 to-white/10 blur-sm"></div>
              <CompanyAvatar 
                alt={company.name}
                size="lg"
                className="relative border-4 border-white/30 shadow-2xl backdrop-blur-sm ring-4 ring-white/20 transition-transform duration-300 hover:scale-105"
              />
              
              {/* Premium badge */}
              {company.isPremium && (
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg">
                  <Award className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
            
            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left">
              
              {/* Company Name and Tagline */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                    {company.name}
                  </span>
                </h1>
                <p className="mt-3 text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
                  {company.tagline}
                </p>
                
                {/* Registration Info */}
                <p className="mt-2 text-base text-white/80 sm:text-lg">
                  Reg. No: {company.registrationNumber} | Est. {company.establishedYear}
                </p>
              </div>
              
              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
                
                {/* Rating */}
                <div className="group rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105">
                  <div className="flex items-center justify-center space-x-2 lg:justify-start">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(company.rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-white/40'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 text-center lg:text-left">
                    <div className="text-xl font-bold sm:text-2xl">{company.rating}</div>
                    <div className="text-xs text-white/70 sm:text-sm">Rating</div>
                  </div>
                </div>
                
                {/* Clients Served */}
                <div className="group rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105">
                  <div className="flex items-center justify-center lg:justify-start">
                    <Users className="h-5 w-5 text-green-300 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-2 text-center lg:text-left">
                    <div className="text-xl font-bold sm:text-2xl">{company.clientsServed}</div>
                    <div className="text-xs text-white/70 sm:text-sm">Clients</div>
                  </div>
                </div>
                
                {/* Experience */}
                <div className="group rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105">
                  <div className="flex items-center justify-center lg:justify-start">
                    <Briefcase className="h-5 w-5 text-purple-300 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-2 text-center lg:text-left">
                    <div className="text-xl font-bold sm:text-2xl">{company.yearsExperience}</div>
                    <div className="text-xs text-white/70 sm:text-sm">Level</div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="group rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:scale-105">
                  <div className="flex items-center justify-center lg:justify-start">
                    <MapPin className="h-5 w-5 text-red-300 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-2 text-center lg:text-left">
                    <div className="text-sm font-medium sm:text-base">{company.location}</div>
                    <div className="text-xs text-white/70 sm:text-sm">Headquarters</div>
                  </div>
                </div>
              </div>
              
              {/* Services Tags */}
              {company.specialties && company.specialties.length > 0 && (
                <div className="mt-6 lg:mt-8">
                  <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                    {company.specialties.slice(0, 4).map((specialty, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/25 sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                    {company.specialties.length > 4 && (
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                        +{company.specialties.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Company Mission Statement */}
              <div className="mt-6 lg:mt-8">
                <p className="text-sm text-white/80 max-w-3xl mx-auto lg:mx-0 sm:text-base leading-relaxed">
                  Empowering businesses through comprehensive consultancy services, from micro-enterprises to large organizations. 
                  We provide end-to-end solutions in business development, financial planning, tax consultancy, and specialized training programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
};