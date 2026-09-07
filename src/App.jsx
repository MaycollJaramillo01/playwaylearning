import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Methodology from './pages/Methodology'
import Playground from './pages/Playground'
import Coaching from './pages/Coaching'
import MetaConferences from './pages/MetaConferences'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/playground" element={<Playground />} />
        <Route path="/servicios/coaching" element={<Coaching />} />
        <Route path="/servicios/metaconferencias" element={<MetaConferences />} />
        <Route path="/metodologia" element={<Methodology />} />
        <Route path="/experiencias" element={<Experiences />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
