import { Link } from 'react-router-dom'
import { Reveal } from '@/components/common/Reveal'
import { Button } from '@/components/ui/Button'
import { Home, Search, Sparkles } from 'lucide-react'

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="relative max-w-md w-full text-center">
        <Reveal variant="scale">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-brand-gradient/10 blur-3xl" aria-hidden="true" />
            </div>
            <div className="relative inline-flex h-48 w-48 items-center justify-center">
              <span className="text-8xl font-bold text-meta-navy/10">404</span>
              <span className="absolute text-4xl font-bold text-brand-gradient">404</span>
            </div>
          </div>
        </Reveal>

        <Reveal variant="up" delay={100}>
          <h1 className="text-3xl font-bold text-meta-navy mb-4">Page not found</h1>
          <p className="text-lg text-slate-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Don't worry — it happens to the best of us.
          </p>
        </Reveal>

        <Reveal variant="up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="brand" to="/" className="w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" aria-hidden="true" />
              Go home
            </Button>
            <Button variant="secondary" to="/solutions" className="w-full sm:w-auto">
              <Search className="h-4 w-4 mr-2" aria-hidden="true" />
              Browse solutions
            </Button>
          </div>
        </Reveal>

        <Reveal variant="up" delay={300}>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link to="/about" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white border border-slate-200 hover:border-meta-blue/30 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-5 w-5 text-meta-blue" aria-hidden="true" />
              <span className="font-medium text-meta-navy">About MetaAds</span>
            </Link>
            <Link to="/careers" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white border border-slate-200 hover:border-meta-blue/30 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-5 w-5 text-meta-violet" aria-hidden="true" />
              <span className="font-medium text-meta-navy">Join the team</span>
            </Link>
            <Link to="/contact" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white border border-slate-200 hover:border-meta-blue/30 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-5 w-5 text-meta-cyan" aria-hidden="true" />
              <span className="font-medium text-meta-navy">Contact us</span>
            </Link>
            <Link to="/solutions" className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white border border-slate-200 hover:border-meta-blue/30 hover:shadow-lg transition-all duration-300">
              <Sparkles className="h-5 w-5 text-meta-magenta" aria-hidden="true" />
              <span className="font-medium text-meta-navy">Our solutions</span>
            </Link>
          </div>
        </Reveal>

        <Reveal variant="up" delay={400}>
          <p className="mt-12 text-sm text-slate-500">
            Think this is a mistake?
            <Link to="/contact" className="ml-1 font-medium text-meta-blue hover:text-meta-blue/80 underline">
              Let us know
            </Link>
          </p>
        </Reveal>
      </div>
    </div>
  )
}