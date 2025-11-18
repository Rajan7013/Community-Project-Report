import { Crown, User } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Dharmendra Prasaila Yadav',
      rollNumber: '23781A33J3',
      role: 'Team Leader',
      isLeader: true,
      // FIXED: Added dot (.)
      image: './Images/Dharmendra.jpg',
    },
    {
      name: 'Rajan Prasaila Yadav',
      rollNumber: '23781A33J5',
      role: 'Team Member',
      isLeader: false,
      // FIXED: Added dot (.)
      image: './Images/Rajan.png.png',
    },
    {
      name: 'Chode S Arjun Kumar',
      rollNumber: '23781A33J2',
      role: 'Team Member',
      isLeader: false,
      // FIXED: Added dot (.)
      image: './Images/Chode S Arjun Kumar.png',
    },
    {
      name: 'Nitesh Mehta',
      rollNumber: '23781A33J5',
      role: 'Team Member',
      isLeader: false,
      // FIXED: Added dot (.)
      image: './Images/Nitesh.jpg',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-xl p-4 sm:p-6 md:p-8 shadow-md text-center border-2 border-cyan-300">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
          <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-2xl sm:text-3xl">👥</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">Our Team</h1>
        </div>
        <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
          A dedicated team of third-year Computer Science & Engineering (AI-ML) students 
          committed to serving the community through technology and awareness
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md border-2 transition-transform hover:scale-105 ${
              member.isLeader 
                ? 'bg-gradient-to-br from-yellow-50 to-amber-100 border-yellow-400 shadow-lg' 
                : 'bg-gradient-to-br from-blue-50 to-cyan-100 border-blue-300'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden border-4 ${
                member.isLeader ? 'border-yellow-400 bg-yellow-100' : 'border-blue-400 bg-blue-100'
              }`}>
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  member.isLeader ? (
                    <Crown className="w-8 h-8 text-yellow-600" />
                  ) : (
                    <User className="w-8 h-8 text-blue-600" />
                  )
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl">{member.name}</h3>
                  {member.isLeader && (
                    <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">
                      Leader
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-1">Roll Number: {member.rollNumber}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Faculty Guide Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <span className="text-3xl">👨‍🎓</span>
          Under the Guidance of
        </h2>
        <div className="bg-white/15 rounded-lg p-6 backdrop-blur-sm border border-white/30">
          <h3 className="text-3xl font-bold mb-2">Dr. Mohanraj Ramamoorthy, Ph.D.</h3>
          <p className="text-xl opacity-95 mb-4 font-semibold">Assistant Professor</p>
          <p className="opacity-90 text-lg">
            Department of Computer Science & Engineering (AI-ML)
            <br />
            Sri Venkateswara College of Engineering & Technology
          </p>
        </div>
      </div>

      {/* Acknowledgements Header */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-8 shadow-md border-2 border-orange-300">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
            <span className="text-3xl">🙏</span>
          </div>
          <h2 className="text-3xl font-bold text-orange-900">Acknowledgements</h2>
        </div>
      </div>

      {/* Acknowledgements Content */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-8 shadow-md border-2 border-orange-300">
        <div className="space-y-4 text-gray-700">
          <p>
            An endeavour of a long period can be successful only with the advice of many well-wishers. 
            We take this opportunity to express our deep gratitude and appreciation to all those who 
            encouraged us to succeed in our project.
          </p>
          <p>
            The first person we would like to thank is our guide <span className="text-blue-600">Dr. Mohanraj Ramamoorthy</span>, 
            SVCET (Autonomous), RVS Nagar, Chittoor. He is a source of inspiration for innovative ideas 
            and his kind of support is well-known to all his students and colleagues.
          </p>
          <p>
            We wish to thank <span className="text-blue-600">Dr. M Lavanya</span>, Associate Professor and Head of the 
            Department of Computer Science and Engineering in Sri Venkateswara College of Engineering 
            and Technology, Chittoor, who has extended her support for the success of the project.
          </p>
          <p>
            We wish to thank <span className="text-blue-600">Dr. M. MOHAN BABU</span>, MTech., Ph.D., Principal, SVCET, 
            Chittoor who has extended his support for the success of this Project.
          </p>
          <p>
            We wish to thank <span className="text-blue-600">Dr. William Oakes and Dr. Akansha Desai</span> from 
            Purdue University, for providing basic information for this project.
          </p>
          <p>
            Lastly, we express our sincere thanks to our parents and friends who are the constant 
            source of inspiration and encouragement throughout this project work.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border-2 border-green-300 hover:shadow-md transition-all">
          <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Department Vision
          </h3>
          <p className="text-gray-800 leading-relaxed font-medium">
            To become a Centre of Excellence in computer science by promoting quality teaching, 
            creative innovation, impactful research, and strong collaboration — addressing the 
            challenges and needs of the modern digital world.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 border-2 border-blue-300 hover:shadow-md transition-all">
          <h3 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            Department Mission
          </h3>
          <ul className="space-y-3 text-gray-800 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold text-lg">✓</span>
              <span className="font-medium">Produce globally competent professionals by delivering knowledge in emerging technologies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold text-lg">✓</span>
              <span className="font-medium">Develop technical and research skills for challenging careers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 font-bold text-lg">✓</span>
              <span className="font-medium">Instill moral values and professional ethics with passion for lifelong learning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}