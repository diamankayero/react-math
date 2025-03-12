import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, BookOpen, FunctionSquare as Function, Sigma, Grid3X3 } from 'lucide-react';
import Analyse from './pages/Analyse';
import Algebre from './pages/Algebre';
import Probabilites from './pages/Probabilites';
import TopologieMetrique from './pages/TopologieMetrique';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-800">MathSupérieur</h1>
              </div>
              <nav className="flex space-x-6">
                <Link to="/analyse" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                  <Function className="h-5 w-5" />
                  <span>Analyse</span>
                </Link>
                <Link to="/algebre" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                  <Grid3X3 className="h-5 w-5" />
                  <span>Algèbre</span>
                </Link>
                <Link to="/probabilites" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                  <Sigma className="h-5 w-5" />
                  <span>Probabilités</span>
                </Link>
                <Link to="/topologie" className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600">
                  <BookOpen className="h-5 w-5" />
                  <span>Topologie</span>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Analyse />} />
            <Route path="/analyse" element={<Analyse />} />
            <Route path="/algebre" element={<Algebre />} />
            <Route path="/probabilites" element={<Probabilites />} />
            <Route path="/topologie" element={<TopologieMetrique />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;