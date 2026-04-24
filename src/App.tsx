import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hiragana from './pages/Hiragana';
import Katakana from './pages/Katakana';
import Kanji from './pages/Kanji';
import Grammar from './pages/Grammar';
import Lessons from './pages/Lessons';
import QuizPage from './pages/QuizPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hiragana" element={<Hiragana />} />
          <Route path="katakana" element={<Katakana />} />
          <Route path="kanji" element={<Kanji />} />
          <Route path="grammar" element={<Grammar />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
