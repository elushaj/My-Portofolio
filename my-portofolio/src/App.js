import React ,{lazy}from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Header from './pages/header/Header';

const Aboutme=lazy(()=>import ('../src/pages/aboutme/Aboutme.js'))
const Contact=lazy(()=>import ('../src/pages/contact/Contact.js'))
const Projects=lazy(()=>import ('../src/pages/githubProjects/Projects.js'))
function App() {
  return (
 <BrowserRouter>
 <Routes>

  <Route path='/'  element={<Header/>}/>
<Route path='aboutme' element={<Aboutme/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='projects' element={<Projects/>}/>



 
 </Routes>
 </BrowserRouter>
  );
}

export default App;
