import React from 'react'
import Logintable from './component/Logintable'
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';

function Log() {
  return (
    <div>
       
         <Routes>
   
   <Route path='/login' element={<Logintable/>}/>
  
 </Routes>
    </div>
  )
}

export default Log