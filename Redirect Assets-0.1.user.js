// ==UserScript==
// @name         Redirect Assets
// @namespace    http://your.namespace.com
// @version      0.1
// @description  Redirect asset requests to local folder
// @author       Turbo
// @match        https://us.stein.world/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Intercept asset requests
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        if (url.includes('/assets/images/')) {
            console.log(url)
            // Modify the URL to point to your local folder
            url = url.replace(
                'https://*.stein.world/assets/images',
                'https://github.com/Alexedani/stein.world/tree/main/images'
            );
        }
        return originalFetch.apply(this, [url, options]);
    };
})();