/**
 * Google Analytics Tracking Utility for MyCliTours
 * Handles gtag events and conversions
 * 
 * Conversion ID: 10975956802
 * Conversion Label: -FPSCI693sQcEMKe3_Eo
 */

// Ensure gtag is available
const getGtag = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    return window.gtag;
  }
  return null;
};

/**
 * Track a generic event
 * @param {string} eventName - Name of the event
 * @param {object} eventData - Event data object
 */
export const trackEvent = (eventName, eventData = {}) => {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', eventName, eventData);
  } else {
    console.warn('gtag not available');
  }
};

/**
 * Track page view
 * @param {string} pageTitle - Page title
 * @param {string} pagePath - Page path
 */
export const trackPageView = (pageTitle, pagePath) => {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', 'page_view', {
      page_title: pageTitle,
      page_path: pagePath,
    });
  }
};

/**
 * Track conversion (purchase/booking)
 * @param {object} conversionData - Conversion data
 * Example: { value: 5000, currency: 'INR', transaction_id: '12345' }
 */
export const trackConversion = (conversionData = {}) => {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', 'purchase', {
      value: conversionData.value || 0,
      currency: conversionData.currency || 'INR',
      transaction_id: conversionData.transaction_id || '',
      ...conversionData,
    });
  }
};

/**
 * Track form submission
 * @param {string} formName - Name of the form
 * @param {object} formData - Form data (optional)
 */
export const trackFormSubmission = (formName, formData = {}) => {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', 'lead', {
      form_name: formName,
      ...formData,
    });
  }
};

/**
 * Track package view
 * @param {string} packageName - Name of the package
 * @param {number} price - Package price
 */
export const trackPackageView = (packageName, price) => {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', 'view_item', {
      items: [
        {
          item_name: packageName,
          price: price,
          currency: 'INR',
          item_category: 'tour_package',
        },
      ],
    });
  }
};

/**
 * Track booking initiation
 * @param {string} packageName - Package name
 * @param {number} price - Package price
 */
export const trackBookingInitiation = (packageName, price) => {
  const gtag = getGtag();
  if (gtag) {
    gtag('event', 'begin_checkout', {
      items: [
        {
          item_name: packageName,
          price: price,
          currency: 'INR',
        },
      ],
    });
  }
};

/**
 * Track WhatsApp click
 */
export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'WhatsApp',
  });
};

/**
 * Track phone call click
 */
export const trackPhoneCallClick = () => {
  trackEvent('phone_call_click', {
    event_category: 'engagement',
    event_label: 'Phone',
  });
};

/**
 * Track button click
 * @param {string} buttonName - Name of the button
 */
export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', {
    button_name: buttonName,
    event_category: 'engagement',
  });
};

export default {
  trackEvent,
  trackPageView,
  trackConversion,
  trackFormSubmission,
  trackPackageView,
  trackBookingInitiation,
  trackWhatsAppClick,
  trackPhoneCallClick,
  trackButtonClick,
};
