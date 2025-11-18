import { Leaf, Droplet, DollarSign, AlertCircle } from 'lucide-react';

interface FeedingProps {
  onClose: () => void;
}

export function FeedingGuide({ onClose }: FeedingProps) {
  
  // Hardcoded feeding plans (like AnimalCareGuide)
  const displayPlans = [
    {
      animal: 'Cow',
      emoji: '🐄',
      sections: [
        {
          title: 'Daily Feeding Requirements',
          content: ['Green fodder: 40-50 kg daily', 'Dry fodder: 5-7 kg daily', 'Concentrate: 2-3 kg daily', 'Salt & minerals: 50-100g daily']
        }
      ]
    },
    {
      animal: 'Poultry',
      emoji: '🐔',
      sections: [
        {
          title: 'Daily Feeding Requirements',
          content: ['Layer feed: 100-120g per bird', 'Water: 200-250ml per bird', 'Grit: 10-15g per bird', 'Green feed: 20-30g per bird']
        }
      ]
    },
    {
      animal: 'Fish',
      emoji: '🐟',
      sections: [
        {
          title: 'Daily Feeding Requirements',
          content: ['Feed: 2-5% of body weight daily', 'Pellet size: 2-5mm', 'Feeding times: 2-3 times daily', 'Water quality: pH 6.5-8.5']
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {/* Water Management - Critical */}
      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-4">
          <Droplet className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-3">💧 Water Management in Dry Climate</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p><strong>Cow:</strong> 40-50 liters daily (increase in summer to 60-70 liters)</p>
              <p><strong>Poultry:</strong> 1 liter per 5-10 birds daily (more in hot weather)</p>
              <p><strong>Fish:</strong> Maintain water level, prevent evaporation with shade</p>
              <p><strong>Storage:</strong> Collect rainwater during monsoon for dry season use</p>
              <p><strong>Quality:</strong> Use clean, disease-free water sources</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feeding Plans by Animal */}
      <div className="space-y-8">
        {displayPlans.map((plan, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">{plan.emoji}</span>
              {plan.animal} - Feeding Guide
            </h3>

            <div className="space-y-4">
              {(plan.sections || []).map((section: any, sIdx: number) => (
                <div
                  key={sIdx}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300 shadow-md"
                >
                  <h4 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0 text-white">
                      {section.icon}
                    </div>
                    {section.title}
                  </h4>

                  <ul className="space-y-2 ml-11">
                    {section.content.map((item: string, iIdx: number) => (
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

      {/* Nutritional Balance Tips */}
      <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 sm:p-8 border-2 border-yellow-300">
        <h3 className="text-xl font-bold text-yellow-900 mb-4">⚖️ Maintaining Nutritional Balance</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-yellow-800 mb-2">Protein Sources</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Fish meal, groundnut cake</li>
              <li>• Pulses (gram, moong, arhar)</li>
              <li>• Insects and worms</li>
              <li>• Oilcakes from local mills</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-yellow-800 mb-2">Mineral Sources</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Limestone powder</li>
              <li>• Bone meal</li>
              <li>• Salt (iodized)</li>
              <li>• Mineral premix</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-red-900 mb-2">⚠️ Important Feeding Tips</h4>
            <ul className="text-sm text-red-800 space-y-2">
              <li>✓ Never feed moldy or contaminated feed</li>
              <li>✓ Introduce new feed gradually over 7-10 days</li>
              <li>✓ Store feed in dry, cool place away from pests</li>
              <li>✓ Maintain feeding schedule for better digestion</li>
              <li>✓ Monitor animal weight and adjust feed accordingly</li>
              <li>✓ Provide mineral lick for free access to minerals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
