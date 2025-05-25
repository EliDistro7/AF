import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PartnersShowcase = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Mock partner data - replace with your actual partner brands
  const partners = [
    { id: 1, name: 'TechCorp', logo: 'TC', description: 'Digital Transformation' },
    { id: 2, name: 'GlobalFinance', logo: 'GF', description: 'Financial Solutions' },
    { id: 3, name: 'InnovateLab', logo: 'IL', description: 'Innovation Hub' },
    { id: 4, name: 'CloudFirst', logo: 'CF', description: 'Cloud Services' },
    { id: 5, name: 'DataDriven', logo: 'DD', description: 'Analytics Platform' },
    { id: 6, name: 'SecureNet', logo: 'SN', description: 'Cybersecurity' },
    { id: 7, name: 'AI Dynamics', logo: 'AD', description: 'AI Solutions' },
    { id: 8, name: 'BlockChain Pro', logo: 'BP', description: 'Blockchain Tech' },
  ];

  // Track record stats
  const trackRecord = [
    { value: '150+', label: 'Projects Completed', icon: '🎯' },
    { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
    { value: '50+', label: 'Partner Companies', icon: '🤝' },
    { value: '5 Years', label: 'Industry Experience', icon: '📈' },
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
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We've partnered with innovative companies across industries to deliver 
            exceptional results and drive digital transformation.
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

        {/* Partners Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
            Our Partner Network
          </h3>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Companies that trust us to deliver innovative solutions
          </p>
        </motion.div>

        {/* Partners Slider Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
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
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-background-primary/50 backdrop-blur-md border border-corporate/30 rounded-2xl p-8 max-w-2xl mx-auto shadow-corporate-lg">
            <h4 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Join Our Success Stories?
            </h4>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Let's discuss how we can help your business achieve its goals with our proven expertise.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold shadow-corporate-lg hover:shadow-corporate-xl transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersShowcase;