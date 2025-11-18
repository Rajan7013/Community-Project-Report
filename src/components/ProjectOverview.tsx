import { MapPin, Target, Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';

export function ProjectOverview() {
  return (
    <div className="space-y-8">
      {/* Community Overview - Header Card */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 sm:p-6 md:p-8 shadow-md border-2 border-green-300">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg flex-shrink-0">
            <MapPin className="w-6 sm:w-9 h-6 sm:h-9 text-white font-bold" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900">Community Overview</h2>
        </div>
      </div>

      {/* About Nandanoor Village Card */}
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl p-4 sm:p-6 shadow-md border-2 border-green-300">
        <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-green-900 flex items-center gap-2">
          <span className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm flex-shrink-0">🏘️</span>
          About Nandanoor Village
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
          Nandanoor village in Chittoor District, Andhra Pradesh, is a rural farming area where 
          most people depend on agriculture and livestock rearing for their livelihood. The community 
          includes small farmers, dairy workers, and animal keepers who care for cows, buffaloes, 
          goats, and hens. These animals are an important source of income and nutrition for their families.
        </p>
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-3 sm:p-4 border-2 border-green-300">
          <p className="text-xs sm:text-sm mb-2 font-semibold text-gray-800">
            <span className="text-green-700">📍 Location:</span> Nandanoor Village, Chittoor, Andhra Pradesh - 517127
          </p>
          <p className="text-xs sm:text-sm mb-2 font-semibold text-gray-800">
            <span className="text-green-700">🗺️ GPS Coordinates:</span> 13.219500, 79.103302
          </p>
          <p className="text-xs sm:text-sm font-semibold text-gray-800">
            <span className="text-green-700">📐 Position:</span> 13° 13' 10.2" N, 79° 6' 11.8872" E
          </p>
        </div>
      </div>

      {/* Socio-Economic Conditions Card */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-xl p-4 sm:p-6 shadow-md border-2 border-teal-300">
        <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-teal-900 flex items-center gap-2">
          <span className="w-7 sm:w-8 h-7 sm:h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm flex-shrink-0">💼</span>
          Socio-Economic Conditions
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
          Nandanoor village is mainly based on agriculture and livestock rearing. Most families earn 
          their living through small farms, dairy work, and caring for cows, buffaloes, and goats. 
          The average income is moderate, and people often face problems like animal illness, water 
          shortage, and limited veterinary help.
        </p>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          The community is close-knit and cooperative. Villagers share feed, tools, and water sources 
          and help one another during busy seasons. This teamwork spirit shows their habit of solving 
          problems together and makes it easier to spread awareness about better animal-care practices.
        </p>
      </div>

      {/* Problems Identified - Header Card */}
      <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-4 sm:p-6 md:p-8 shadow-md border-2 border-red-300">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg flex-shrink-0">
            <AlertCircle className="w-6 sm:w-9 h-6 sm:h-9 text-white font-bold" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-900">Problems Identified</h2>
        </div>
      </div>

      {/* Problems Identified - Content */}
      <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-8 shadow-md border-2 border-red-300">
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="mb-2 text-red-800 font-bold">🏥 Lack of Veterinary Support</h4>
            <p className="text-sm text-gray-700">
              Farmers struggle to get timely medical help for animals. Few veterinary centers nearby 
              lead to untreated diseases and poor animal health.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="mb-2 text-red-800 font-bold">🍎 Low Awareness about Nutrition</h4>
            <p className="text-sm text-gray-700">
              Many farmers are unaware of balanced diets and proper feeding schedules, leading to 
              low milk yield and weak immunity in animals.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="mb-2 text-red-800 font-bold">🧹 Poor Hygiene Management</h4>
            <p className="text-sm text-gray-700">
              Animal sheds are often not cleaned regularly, causing flies, infections, and discomfort. 
              Limited water supply makes the problem worse.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="mb-2 text-red-800 font-bold">💉 Irregular Vaccination</h4>
            <p className="text-sm text-gray-700">
              Most farmers do not follow vaccination schedules due to lack of guidance or reminders, 
              resulting in frequent illness among animals.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="mb-2 text-red-800 font-bold">📚 Limited Information Access</h4>
            <p className="text-sm text-gray-700">
              Farmers rely mostly on traditional knowledge. They have limited access to reliable 
              sources for updated animal-care information.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="mb-2 text-red-800 font-bold">💰 Financial Constraints</h4>
            <p className="text-sm text-gray-700">
              Due to low and uncertain income, farmers find it difficult to spend on animal care, 
              medicines, or training programs.
            </p>
          </div>
        </div>
      </div>

      {/* Solution - Grami Pashu Sahayak */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Lightbulb className="w-8 h-8" />
          <h2 className="text-2xl">Our Solution: Grami Pashu Sahayak</h2>
        </div>
        
        <p className="text-lg opacity-90 mb-6">
          To address these challenges, we developed a simple web-based platform called "Grami Pashu Sahayak" 
          to help farmers care for their animals through awareness, guidance, and easy access to useful information.
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <h4 className="mb-2">Animal Care Information</h4>
            <p className="text-sm opacity-90">
              Simple tips on feeding, hygiene, and vaccination in easy-to-understand language
            </p>
          </div>
          
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <h4 className="mb-2">Easy Accessibility</h4>
            <p className="text-sm opacity-90">
              Works on any phone or computer, designed in local language for all users
            </p>
          </div>
          
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <h4 className="mb-2">Awareness Content</h4>
            <p className="text-sm opacity-90">
              Posters and short guides on animal health, disease prevention, and best practices
            </p>
          </div>
        </div>
      </div>

      {/* Values & Skills Acquired */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 shadow-md border-2 border-blue-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2"><span className="text-2xl">💎</span>Values Acquired</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Empathy:</strong> Understanding real problems faced by animal keepers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Responsibility:</strong> Using technical skills for community welfare</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Teamwork:</strong> Cooperating with team members and villagers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Respect:</strong> Valuing traditional practices while suggesting improvements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span><strong>Service Orientation:</strong> Satisfaction from helping farmers</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 shadow-md border-2 border-green-300">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center gap-2"><span className="text-2xl">⚙️</span>Technical Skills Acquired</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span><strong>Web Development:</strong> HTML, CSS, and JavaScript for user-friendly pages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span><strong>UI Design:</strong> Clear layout for animal-care information display</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span><strong>Content Management:</strong> Organizing feeding tips and health details</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span><strong>Testing & Debugging:</strong> Improving based on community feedback</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">•</span>
              <span><strong>Communication:</strong> Presenting technical ideas to non-technical users</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Project Reflection */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-8 shadow-md border-2 border-purple-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-purple-900">Reflection</h2>
        </div>
        <p className="text-gray-700 italic">
          "This project taught us the real meaning of using technology for community benefit. It helped 
          us connect what we learned in college with the real needs of villagers. By interacting with 
          animal keepers and understanding their problems, we realized how small efforts can bring 
          positive change. The satisfaction of creating something useful for farmers and improving 
          animal care encouraged us to keep working on ideas that support rural development and social welfare."
        </p>
      </div>
    </div>
  );
}
