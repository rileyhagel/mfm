var GA_ID = "G-2CB4PCSPVV";
var COOKIE_NAME = "ga_consent";
var COOKIE_DAYS = 90; // 3 months

function setCookie(name, value, days) {
  var expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1];
}

function loadGoogleAnalytics() {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){ dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_ID);
  };
  document.head.appendChild(script);
}

(function() {
  const consent = getCookie(COOKIE_NAME);

  if (consent === "accepted") {
    loadGoogleAnalytics();
    return;
  }

  if (!consent) {
    const accepted = confirm(
      "Welcome to Monkeys For Monkeys, and sorry for the rude page load interuption.\nI use Google Analytics to see how people use my website.\nTo accept use of Google Analytics, click OK.\nIn about 3 months, I'll ask you again, so you can renew your choice."
    );

    if (accepted) {
      setCookie(COOKIE_NAME, "accepted", COOKIE_DAYS);
      loadGoogleAnalytics();
    } else {
      setCookie(COOKIE_NAME, "declined", COOKIE_DAYS);
    }
  }
})();