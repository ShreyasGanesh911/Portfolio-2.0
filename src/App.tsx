import { BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom';
import Navbar from './Global/Navbar';
import Footer from './Global/Footer';
import Main from './Pages/Main';
import ProjectDetails from './Pages/ProjectDetails';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
        <HelmetProvider>
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path='/' element={<Main/>}></Route>
                <Route path='/projects/:name' element={<ProjectDetails/>}></Route>
                <Route path='*' element={<Navigate to="/" replace />}></Route>
              </Routes>
            <Footer/>
          </BrowserRouter>
        </HelmetProvider>
    </>
  );
}

export default App;
