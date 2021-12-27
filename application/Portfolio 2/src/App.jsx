import './App.css'
import Loader from './components/Loader'
import ThreeCanvas from './components/ThreeCanvas'
import Navbar from './components/Navbar'
import { Route, Routes, BrowserRouter} from 'react-router-dom';

import About from './pages/About';
import Code from './pages/Code';
import Design from './pages/Design';

function App() {

  return (
    <div className="App">
      {/* <Loader></Loader> */}
      <ThreeCanvas></ThreeCanvas>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}> 
            <Route path='/about' element={<About />} />
            <Route path='/code' element={<Code />} />
            <Route path='/design' element={<Design />} />  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
