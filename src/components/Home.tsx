import { MapPin, Calendar, Users, Award, FileText, Download, Presentation, Eye } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-4 sm:p-6 md:p-12">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 font-bold">Community Service Project</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-semibold">Animals and Species Conservation</h2>
          <p className="text-sm sm:text-base md:text-lg opacity-90 mb-4 sm:mb-6 leading-relaxed">
            A comprehensive study and awareness initiative on animal care and species conservation 
            in Nandanoor Village, Chittoor District, Andhra Pradesh
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              <MapPin className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
              <span>Nandanoor Village</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
              <span>2025-2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              <Users className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
              <span>4 Team Members</span>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Documents Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 sm:p-8 md:p-10">
        <div className="flex items-center gap-4 mb-2">
          <div className="text-4xl">📋</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Project Submission Documents</h2>
        </div>
        <p className="text-sm sm:text-base opacity-90 mt-3">View and download the presentation and detailed report for project submission</p>
      </div>

      {/* Presentation PPT Section */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 sm:p-8 shadow-md border-2 border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg flex-shrink-0">
            <Presentation className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-orange-900">🎯 Presentation (PowerPoint)</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Community-Service-Project-Animals-and-Species.pptx</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-700 font-medium mb-4 leading-relaxed">
          Professional presentation with slides covering project overview, field work activities, findings, and recommendations for submission.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <a
            href="/Community-Service-Project-Animals-and-Species.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              window.open('/Community-Service-Project-Animals-and-Species.pptx', '_blank');
            }}
          >
            <Eye className="w-4 h-4" />
            <span>View Presentation</span>
          </a>
          <a
            href="/Community-Service-Project-Animals-and-Species.pptx"
            download="Community-Service-Project-Animals-and-Species.pptx"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600 text-white text-xs sm:text-sm font-semibold hover:bg-orange-700 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PPT</span>
          </a>
        </div>
      </div>

      {/* Report PDF Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 sm:p-8 shadow-md border-2 border-green-300 hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg flex-shrink-0">
            <FileText className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-green-900">📄 Detailed Report (PDF)</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Community-Service-Project-Animals-and-Species.pdf</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-700 font-medium mb-4 leading-relaxed">
          Complete detailed report with comprehensive analysis, survey findings, recommendations, and all project documentation for reference and submission.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <a
            href="/Community-Service-Project-Animals-and-Species.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              window.open('/Community-Service-Project-Animals-and-Species.pdf', '_blank');
            }}
          >
            <Eye className="w-4 h-4" />
            <span>View PDF</span>
          </a>
          <a
            href="/Community-Service-Project-Animals-and-Species.pdf"
            download="Community-Service-Project-Animals-and-Species.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white text-xs sm:text-sm font-semibold hover:bg-green-700 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md border-l-4 border-green-600 hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="text-4xl font-bold mb-2 text-green-700">6</div>
          <div className="text-gray-700 font-semibold">Weeks of Field Work</div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="text-4xl font-bold mb-2 text-blue-700">100+</div>
          <div className="text-gray-700 font-semibold">Community Members Reached</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 shadow-md border-l-4 border-yellow-600 hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="text-4xl font-bold mb-2 text-yellow-700">1</div>
          <div className="text-gray-700 font-semibold">Web Platform Developed</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md border-l-4 border-purple-600 hover:shadow-lg hover:-translate-y-1 transition-all">
          <div className="text-4xl font-bold mb-2 text-purple-700">Multiple</div>
          <div className="text-gray-700 font-semibold">Awareness Sessions</div>
        </div>
      </div>

      {/* Executive Summary Header */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-4 sm:p-6 md:p-8 shadow-md border-2 border-orange-300">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shadow-lg flex-shrink-0">
            <Award className="w-6 sm:w-8 h-6 sm:h-8 text-white font-bold" />
          </div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-orange-900">Executive Summary</h2>
        </div>
      </div>

      {/* Executive Summary Content */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-4 sm:p-6 md:p-8 shadow-md border-2 border-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="space-y-4 text-gray-700">
          <p>
            This Community Service Project (CSP) was undertaken to contribute to the rural community by 
            developing a simple awareness and information system for animal keepers and small farm owners. 
            The target community includes livestock caretakers and dairy farmers in Nandanoor village, who 
            often face challenges due to lack of veterinary access, limited feeding knowledge, and poor 
            record-keeping.
          </p>
          <p>
            The main aim of this project was to design and implement a basic web-based platform, 
            <span className="text-green-600"> "Grami Pashu Sahayak"</span>, that provides animal care tips, 
            feeding guides, and awareness materials to help villagers manage their animals in a healthier 
            and more informed way.
          </p>
        </div>
      </div>

      {/* Project Highlights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border-2 border-green-300 hover:shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl mb-4 font-bold text-green-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">✓</span>
            Learning Objectives
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1 font-bold">•</span>
              <span>Identify real problems faced by animal keepers in rural areas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1 font-bold">•</span>
              <span>Gain practical experience through field visits and farmer interactions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1 font-bold">•</span>
              <span>Understand the importance of animal health, feeding, and hygiene</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1 font-bold">•</span>
              <span>Improve basic web design and prototype development skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1 font-bold">•</span>
              <span>Develop empathy and social responsibility</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 border-2 border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all">
          <h3 className="text-xl mb-4 font-bold text-blue-900 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">★</span>
            Key Outcomes
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <span>Successfully developed "Grami Pashu Sahayak" web platform</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <span>Conducted multiple community awareness sessions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <span>Improved animal care knowledge among farmers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <span>Enhanced technical and communication skills</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold">•</span>
              <span>Built stronger community relationships</span>
            </li>
          </ul>
        </div>
      </div>

      {/* College & Guide Info */}
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-8 shadow-md border-2 border-purple-200 hover:shadow-lg hover:-translate-y-1 transition-all">
        <h3 className="text-2xl font-bold mb-6 text-purple-900">Project Details</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
            <p className="text-indigo-600 font-bold mb-2">🏫 College</p>
            <p className="font-semibold text-gray-900">Sri Venkateswara College of Engineering & Technology (Autonomous)</p>
            <p className="text-sm text-gray-600 mt-1">R.V.S. Nagar, Murukambattu, Chittoor - 517127</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-blue-600 font-bold mb-2">📚 Department</p>
            <p className="font-semibold text-gray-900">Computer Science & Engineering (AI-ML)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
            <p className="text-green-600 font-bold mb-2">👨‍🏫 Faculty Guide</p>
            <p className="font-semibold text-gray-900">Dr. Mohanraj, Ph.D.</p>
            <p className="text-sm text-gray-600">Assistant Professor</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
            <p className="text-orange-600 font-bold mb-2">📖 Programme Details</p>
            <p className="font-semibold text-gray-900">Bachelor of Technology - 4 Year Programme</p>
            <p className="text-sm text-gray-600">Year of Study: 3rd Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
