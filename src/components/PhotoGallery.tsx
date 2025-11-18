import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, ExternalLink } from 'lucide-react';

export function PhotoGallery() {
  const fieldPhotos = [
    {
      url: '/Gallery/Image-1.png',
      caption: 'Project field work and community engagement',
      category: 'Field Visit'
    },
    {
      url: '/Gallery/Image-2.png',
      caption: 'Team activities and project documentation',
      category: 'Team Activity'
    },
    {
      url: '/Gallery/Image-3.png',
      caption: 'Community awareness session with farmers',
      category: 'Awareness'
    },
    {
      url: '/Gallery/Image-5.png',
      caption: 'Project implementation and field work',
      category: 'Field Visit'
    },
    {
      url: '/Gallery/Image -4.png',
      caption: 'Community interaction and engagement',
      category: 'Community'
    },
    {
      url: '/Gallery/Image-1 (2).png',
      caption: 'Project activities and team collaboration',
      category: 'Team Activity'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 shadow-md text-center border-2 border-cyan-200">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-blue-900">Photo Gallery</h1>
        </div>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Visual documentation of our community service journey - from field visits to 
          development and awareness sessions
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fieldPhotos.map((photo, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 group border-2 border-gray-100"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-200 relative">
              <ImageWithFallback
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                  photo.category === 'Field Visit' ? 'bg-green-200 text-green-800' :
                  photo.category === 'Team Activity' ? 'bg-blue-200 text-blue-800' :
                  photo.category === 'Awareness' ? 'bg-orange-200 text-orange-800' :
                  photo.category === 'Community' ? 'bg-purple-200 text-purple-800' :
                  'bg-gray-200 text-gray-800'
                }`}>
                  {photo.category}
                </span>
              </div>
              <p className="text-gray-700 text-sm font-medium">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Prototype Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl mb-6">Project Prototype</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl mb-3">Grami Pashu Sahayak</h3>
            <p className="opacity-90 mb-4">
              A web-based platform designed to provide animal care guidance, feeding tips, 
              hygiene practices, and vaccination reminders to rural farmers in their local language.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>User-friendly interface</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Mobile responsive design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Local language support</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300">✓</span>
                <span>Offline-friendly content</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl mb-3">Key Features</h3>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Animal feeding guides and schedules</li>
                <li>• Hygiene and sanitation tips</li>
                <li>• Vaccination calendar and reminders</li>
                <li>• Common disease prevention information</li>
                <li>• Emergency contact details</li>
                <li>• Visual awareness posters</li>
              </ul>
            </div>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors w-fit"
            >
              <span>View Prototype Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Methodology */}
      <div className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-2xl mb-6">Project Design and Methodology</h2>
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="mb-2 text-green-800">Technology Selection</h4>
              <p className="text-sm text-gray-700">
                Used HTML, CSS, and JavaScript for easy development and accessibility on all devices
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="mb-2 text-blue-800">System Design</h4>
              <p className="text-sm text-gray-700">
                Created responsive layout with clear sections for feeding, hygiene, and vaccination guidance
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 className="mb-2 text-purple-800">Testing Strategy</h4>
              <p className="text-sm text-gray-700">
                Tested on mobile and desktop, refined based on community feedback and usability
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="mb-4 text-gray-800">Development Process</h4>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  1
                </div>
                <p className="text-sm">Planning & Structure</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  2
                </div>
                <p className="text-sm">Field Data Collection</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  3
                </div>
                <p className="text-sm">Page Design</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  4
                </div>
                <p className="text-sm">Content Addition</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  5
                </div>
                <p className="text-sm">User Testing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results & Impact */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl mb-4 text-green-800">Results Achieved</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Web app worked smoothly with good response and reliability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Saved farmers time by offering quick access to animal-care info</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Farmers found it simple, useful, and easy to understand</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Encouraged better hygiene and long-term health improvements</span>
            </li>
          </ul>
        </div>

        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-xl mb-4 text-yellow-800">Areas for Improvement</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">→</span>
              <span>Need more visual content and illustrations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">→</span>
              <span>Offline features for areas with poor network</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">→</span>
              <span>Voice-based navigation for low-literacy users</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">→</span>
              <span>Integration with local veterinary services</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
