import Constants from "expo-constants";
import { loadGapiInsideDOM } from "gapi-script";

loadGapiInsideDOM();
gapi.load("client", () => {
  gapi.client.init({
    apiKey: Constants.manifest?.extra?.firebaseApiKey,
    clientId: Constants.manifest?.extra?.googleClientId,
    discoveryDocs: [
      "https://servicemanagement.googleapis.com/$discovery/rest?version=v1",
    ],
    scope: "https://www.googleapis.com/auth/calendar",
  });
});
