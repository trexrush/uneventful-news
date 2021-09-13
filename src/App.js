import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
// import tailwindcss from 'tailwindcss';

import Article from './components/Article';
import Fact from './components/FactOfTheDay';
import Navbar from './components/Navbar';
import Articles from './components/Articles';

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Articles/>
      <Fact/>
    </Router>
  );
}