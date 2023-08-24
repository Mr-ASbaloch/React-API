

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Create from './assets/Crud Operations/Create'
import Read from './assets/Crud Operations/Read'


function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
     <Route  exact path='/' element={<Read/>} />
     <Route  path='/create' element={<Create/>} />
   </Routes>
   </BrowserRouter>
   
    </>
  )
}

export default App
