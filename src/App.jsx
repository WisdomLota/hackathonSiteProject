import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Tester from './pages/Tester'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tester' element={<Tester/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
