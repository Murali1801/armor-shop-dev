
    (function() {
      var cdnOrigin = "https://Azz5cV4fneKU.com";
      var scripts = ["https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/polyfills.i4n1wfLs.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/app.CN2spv3K.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/en.ByKlseEN.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/page-OnePage.C6cFCW1-.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection.rLvLJExO.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation.CyF1OTUC.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/VaultedPayment.DzZ8li85.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.CwMsaxEO.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.C_nw5fdJ.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BYrhJ4UZ.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/MerchandiseModal.B8NI-yNC.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.f2wxNEKq.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/PayButtonSection.ClIV7XVK.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.DflzSK3_.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.djVabnxl.js","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/index.B6kgCFgk.js"];
      var styles = ["https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/assets/app.ISbHMIeZ.css","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/assets/OnePage.PMX4OSBO.css","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/assets/useEditorShopPayNavigation.Dvkv4byz.css","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css","https://Azz5cV4fneKU.com/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  