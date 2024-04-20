import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// Importing Pages
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Gallary from './pages/Gallery'
import Services from './pages/Services'
import Events from './pages/Events'
import Error from './pages/Error'

import AstrocampSpiti from './components/Events/AstrocampSpiti'
import AstrocampLadakh from './components/Events/AstrocampLadakh'
import AstrocampAndaman from './components/Events/AstrocampKamshet'
import AstrocampDahanu from './components/Events/AstrocampDahanu'
import AstrocampKamshet from './components/Events/AstrocampKamshet'
import AstrocampRajasthan from './components/Events/AstrocampRajasthan'
import AstrocampKutch from './components/Events/AstrocampKutch'
import AstrocampSandhan from './components/Events/AstrocampSandhan'

// Importing Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Texture from './components/Texture'
import Spiti from './components/Events/RegistrationPage/Spiti'
import Sandhan from './components/Events/RegistrationPage/Sandhan'
import Dahanu from './components/Events/RegistrationPage/Dahanu'
import Pune from './components/Events/RegistrationPage/Pune'
import Ladakh from './components/Events/RegistrationPage/Ladakh'

import './style/index.css'
import ArcPlaneterium from './pages/Services-sub/Arc-Planterium.jsx'
import ArcAstronomy from './pages/Services-sub/Arc-Astronomy.jsx'
import Astrocamp from './pages/Services-sub/Astrocamp.jsx'
import AstronomyClub from './pages/Services-sub/Astronomy-Club.jsx'
import AstronomyLabs from './pages/Services-sub/Astronomy-Labs.jsx'

import Navigation from './components/Navigation.jsx'
import './style/index.css'
function App() {
  return (
    <>
    <div className="flex min-h-screen w-screen flex-col bg-black text-white">
    <Navigation />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/gallery' element={<Gallary/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/services/arc-planeterium' element={<ArcPlaneterium/>}/>
        <Route path='/services/arc-astronomy-workshop' element={<ArcAstronomy/>}/>
        <Route path='/services/astrocamp' element={<Astrocamp/>}/>
        <Route path='/services/astronomy-club' element={<AstronomyClub/>}/>
        <Route path='/services/astronomy-labs' element={<AstronomyLabs/>}/>
        <Route path = "/astrocampSpiti" element = {<AstrocampSpiti/>}></Route>
        <Route path = "/astrocampAndaman" element = {<AstrocampAndaman/>}></Route>
        <Route path = "/astrocampDahanu" element = {<AstrocampDahanu/>}></Route>
        <Route path = "/astrocampKutch" element = {<AstrocampKutch/>}></Route>
        <Route path = "/astrocampLadakh" element = {<AstrocampLadakh/>}></Route>
        <Route path = "/astrocampRajashthan" element = {<AstrocampRajasthan/>}></Route>
        <Route path = "/astrocampSandhan" element = {<AstrocampSandhan/>}></Route>
        <Route path = "/astrocampKamshet" element = {<AstrocampKamshet/>}></Route>
        <Route path = "/registrationSpiti" element = {<Spiti/>}></Route>
        <Route path = '/registartionSandhan' element = {<Sandhan/>}/>
        <Route path = '/registrationDahanu' element = {<Dahanu/>}/>
        <Route path = '/registrationPune' element = {<Pune/>}/>
        <Route path = '/registartionSpiti' element = {<Spiti/>}/>
        <Route path = '/registrationLadakh' element = {<Ladakh/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}
export default App