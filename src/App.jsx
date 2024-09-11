import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './assets/Navbar';

import Home from './pages/home';
import About from './pages/about';
import Project from './pages/projects';


function App() {
  
  return (
    <>
    <main className="bg-slate-300/20">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Project/>}></Route>
        </Routes>
      </Router>
    </main>
    </>
  )
}

export default App
