import { Hero } from '../components/home/Hero'
import { ResearchOverview } from '../components/home/ResearchOverview'
import { AboutPreview } from '../components/home/AboutPreview'
import { SelectedPublications } from '../components/home/SelectedPublications'
import { NewsPreview } from '../components/home/NewsPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResearchOverview />
      <AboutPreview />
      <SelectedPublications />
      <NewsPreview />
    </>
  )
}
