// analytics.ts

declare global {
  interface Window {
    umami: {
      track: (eventName: string, properties?: Record<string, any>) => void;
    };
  }
}

export const trackEvent = (eventName: string, properties: Record<string, any> = {}): void => {
    if (window.umami) {
      window.umami.track(eventName, properties);
    }
  };
  
  export const trackLinkClick = (url: string): void => {
    trackEvent('Link Click', { url });
  };
  
  export const trackDateChange = (newDate: string): void => {
    trackEvent('Date Change', { date: newDate });
  };
  
  export const trackHoverNewsItem = (date: string): void => {
    // if date is not empty, track the event
    if (date) {
      trackEvent('News Item Hover', { date });
    }
  };
  