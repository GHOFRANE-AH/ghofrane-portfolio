export const GA_MEASUREMENT_ID = 'G-LZLGLTEVRP'

/** Envoie une page vue à GA4 (navigation React Router). */
export function trackPageView(path) {
  if (typeof window.gtag !== 'function') return
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  })
}
