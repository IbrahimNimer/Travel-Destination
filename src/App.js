import './App.css';
import Home from './Components/home/Home.js'; 
import { Routes, Route } from 'react-router-dom';
import TourDetails from './Components/Tourdetails/Tourdetails.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/city/:id" element={<TourDetails />} />
    </Routes>
  );
}

export default App;
