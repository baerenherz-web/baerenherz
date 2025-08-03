// Utility to determine current locale and prefix URLs accordingly
export function getLocale(pathname: string): 'de' | 'ch' {
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/ch')) return 'ch';
  // Check localStorage if available (browser only)
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const storedLang = localStorage.getItem('lang-preference');
    if (storedLang === '/ch') return 'ch';
    if (storedLang === '/de') return 'de';
  }
  // Default fallback
  return 'de';
}

export function prefixLocalePath(href: string, locale: 'de' | 'ch') {
  if (/^(https?:)?\//.test(href) && !href.startsWith('/')) return href; // external or protocol-relative
  if (href.startsWith('/de/') || href.startsWith('/ch/')) return href; // already prefixed
  if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return href;
  if (locale === 'de') return `/de${href.startsWith('/') ? href : '/' + href}`;
  if (locale === 'ch') return `/ch${href.startsWith('/') ? href : '/' + href}`;
  return href;
}
