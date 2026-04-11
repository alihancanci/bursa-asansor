export const trackEvent = (action: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, params);
  } else if (typeof window !== 'undefined') {
    // Fallback queue if gtag is not ready
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: action, ...params });
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-J2E99G4FY2', {
      page_path: url,
    });
  }
};

export const trackPhoneClick = (location: string) => {
  trackEvent('generate_lead', {
    method: 'phone',
    location: location,
    content_type: 'contact'
  });
  // Custom event for backward compatibility
  trackEvent('phone_click', { location });
};

export const trackWhatsAppClick = (location: string) => {
  trackEvent('generate_lead', {
    method: 'whatsapp',
    location: location,
    content_type: 'contact'
  });
  // Custom event for backward compatibility
  trackEvent('whatsapp_click', { location });
};

export const installGlobalClickTracking = () => {
  if (typeof window === 'undefined') return () => {};

  const handleGlobalClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;

    const href = target.getAttribute('href') || '';
    if (href.startsWith('tel:')) {
      trackPhoneClick('Global Link');
    } else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
      trackWhatsAppClick('Global Link');
    }
  };

  window.addEventListener('click', handleGlobalClick);
  return () => window.removeEventListener('click', handleGlobalClick);
};
