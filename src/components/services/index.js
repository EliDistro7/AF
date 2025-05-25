import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/language';
import { 
  Building2, 
  Calculator, 
  Users, 
  Package, 
  Wrench, 
  TrendingUp,
  FileText,
  Handshake,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const translations = {
  en: {
    sectionTitle: 'Comprehensive Business Solutions',
    sectionSubtitle: 'Your trusted partner for business growth, from consultation to implementation',
    businessDevelopment: 'Business Development',
    businessDevelopmentDesc: 'Complete business clinic services for SMEs and enterprises',
    taxFinancial: 'Tax & Financial Advisory',
    taxFinancialDesc: 'Strategic tax planning and financial management solutions',
    laborMarket: 'Labor Market Solutions',
    laborMarketDesc: 'HR consulting, training programs, and workforce development',
    importExport: 'Import/Export Trading',
    importExportDesc: 'Maasai cultural products, vehicles, and equipment trading',
    equipmentRental: 'Equipment & Hardware',
    equipmentRentalDesc: 'Construction equipment, automotive, and hardware solutions',
    learnMore: 'Learn More',
    keyServicesInclude: 'Key Services Include:',
    completeBusinessEcosystem: 'Complete Business Ecosystem',
    strategicPlanning: 'Strategic Planning',
    implementation: 'Implementation',
    ongoingSupport: 'Ongoing Support',
    // Business Development details
    businessConsulting: 'Business Consulting',
    businessPlanning: 'Business Planning',
    businessFormalization: 'Business Formalization',
    growthStrategy: 'Growth Strategy',
    businessDiagnosis: 'Business Diagnosis',
    businessRenewal: 'Business Renewal',
    // Tax & Financial details
    taxPlanning: 'Tax Planning',
    financialAnalysis: 'Financial Analysis',
    budgetSupport: 'Budget Support',
    taxCollection: 'Tax Collection Strategies',
    policyDesign: 'Policy Design',
    financialPlanning: 'Financial Planning',
    // Labor Market details
    recruitmentServices: 'Recruitment Services',
    trainingPrograms: 'Training Programs',
    capacityBuilding: 'Capacity Building',
    skillDevelopment: 'Skill Development',
    inductionTraining: 'Induction Training',
    employerLinking: 'Employer Linking',
    // Import/Export details
    maasaiProducts: 'Maasai Cultural Products',
    vehicleTrading: 'Vehicle Trading',
    artsCrafts: 'Arts & Crafts',
    culturalExports: 'Cultural Exports',
    businessIntermediary: 'Business Intermediary',
    propertyServices: 'Property Services',
    // Equipment details
    constructionEquipment: 'Construction Equipment',
    powerTools: 'Power Tools',
    hardwareSolutions: 'Hardware Solutions',
    equipmentRentalService: 'Equipment Rental',
    maintenanceServices: 'Maintenance Services',
    technicalSupport: 'Technical Support'
  },
  sw: {
    sectionTitle: 'Suluhisho Kamili za Biashara',
    sectionSubtitle: 'Mshiriki wako wa kuaminika kwa ukuaji wa biashara, kutoka ushauri hadi utekelezaji',
    businessDevelopment: 'Maendeleo ya Biashara',
    businessDevelopmentDesc: 'Huduma kamili za kliniki ya biashara kwa SMEs na makampuni',
    taxFinancial: 'Ushauri wa Kodi na Kifedha',
    taxFinancialDesc: 'Mipango ya mikakati ya kodi na suluhisho za usimamizi wa kifedha',
    laborMarket: 'Suluhisho za Soko la Kazi',
    laborMarketDesc: 'Ushauri wa HR, mipango ya mafunzo, na maendeleo ya wafanyakazi',
    importExport: 'Biashara ya Kuagiza/Kuuza Nje',
    importExportDesc: 'Bidhaa za kitamaduni za Kimaasai, magari, na biashara ya vifaa',
    equipmentRental: 'Vifaa na Hardware',
    equipmentRentalDesc: 'Vifaa vya ujenzi, magari, na suluhisho za hardware',
    learnMore: 'Jifunze Zaidi',
    keyServicesInclude: 'Huduma Kuu Ni Pamoja na:',
    completeBusinessEcosystem: 'Mfumo Kamili wa Biashara',
    strategicPlanning: 'Mpango wa Mkakati',
    implementation: 'Utekelezaji',
    ongoingSupport: 'Msaada wa Kuendelea',
    // Business Development details
    businessConsulting: 'Ushauri wa Biashara',
    businessPlanning: 'Mpango wa Biashara',
    businessFormalization: 'Urasmi wa Biashara',
    growthStrategy: 'Mkakati wa Ukuaji',
    businessDiagnosis: 'Uchunguzi wa Biashara',
    businessRenewal: 'Mfumo Mpya wa Biashara',
    // Tax & Financial details
    taxPlanning: 'Mpango wa Kodi',
    financialAnalysis: 'Uchambuzi wa Kifedha',
    budgetSupport: 'Msaada wa Bajeti',
    taxCollection: 'Mikakati ya Ukusanyaji Kodi',
    policyDesign: 'Muundo wa Sera',
    financialPlanning: 'Mpango wa Kifedha',
    // Labor Market details
    recruitmentServices: 'Huduma za Uajiri',
    trainingPrograms: 'Mipango ya Mafunzo',
    capacityBuilding: 'Kujenga Uwezo',
    skillDevelopment: 'Maendeleo ya Ujuzi',
    inductionTraining: 'Mafunzo ya Utambulisho',
    employerLinking: 'Kuunganisha Waajiri',
    // Import/Export details
    maasaiProducts: 'Bidhaa za Kitamaduni za Kimaasai',
    vehicleTrading: 'Biashara ya Magari',
    artsCrafts: 'Sanaa na Kazi za Mikono',
    culturalExports: 'Mazao ya Kitamaduni',
    businessIntermediary: 'Mpatanishi wa Biashara',
    propertyServices: 'Huduma za Mali',
    // Equipment details
    constructionEquipment: 'Vifaa vya Ujenzi',
    powerTools: 'Zana za Umeme',
    hardwareSolutions: 'Suluhisho za Hardware',
    equipmentRentalService: 'Kukodisha Vifaa',
    maintenanceServices: 'Huduma za Matengenezo',
    technicalSupport: 'Msaada wa Kiufundi'
  }
};

const ServicesOverview = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeService, setActiveService] = useState(0);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    {
      id: 0,
      title: t.businessDevelopment,
      description: t.businessDevelopmentDesc,
      icon: Building2,
      color: 'from-primary-500 to-primary-700',
      features: [
        t.businessConsulting,
        t.businessPlanning,
        t.businessFormalization,
        t.growthStrategy,
        t.businessDiagnosis,
        t.businessRenewal
      ]
    },
    {
      id: 1,
      title: t.taxFinancial,
      description: t.taxFinancialDesc,
      icon: Calculator,
      color: 'from-accent-500 to-accent-700',
      features: [
        t.taxPlanning,
        t.financialAnalysis,
        t.budgetSupport,
        t.taxCollection,
        t.policyDesign,
        t.financialPlanning
      ]
    },
    {
      id: 2,
      title: t.laborMarket,
      description: t.laborMarketDesc,
      icon: Users,
      color: 'from-success-500 to-success-700',
      features: [
        t.recruitmentServices,
        t.trainingPrograms,
        t.capacityBuilding,
        t.skillDevelopment,
        t.inductionTraining,
        t.employerLinking
      ]
    },
    {
      id: 3,
      title: t.importExport,
      description: t.importExportDesc,
      icon: Package,
      color: 'from-warning-500 to-warning-700',
      features: [
        t.maasaiProducts,
        t.vehicleTrading,
        t.artsCrafts,
        t.culturalExports,
        t.businessIntermediary,
        t.propertyServices
      ]
    },
    {
      id: 4,
      title: t.equipmentRental,
      description: t.equipmentRentalDesc,
      icon: Wrench,
      color: 'from-secondary-500 to-secondary-700',
      features: [
        t.constructionEquipment,
        t.powerTools,
        t.hardwareSolutions,
        t.equipmentRentalService,
        t.maintenanceServices,
        t.technicalSupport
      ]
    }
  ];

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
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Service Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-background-primary/80 border-corporate-strong shadow-corporate-lg' 
                      : 'bg-background-primary/40 border-corporate/20 hover:bg-background-primary/60 hover:border-corporate/40'
                  } backdrop-blur-md border rounded-xl p-6 group`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-tertiary text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                      activeService === index ? 'text-primary-600 rotate-90' : 'text-text-light'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-background-primary/60 backdrop-blur-md border border-corporate/30 rounded-2xl p-8 shadow-corporate-lg h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col"
                >
                  {/* Service Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${services[activeService].color} rounded-xl flex items-center justify-center shadow-lg`}>
                      {React.createElement(services[activeService].icon, {
                        className: "w-8 h-8 text-white"
                      })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-2">
                        {services[activeService].title}
                      </h3>
                      <p className="text-text-secondary">
                        {services[activeService].description}
                      </p>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-text-primary mb-6">
                      {t.keyServicesInclude}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services[activeService].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-background-secondary/50 hover:bg-background-secondary/70 transition-colors"
                        >
                          <CheckCircle className="w-5 h-5 text-success-600 flex-shrink-0" />
                          <span className="text-text-secondary font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    className="mt-8 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${services[activeService].color} text-white px-6 py-3 rounded-lg font-semibold shadow-corporate hover:shadow-corporate-lg transition-all duration-300 flex items-center space-x-2`}
                    >
                      <span>{t.learnMore}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-background-primary/50 backdrop-blur-md border border-corporate/30 rounded-2xl p-8 shadow-corporate-lg">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              {t.completeBusinessEcosystem}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-text-tertiary">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary-600" />
                <span>{t.strategicPlanning}</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-accent-600" />
                <span>{t.implementation}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Handshake className="w-5 h-5 text-success-600" />
                <span>{t.ongoingSupport}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesOverview;