import { Hero } from '../components/home/Hero'
import { ResearchOverview } from '../components/home/ResearchOverview'
import { AboutPreview } from '../components/home/AboutPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ResearchOverview />
      <AboutPreview />
    </>
  )
}
