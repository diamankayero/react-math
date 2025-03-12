import React from 'react';
import ExerciseCard from '../components/ExerciseCard';

const exercices = [
  {
    id: 1,
    title: "Espaces métriques",
    enonce: `Soit (E,d) un espace métrique.
    
    1) Montrer que l'application \\(f : E \\times E \\to \\mathbb{R}\\) définie par \\(f(x,y) = d(x,y)^2\\) est continue.
    
    2) Soit A une partie de E. On définit :
    \\[d_A : E \\to \\mathbb{R}_+, x \\mapsto \\inf_{a\\in A} d(x,a)\\]
    Montrer que \\(d_A\\) est 1-lipschitzienne.`,
    correction: `1) Pour montrer la continuité de f, on utilise l'inégalité triangulaire :
    \\[|d(x,y)^2 - d(x',y')^2| = |d(x,y) + d(x',y')| \\cdot |d(x,y) - d(x',y')|\\]
    \\[\\leq (d(x,y) + d(x',y')) \\cdot (d(x,x') + d(y,y'))\\]
    
    2) Soient x, y ∈ E. Pour tout a ∈ A :
    \\[d(x,a) \\leq d(x,y) + d(y,a)\\]
    Donc \\(d_A(x) \\leq d(x,y) + d_A(y)\\)
    En échangeant x et y :
    \\[|d_A(x) - d_A(y)| \\leq d(x,y)\\]`
  },
  {
    id: 2,
    title: "Compacité",
    enonce: `Soit E un espace métrique.
    
    1) Montrer que si E est compact, alors il est complet et totalement borné.
    
    2) Soit F un fermé de E. Montrer que si E est compact, alors F est compact.
    
    3) Application : Montrer que la boule unité fermée de \\(\\mathbb{R}^n\\) est compacte.`,
    correction: `1) - Complétude : toute suite de Cauchy admet une sous-suite convergente (car E compact)
    - Totalement borné : pour tout ε>0, E peut être recouvert par un nombre fini de boules de rayon ε
    
    2) F est fermé dans E compact donc :
    - F est fermé et borné
    - Toute suite de F admet une sous-suite convergente dans E
    - La limite est dans F car F est fermé
    
    3) Pour la boule unité B(0,1) de \\(\\mathbb{R}^n\\) :
    - Fermée par définition
    - Bornée par définition
    - Théorème de Bolzano-Weierstrass dans \\(\\mathbb{R}^n\\)`
  }
];

function TopologieMetrique() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Topologie Métrique - L2</h2>
      {exercices.map(exercise => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}

export default TopologieMetrique;