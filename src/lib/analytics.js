/** GTM instalado en index.html — ID: GTM-WZRPRS29 */
export const GTM_ID = 'GTM-WZRPRS29'

/** GA4 — configurar también como etiqueta en GTM con este ID */
export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-Q4SKSB1M70'

function pushDataLayer(payload) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

export function isAnalyticsEnabled() {
  return typeof window !== 'undefined'
}

export function initAnalytics() {
  if (!isAnalyticsEnabled()) return

  pushDataLayer({
    event: 'app_initialized',
    ga_measurement_id: GA_MEASUREMENT_ID,
    gtm_id: GTM_ID,
  })
}

/** Compatible con SPA + Google Tag Manager */
export function trackPageView(path) {
  if (!isAnalyticsEnabled()) return

  const pagePath = path.startsWith('/') ? path : `/${path}`

  pushDataLayer({
    event: 'page_view',
    page_path: pagePath,
    page_title: document.title,
    page_location: window.location.href,
  })
}

export function trackEvent(eventName, params = {}) {
  if (!isAnalyticsEnabled()) return

  pushDataLayer({
    event: eventName,
    ...params,
  })
}
