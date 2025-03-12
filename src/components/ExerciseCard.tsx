import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  enonce: string;
  correction: string;
}

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [showSolution]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
      <div className="border-b border-gray-100">
        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <h3 className="text-xl font-bold text-gray-900">{exercise.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <span className="bg-indigo-600 text-white px-2 py-1 text-sm rounded">Énoncé</span>
          </h4>
          <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: exercise.enonce }} />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-sm font-medium"
          >
            <span>{showSolution ? 'Masquer la correction' : 'Voir la correction'}</span>
            {showSolution ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>

        {showSolution && (
          <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-100">
            <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span className="bg-green-600 text-white px-2 py-1 text-sm rounded">Correction</span>
            </h4>
            <div className="text-gray-700 prose max-w-none" dangerouslySetInnerHTML={{ __html: exercise.correction }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;