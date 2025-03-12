import React from 'react';
import ExerciseCard from '../components/ExerciseCard';

const exercices = [
  {
    id: 1,
    title: "Chaînes de Markov",
    enonce: `Soit une chaîne de Markov à 3 états dont la matrice de transition est :
    \\[P = \\begin{pmatrix}
    0.5 & 0.3 & 0.2 \\\\
    0.4 & 0.3 & 0.3 \\\\
    0.2 & 0.4 & 0.4
    \\end{pmatrix}\\]
    
    1) Vérifier que P est bien une matrice de transition
    2) Calculer P²
    3) Déterminer la distribution stationnaire`,
    correction: `1) Pour chaque ligne, la somme est 1 et tous les coefficients sont ≥ 0
    
    2) \\[P^2 = \\begin{pmatrix}
    0.39 & 0.33 & 0.28 \\\\
    0.37 & 0.33 & 0.30 \\\\
    0.32 & 0.35 & 0.33
    \\end{pmatrix}\\]
    
    3) La distribution stationnaire π vérifie πP = π :
    \\[\\pi = (0.36, 0.34, 0.30)\\]`
  },
  {
    id: 2,
    title: "Variables aléatoires continues",
    enonce: `Soit X une variable aléatoire continue de densité :
    \\[f(x) = \\begin{cases}
    \\frac{x}{2} & \\text{si } 0 \\leq x \\leq 2 \\\\
    0 & \\text{sinon}
    \\end{cases}\\]
    
    1) Vérifier que f est bien une densité de probabilité
    2) Calculer E(X) et Var(X)
    3) Déterminer la fonction de répartition F de X`,
    correction: `1) \\[\\int_0^2 \\frac{x}{2}dx = [\\frac{x^2}{4}]_0^2 = 1\\]
    
    2) \\[E(X) = \\int_0^2 x\\cdot\\frac{x}{2}dx = \\frac{4}{3}\\]
    \\[E(X^2) = \\int_0^2 x^2\\cdot\\frac{x}{2}dx = 2\\]
    \\[Var(X) = 2 - (\\frac{4}{3})^2 = \\frac{4}{9}\\]
    
    3) \\[F(x) = \\begin{cases}
    0 & \\text{si } x < 0 \\\\
    \\frac{x^2}{4} & \\text{si } 0 \\leq x \\leq 2 \\\\
    1 & \\text{si } x > 2
    \\end{cases}\\]`
  }
];

function Probabilites() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Probabilités - L2</h2>
      {exercices.map(exercise => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

export default Probabilites;