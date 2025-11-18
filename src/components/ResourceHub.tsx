import { useState } from 'react';
import { BookOpen, Leaf, Heart, Home, AlertCircle, Users, Zap, ExternalLink } from 'lucide-react';
import { ResourceModal } from './ResourceModal';
import { AnimalCareGuide } from './AnimalCareGuide';
import { GovernmentSchemes } from './GovernmentSchemes';
import { DiseaseManagement } from './DiseaseManagement';
import { FeedingGuide } from './FeedingGuide';
import { ShelterGuide } from './ShelterGuide';
import { TrainingPrograms } from './TrainingPrograms';
import { NGOResources } from './NGOResources';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export function ResourceHub() {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const { t } = useLanguage();

  const resources = [
    {
      id: 'animal-care',
      title: 'Animal Care Guides',
      description: 'Comprehensive guides for caring for cows, poultry, fish, and other animals in dry, hot climate',
      icon: '🐄',
      gradient: 'linear-gradient(to right, #22c55e, #10b981)',
      category: 'Care'
    },
    {
      id: 'government-schemes',
      title: 'Government Schemes & Subsidies',
      description: 'Information about Andhra Pradesh government schemes, subsidies, and financial assistance',
      icon: '💰',
      gradient: 'linear-gradient(to right, #3b82f6, #06b6d4)',
      category: 'Schemes'
    },
    {
      id: 'disease-management',
      title: 'Disease Management',
      description: 'Prevention and treatment of common animal diseases, health tips, and veterinary guidance',
      icon: '⚕️',
      gradient: 'linear-gradient(to right, #ef4444, #ec4899)',
      category: 'Health'
    },
    {
      id: 'feeding-nutrition',
      title: 'Feeding & Nutrition',
      description: 'Cost-effective feeding strategies, seasonal feed availability, and nutritional requirements',
      icon: '🌾',
      gradient: 'linear-gradient(to right, #eab308, #f97316)',
      category: 'Nutrition'
    },
    {
      id: 'shelter-infrastructure',
      title: 'Shelter & Infrastructure',
      description: 'Climate-appropriate shelter design, construction tips, and heat management solutions',
      icon: '🏠',
      gradient: 'linear-gradient(to right, #a855f7, #6366f1)',
      category: 'Infrastructure'
    },
    {
      id: 'training-programs',
      title: 'Training & Skill Development',
      description: 'Government training programs, online courses, workshops, and certification opportunities',
      icon: '📚',
      gradient: 'linear-gradient(to right, #14b8a6, #06b6d4)',
      category: 'Training'
    },
    {
      id: 'ngo-resources',
      title: 'NGO & Organization Resources',
      description: 'Connect with local NGOs, national organizations, veterinary services, and training centers',
      icon: '🤝',
      gradient: 'linear-gradient(to right, #dc2626, #ea580c)',
      category: 'Organizations'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header with Language Toggle */}
      <div style={{ background: 'linear-gradient(to right, #16a34a, #0284c7)' }} className="text-white rounded-2xl p-6 sm:p-8 md:p-12">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl sm:text-5xl">📚</div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{t('header')}</h1>
          </div>
          <div className="flex-shrink-0">
            <LanguageToggle />
          </div>
        </div>
        <p className="text-base sm:text-lg opacity-90 leading-relaxed max-w-3xl">
          {t('subtitle')}
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 border-2 border-green-300">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Welcome to Our Resource Hub</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This resource hub provides comprehensive information on animal care, government support schemes, 
          and training opportunities specifically designed for farmers and animal keepers in Nandanoor Village 
          and surrounding areas in Chittoor District.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-600">6+</div>
            <div className="text-sm text-gray-600">Resource Categories</div>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Detailed Guides</div>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-gray-600">Free Access</div>
          </div>
        </div>
      </div>

      {/* Resource Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <button
            key={resource.id}
            onClick={() => setOpenModal(resource.id)}
            className="group text-left"
          >
            <div 
              style={{ 
                background: resource.gradient,
                transition: 'all 0.3s'
              }}
              className="text-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:-translate-y-1 h-full"
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">{resource.title}</h3>
              <p className="text-sm sm:text-base opacity-90 mb-4 leading-relaxed">
                {resource.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold opacity-75 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <span>→</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Links Section */}
      <div style={{ background: 'linear-gradient(to right, #9333ea, #ec4899)' }} className="text-white rounded-xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">🔗 Quick Links - Government & NGO Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://chittoor.ap.gov.in/departments/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://chittoor.ap.gov.in/departments/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">Chittoor District</div>
              <div className="text-sm text-white/90">Animal Husbandry Office</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.nabard.org/content.aspx?id=57"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.nabard.org/content.aspx?id=57', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">NABARD AP</div>
              <div className="text-sm text-white/90">Livestock financing</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.pmfby.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.pmfby.gov.in/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">Fasal Bima Yojana</div>
              <div className="text-sm text-white/90">Crop insurance</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://nlm.udyamimitra.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://nlm.udyamimitra.in/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">National Livestock Mission</div>
              <div className="text-sm text-white/90">Training & schemes</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.dahd.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.dahd.gov.in/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">Dept of Animal Husbandry</div>
              <div className="text-sm text-white/90">National portal</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.icar.org.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.icar.org.in/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">ICAR</div>
              <div className="text-sm text-white/90">Research & training</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
        </div>
      </div>

      {/* Modals */}
      <ResourceModal
        isOpen={openModal === 'animal-care'}
        onClose={() => setOpenModal(null)}
        title="Animal Care Guides"
        icon="🐄"
      >
        <AnimalCareGuide onClose={() => setOpenModal(null)} />
      </ResourceModal>

      <ResourceModal
        isOpen={openModal === 'government-schemes'}
        onClose={() => setOpenModal(null)}
        title="Government Schemes & Subsidies"
        icon="💰"
      >
        <GovernmentSchemes onClose={() => setOpenModal(null)} />
      </ResourceModal>

      <ResourceModal
        isOpen={openModal === 'disease-management'}
        onClose={() => setOpenModal(null)}
        title="Disease Management"
        icon="⚕️"
      >
        <DiseaseManagement onClose={() => setOpenModal(null)} />
      </ResourceModal>

      <ResourceModal
        isOpen={openModal === 'feeding-nutrition'}
        onClose={() => setOpenModal(null)}
        title="Feeding & Nutrition"
        icon="🌾"
      >
        <FeedingGuide onClose={() => setOpenModal(null)} />
      </ResourceModal>

      <ResourceModal
        isOpen={openModal === 'shelter-infrastructure'}
        onClose={() => setOpenModal(null)}
        title="Shelter & Infrastructure"
        icon="🏠"
      >
        <ShelterGuide onClose={() => setOpenModal(null)} />
      </ResourceModal>

      <ResourceModal
        isOpen={openModal === 'training-programs'}
        onClose={() => setOpenModal(null)}
        title="Training & Skill Development"
        icon="📚"
      >
        <TrainingPrograms onClose={() => setOpenModal(null)} />
      </ResourceModal>

      <ResourceModal
        isOpen={openModal === 'ngo-resources'}
        onClose={() => setOpenModal(null)}
        title="NGO & Organization Resources"
        icon="🤝"
      >
        <NGOResources onClose={() => setOpenModal(null)} />
      </ResourceModal>
    </div>
  );
}
