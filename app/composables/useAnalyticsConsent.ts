type Consent = 'granted' | 'denied'

// Google Analytics only loads after the visitor accepts (gtag initMode is 'manual')
export function useAnalyticsConsent() {
  const consent = useCookie<Consent | null>('origin-stories-analytics-consent', {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    default: () => null
  })
  const isBannerOpen = useState('cookie-banner-open', () => false)
  const { gtag, initialize } = useGtag()

  function grant() {
    initialize()
    gtag('consent', 'update', { analytics_storage: 'granted' })
  }

  function accept() {
    consent.value = 'granted'
    isBannerOpen.value = false
    grant()
  }

  function decline() {
    // Stops tracking if the visitor had accepted earlier in this visit
    if (consent.value === 'granted') {
      gtag('consent', 'update', { analytics_storage: 'denied' })
    }
    consent.value = 'denied'
    isBannerOpen.value = false
  }

  function openSettings() {
    isBannerOpen.value = true
  }

  return { consent, isBannerOpen, grant, accept, decline, openSettings }
}
