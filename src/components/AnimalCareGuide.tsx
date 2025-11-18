import { useState } from 'react';
import { Droplet, Leaf, Heart, Home, AlertCircle, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import animalCareTranslations from '../translations/animalCare.json';

interface AnimalGuideProps {
  onClose: () => void;
}

export function AnimalCareGuide({ onClose }: AnimalGuideProps) {
  const [selectedAnimal, setSelectedAnimal] = useState('cow');
  const { language } = useLanguage();
  const translations = animalCareTranslations[language as keyof typeof animalCareTranslations];

  const animals = {
    cow: {
      title: '🐄 Cow Care Guide',
      emoji: '🐄',
      sections: [
        {
          icon: <Leaf className="w-6 h-6" />,
          title: 'Feeding in Dry Climate',
          content: [
            'Provide 40-50 kg green fodder daily (mango leaves, grass)',
            'Supplement with 5-7 kg dry fodder (hay, straw)',
            'Add 2-3 kg concentrates (grains, pulses)',
            'Ensure mineral supplementation (salt, calcium, phosphorus)',
            'Provide water 3-4 times daily (minimum 40-50 liters)',
            'Use mango tree leaves as supplementary feed during scarcity'
          ]
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Shelter Design for Hot Weather',
          content: [
            'Build shelter with proper ventilation and air circulation',
            'Provide shade with tin/thatched roof (12-15 ft height)',
            'Ensure 40-50 sq ft space per animal',
            'Use lime wash on walls for cooling',
            'Provide wallows or sprinklers for heat relief',
            'Maintain drainage to prevent water stagnation'
          ]
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: 'Health & Disease Prevention',
          content: [
            'Vaccinate against FMD (Foot and Mouth Disease) annually',
            'Vaccinate against HS (Haemorrhagic Septicemia) twice yearly',
            'Regular deworming every 3 months',
            'Check for ticks and external parasites weekly',
            'Maintain hygiene and cleanliness of shelter',
            'Consult veterinarian for any health issues'
          ]
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: 'Milk Production Tips',
          content: [
            'Maintain consistent feeding schedule',
            'Ensure proper hydration and mineral intake',
            'Regular milking (twice daily) improves production',
            'Keep animals stress-free and comfortable',
            'Provide adequate rest period (8-10 hours)',
            'Monitor milk quality and health regularly'
          ]
        }
      ]
    },
    poultry: {
      title: '🐔 Poultry Care Guide (Hen, Duck, Chicken)',
      emoji: '🐔',
      sections: [
        {
          icon: <Leaf className="w-6 h-6" />,
          title: 'Feed Formulation',
          content: [
            'Layer birds: 100-120g feed per bird daily',
            'Broilers: 120-150g feed per bird daily',
            'Provide balanced diet with 16-18% protein',
            'Include grains, pulses, vegetables, and minerals',
            'Supplement with calcium for egg production',
            'Provide fresh water daily (unlimited access)'
          ]
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Housing in Extreme Heat',
          content: [
            'Provide 2-3 sq ft space per bird',
            'Ensure good ventilation and air flow',
            'Use shade cloth or thatched roof',
            'Maintain temperature below 30°C if possible',
            'Provide dust baths for cooling',
            'Ensure proper drainage and cleanliness'
          ]
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: 'Disease Management',
          content: [
            'Vaccinate against Ranikhet disease (Newcastle)',
            'Vaccinate against Fowl pox',
            'Regular deworming every 3 months',
            'Watch for signs of coccidiosis and parasites',
            'Maintain strict hygiene to prevent infections',
            'Isolate sick birds immediately'
          ]
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: 'Egg Production',
          content: [
            'Provide 14-16 hours of light daily',
            'Maintain consistent temperature and humidity',
            'Ensure adequate nutrition and water',
            'Collect eggs twice daily',
            'Store eggs in cool, dry place',
            'Expected production: 250-300 eggs/year per bird'
          ]
        }
      ]
    },
    fish: {
      title: '🐟 Fish Farming Guide',
      emoji: '🐟',
      sections: [
        {
          icon: <Droplet className="w-6 h-6" />,
          title: 'Pond Management',
          content: [
            'Prepare pond with proper depth (1.5-2 meters)',
            'Ensure water source (well, bore, stream)',
            'Stock density: 5000-8000 fingerlings per hectare',
            'Maintain water quality (pH 6.5-8.5)',
            'Regular water testing and monitoring',
            'Prevent water loss through seepage'
          ]
        },
        {
          icon: <Leaf className="w-6 h-6" />,
          title: 'Feed Types & Nutrition',
          content: [
            'Use pellet feed with 25-30% protein',
            'Feed 2-3% of body weight daily',
            'Divide feeding into 2-3 times daily',
            'Supplement with natural feed (insects, plants)',
            'Maintain feed quality and storage',
            'Adjust feed based on growth and season'
          ]
        },
        {
          icon: <AlertCircle className="w-6 h-6" />,
          title: 'Disease Control',
          content: [
            'Monitor for fish diseases regularly',
            'Maintain good water quality',
            'Quarantine new fish before adding',
            'Use lime for pond disinfection',
            'Avoid overcrowding',
            'Consult fisheries expert for disease treatment'
          ]
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: 'Harvesting & Production',
          content: [
            'Harvest when fish reach 500-1000g size',
            'Harvesting period: 6-8 months',
            'Expected yield: 3-5 tons per hectare annually',
            'Use proper harvesting techniques',
            'Store fish in cool conditions',
            'Maintain records for better management'
          ]
        }
      ]
    },
    snake: {
      title: '🐍 Snake Safety & Management',
      emoji: '🐍',
      sections: [
        {
          icon: <AlertCircle className="w-6 h-6" />,
          title: 'Safety Precautions',
          content: [
            'Wear protective footwear in fields',
            'Avoid handling snakes without training',
            'Keep first aid kit with anti-venom nearby',
            'Know location of nearest hospital',
            'Keep phone numbers of wildlife authorities',
            'Educate family members on snake safety'
          ]
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: 'Snake Identification',
          content: [
            'Venomous snakes: Cobra, Viper, Krait',
            'Non-venomous: Rat snake, Grass snake',
            'Learn to identify by color, pattern, and behavior',
            'Cobra: Hood, black/brown color',
            'Viper: Triangular head, zigzag pattern',
            'Take photos for expert identification'
          ]
        },
        {
          icon: <Home className="w-6 h-6" />,
          title: 'Prevention Methods',
          content: [
            'Keep surroundings clean and dry',
            'Remove rodents (snakes hunt them)',
            'Seal cracks and holes in buildings',
            'Trim grass and vegetation around shelter',
            'Use snake repellent plants (neem, marigold)',
            'Avoid leaving food waste exposed'
          ]
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: 'When to Contact Authorities',
          content: [
            'Snake bite: Rush to hospital immediately',
            'Snake in house: Call wildlife authorities',
            'Do not attempt to kill or harm snake',
            'Contact: Wildlife SOS, Forest Department',
            'Keep emergency numbers handy',
            'Report snake sightings to authorities'
          ]
        }
      ]
    }
  };

  const currentAnimal = animals[selectedAnimal as keyof typeof animals];

  return (
    <div className="space-y-6">
      {/* Animal Selection */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.entries(animals).map(([key, animal]) => (
          <button
            key={key}
            onClick={() => setSelectedAnimal(key)}
            className={`p-4 rounded-lg font-semibold transition-all ${
              selectedAnimal === key
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {animal.emoji}
            <div className="text-xs mt-1">{animal.title.split(' ')[1]}</div>
          </button>
        ))}
      </div>

      {/* Animal Content */}
      <div className="space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-green-900">{translations.title}</h3>

        {currentAnimal.sections.map((section, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                {section.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-green-900">{section.title}</h4>
            </div>
            <ul className="space-y-2 ml-2">
              {section.content.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Important Note */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-yellow-900 mb-2">Important Note</h4>
            <p className="text-sm text-yellow-800">
              For specific health issues or diseases, always consult with a qualified veterinarian. 
              Contact your nearest veterinary hospital in Chittoor district for professional guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
