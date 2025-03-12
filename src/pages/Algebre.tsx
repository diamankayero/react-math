import React from 'react';
import ExerciseCard from '../components/ExerciseCard';

const exercices = [
  {
    id: 1,
    title: "Réduction des endomorphismes",
    enonce: `Soit \\(f\\) l'endomorphisme de \\(\\mathbb{R}^3\\) dont la matrice dans la base canonique est :
    \\[A = \\begin{pmatrix} 
    2 & -1 & 0 \\\\
    1 & 0 & 1 \\\\
    0 & 1 & 2
    \\end{pmatrix}\\]
    
    1) Calculer le polynôme caractéristique de A
    2) Déterminer les valeurs propres de f
    3) Pour chaque valeur propre, déterminer un vecteur propre associé
    4) La matrice A est-elle diagonalisable ?`,
    correction: `1) \\(P_A(X) = det(XI_3-A) = (X-2)^3 + (X-2)\\)
    
    2) Les valeurs propres sont les racines de \\(P_A\\) :
    \\(P_A(X) = (X-2)(X^2-2X+1) = (X-2)(X-1)^2\\)
    Donc \\(\\lambda_1 = 2\\) et \\(\\lambda_2 = 1\\) (double)
    
    3) Pour \\(\\lambda_1 = 2\\) :
    \\[v_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}\\]
    Pour \\(\\lambda_2 = 1\\) :
    \\[v_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}\\]
    
    4) Non, car dim(E₁) = 1 < m₁ = 2 (multiplicité algébrique)`
  },
  {
    id: 2,
    title: "Formes quadratiques",
    enonce: `Soit q la forme quadratique sur \\(\\mathbb{R}^3\\) définie par :
    \\[q(x,y,z) = x^2 + 2y^2 + 3z^2 + 2xy - 2yz\\]
    
    1) Écrire la matrice de q dans la base canonique
    2) Cette forme est-elle définie positive ?
    3) Diagonaliser q par la méthode de Gauss`,
    correction: `1) La matrice dans la base canonique est :
    \\[M = \\begin{pmatrix}
    1 & 1 & 0 \\\\
    1 & 2 & -1 \\\\
    0 & -1 & 3
    \\end{pmatrix}\\]
    
    2) Les valeurs propres sont toutes strictement positives :
    \\(\\lambda_1 ≈ 3.4, \\lambda_2 ≈ 1.8, \\lambda_3 ≈ 0.8\\)
    Donc q est définie positive
    
    3) Après diagonalisation :
    \\[q(x,y,z) = \\lambda_1u^2 + \\lambda_2v^2 + \\lambda_3w^2\\]
    où (u,v,w) est la nouvelle base orthonormée`
  }
];

function Algebre() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Algèbre - L2</h2>
      {exercices.map(exercise => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

export default Algebre;