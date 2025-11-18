import { ExternalLink, CheckCircle, DollarSign, Users, BookOpen } from 'lucide-react';

interface SchemeProps {
  onClose: () => void;
}

export function GovernmentSchemes({ onClose }: SchemeProps) {

  // Hardcoded schemes (like AnimalCareGuide)
  const schemes = [
    {
      name: 'Dairy Development Scheme',
      category: 'Dairy',
      emoji: '🥛',
      description: 'Support for dairy farmers to improve milk production and quality',
      benefits: [
        'Subsidy for dairy equipment and infrastructure',
        'Training on modern dairy farming practices',
        'Market linkage support',
        'Veterinary services at subsidized rates'
      ],
      eligibility: 'Small and marginal farmers with 1-5 cows',
      subsidy: '40-50% of project cost',
      contact: 'District Animal Husbandry Office, Chittoor',
      website: 'https://ahd.ap.gov.in/'
    },
    {
      name: 'Poultry Development Program',
      category: 'Poultry',
      emoji: '🐔',
      description: 'Assistance for poultry farming and egg production',
      benefits: [
        'Subsidy for poultry shed construction',
        'Chick distribution at subsidized rates',
        'Feed subsidy for first 6 months',
        'Training on poultry management'
      ],
      eligibility: 'Farmers interested in poultry farming',
      subsidy: '50% for shed, 30% for equipment',
      contact: 'District Poultry Officer, Chittoor',
      website: 'https://ahd.ap.gov.in/'
    },
    {
      name: 'Fisheries Development Subsidy',
      category: 'Fisheries',
      emoji: '🐟',
      description: 'Support for fish farming and aquaculture development',
      benefits: [
        'Subsidy for pond construction and renovation',
        'Fingerlings at subsidized rates',
        'Feed subsidy',
        'Training on fish farming techniques'
      ],
      eligibility: 'Farmers with available land and water source',
      subsidy: '50% for pond, 40% for equipment',
      contact: 'District Fisheries Officer, Chittoor',
      website: 'https://fisheries.ap.gov.in/'
    },
    {
      name: 'Livestock Insurance Scheme',
      category: 'Insurance',
      emoji: '🛡️',
      description: 'Insurance coverage for livestock against death and disease',
      benefits: [
        'Coverage for cows, buffalo, sheep, goat',
        'Premium subsidy by government',
        'Quick claim settlement',
        'Coverage up to Rs. 50,000 per animal'
      ],
      eligibility: 'All livestock owners',
      subsidy: '50% premium paid by government',
      contact: 'Insurance Agent or Bank',
      website: 'https://www.pmfby.gov.in/'
    },
    {
      name: 'Pradhan Mantri Fasal Bima Yojana',
      category: 'Insurance',
      emoji: '🌾',
      description: 'Crop insurance scheme for farmers',
      benefits: [
        'Coverage for crop loss due to natural calamities',
        'Subsidized premium rates',
        'Quick claim processing',
        'Digital claim filing'
      ],
      eligibility: 'All farmers growing notified crops',
      subsidy: '70% premium paid by government',
      contact: 'Bank or Insurance Company',
      website: 'https://www.pmfby.gov.in/'
    },
    {
      name: 'National Livestock Mission',
      category: 'Training',
      emoji: '📚',
      description: 'Comprehensive program for livestock development and training',
      benefits: [
        'Training on modern farming practices',
        'Skill development programs',
        'Market linkage support',
        'Technology transfer'
      ],
      eligibility: 'Farmers and rural youth',
      subsidy: 'Free training programs',
      contact: 'District Animal Husbandry Office',
      website: 'https://nlm.gov.in/'
    }
  ];

  const categories = ['All', 'Dairy', 'Poultry', 'Fisheries', 'Insurance', 'Training'];

  return (
    <div className="space-y-8">
      {/* Important Links Section */}
      <div style={{ background: 'linear-gradient(to right, #2563eb, #0891b2)' }} className="text-white rounded-xl p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-4">📞 Important Contacts & Links</h3>
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
              <div className="font-semibold text-white">Chittoor District Departments</div>
              <div className="text-sm text-white/90">Animal Husbandry Office</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
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
              <div className="text-sm text-white/90">Livestock schemes & financing</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
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
              <div className="font-semibold text-white">Pradhan Mantri Fasal Bima Yojana</div>
              <div className="text-sm text-white/90">Crop insurance scheme</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
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
              <div className="text-sm text-white/90">Training & entrepreneurship</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
          <a
            href="https://www.nabard.org/content1.aspx?id=599&catid=23&mid=23"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-all flex items-center justify-between group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://www.nabard.org/content1.aspx?id=599&catid=23&mid=23', '_blank');
            }}
          >
            <div>
              <div className="font-semibold text-white">NABARD Livestock Mission</div>
              <div className="text-sm text-white/90">Dairy & poultry schemes</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
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
              <div className="font-semibold text-white">Dept of Animal Husbandry & Dairying</div>
              <div className="text-sm text-white/90">National government portal</div>
            </div>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
          </a>
        </div>
      </div>

      {/* Schemes List */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-900">Government Schemes & Subsidies</h3>

        {schemes.map((scheme, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 sm:p-8 border-2 border-green-300 shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3 gap-2 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <div className="text-3xl sm:text-4xl flex-shrink-0">{scheme.emoji}</div>
                <div>
                  <h4 className="text-lg sm:text-2xl font-bold text-green-900">{scheme.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{scheme.description}</p>
                </div>
              </div>
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex-shrink-0">
                {scheme.category}
              </span>
            </div>

            {/* Content Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
              {/* Benefits */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <h5 className="font-bold text-sm sm:text-base text-green-900">Key Benefits</h5>
                </div>
                <ul className="space-y-1 ml-6">
                  {(Array.isArray(scheme.benefits) ? scheme.benefits : [scheme.benefits]).map((benefit: string, bIdx: number) => (
                    <li key={bIdx} className="text-xs sm:text-sm text-gray-700">• {benefit}</li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <h5 className="font-bold text-sm sm:text-base text-blue-900">Eligibility</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 ml-6">{scheme.eligibility}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
                    <h5 className="font-bold text-sm sm:text-base text-yellow-900">Subsidy</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 ml-6 font-semibold">{scheme.subsidy}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    <h5 className="font-bold text-sm sm:text-base text-purple-900">Contact</h5>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 ml-6">{scheme.contact}</p>
                </div>
              </div>
            </div>

            {/* Website Link */}
            <div className="mt-6 pt-6 border-t border-green-200">
              <a
                href={scheme.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(scheme.website, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4" />
                Visit Official Website
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* How to Apply */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 sm:p-8 border-2 border-purple-300">
        <h3 className="text-xl font-bold text-purple-900 mb-4">📋 How to Apply</h3>
        <ol className="space-y-3 ml-4">
          <li className="flex gap-3">
            <span className="font-bold text-purple-600 flex-shrink-0">1.</span>
            <span className="text-gray-700">Visit the District Animal Husbandry Office in Chittoor</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600 flex-shrink-0">2.</span>
            <span className="text-gray-700">Collect application forms and required documents list</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600 flex-shrink-0">3.</span>
            <span className="text-gray-700">Fill the form with all required information</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600 flex-shrink-0">4.</span>
            <span className="text-gray-700">Submit with supporting documents (land proof, ID, etc.)</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600 flex-shrink-0">5.</span>
            <span className="text-gray-700">Wait for verification and approval</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-purple-600 flex-shrink-0">6.</span>
            <span className="text-gray-700">Receive subsidy/benefits as per scheme</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
