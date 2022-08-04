import './css/basic.css'
import './css/common.css'
import './css/main.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './doc/Nav.js'
import Section01 from './doc/Section01.js'
import Section02 from './doc/Section02.js'
import Section03 from './doc/Section03.js'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Section01 />} />
        <Route path='/section01' element={<Section01 />} />
        <Route path='/section02' element={<Section02 />} />
        <Route path='/section03' element={<Section03 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;