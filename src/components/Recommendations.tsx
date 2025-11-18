import { Target, TrendingUp, Award, BookOpen, CheckCircle2, FileText, Download, Eye, Presentation } from 'lucide-react';

export function Recommendations() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl">Recommendations & Conclusions</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Key recommendations for scaling the project and final conclusions from our 
          community service experience
        </p>
      </div>

      {/* Submission Documents Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-3xl">📋</div>
          <h2 className="text-2xl md:text-3xl font-bold">Project Submission Documents</h2>
        </div>
        <p className="text-sm md:text-base opacity-90 mt-2">View and download all project documents for submission and reference</p>
      </div>

      {/* Presentation PPT Section */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-orange-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
            <Presentation className="w-5 h-5 text-orange-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">🎯 Presentation (PowerPoint)</h2>
            <p className="text-sm text-gray-600">
              Professional presentation with project overview, field work activities, findings, and recommendations.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/Community-Service-Project-Animals-and-Species.pptx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-600 text-white text-xs sm:text-sm font-medium hover:bg-orange-700 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PPT</span>
          </a>
        </div>
      </div>

      {/* Detailed Report PDF Section */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-green-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-green-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">📄 Detailed Report (PDF)</h2>
            <p className="text-sm text-gray-600">
              Complete detailed report with comprehensive analysis, survey findings, and all project documentation.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/Community-Service-Project-Animals-and-Species.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600 text-white text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Original CSV Report Section - Keep as is */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-lg hover:-translate-y-1 transition-all">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-purple-700" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Final CSP Report (PDF)</h2>
            <p className="text-sm text-gray-600">
              View or download the complete "CSV Final Report" PDF containing all sections, logs, and survey findings.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/CSV Final Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>View PDF</span>
          </a>
          <a
            href="/CSV Final Report.pdf"
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600 text-white text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </a>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl p-8 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl">Recommendations</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h3 className="text-lg mb-3 text-blue-800">1. Scaling Up Deployment</h3>
            <p className="text-gray-700">
              Expand the Grami Pashu Sahayak app to more nearby villages so more animal keepers 
              can access helpful guidance for care and disease prevention. This will maximize 
              the project's impact across the region.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border border-green-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h3 className="text-lg mb-3 text-green-800">2. Regular Training & Demonstration Sessions</h3>
            <p className="text-gray-700">
              Conduct periodic workshops to teach farmers how to use the app, follow proper 
              feeding and hygiene practices, and identify common health issues early. Continuous 
              education is key to sustained adoption.
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-6 border border-purple-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h3 className="text-lg mb-3 text-purple-800">3. Government and Institutional Support</h3>
            <p className="text-gray-700">
              Partner with local veterinary hospitals and NGOs to provide verified medical 
              information, vaccination updates, and emergency contact support. This collaboration 
              will enhance credibility and reach.
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h3 className="text-lg mb-3 text-yellow-800">4. Infrastructure Development</h3>
            <p className="text-gray-700">
              Make the application available in local languages and ensure it works smoothly even 
              with low internet or basic smartphones. Develop offline functionality for better 
              accessibility in remote areas.
            </p>
          </div>

          <div className="bg-pink-50 rounded-lg p-6 border border-pink-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h3 className="text-lg mb-3 text-pink-800">5. Continuous Research and Innovation</h3>
            <p className="text-gray-700">
              Add features like seasonal care tips, disease alerts, and breed-based suggestions, 
              updating content regularly based on user needs and emerging animal health challenges.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h3 className="text-lg mb-3 text-indigo-800">6. User Feedback Mechanism</h3>
            <p className="text-gray-700">
              Maintain a simple feedback channel to understand user difficulties and improve the 
              platform over time for long-term community benefit. Regular feedback loops ensure 
              the platform remains relevant and useful.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusions */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle2 className="w-8 h-8" />
          <h2 className="text-2xl">Conclusions</h2>
        </div>
        
        <div className="space-y-4 text-lg">
          <p className="opacity-95">
            The project successfully showed that a simple and accessible web-based platform can 
            help improve animal care practices in rural communities. The "Grami Pashu Sahayak" 
            platform proved to be practical, useful, and well-received by the farming community 
            in Nandanoor village.
          </p>
          
          <p className="opacity-95">
            This project encouraged the adoption of affordable technology in traditional farming 
            and highlighted how small innovations can support sustainable livestock care. Community 
            participation and positive feedback confirmed the system's benefits and relevance.
          </p>
          
          <p className="opacity-95">
            The initiative forms a strong foundation for using digital awareness tools in rural 
            development, supporting sustainable practices and improving livelihoods. Continued 
            training, support, and wider implementation will be important to fully realize its 
            benefits across more communities.
          </p>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="bg-white rounded-xl p-8 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-8 h-8 text-orange-600" />
          <h2 className="text-2xl">Key Learnings</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg mb-4 text-orange-700">Personal Development</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Developed empathy and understanding for rural community challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Enhanced problem-solving abilities through real-world application</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Improved communication skills across different stakeholder groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Gained confidence in presenting technical work to non-technical audiences</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 mt-1">•</span>
                <span>Understood the importance of social responsibility in engineering</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 text-blue-700">Professional Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Practical experience in web development and UI/UX design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Project management and timeline adherence skills</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>User research and feedback incorporation techniques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Documentation and technical report writing abilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Collaborative teamwork in diverse environments</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-purple-50 rounded-xl p-8 shadow-md border border-purple-200">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl text-purple-800">Project Impact Summary</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h4 className="mb-2">Community Impact</h4>
            <p className="text-sm text-gray-700">
              Improved awareness and knowledge about animal care among farmers in Nandanoor village
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="w-10 h-10" />
            </div>
            <h4 className="mb-2">Technical Achievement</h4>
            <p className="text-sm text-gray-700">
              Successfully developed and deployed a functional web platform for rural education
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-10 h-10" />
            </div>
            <h4 className="mb-2">Educational Value</h4>
            <p className="text-sm text-gray-700">
              Gained invaluable hands-on experience connecting academic learning with real-world needs
            </p>
          </div>
        </div>
      </div>

      {/* Final Reflection */}
      <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-green-600">
        <h2 className="text-2xl mb-4">Final Reflection</h2>
        <p className="text-gray-700 italic text-lg">
          "Through this Community Service Project, we learned that technology is not just about 
          coding and development—it's about creating solutions that make a real difference in 
          people's lives. The satisfaction of seeing our work help rural farmers care better for 
          their animals has been the most rewarding part of our engineering education. This 
          experience has shaped our understanding of what it means to be a responsible engineer 
          and has inspired us to continue working on projects that serve society."
        </p>
        <div className="mt-6 flex flex-wrap gap-4 items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Team Members</p>
            <p>Dharmendra, Rajan, Arjun, Nitesh</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Date of Submission</p>
            <p>November 18, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
