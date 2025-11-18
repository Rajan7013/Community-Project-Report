import { Home, Droplet, AlertCircle, Zap, Thermometer, Wind } from 'lucide-react';

interface ShelterProps {
  onClose: () => void;
}

export function ShelterGuide({ onClose }: ShelterProps) {
  
  // Hardcoded shelter plans (like AnimalCareGuide)
  const shelterPlans = [
    {
      animal: 'Cow',
      emoji: '🐄',
      sections: [
        {
          title: 'Shelter Dimensions & Space',
          icon: <Home className="w-5 h-5" />,
          content: [
            'Space per animal: 40-50 sq ft (minimum)',
            'Height: 10-12 feet (allows air circulation)',
            'Length: 16-18 feet per animal',
            'Width: 12-14 feet for comfortable movement',
            'Separate area for feed storage (10-15% of total space)'
          ]
        },
        {
          title: 'Heat Management (Extreme Temperature)',
          icon: <Thermometer className="w-5 h-5" />,
          content: [
            'Roof: Thatched (6-8 inches) or tin with air gap',
            'Lime wash walls: Reflects heat, keeps interior cool',
            'Ventilation: Cross-ventilation on opposite walls',
            'Shade cloth: 50% shade cloth on south-facing side',
            'Wallows: Mud/water wallows for heat relief',
            'Sprinklers: Overhead sprinklers for cooling (2-3 times daily)'
          ]
        },
        {
          title: 'Drainage & Sanitation',
          icon: <Droplet className="w-5 h-5" />,
          content: [
            'Sloped floor: 1:100 slope for proper drainage',
            'Drainage channel: Around shelter perimeter',
            'Bedding: 6-8 inches of straw/hay (change weekly)',
            'Cleaning: Daily removal of dung and wet bedding',
            'Disinfection: Monthly cleaning with lime solution',
            'Waste management: Compost pit for manure'
          ]
        },
        {
          title: 'Cost-Effective Construction',
          icon: <AlertCircle className="w-5 h-5" />,
          content: [
            'Use local materials: Bamboo, wood, thatch',
            'Thatched roof: Cheaper than tin, better insulation',
            'Mud walls: Cost-effective, good thermal properties',
            'Lime wash: Inexpensive, effective cooling',
            'Estimated cost: Rs. 50,000-80,000 per animal shelter',
            'Government subsidy: 40-50% available under schemes'
          ]
        }
      ]
    },
    {
      animal: 'Poultry (Hen, Duck, Chicken)',
      emoji: '🐔',
      sections: [
        {
          title: 'Shelter Dimensions & Space',
          icon: <Home className="w-5 h-5" />,
          content: [
            'Space per bird: 2-3 sq ft (inside shelter)',
            'Roosting space: 8-10 inches per bird',
            'Nesting boxes: 1 box per 3-4 birds',
            'Height: 6-8 feet (adequate headroom)',
            'Run area: 5-10 sq ft per bird (outdoor)',
            'Separate brooding area for chicks'
          ]
        },
        {
          title: 'Heat Management for Extreme Climate',
          icon: <Thermometer className="w-5 h-5" />,
          content: [
            'Roof: Thatched or tin with 12-inch air gap',
            'Walls: Partially open for ventilation',
            'Shade cloth: 60-70% shade cloth on roof',
            'Dust baths: Essential for cooling (sand/ash mix)',
            'Water: Unlimited access, cooled water in summer',
            'Ventilation: Ensure air flow without direct wind'
          ]
        },
        {
          title: 'Drainage & Sanitation',
          icon: <Droplet className="w-5 h-5" />,
          content: [
            'Floor: Sloped for drainage, 4-6 inches bedding',
            'Bedding: Straw, wood shavings (change weekly)',
            'Nesting boxes: Lined with straw (change regularly)',
            'Roosting bars: 2-3 feet high, easy cleaning',
            'Cleaning: Daily removal of droppings',
            'Disinfection: Weekly wash with disinfectant'
          ]
        },
        {
          title: 'Cost-Effective Design',
          icon: <AlertCircle className="w-5 h-5" />,
          content: [
            'Simple design: Minimize construction cost',
            'Local materials: Bamboo, wood, thatch',
            'Capacity: 50-100 birds per shelter',
            'Estimated cost: Rs. 10,000-15,000 per 100 birds',
            'Government subsidy: 50% available',
            'DIY construction: Reduce labor costs'
          ]
        }
      ]
    },
    {
      animal: 'Fish Pond',
      emoji: '🐟',
      sections: [
        {
          title: 'Pond Dimensions & Design',
          icon: <Home className="w-5 h-5" />,
          content: [
            'Depth: 1.5-2 meters (allows stratification)',
            'Area: 0.5-1 hectare (manageable size)',
            'Shape: Rectangular (easier management)',
            'Slope: 1:3 (gentle slope for safety)',
            'Inlet/Outlet: Separate channels for water exchange',
            'Embankment: 1-1.5 meters above water level'
          ]
        },
        {
          title: 'Water Management',
          icon: <Droplet className="w-5 h-5" />,
          content: [
            'Water source: Well, bore, stream, or rainwater',
            'pH level: 6.5-8.5 (test monthly)',
            'Dissolved oxygen: Maintain 5-7 ppm',
            'Temperature: Optimal 25-30°C',
            'Turbidity: Keep water slightly turbid',
            'Aeration: Install aerator for oxygen supply'
          ]
        },
        {
          title: 'Pond Maintenance',
          icon: <Wind className="w-5 h-5" />,
          content: [
            'Liming: Apply 250-500 kg/hectare annually',
            'Fertilization: Organic manure for natural productivity',
            'Weed control: Remove aquatic weeds monthly',
            'Predator control: Prevent bird and animal entry',
            'Seepage prevention: Clay lining or plastic sheet',
            'Cleaning: Partial water change every 3-4 months'
          ]
        },
        {
          title: 'Cost-Effective Construction',
          icon: <AlertCircle className="w-5 h-5" />,
          content: [
            'Earthen pond: Most cost-effective option',
            'Excavation: Use local labor, reduce cost',
            'Lining: Clay lining (natural), cheaper than plastic',
            'Estimated cost: Rs. 50,000-100,000 per hectare',
            'Government subsidy: 50% available',
            'Maintenance: Minimal cost after construction'
          ]
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Climate Considerations */}
      <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-4">
          <Thermometer className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-orange-900 mb-3">🌡️ Climate Adaptation for Chittoor (Dry, Hot)</h3>
            <div className="space-y-2 text-sm text-orange-800">
              <p><strong>Temperature:</strong> 25-40°C (extreme in summer)</p>
              <p><strong>Rainfall:</strong> 600-700 mm annually (concentrated monsoon)</p>
              <p><strong>Strategy:</strong> Focus on heat management, water conservation, shade provision</p>
              <p><strong>Key:</strong> Maximize natural ventilation, minimize heat absorption</p>
            </div>
          </div>
        </div>
      </div>

      {/* Shelter Plans by Animal */}
      <div className="space-y-8">
        {shelterPlans.map((plan, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">{plan.emoji}</span>
              {plan.animal} - Shelter Design
            </h3>

            <div className="space-y-4">
              {plan.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300 shadow-md"
                >
                  <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center flex-shrink-0 text-white">
                      {section.icon}
                    </div>
                    {section.title}
                  </h4>

                  <ul className="space-y-2 ml-11">
                    {section.content.map((item, iIdx) => (
                      <li key={iIdx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-green-600 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Material Specifications */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 sm:p-8 border-2 border-purple-300">
        <h3 className="text-xl font-bold text-purple-900 mb-4">🏗️ Building Materials Specifications</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-purple-800 mb-3">Roofing Materials</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Thatch:</strong> 6-8 inches, good insulation, Rs. 50-100/sq ft</li>
              <li><strong>Tin:</strong> With air gap, reflects heat, Rs. 80-150/sq ft</li>
              <li><strong>Tiles:</strong> Traditional, durable, Rs. 100-200/sq ft</li>
              <li><strong>Shade cloth:</strong> 50-70% density, Rs. 20-40/sq ft</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-purple-800 mb-3">Wall Materials</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Mud bricks:</strong> Cost-effective, good thermal mass</li>
              <li><strong>Bamboo:</strong> Lightweight, ventilation, renewable</li>
              <li><strong>Stone:</strong> Durable, heat resistant, expensive</li>
              <li><strong>Lime wash:</strong> Essential for heat reflection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Construction Steps */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 sm:p-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">📋 Step-by-Step Construction Guide</h3>
        <ol className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
            <span><strong>Site Selection:</strong> Choose elevated, well-drained area away from water bodies</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
            <span><strong>Foundation:</strong> Dig foundation 1-2 feet deep, compact soil</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
            <span><strong>Walls:</strong> Build walls with selected material, ensure proper height</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
            <span><strong>Roof:</strong> Install roof with proper slope and ventilation</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">5.</span>
            <span><strong>Flooring:</strong> Lay sloped floor with drainage channels</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">6.</span>
            <span><strong>Finishing:</strong> Apply lime wash, install doors/windows</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600 flex-shrink-0">7.</span>
            <span><strong>Accessories:</strong> Install feeders, waterers, roosting bars, etc.</span>
          </li>
        </ol>
      </div>

      {/* Important Notes */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-red-900 mb-2">⚠️ Important Shelter Tips</h4>
            <ul className="text-sm text-red-800 space-y-2">
              <li>✓ Ensure adequate ventilation to prevent disease</li>
              <li>✓ Maintain proper slope for drainage</li>
              <li>✓ Use lime wash regularly (every 6 months)</li>
              <li>✓ Keep shelter clean and dry</li>
              <li>✓ Provide shade in summer, windbreak in winter</li>
              <li>✓ Consult local veterinarian for design approval</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
