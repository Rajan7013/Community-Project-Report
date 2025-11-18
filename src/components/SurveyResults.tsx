import { BarChart3, FileText, Target, TrendingUp } from 'lucide-react';

export function SurveyResults() {
  const surveyQuestions = [
    'How many members are there in your household?',
    'What are the main sources of income for your family (farming, dairy, labor, etc.)?',
    'What is your average monthly income from livestock and agriculture activities?',
    'Do you have regular access to veterinary or animal health services in your area?',
    'What are the main problems you face while taking care of your animals?',
    'How often do you vaccinate or provide medical check-ups for your animals?',
    'Are you aware of proper animal feeding and hygiene practices?',
    'Would you use a simple mobile or web platform to learn about animal care?',
    'What type of animal-related information would you like to access?',
    'Would you be interested in participating in awareness or training programs?'
  ];

  const keyFindings = [
    'Most households depend on agriculture and livestock as main source of livelihood',
    'Families usually own one or two cows or buffaloes for milk production',
    'Access to water and electricity improved, but veterinary support still limited',
    'Challenges include lack of timely vaccination and poor nutrition awareness',
    'Farmers rely on traditional care methods learned from elders',
    'Positive attitude toward new ideas and technology for learning',
    'Interest in simple web or mobile platforms in local language',
    'Need for practical, reliable animal-care information'
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-8 shadow-md text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl">Survey & Findings</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Socio-economic survey conducted in Nandanoor village to understand the community's 
          needs and challenges related to animal care
        </p>
      </div>

      {/* Survey Methodology */}
      <div className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl mb-6">Survey Methodology</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg mb-3 text-blue-800">Approach</h3>
            <p className="text-gray-700">
              Conducted a community survey in Nandanoor village using a simple questionnaire 
              prepared in the local language. Respondents included farmers, animal keepers, 
              and dairy workers.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 border border-green-200">
            <h3 className="text-lg mb-3 text-green-800">Focus Areas</h3>
            <p className="text-gray-700">
              Collected information about family size, livestock count, feeding habits, hygiene 
              practices, veterinary access, and awareness about animal health and technology.
            </p>
          </div>
        </div>
      </div>

      {/* Survey Questions */}
      <div className="bg-white rounded-xl p-8 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl">Survey Questionnaire</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {surveyQuestions.map((question, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-purple-400 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-700 text-sm">{question}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Findings */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-8 h-8" />
          <h2 className="text-2xl">Key Findings</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {keyFindings.map((finding, index) => (
            <div
              key={index}
              className="bg-white/20 rounded-lg p-4 backdrop-blur-sm"
            >
              <p className="text-sm">{finding}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Plans */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Short-term Action Plan */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <h3 className="text-xl text-yellow-700">Short-term Action Plan</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">1.</span>
              <div>
                <strong>Awareness and Training Programs</strong>
                <p className="text-sm text-gray-600">
                  Conduct workshops to educate farmers about proper animal care, feeding, 
                  hygiene, and vaccination
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">2.</span>
              <div>
                <strong>Digital Awareness Drive</strong>
                <p className="text-sm text-gray-600">
                  Introduce the "Grami Pashu Sahayak" web app and teach farmers how to use it
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">3.</span>
              <div>
                <strong>Local Veterinary Support</strong>
                <p className="text-sm text-gray-600">
                  Organize medical check-up camps for animals and provide basic first aid guidance
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">4.</span>
              <div>
                <strong>Community Collaboration</strong>
                <p className="text-sm text-gray-600">
                  Encourage teamwork among farmers to share resources like feed, water, and 
                  vaccination costs
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Long-term Action Plan */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-xl text-blue-700">Long-term Action Plan</h3>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">1.</span>
              <div>
                <strong>Continuous Awareness & Updates</strong>
                <p className="text-sm text-gray-600">
                  Regularly update platform with new information, seasonal care tips, and 
                  success stories
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">2.</span>
              <div>
                <strong>Government Partnership</strong>
                <p className="text-sm text-gray-600">
                  Collaborate with local animal husbandry departments or NGOs to expand awareness
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">3.</span>
              <div>
                <strong>Infrastructure Improvement</strong>
                <p className="text-sm text-gray-600">
                  Promote better access to veterinary services, clean water, and proper shelters
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">4.</span>
              <div>
                <strong>Sustainable Practice Promotion</strong>
                <p className="text-sm text-gray-600">
                  Encourage organic feed, waste recycling, and disease prevention techniques
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">5.</span>
              <div>
                <strong>Community Feedback & Growth</strong>
                <p className="text-sm text-gray-600">
                  Collect feedback regularly and refine the web app and awareness programs
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Community Awareness Programme */}
      <div className="bg-purple-50 rounded-xl p-8 shadow-md border border-purple-200">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl text-purple-800">Community Awareness Programme</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg mb-3 text-purple-700">Programme Activities</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Educating farmers about proper feeding, vaccination, and hygiene methods</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Demonstrating the "Grami Pashu Sahayak" web app as a digital learning tool</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Conducting interactive sessions where farmers shared challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Providing practical examples and visual posters for easy learning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span>Distributing awareness leaflets in local language</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg mb-3 text-purple-700">Programme Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Enhanced knowledge about proper animal care and hygiene</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Positive reception of the web app by community</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Practical adoption and willingness to use regularly</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Strengthened community relations and trust</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Increased awareness of sustainable practices</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700">
                <span className="text-green-600 mt-1">✓</span>
                <span>Valuable feedback for platform improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
