(function() {
  const app = window.AVADA_APP_FAQS_STATUS;
  if (!app || !app.shopId || app.enableChatbox === false) return;

  // to show chatty when enabled
  document.documentElement.style.setProperty('--chatty-app-display', 'block');

  const BASE_URL = `https://Azz5cV4fneKU.com/extensions/505ce933-6eff-47ee-a32f-dee5ae134593/0.0.0/assets`;
  // const BASE_URL = `https://avada-helpdesk-faq-staging.web.app/scripttag`;
  // const BASE_URL = `https://localhost:3050/scripttag`;
  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.async = !0;
  scriptElement.src = BASE_URL + `/chatty.min.js?v=${new Date().getTime()}`;
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
})();
