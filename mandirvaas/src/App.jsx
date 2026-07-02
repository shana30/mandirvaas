import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Luckshana — Acquisition, Media & Experience
import Home from './pages/luckshana-experience/Home.jsx'
import TourPackages from './pages/luckshana-experience/TourPackages.jsx'
import Blogs from './pages/luckshana-experience/Blogs.jsx'
import JoinPartner from './pages/luckshana-experience/JoinPartner.jsx'

// Dhanush — Core Logistics & Operations
import Temples from './pages/dhanush-logistics/Temples.jsx'
import TempleMap from './pages/dhanush-logistics/TempleMap.jsx'
import Stays from './pages/dhanush-logistics/Stays.jsx'
import Shop from './pages/dhanush-logistics/Shop.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* Luckshana's routes */}
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<TourPackages />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/partner" element={<JoinPartner />} />

          {/* Dhanush's routes */}
          <Route path="/temples" element={<Temples />} />
          <Route path="/temples/map" element={<TempleMap />} />
          <Route path="/stays" element={<Stays />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
