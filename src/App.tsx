import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { AppRoutes } from '@/routes/AppRoutes'
import { SEO } from '@/seo/SEO'
import { usePageTracking } from '@/seo/usePageTracking'

export default function App() {
  usePageTracking()
  return (
    <>
      <SEO />
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </>
  )
}
