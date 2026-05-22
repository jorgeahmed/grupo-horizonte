import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initAnalytics, trackPageView } from '../../lib/analytics'

export default function PageViewTracker() {
  const location = useLocation()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '')
    const path = `${base}${location.pathname}${location.search}`
    trackPageView(path)
  }, [location])

  return null
}
