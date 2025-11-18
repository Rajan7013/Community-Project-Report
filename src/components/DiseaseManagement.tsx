import { AlertCircle, Heart, Pill, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import diseaseTranslations from '../translations/diseaseManagement.json';

interface DiseaseProps {
  onClose: () => void;
}

export function DiseaseManagement({ onClose }: DiseaseProps) {
  const { language } = useLanguage();
  const translations = diseaseTranslations[language as keyof typeof diseaseTranslations];
  const diseases = translations.diseases.map((disease: any) => ({
    ...disease,
    emoji: disease.animal.includes('Cow') ? '🐄' : disease.animal.includes('Poultry') ? '🐔' : '🐟'
  }));

  return (
    <div className="space-y-8">
      {/* Emergency Contacts */}
      <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 sm:p-8">
        <div className="flex items-start gap-3 mb-4">
          <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold text-red-900 mb-3">Emergency Contacts</h3>
            <div className="space-y-2 text-sm text-red-800">
              <p>🏥 <strong>Chittoor District Veterinary Hospital:</strong> +91-XXXX-XXXXXX</p>
              <p>📞 <strong>District Animal Husbandry Office:</strong> +91-XXXX-XXXXXX</p>
              <p>🚑 <strong>Emergency Veterinary Service:</strong> Available 24/7</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disease Information by Animal */}
      <div className="space-y-8">
        {diseases.map((animalGroup, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-3">
              <span className="text-4xl">{animalGroup.emoji}</span>
              {animalGroup.animal}
            </h3>

            <div className="space-y-4">
              {animalGroup.conditions.map((condition: any, cIdx: number) => (
                <div
                  key={cIdx}
                  className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-300 shadow-md"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    {condition.name}
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Symptoms */}
                    <div>
                      <h5 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                        <span className="text-lg">⚠️</span> Symptoms
                      </h5>
                      <p className="text-sm text-gray-700 leading-relaxed">{condition.symptoms}</p>
                    </div>

                    {/* Prevention */}
                    <div>
                      <h5 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                        <span className="text-lg">🛡️</span> Prevention
                      </h5>
                      <p className="text-sm text-gray-700 leading-relaxed">{condition.prevention}</p>
                    </div>

                    {/* Treatment */}
                    <div className="sm:col-span-2">
                      <h5 className="font-bold text-blue-700 mb-2 flex items-center gap-2">
                        <Pill className="w-5 h-5" /> Treatment & Management
                      </h5>
                      <p className="text-sm text-gray-700 leading-relaxed">{condition.treatment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* General Health Tips */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8 border-2 border-blue-300">
        <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6" /> General Health Management Tips
        </h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span className="text-gray-700"><strong>Regular Health Checks:</strong> Inspect animals daily for signs of illness</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span className="text-gray-700"><strong>Vaccination Schedule:</strong> Follow recommended vaccination calendar</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span className="text-gray-700"><strong>Hygiene & Sanitation:</strong> Maintain clean shelter and water sources</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span className="text-gray-700"><strong>Proper Nutrition:</strong> Provide balanced diet and fresh water</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span className="text-gray-700"><strong>Isolation:</strong> Separate sick animals immediately</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-1">✓</span>
            <span className="text-gray-700"><strong>Veterinary Consultation:</strong> Seek professional help for any health issues</span>
          </li>
        </ul>
      </div>

      {/* Important Note */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-yellow-900 mb-2">⚠️ Important Disclaimer</h4>
            <p className="text-sm text-yellow-800">
              This information is for educational purposes. Always consult with a qualified veterinarian 
              for diagnosis and treatment of animal diseases. Early professional intervention can save lives 
              and prevent disease spread.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
