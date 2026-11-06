import { PageHeader } from '../components/common/PageHeader'
import { ArrowLink } from '../components/common/ArrowLink'

export default function NotFoundPage() {
  return (
    <>
      <PageHeader eyebrow="404" title="Page not found" lead="요청하신 페이지를 찾을 수 없습니다." />
      <div className="bg-ink-900 py-20">
        <div className="container-page">
          <ArrowLink to="/">Back to home</ArrowLink>
        </div>
      </div>
    </>
  )
}
