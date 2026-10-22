import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ServiceRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/servicios#${slug}`} replace />
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        {/* Old and original-site URLs keep working */}
        <Route path="/inicio" element={<Navigate to="/" replace />} />
        <Route path="/quienes-somos" element={<Navigate to="/nosotros" replace />} />
        <Route path="/experiencias" element={<Navigate to="/galeria" replace />} />
        <Route path="/metodologia" element={<Navigate to="/servicios" replace />} />
        <Route path="/servicios/:slug" element={<ServiceRedirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
