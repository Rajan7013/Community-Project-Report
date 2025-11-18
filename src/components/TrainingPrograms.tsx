import { BookOpen, Users, Zap, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import trainingTranslations from '../translations/trainingPrograms.json';

interface TrainingProps {
  onClose: () => void;
}

export function TrainingPrograms({ onClose }: TrainingProps) {
  const { language } = useLanguage();
  const translations = trainingTranslations[language as keyof typeof trainingTranslations];
  const programs = [
    {
      category: 'Government Training Programs',
      emoji: '🏛️',
      programs: [
        {
          name: 'Dairy Farming Training',
          provider: 'AP Animal Husbandry Department',
          duration: '7-10 days',
          topics: ['Dairy management', 'Milk production', 'Health care', 'Marketing'],
          cost: 'Free (Government sponsored)',
          location: 'District Training Center, Chittoor',
          contact: 'District Animal Husbandry Office'
        },
        {
          name: 'Poultry Farming Training',
          provider: 'AP Animal Husbandry Department',
          duration: '5-7 days',
          topics: ['Poultry management', 'Feed formulation', 'Disease prevention', 'Egg production'],
          cost: 'Free (Government sponsored)',
          location: 'District Training Center, Chittoor',
          contact: 'District Poultry Officer'
        },
        {
          name: 'Fish Farming Training',
          provider: 'AP Fisheries Department',
          duration: '7-10 days',
          topics: ['Pond management', 'Fish breeding', 'Feed preparation', 'Disease control'],
          cost: 'Free (Government sponsored)',
          location: 'District Fisheries Office, Chittoor',
          contact: 'District Fisheries Officer'
        },
        {
          name: 'Livestock Insurance Training',
          provider: 'NABARD',
          duration: '2-3 days',
          topics: ['Insurance schemes', 'Claim process', 'Documentation', 'Benefits'],
          cost: 'Free',
          location: 'NABARD Office, Chittoor',
          contact: 'NABARD Regional Office'
        }
      ]
    },
    {
      category: 'Online Courses & Certifications',
      emoji: '💻',
      programs: [
        {
          name: 'Basics of Animal Husbandry',
          provider: 'ICAR (Indian Council of Agricultural Research)',
          duration: '4 weeks',
          topics: ['Animal care', 'Feeding', 'Health management', 'Breeding'],
          cost: 'Free',
          location: 'Online (www.icar.org.in)',
          contact: 'ICAR E-learning'
        },
        {
          name: 'Dairy Farming Certification',
          provider: 'NDRI (National Dairy Research Institute)',
          duration: '6 weeks',
          topics: ['Dairy science', 'Milk production', 'Quality control', 'Marketing'],
          cost: 'Rs. 2,000-5,000',
          location: 'Online (www.ndri.res.in)',
          contact: 'NDRI Distance Education'
        },
        {
          name: 'Aquaculture Basics',
          provider: 'CIFRI (Central Institute of Freshwater Aquaculture)',
          duration: '4 weeks',
          topics: ['Fish farming', 'Pond management', 'Feed preparation', 'Marketing'],
          cost: 'Free',
          location: 'Online (www.cifri.res.in)',
          contact: 'CIFRI E-learning'
        },
        {
          name: 'Poultry Farming Diploma',
          provider: 'CARI (Central Avian Research Institute)',
          duration: '3 months',
          topics: ['Poultry management', 'Disease control', 'Production', 'Economics'],
          cost: 'Rs. 5,000-10,000',
          location: 'Online (www.cari.res.in)',
          contact: 'CARI Training Division'
        }
      ]
    },
    {
      category: 'Local Workshops & Demonstrations',
      emoji: '🎓',
      programs: [
        {
          name: 'Village-Level Training',
          provider: 'District Animal Husbandry Office',
          duration: '1-2 days',
          topics: ['Basic animal care', 'Common diseases', 'Feed preparation', 'Q&A'],
          cost: 'Free',
          location: 'Village Community Center, Nandanoor',
          contact: 'Local Veterinarian'
        },
        {
          name: 'Farmer Field School',
          provider: 'AP Agricultural Department',
          duration: 'Ongoing (Weekly)',
          topics: ['Practical demonstrations', 'Problem solving', 'Experience sharing'],
          cost: 'Free',
          location: 'Demonstration Farm, Chittoor',
          contact: 'District Agriculture Office'
        },
        {
          name: 'Women Farmer Training',
          provider: 'NGOs & Government',
          duration: '3-5 days',
          topics: ['Animal care', 'Income generation', 'Entrepreneurship', 'Marketing'],
          cost: 'Free/Subsidized',
          location: 'Village Training Center',
          contact: 'District Women Empowerment Cell'
        },
        {
          name: 'Youth Entrepreneurship Program',
          provider: 'NABARD & State Government',
          duration: '2-3 weeks',
          topics: ['Business planning', 'Farm management', 'Marketing', 'Finance'],
          cost: 'Free',
          location: 'District Training Center, Chittoor',
          contact: 'NABARD Youth Cell'
        }
      ]
    }
  ];

  const skills = [
    {
      skill: 'Animal Health Management',
      importance: 'Critical',
      topics: ['Disease identification', 'Vaccination', 'First aid', 'Veterinary care']
    },
    {
      skill: 'Feed Formulation',
      importance: 'High',
      topics: ['Nutritional requirements', 'Cost-effective feed', 'Storage', 'Quality control']
    },
    {
      skill: 'Shelter Management',
      importance: 'High',
      topics: ['Design', 'Maintenance', 'Sanitation', 'Heat management']
    },
    {
      skill: 'Record Keeping',
      importance: 'Medium',
      topics: ['Production records', 'Health records', 'Financial tracking', 'Reporting']
    },
    {
      skill: 'Marketing & Sales',
      importance: 'Medium',
      topics: ['Product quality', 'Pricing', 'Customer relations', 'Online marketing']
    },
    {
      skill: 'Business Management',
      importance: 'Medium',
      topics: ['Cost calculation', 'Profit analysis', 'Planning', 'Loan management']
    }
  ];

  return (
    <div className="space-y-8">
      {/* Key Skills to Develop */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 sm:p-8 border-2 border-indigo-300">
        <h3 className="text-xl font-bold text-indigo-900 mb-6">🎯 Essential Skills for Animal Farming</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-gray-800">{skill.skill}</h4>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${
                  skill.importance === 'Critical' ? 'bg-red-100 text-red-700' :
                  skill.importance === 'High' ? 'bg-orange-100 text-orange-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {skill.importance}
                </span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                {skill.topics.map((topic, tIdx) => (
                  <li key={tIdx}>• {topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Training Programs by Category */}
      <div className="space-y-8">
        {programs.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">{category.emoji}</span>
              {category.category}
            </h3>

            <div className="space-y-4">
              {category.programs.map((program, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300 shadow-md"
                >
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-green-900">{program.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{program.provider}</p>
                    </div>
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0">
                      {program.duration}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {/* Topics */}
                    <div>
                      <h5 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-3 h-3 text-white" />
                        </div>
                        Topics Covered
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {program.topics.map((topic, tIdx) => (
                          <li key={tIdx}>• {topic}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-bold text-blue-700 text-sm mb-1">💰 Cost</h5>
                        <p className="text-sm text-gray-700">{program.cost}</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-purple-700 text-sm mb-1">📍 Location</h5>
                        <p className="text-sm text-gray-700">{program.location}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-green-200">
                    <p className="text-sm text-gray-700">
                      <strong>Contact:</strong> {program.contact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* How to Register */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 sm:p-8 border-2 border-cyan-300">
        <h3 className="text-xl font-bold text-cyan-900 mb-4">📝 How to Register for Training</h3>
        <ol className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">1.</span>
            <span>Visit District Animal Husbandry Office, Chittoor</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">2.</span>
            <span>Collect training schedule and registration form</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">3.</span>
            <span>Fill form with required information and documents</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">4.</span>
            <span>Submit form with identity proof and address proof</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">5.</span>
            <span>Receive confirmation and training details</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-cyan-600 flex-shrink-0">6.</span>
            <span>Attend training and receive certificate</span>
          </li>
        </ol>
      </div>

      {/* Useful Links */}
      <div style={{ background: 'linear-gradient(to right, #16a34a, #0284c7)' }} className="text-white rounded-xl p-6 sm:p-8">
        <h3 className="text-xl font-bold mb-4">🔗 Useful Links & Resources</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://www.icar.org.in/content/icar-e-courses"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.icar.org.in/content/icar-e-courses', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">ICAR E-Learning</div>
              <div className="text-sm text-white/90">Free online courses</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.ndri.res.in/en/distance-education"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.ndri.res.in/en/distance-education', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">NDRI Distance Education</div>
              <div className="text-sm text-white/90">Dairy farming courses</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.cifri.res.in/en/training"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.cifri.res.in/en/training', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">CIFRI Training Programs</div>
              <div className="text-sm text-white/90">Fish farming courses</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
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
              <div className="text-sm text-white/90">Local training programs</div>
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
              <div className="text-sm text-white/90">Entrepreneurship training</div>
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
              <div className="font-semibold text-white">NABARD Andhra Pradesh</div>
              <div className="text-sm text-white/90">Financing & support</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
