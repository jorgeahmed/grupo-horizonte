const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

export function isAnalyticsEnabled() {
  return Boolean(GA_ID && typeof window !== 'undefined')
}

export function initAnalytics() {
  if (!isAnalyticsEnabled()) return

  if (window.gtag) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, {
    send_page_view: false,
    anonymize_ip: true,
  })
}

export function trackPageView(path) {
  if (!isAnalyticsEnabled() || !window.gtag) return

  const pagePath = path.startsWith('/') ? path : `/${path}`
  window.gtag('event', 'page_view', {
    page_path: pagePath,
    page_title: document.title,
  })
}

export function trackEvent(action, params = {}) {
  if (!isAnalyticsEnabled() || !window.gtag) return
  window.gtag('event', action, params)
}
