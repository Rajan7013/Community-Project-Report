import { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export function WeeklyLogs() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const weeklyData = [
    {
      week: 1,
      title: 'Community Interaction & Problem Identification',
      summary: 'Discussed project goals, visited Nandanoor village, and collected information about animal health challenges.',
      activities: [
        'Discussed project goals and selected the topic "Animal Care"',
        'Visited the village and interacted with farmers about animal health challenges',
        'Observed animal shelters, hygiene, and vaccination practices',
        'Discussed information collected and prepared awareness ideas',
        'Designed first draft of "Grami Pashu Sahayak" web app layout',
        'Shared poster samples and project ideas with villagers for feedback'
      ],
      outcomes: [
        'Understood CSP aim and key issues faced by animal keepers',
        'Learned real problems like lack of vet care and feeding issues',
        'Gained awareness of local animal management methods',
        'Improved teamwork and communication skills',
        'Learned basic design and planning skills for web development'
      ]
    },
    {
      week: 2,
      title: 'Web Application Development',
      summary: 'Started building and testing the "Grami Pashu Sahayak" web app with content related to animal care.',
      activities: [
        'Prepared detailed plan for web app development',
        'Started basic website development using HTML, CSS, and JavaScript',
        'Created homepage with introductory content about animal care',
        'Added sections for feeding tips, hygiene maintenance, and vaccination',
        'Tested the web app on different devices',
        'Documented progress and prepared demo presentation'
      ],
      outcomes: [
        'Learned project structure planning for community-focused web apps',
        'Gained practical web development experience',
        'Understood importance of design feedback and teamwork',
        'Improved content writing and presentation skills',
        'Learned responsive design adjustments'
      ]
    },
    {
      week: 3,
      title: 'Testing & Improvement',
      summary: 'Tested and improved the web app based on community feedback, fixed layout issues.',
      activities: [
        'Reviewed feedback from mentors and villagers',
        'Updated website layout with local-language labels',
        'Added content about common animal diseases and prevention',
        'Tested updated features and made final corrections',
        'Presented updated version to faculty and team',
        'Visited community again to gather final opinions'
      ],
      outcomes: [
        'Learned to prioritize useful suggestions for improvement',
        'Improved user interface design and accessibility awareness',
        'Better understanding of information research and content creation',
        'Strengthened testing and error-fixing skills',
        'Understood importance of user feedback'
      ]
    },
    {
      week: 4,
      title: 'Finalization & Presentation',
      summary: 'Finalized the web app, completed documentation, and presented outcomes to mentors and community.',
      activities: [
        'Finalized website content and reviewed all pages for errors',
        'Updated visuals, icons, and colors for better readability',
        'Prepared final project documentation and reports',
        'Tested final version for functionality and accessibility',
        'Presented to mentors for feedback and approval',
        'Demonstrated final version to community members'
      ],
      outcomes: [
        'Improved attention to detail and content management',
        'Enhanced creative and UI design understanding',
        'Gained experience in project documentation',
        'Strengthened testing skills for real-time usability',
        'Learned to communicate technical ideas to non-technical people'
      ]
    },
    {
      week: 5,
      title: 'Final Review & Submission',
      summary: 'Reviewed the entire project, created presentation slides, and submitted final documents.',
      activities: [
        'Reviewed entire project process and listed key learnings',
        'Created PowerPoint presentation summarizing project journey',
        'Prepared charts, posters, and infographics',
        'Rehearsed project presentation',
        'Presented final project to faculty and evaluators',
        'Submitted final documents and thanked community members'
      ],
      outcomes: [
        'Gained reflection and analytical writing skills',
        'Improved data presentation and visual communication',
        'Enhanced creative thinking and design skills',
        'Built confidence and clarity in communication',
        'Learned gratitude, responsibility, and community engagement'
      ]
    },
    {
      week: 6,
      title: 'Evaluation & Future Planning',
      summary: 'Collected final feedback, participated in review meetings, and planned for future improvements.',
      activities: [
        'Reviewed overall progress and improvements for future use',
        'Collected final feedback from mentors and community',
        'Prepared and rehearsed final presentation',
        'Presented complete project and gathered suggestions',
        'Finalized full project report and compiled weekly logs',
        'Participated in final review meeting'
      ],
      outcomes: [
        'Learned reflection and evaluation skills',
        'Understood importance of feedback and user satisfaction',
        'Improved communication and teamwork skills',
        'Gained experience in presenting community-based projects',
        'Realized importance of teamwork and consistency'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-xl p-8 shadow-md text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Calendar className="w-8 h-8 text-green-600" />
          <h1 className="text-3xl">Weekly Activity Logs</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Six weeks of dedicated field work, development, and community engagement 
          documenting our journey from problem identification to solution delivery
        </p>
      </div>

      {/* Weekly Logs */}
      <div className="space-y-4">
        {weeklyData.map((week) => (
          <div
            key={week.week}
            className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-gray-200 hover:border-green-400 transition-colors"
          >
            {/* Week Header */}
            <button
              onClick={() => setExpandedWeek(expandedWeek === week.week ? null : week.week)}
              className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs">Week</div>
                    <div className="text-2xl">{week.week}</div>
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl mb-1">{week.title}</h3>
                  <p className="text-sm text-gray-600">{week.summary}</p>
                </div>
              </div>
              {expandedWeek === week.week ? (
                <ChevronUp className="w-6 h-6 text-gray-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400" />
              )}
            </button>

            {/* Week Details */}
            {expandedWeek === week.week && (
              <div className="px-6 pb-6 space-y-6 border-t border-gray-200">
                <div className="pt-6">
                  <h4 className="mb-4 text-green-700">Daily Activities</h4>
                  <ul className="space-y-2">
                    {week.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className="text-green-600 mt-1">Day {idx + 1}:</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="mb-3 text-blue-700">Learning Outcomes</h4>
                  <ul className="space-y-2">
                    {week.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Box */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl mb-4">6-Week Journey Summary</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-3xl mb-2">42</div>
            <div className="opacity-90">Days of Active Work</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-3xl mb-2">Multiple</div>
            <div className="opacity-90">Field Visits Conducted</div>
          </div>
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-3xl mb-2">100%</div>
            <div className="opacity-90">Community Engagement</div>
          </div>
        </div>
      </div>
    </div>
  );
}
