import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Destination from './Destination/Destination';
import Crew from './Crew/Crew'
import Technology from './Technology/Technology'
import Navbar from './Navbar/Navbar';


export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path='space-tourism-website/' element={ <Home /> } />
        <Route path='space-tourism-website/destination' element={ <Destination /> } />
        <Route path='space-tourism-website/crew' element={ <Crew /> } />
        <Route path='space-tourism-website/technology' element={ <Technology /> } />
      </Routes>
    </div>
  )
}