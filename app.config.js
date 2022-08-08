import "dotenv/config";

export default {
  expo: {
    name: "Solala",
    platforms: ["ios", "android", "web"],
    slug: "Solala",
    version: "1.0.0",
    orientation: "portrait",
    githubUrl: "https://github.com/Solala-App/Solala.git",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/logo/SolalaIcon.png",
      backgroundColor: "#E3FFEB",
      resizeMode: "contain",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E3FFEB",
      },
    },
    web: {
      backgroundColor: "#E3FFEB",
      favicon: "./assets/logo/SolalaIcon.png",
    },
    extra: {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
      openWeatherKey: process.env.OPEN_WEATHER_KEY,
    },
  },
};
