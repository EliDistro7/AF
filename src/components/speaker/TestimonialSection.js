import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { TestimonialCard } from './TestimonialCard';
import { 
  MessageCircle, Star, Users, Filter, Grid3X3, 
  List, ChevronLeft, ChevronRight, Quote, 
  Award, TrendingUp, Heart, Eye, Building2,
  Briefcase, Target, Shield, CheckCircle
} from 'lucide-react';

const translations = {
  en: {
    title: 'Client Success Stories',
    subtitle: 'What Our Partners Say About AF',
    description: 'Discover how AF has transformed businesses across industries with innovative solutions and exceptional service delivery.',
    allTestimonials: 'All Reviews',
    verified: 'Verified Partners',
    recent: 'Latest Reviews',
    topRated: 'Top Rated',
    enterprise: 'Enterprise Clients',
    startup: 'Growing Businesses',
    filterBy: 'Filter by',
    sortBy: 'Sort by',
    showingResults: 'Showing {count} of {total} client testimonials',
    noTestimonials: 'No client testimonials available at this time',
    loadMore: 'Load More Stories',
    viewAll: 'View All Testimonials',
    gridView: 'Grid View',
    listView: 'List View',
    averageRating: 'Client Rating',
    totalReviews: 'Success Stories',
    satisfactionRate: 'Client Satisfaction',
    trustedPartners: 'Trusted Partners',
    projectsDelivered: 'Projects Delivered',
    industryExpertise: 'Industry Expertise',
    clientRetention: 'Client Retention'
  },
  sw: {
    title: 'Hadithi za Mafanikio ya Wateja',
    subtitle: 'Washirika Wetu Wanasema Nini Kuhusu AF',
    description: 'Gundua jinsi AF imevyobadilisha biashara katika tasnia mbalimbali kwa suluhisho za ubunifu na utoa huduma wa kipekee.',
    allTestimonials: 'Tathmini Zote',
    verified: 'Washirika Waliothibitishwa',
    recent: 'Tathmini za Hivi Karibuni',
    topRated: 'Zilizo Bora',
    enterprise: 'Wateja wa Makampuni Makubwa',
    startup: 'Biashara Zinazokua',
    filterBy: 'Chuja kwa',
    sortBy: 'Panga kwa',
    showingResults: 'Kuonyesha {count} kati ya {total} ushuhuda wa wateja',
    noTestimonials: 'Hakuna ushuhuda wa wateja unapatikana kwa sasa',
    loadMore: 'Pakia Hadithi Zaidi',
    viewAll: 'Ona Ushuhuda Wote',
    gridView: 'Mchoro wa Grid',
    listView: 'Mchoro wa Orodha',
    averageRating: 'Kiwango cha Wateja',
    totalReviews: 'Hadithi za Mafanikio',
    satisfactionRate: 'Kuridhika kwa Wateja',
    trustedPartners: 'Washirika Waaminifu',
    projectsDelivered: 'Miradi Iliyotolewa',
    industryExpertise: 'Uzoefu wa Tasnia',
    clientRetention: 'Kuhifadhi Wateja'
  }
};

export const TestimonialsSection = ({ 
  testimonials = [],
  showStats = true,
  showFilters = true,
  itemsPerPage = 6,
  variant = 'af-corporate',
  animated = true,
  autoPlay = false,
  showViewToggle = true
}) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [viewMode, setViewMode] = useState('grid');
  const [displayedItems, setDisplayedItems] = useState(itemsPerPage);
  const [currentSlide, setCurrentSlide] = useState(0);

  // AF-specific filter options
  const filterOptions = [
    { key: 'all', label: t.allTestimonials, icon: MessageCircle },
    { key: 'verified', label: t.verified, icon: Shield },
    { key: 'topRated', label: t.topRated, icon: Star },
    { key: 'enterprise', label: t.enterprise, icon: Building2 },
    { key: 'startup', label: t.startup, icon: Target }
  ];

  // Sort options
  const sortOptions = [
    { key: 'recent', label: t.recent },
    { key: 'topRated', label: t.topRated },
    { key: 'helpful', label: 'Most Impactful' },
    { key: 'projects', label: 'Project Size' }
  ];

  // Filter and sort testimonials
  const processedTestimonials = React.useMemo(() => {
    let filtered = [...testimonials];

    // Apply AF-specific filters
    if (filter === 'verified') {
      filtered = filtered.filter(t => t.verified);
    } else if (filter === 'topRated') {
      filtered = filtered.filter(t => (t.rating || 0) >= 4.5);
    } else if (filter === 'enterprise') {
      filtered = filtered.filter(t => t.clientType === 'enterprise' || t.companySize === 'large');
    } else if (filter === 'startup') {
      filtered = filtered.filter(t => t.clientType === 'startup' || t.companySize === 'small');
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'topRated':
          return (b.rating || 0) - (a.rating || 0);
        case 'helpful':
          return (b.impact || 0) - (a.impact || 0);
        case 'projects':
          return (b.projectValue || 0) - (a.projectValue || 0);
        case 'recent':
        default:
          return new Date(b.date || 0) - new Date(a.date || 0);
      }
    });

    return filtered;
  }, [testimonials, filter, sortBy]);

  // Calculate AF-specific stats
  const stats = React.useMemo(() => {
    const totalReviews = testimonials.length;
    const avgRating = testimonials.reduce((sum, t) => sum + (t.rating || 0), 0) / totalReviews || 0;
    const satisfactionRate = (testimonials.filter(t => (t.rating || 0) >= 4).length / totalReviews * 100) || 0;
    const retentionRate = (testimonials.filter(t => t.isRepeatClient).length / totalReviews * 100) || 0;
    
    return {
      totalReviews,
      avgRating: Math.round(avgRating * 10) / 10,
      satisfactionRate: Math.round(satisfactionRate),
      retentionRate: Math.round(retentionRate)
    };
  }, [testimonials]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && processedTestimonials.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % Math.ceil(processedTestimonials.length / 2));
      }, 6000); // Slower for business context
      return () => clearInterval(interval);
    }
  }, [autoPlay, processedTestimonials.length]);

  // AF Corporate variant styling
  const afVariant = {
    bg: 'from-background-primary/80 via-background-secondary/60 to-background-primary/90',
    accent: 'from-primary-600 to-accent-600',
    headerBg: 'from-primary-50/80 via-accent-50/60 to-background-primary/70',
    cardBg: 'bg-background-primary/60 backdrop-blur-md border-corporate/30',
    statsBg: 'bg-gradient-to-br from-primary-500/10 to-accent-500/10'
  };

  if (!testimonials || testimonials.length === 0) {
    return (
      <motion.div
        initial={animated ? { opacity: 0, y: 20 } : {}}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-2xl p-12 ${afVariant.cardBg} shadow-corporate-lg text-center`}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <MessageCircle className="h-10 w-10 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Coming Soon</h3>
        <p className="text-text-secondary">{t.noTestimonials}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 30 } : {}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-8"
    >
      {/* AF Corporate Header Section */}
      <motion.div
        className={`relative overflow-hidden rounded-2xl p-10 bg-gradient-to-br ${afVariant.headerBg} border border-corporate/40 shadow-corporate-lg`}
        initial={animated ? { opacity: 0, scale: 0.95 } : {}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* AF Corporate Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary-500 to-accent-600 rounded-full transform translate-x-24 -translate-y-24"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent-500 to-primary-600 rounded-full transform -translate-x-20 translate-y-20"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full transform -translate-x-16 -translate-y-16 opacity-60"></div>
        </div>

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            {/* AF Corporate Title */}
            <motion.div 
              className="flex items-center space-x-6 mb-6"
              initial={animated ? { opacity: 0, x: -20 } : {}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-600 shadow-corporate-lg">
                <Quote className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-text-primary via-primary-700 to-accent-700 bg-clip-text text-transparent">
                  {t.title}
                </h2>
                <p className="text-xl text-text-secondary mt-2">{t.subtitle}</p>
                <div className="h-1.5 w-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mt-3"></div>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-text-secondary max-w-3xl leading-relaxed"
              initial={animated ? { opacity: 0, y: 10 } : {}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t.description}
            </motion.p>
          </div>

          {/* AF Corporate Stats */}
          {showStats && (
            <motion.div
              className="mt-8 lg:mt-0 lg:ml-10"
              initial={animated ? { opacity: 0, x: 20 } : {}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
                <div className={`text-center p-4 rounded-xl ${afVariant.statsBg} border border-corporate/20`}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 mb-3 mx-auto shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-700">{stats.avgRating}</div>
                  <div className="text-sm text-text-tertiary font-medium">{t.averageRating}</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${afVariant.statsBg} border border-corporate/20`}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 mb-3 mx-auto shadow-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-700">{stats.totalReviews}</div>
                  <div className="text-sm text-text-tertiary font-medium">{t.totalReviews}</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${afVariant.statsBg} border border-corporate/20`}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 mb-3 mx-auto shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-700">{stats.satisfactionRate}%</div>
                  <div className="text-sm text-text-tertiary font-medium">{t.satisfactionRate}</div>
                </div>
                <div className={`text-center p-4 rounded-xl ${afVariant.statsBg} border border-corporate/20`}>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 mb-3 mx-auto shadow-lg">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-700">{stats.retentionRate}%</div>
                  <div className="text-sm text-text-tertiary font-medium">{t.clientRetention}</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* AF Corporate Filters and Controls */}
      {showFilters && (
        <motion.div
          className={`p-6 rounded-xl ${afVariant.cardBg} shadow-corporate`}
          initial={animated ? { opacity: 0, y: 20 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-text-primary flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>{t.filterBy}:</span>
              </span>
              {filterOptions.map((option) => (
                <Badge
                  key={option.key}
                  variant={filter === option.key ? 'primary' : 'gray'}
                  interactive={true}
                  animated={true}
                  icon={option.icon}
                  onClick={() => setFilter(option.key)}
                  className="cursor-pointer hover:scale-105 transition-transform"
                >
                  {option.label}
                </Badge>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* AF Corporate Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-corporate/30 bg-background-primary/80 backdrop-blur-sm text-sm font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              >
                {sortOptions.map(option => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* AF Corporate View Toggle */}
              {showViewToggle && (
                <div className="flex items-center bg-background-secondary/60 backdrop-blur-sm rounded-lg p-1 border border-corporate/20">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md'
                        : 'text-text-tertiary hover:text-text-primary'
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-md'
                        : 'text-text-tertiary hover:text-text-primary'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Results Info */}
      <motion.div
        className="flex items-center justify-between text-sm text-text-secondary"
        initial={animated ? { opacity: 0 } : {}}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <span>
          {t.showingResults
            .replace('{count}', Math.min(displayedItems, processedTestimonials.length))
            .replace('{total}', processedTestimonials.length)}
        </span>
        <span className="flex items-center space-x-2">
          <Eye className="h-4 w-4" />
          <span>Updated recently</span>
        </span>
      </motion.div>

      {/* AF Corporate Testimonials Grid */}
      <motion.div
        className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}
        initial={animated ? { opacity: 0 } : {}}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <AnimatePresence>
          {processedTestimonials
            .slice(0, displayedItems)
            .map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author}-${index}`}
                initial={animated ? { opacity: 0, y: 30, scale: 0.95 } : {}}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 80
                }}
                className="group"
              >
                <TestimonialCard
                  testimonial={testimonial}
                  variant="af-corporate"
                  animated={animated}
                  glowEffect={true}
                  className="hover:shadow-corporate-xl transition-all duration-300 group-hover:scale-[1.02]"
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>

      {/* AF Corporate Load More Button */}
      {displayedItems < processedTestimonials.length && (
        <motion.div
          className="text-center"
          initial={animated ? { opacity: 0, y: 20 } : {}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            onClick={() => setDisplayedItems(prev => prev + itemsPerPage)}
            className="px-10 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-corporate-lg transform hover:scale-105 transition-all duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-primary-500/20 shadow-corporate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center space-x-2">
              <span>{t.loadMore}</span>
              <ChevronRight className="h-4 w-4" />
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* AF Corporate Bottom Accent */}
      <motion.div
        className="relative"
        initial={animated ? { scaleX: 0 } : {}}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-corporate/40 to-transparent"></div>
        <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};