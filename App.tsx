import * as SplashScreen from "expo-splash-screen";
import React, { useState, useCallback, useEffect } from "react";

import "./config/firebase";
import fonts from "./solala-app/constants";
import RootNavigation from "./solala-app/routes";

//import * as Screens from "./solala-app/screens";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await fonts();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  console.log({ appIsReady });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  //add a splashscreen
  //return <Screens.App.Todo />;
  return <RootNavigation />;
}
