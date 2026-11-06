import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ResearchPage from './pages/ResearchPage'
import PeoplePage from './pages/PeoplePage'
import PublicationsPage from './pages/PublicationsPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

/**
 * Clean URLs (/research, /people …). GitHub Pages serves them because
 * scripts/postbuild.mjs writes an index.html for every route.
 * When adding a route here, also add it to that script and to `navigation` in content/site.ts.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="people" element={<PeoplePage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
