export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
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
  trackEvent('phone_click', 'Conversion', location);
};

export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', 'Conversion', location);
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
