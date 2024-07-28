import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Navbar from './Global/Navbar';
import Footer from './Global/Footer';
import Main from './Pages/Main';
import ProjectDetails from './Pages/ProjectDetails';

function App() {
  return (
    <>
        <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/projects/:name' element={<ProjectDetails/>}></Route>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
