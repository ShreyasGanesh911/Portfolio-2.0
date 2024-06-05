import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Navbar from './Global/Navbar';
import Footer from './Global/Footer';
import ProjectCard from './Components/ProjectCard';
import Main from './Pages/Main';

function App() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/projects/:name' element={<ProjectCard/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
