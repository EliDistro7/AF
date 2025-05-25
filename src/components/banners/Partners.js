import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/language';

const translations = {
  en: {
    trustedBy: 'Trusted by Industry Leaders',
    trustedByDescription: 'We\'ve partnered with innovative companies across industries to deliver exceptional results and drive digital transformation.',
    projectsCompleted: 'Projects Completed',
    clientSatisfaction: 'Client Satisfaction', 
    partnerCompanies: 'Partner Companies',
    industryExperience: 'Industry Experience',
    ourPartnerNetwork: 'Our Partner Network',
    partnerNetworkDescription: 'Companies that trust us to deliver innovative solutions',
    readyToJoin: 'Ready to Join Our Success Stories?',
    readyToJoinDescription: 'Let\'s discuss how we can help your business achieve its goals with our proven expertise.',
    startProject: 'Start Your Project',
    digitalTransformation: 'Digital Transformation',
    financialSolutions: 'Financial Solutions',
    innovationHub: 'Innovation Hub',
    cloudServices: 'Cloud Services',
    analyticsPlatform: 'Analytics Platform',
    cybersecurity: 'Cybersecurity',
    aiSolutions: 'AI Solutions',
    blockchainTech: 'Blockchain Tech',
    years: 'Years',
    teamCollaboration: 'Building Success Through Partnership',
    teamCollaborationDescription: 'Our dedicated team works closely with partners to deliver exceptional results that drive business growth and innovation.'
  },
  sw: {
    trustedBy: 'Tunaminiwa na Viongozi wa Tasnia',
    trustedByDescription: 'Tumeshirikiana na makampuni ya ubunifu katika tasnia mbalimbali kutoa matokeo ya kipekee na kuendesha mabadiliko ya kidijitali.',
    projectsCompleted: 'Miradi Iliyokamilika',
    clientSatisfaction: 'Kuridhika kwa Wateja',
    partnerCompanies: 'Makampuni Washirika',
    industryExperience: 'Uzoefu wa Sekta',
    ourPartnerNetwork: 'Mtandao Wetu wa Washirika',
    partnerNetworkDescription: 'Makampuni yanayotuamini kutoa suluhisho za ubunifu',
    readyToJoin: 'Uko Tayari Kujiunga na Hadithi Zetu za Mafanikio?',
    readyToJoinDescription: 'Hebu tujadili jinsi tuwezavyo kusaidia biashara yako kufikia malengo yake kwa uzoefu wetu uliojaribiwa.',
    startProject: 'Anza Nasi Leo',
    digitalTransformation: 'Mabadiliko ya Kidijitali',
    financialSolutions: 'Suluhisho za Kifedha',
    innovationHub: 'Kituo cha Ubunifu',
    cloudServices: 'Huduma za Wingu',
    analyticsPlatform: 'Jukwaa la Uchambuzi',
    cybersecurity: 'Ulinzi wa Mtandao',
    aiSolutions: 'Suluhisho za AI',
    blockchainTech: 'Teknolojia ya Blockchain',
    years: 'Miaka',
    teamCollaboration: 'Kujenga Mafanikio Kupitia Ushirikiano',
    teamCollaborationDescription: 'Timu yetu iliyojitolea inafanya kazi kwa karibu na washirika kutoa matokeo ya kipekee yanayoongoza ukuaji wa biashara na ubunifu.'
  }
};

const PartnersShowcase = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Mock partner data - replace with your actual partner brands
  const partners = [
    { id: 1, name: 'TechCorp', logo: 'TC', description: t.digitalTransformation },
    { id: 2, name: 'GlobalFinance', logo: 'GF', description: t.financialSolutions },
    { id: 3, name: 'InnovateLab', logo: 'IL', description: t.innovationHub },
    { id: 4, name: 'CloudFirst', logo: 'CF', description: t.cloudServices },
    { id: 5, name: 'DataDriven', logo: 'DD', description: t.analyticsPlatform },
    { id: 6, name: 'SecureNet', logo: 'SN', description: t.cybersecurity },
    { id: 7, name: 'AI Dynamics', logo: 'AD', description: t.aiSolutions },
    { id: 8, name: 'BlockChain Pro', logo: 'BP', description: t.blockchainTech },
  ];

  // Track record stats
  const trackRecord = [
    { value: '150+', label: t.projectsCompleted, icon: '🎯' },
    { value: '98%', label: t.clientSatisfaction, icon: '⭐' },
    { value: '50+', label: t.partnerCompanies, icon: '🤝' },
    { value: `5 ${t.years}`, label: t.industryExperience, icon: '📈' },
  ];

  // Duplicate partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-shadow">
            {t.trustedBy}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t.trustedByDescription}
          </p>
        </motion.div>

        {/* Track Record Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {trackRecord.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-background-primary/60 backdrop-blur-md border border-corporate/30 rounded-2xl p-8 shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Photo Section - Team Collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-corporate-lg group-hover:shadow-corporate-xl transition-all duration-300">
                {/* Photo Placeholder - Replace with your actual image */}
               <img 
                  src="/partners.jpeg" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
                
                {/* Optional: Uncomment and modify this section to use an actual image */}
              
              
              
                
                {/* Overlay gradient for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/20 rounded-full blur-xl" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-text-primary">
                {t.teamCollaboration}
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t.teamCollaborationDescription}
              </p>
              
              {/* Additional features or benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span className="text-text-secondary">Collaborative approach to every project</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full" />
                  <span className="text-text-secondary">Dedicated support throughout the process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span className="text-text-secondary">Proven track record of success</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            {t.ourPartnerNetwork}
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {t.partnerNetworkDescription}
          </p>
        </motion.div>

        {/* Partners Slider Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative overflow-hidden"
        >
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background-primary/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background-primary/80 to-transparent z-10 pointer-events-none" />
          
          {/* Sliding Partners */}
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -50 * partners.length]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-background-primary/40 backdrop-blur-sm border border-corporate/20 rounded-xl p-8 w-64 h-48 flex flex-col items-center justify-center hover:bg-background-primary/60 hover:border-corporate/40 transition-all duration-300 shadow-corporate hover:shadow-corporate-lg">
                  {/* Partner Logo/Initial */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  
                  {/* Partner Name */}
                  <h4 className="text-xl font-bold text-text-primary mb-2 text-center">
                    {partner.name}
                  </h4>
                  
                  {/* Partner Description */}
                  <p className="text-text-tertiary text-sm text-center leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-background-primary/50 backdrop-blur-md border border-corporate/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-corporate-lg">
            <h4 className="text-2xl font-bold text-text-primary mb-4">
              {t.readyToJoin}
            </h4>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {t.readyToJoinDescription}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300"
            >
              {t.startProject}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersShowcase;