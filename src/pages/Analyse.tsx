import React from 'react';
import ExerciseCard from '../components/ExerciseCard';

const exercices = [
  {
    id: 1,
    title: "Séries de Fourier",
    enonce: `Soit \\(f\\) la fonction 2π-périodique définie sur [-π,π] par \\(f(x)=|x|\\).
    
    1) Calculer les coefficients de Fourier \\(a_n\\) et \\(b_n\\) de f.
    2) En déduire le développement en série de Fourier de f.
    3) Étudier la convergence de la série de Fourier.`,
    correction: `1) Pour \\(n \\geq 1\\), on a :
    \\[a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}|x|\\cos(nx)dx = \\frac{2(-1)^{n+1}}{n^2}\\]
    \\[b_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi}|x|\\sin(nx)dx = 0\\]
    
    2) Le développement en série de Fourier est :
    \\[f(x) = \\frac{\\pi}{2} - \\sum_{n=1}^{\\infty}\\frac{2(-1)^{n+1}}{n^2}\\cos(nx)\\]
    
    3) La série converge uniformément car \\(\\sum\\frac{1}{n^2}\\) converge.`
  },
  {
    id: 2,
    title: "Équations différentielles",
    enonce: `Résoudre l'équation différentielle suivante :
    \\[y'' + 4y' + 4y = x^2e^{-2x}\\]
    
    1) Trouver la solution générale de l'équation homogène
    2) Trouver une solution particulière
    3) En déduire la solution générale`,
    correction: `1) Équation caractéristique : \\(r^2 + 4r + 4 = (r+2)^2 = 0\\)
    Solution homogène : \\(y_h = (C_1 + C_2x)e^{-2x}\\)
    
    2) Cherchons une solution de la forme : \\(y_p = (ax^2 + bx + c)e^{-2x}\\)
    En substituant, on trouve : \\(a = \\frac{1}{4}, b = \\frac{1}{2}, c = \\frac{3}{4}\\)
    
    3) Solution générale :
    \\[y(x) = (C_1 + C_2x + \\frac{x^2}{4} + \\frac{x}{2} + \\frac{3}{4})e^{-2x}\\]`
  }
];

function Analyse() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Analyse - L2</h2>
      {exercices.map(exercise => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

export default Analyse;