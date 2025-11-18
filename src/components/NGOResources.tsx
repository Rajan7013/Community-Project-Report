import { Globe, Phone, Mail, MapPin, ExternalLink, Users, Briefcase, Heart, Award } from 'lucide-react';

interface NGOProps {
  onClose: () => void;
}

export function NGOResources({ onClose }: NGOProps) {
  
  // Hardcoded organizations (like AnimalCareGuide)
  const organizations = [
    {
      category: 'Local NGOs in Chittoor',
      emoji: '🏘️',
      organizations: [
        {
          name: 'Karuna Society for Animals & Nature',
          type: 'Animal Welfare & Conservation',
          location: 'Chittoor District, Andhra Pradesh',
          services: [
            'Animal shelter and rescue operations',
            'Veterinary care and vaccination camps',
            'Animal sterilization programs',
            'Community awareness on animal welfare',
            'Training on humane animal handling'
          ],
          contact: 'Local contact: District Animal Welfare Office',
          website: 'https://www.karunasociety.org/',
          phone: 'Contact through district office'
        },
        {
          name: 'Chittoor District Livestock Development Association',
          type: 'Livestock Development',
          location: 'Chittoor, Andhra Pradesh',
          services: [
            'Livestock farming training',
            'Breed improvement programs',
            'Market linkage support',
            'Cooperative formation assistance',
            'Subsidy application guidance'
          ],
          contact: 'District Animal Husbandry Office',
          website: 'https://chittoor.ap.gov.in/departments/',
          phone: 'District office contact'
        }
      ]
    },
    {
      category: 'National Animal Welfare Organizations',
      emoji: '🇮🇳',
      organizations: [
        {
          name: 'People for Animals (PFA)',
          type: 'Animal Welfare & Rights',
          location: 'Pan-India presence',
          services: [
            'Animal rescue and rehabilitation',
            'Veterinary services',
            'Animal welfare advocacy',
            'Community education programs',
            'Emergency animal response'
          ],
          contact: 'National headquarters',
          website: 'https://www.peopleforanimalsindia.org/',
          phone: 'National hotline available'
        },
        {
          name: 'PETA India',
          type: 'Animal Rights & Advocacy',
          location: 'Pan-India',
          services: [
            'Animal welfare campaigns',
            'Cruelty investigation',
            'Veterinary assistance',
            'Public awareness programs',
            'Legal support for animal cases'
          ],
          contact: 'National office',
          website: 'https://www.petaindia.com/',
          phone: 'Contact through website'
        },
        {
          name: 'World Animal Protection India',
          type: 'Global Animal Welfare',
          location: 'Pan-India',
          services: [
            'Livestock welfare programs',
            'Sustainable farming practices',
            'Community training',
            'Policy advocacy',
            'Research and documentation'
          ],
          contact: 'India office',
          website: 'https://www.worldanimalprotection.org/',
          phone: 'Contact through website'
        },
        {
          name: 'Humane Society International India',
          type: 'Animal Protection',
          location: 'Pan-India',
          services: [
            'Animal welfare programs',
            'Veterinary training',
            'Community outreach',
            'Disaster relief for animals',
            'Sustainable agriculture support'
          ],
          contact: 'India office',
          website: 'https://www.hsi.org/',
          phone: 'Contact through website'
        }
      ]
    },
    {
      category: 'Government Veterinary Services',
      emoji: '⚕️',
      organizations: [
        {
          name: 'District Veterinary Hospital, Chittoor',
          type: 'Government Veterinary Care',
          location: 'Chittoor District, Andhra Pradesh',
          services: [
            'Veterinary consultation and treatment',
            'Animal health camps',
            'Vaccination programs',
            'Disease diagnosis and management',
            'Emergency veterinary services',
            'Breeding assistance'
          ],
          contact: 'District Veterinary Officer',
          website: 'https://chittoor.ap.gov.in/departments/',
          phone: 'District office: Available during office hours'
        },
        {
          name: 'Veterinary Polyclinic, Chittoor',
          type: 'Specialized Veterinary Care',
          location: 'Chittoor District',
          services: [
            'Specialized animal treatment',
            'Surgical services',
            'Diagnostic services',
            'Referral services',
            'Training programs for farmers'
          ],
          contact: 'Deputy Director, Animal Husbandry',
          website: 'https://chittoor.ap.gov.in/',
          phone: 'District contact'
        }
      ]
    },
    {
      category: 'Training & Development Centers',
      emoji: '🎓',
      organizations: [
        {
          name: 'Veterinary College, Andhra Pradesh',
          type: 'Higher Education & Training',
          location: 'Andhra Pradesh',
          services: [
            'Veterinary degree programs',
            'Diploma courses',
            'Short-term training programs',
            'Research facilities',
            'Extension services'
          ],
          contact: 'Veterinary College Administration',
          website: 'https://www.icar.org.in/',
          phone: 'College contact through ICAR'
        },
        {
          name: 'ICAR - Krishi Vigyan Kendra (KVK)',
          type: 'Agricultural Training',
          location: 'District level centers',
          services: [
            'Livestock farming training',
            'Technology demonstration',
            'Farmer field schools',
            'Skill development programs',
            'Input supply assistance'
          ],
          contact: 'KVK Chittoor',
          website: 'https://www.icar.org.in/',
          phone: 'District KVK contact'
        },
        {
          name: 'NABARD Training Centers',
          type: 'Rural Development Training',
          location: 'Regional centers',
          services: [
            'Entrepreneurship training',
            'Livestock business planning',
            'Financial literacy',
            'Cooperative management',
            'Market linkage training'
          ],
          contact: 'NABARD Regional Office, AP',
          website: 'https://www.nabard.org/',
          phone: 'NABARD office contact'
        }
      ]
    },
    {
      category: 'Cooperative & Self-Help Groups',
      emoji: '🤝',
      organizations: [
        {
          name: 'Dairy Cooperative Societies',
          type: 'Dairy Farmer Cooperatives',
          location: 'Village level',
          services: [
            'Milk collection and marketing',
            'Input supply (feed, medicine)',
            'Training programs',
            'Credit facilities',
            'Market linkage'
          ],
          contact: 'Local cooperative office',
          website: 'https://chittoor.ap.gov.in/',
          phone: 'Village cooperative contact'
        },
        {
          name: 'Women Self-Help Groups (SHGs)',
          type: 'Community Development',
          location: 'Village level',
          services: [
            'Livestock rearing training',
            'Income generation programs',
            'Microfinance support',
            'Skill development',
            'Market access'
          ],
          contact: 'District Women Empowerment Cell',
          website: 'https://chittoor.ap.gov.in/',
          phone: 'District office contact'
        },
        {
          name: 'Farmer Producer Organizations (FPOs)',
          type: 'Farmer Collectives',
          location: 'District level',
          services: [
            'Collective farming initiatives',
            'Input procurement',
            'Product marketing',
            'Training and capacity building',
            'Technology adoption'
          ],
          contact: 'District Agriculture Office',
          website: 'https://chittoor.ap.gov.in/',
          phone: 'District office contact'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Important Links Section */}
      <div style={{ background: 'linear-gradient(to right, #dc2626, #ea580c)' }} className="text-white rounded-xl p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-4">🔗 Quick Access Links</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://www.peopleforanimalsindia.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.peopleforanimalsindia.org/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">People for Animals</div>
              <div className="text-sm text-white/90">Animal welfare & rescue</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.petaindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.petaindia.com/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">PETA India</div>
              <div className="text-sm text-white/90">Animal rights advocacy</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.worldanimalprotection.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.worldanimalprotection.org/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">World Animal Protection</div>
              <div className="text-sm text-white/90">Global animal welfare</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.hsi.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.hsi.org/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">Humane Society International</div>
              <div className="text-sm text-white/90">Animal protection programs</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
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
              <div className="font-semibold text-white">Chittoor District Departments</div>
              <div className="text-sm text-white/90">Local government services</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.nabard.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.nabard.org/', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">NABARD</div>
              <div className="text-sm text-white/90">Rural development & training</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
        </div>
      </div>

      {/* Organizations by Category */}
      <div className="space-y-8">
        {organizations.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">{category.emoji}</span>
              {category.category}
            </h3>

            <div className="space-y-4">
              {category.organizations.map((org, oIdx) => (
                <div
                  key={oIdx}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300 shadow-md"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-green-900">{org.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{org.type}</p>
                    </div>
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 whitespace-nowrap">
                      {org.type.split(' ')[0]}
                    </span>
                  </div>

                  {/* Details Grid */}
                  <div className="grid sm:grid-cols-2 gap-6 mb-4">
                    {/* Location */}
                    <div>
                      <h5 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-3 h-3 text-white" />
                        </div>
                        Location
                      </h5>
                      <p className="text-sm text-gray-700 ml-8">{org.location}</p>
                    </div>

                    {/* Contact */}
                    <div>
                      <h5 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-3 h-3 text-white" />
                        </div>
                        Contact
                      </h5>
                      <p className="text-sm text-gray-700 ml-8">{org.contact}</p>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <h5 className="font-bold text-purple-700 mb-2 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-3 h-3 text-white" />
                      </div>
                      Services Offered
                    </h5>
                    <ul className="space-y-1 ml-8">
                      {org.services.map((service, sIdx) => (
                        <li key={sIdx} className="text-sm text-gray-700">
                          • {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Website Link */}
                  <div className="pt-4 border-t border-green-200">
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(org.website, '_blank');
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* How to Connect */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8 border-2 border-cyan-300">
        <h3 className="text-xl font-bold text-cyan-900 mb-4">📞 How to Connect with Organizations</h3>
        <ol className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">1.</span>
            <span>Visit the organization's website using the links provided above</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">2.</span>
            <span>Find their contact information and local office details</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">3.</span>
            <span>Call or visit the District Animal Husbandry Office for local connections</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">4.</span>
            <span>Inquire about training programs, services, and support available</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">5.</span>
            <span>Participate in workshops, camps, and community programs</span>
          </li>
        </ol>
      </div>

      {/* Benefits of Connecting */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-6 sm:p-8">
        <h3 className="text-xl font-bold mb-4">💡 Benefits of Connecting with NGOs & Organizations</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold">Animal Welfare Support</div>
                <div className="text-sm opacity-90">Access to veterinary care and animal rescue services</div>
              </div>
            </div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold">Training & Certification</div>
                <div className="text-sm opacity-90">Professional training and skill development programs</div>
              </div>
            </div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold">Community Network</div>
                <div className="text-sm opacity-90">Connect with other farmers and animal keepers</div>
              </div>
            </div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold">Market Linkage</div>
                <div className="text-sm opacity-90">Access to markets and business opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
