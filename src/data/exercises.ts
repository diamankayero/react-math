export const exercises = [
  {
    id: 1,
    title: "Équations du Second Degré",
    description: "Résolution d'équations du second degré avec la méthode du discriminant",
    level: "Première",
    statement: "Résoudre les équations suivantes :\n1) x² - 5x + 6 = 0\n2) 2x² + 3x - 2 = 0\n3) -x² + 4x - 4 = 0",
    solution: "1) x² - 5x + 6 = 0\n   Δ = b² - 4ac = 25 - 24 = 1\n   x₁ = (5 + 1)/2 = 3\n   x₂ = (5 - 1)/2 = 2\n\n2) 2x² + 3x - 2 = 0\n   Δ = 9 + 16 = 25\n   x₁ = (-3 + 5)/4 = 0.5\n   x₂ = (-3 - 5)/4 = -2\n\n3) -x² + 4x - 4 = 0\n   Δ = 16 - 16 = 0\n   x = 2",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Dérivées",
    description: "Calcul de dérivées et étude de fonctions",
    level: "Terminale",
    statement: "Calculer les dérivées des fonctions suivantes :\n1) f(x) = x³ - 2x + 1\n2) g(x) = (x² + 1)/(x - 2)\n3) h(x) = √(x + 1)",
    solution: "1) f'(x) = 3x² - 2\n\n2) g'(x) = ((2x)(x-2) - (x²+1)(1))/((x-2)²)\n   = (2x² - 4x - x² - 1)/(x-2)²\n   = (x² - 4x - 1)/(x-2)²\n\n3) h'(x) = 1/(2√(x+1))",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Trigonométrie",
    description: "Résolution d'équations trigonométriques",
    level: "Première",
    statement: "Résoudre sur [0, 2π] :\n1) cos(x) = 1/2\n2) sin(x) = -1/2\n3) tan(x) = 1",
    solution: "1) cos(x) = 1/2\n   x = ±π/3 [2π]\n   x = π/3 ou 5π/3\n\n2) sin(x) = -1/2\n   x = -π/6 ou -5π/6 [2π]\n   x = 11π/6 ou 7π/6\n\n3) tan(x) = 1\n   x = π/4 ou 5π/4",
    imageUrl: "https://images.unsplash.com/photo-1635070041544-22beaf095c06?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Probabilités",
    description: "Calcul de probabilités et statistiques",
    level: "Seconde",
    statement: "Un sac contient 3 boules rouges, 2 boules vertes et 5 boules bleues.\n1) Quelle est la probabilité de tirer une boule rouge ?\n2) Quelle est la probabilité de tirer une boule qui n'est pas bleue ?\n3) On tire deux boules successivement sans remise. Quelle est la probabilité d'obtenir deux boules de la même couleur ?",
    solution: "1) P(Rouge) = 3/10 = 0,3\n\n2) P(Non bleue) = P(Rouge ou Verte)\n   = 5/10 = 0,5\n\n3) P(2 mêmes) = P(2R) + P(2V) + P(2B)\n   = (3/10)(2/9) + (2/10)(1/9) + (5/10)(4/9)\n   = 6/90 + 2/90 + 20/90\n   = 28/90 ≈ 0,31",
    imageUrl: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Suites Numériques",
    description: "Étude de suites arithmétiques et géométriques",
    level: "Première",
    statement: "Soit (Un) une suite arithmétique de premier terme U₀ = 3 et de raison r = 2.\n1) Calculer les 5 premiers termes\n2) Exprimer Un en fonction de n\n3) Calculer la somme des 10 premiers termes",
    solution: "1) U₀ = 3\n   U₁ = 5\n   U₂ = 7\n   U₃ = 9\n   U₄ = 11\n\n2) Un = U₀ + nr\n   Un = 3 + 2n\n\n3) S₁₀ = (n/2)(U₀ + U₉)\n   = (10/2)(3 + 21)\n   = 5 × 24\n   = 120",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800"
  }
];