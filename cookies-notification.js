//Cookie Consent Code

import "https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js";

CookieConsent.run({
  onFirstConsent: ({ cookie }) => {
    logConsent();
  },

  onModalShow: () => {
    // console.log(modalName);
    // Show overlay if cookie consent popsup

    document.querySelector(".cookie-overlay").classList.add("view");
  },

  onModalHide: ({ modalName }) => {
    // console.log(modalName);
    // Remove overlay if cookie consent goes away
    if (modalName === "consentModal")
      document.querySelector(".cookie-overlay").classList.remove("view");
  },

  guiOptions: {
    consentModal: {
      layout: "bar inline",
      position: "bottom",
      equalWeightButtons: true,
      flipButtons: true,
    },
    preferencesModal: {
      layout: "bar wide",
      position: "left",
      equalWeightButtons: true,
      flipButtons: false,
    },
    disablePageInteraction: true,
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {},
    // marketing: {},
  },
  language: {
    default: "en",
    autoDetect: "browser",
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer:
            '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "analytics",
            },
            {
              title: "Advertisement Cookies",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "marketing",
            },
            {
              title: "More information",
              description:
                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
            },
          ],
        },
      },
    },
  },
});

function logConsent() {
  //cookie overlay

  // Retrieve all the fields
  const cookie = CookieConsent.getCookie();
  const preferences = CookieConsent.getUserPreferences();

  // In this example we're saving only 4 fields
  const userConsent = {
    consentId: cookie.consentId,
    acceptType: preferences.acceptType,
    acceptedCategories: preferences.acceptedCategories,
    rejectedCategories: preferences.rejectedCategories,
  };

  // Send the data to your backend
  // replace "/your-endpoint-url" with your API
  //   fetch("/your-endpoint-url", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userConsent),
  //   });

  console.log(userConsent);
}



//Notification Code

function showNotification() {
  const title = "New Message from Outsouce Station";
  const options = {
    body: "Welcome aboard!",
    icon: "/Site_logo.svg",
  };

  const n = new Notification(title, options);
}

if (Notification.permission === "granted") {
  showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      showNotification();
    }
  });
}



