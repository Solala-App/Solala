import {
  onAuthStateChanged,
  User,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthCredential,
} from "firebase/auth";
import { useCallback, useState, useEffect } from "react";

import app from "../../../config/firebase";

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope("https://www.googleapis.com/auth/calendar");

export function useAuthentication() {
  const [user, setUser] = useState<User>();
  const [credential, setCredential] = useState<OAuthCredential | null>(null);

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          setUser(user);
        } else {
          // User is signed out
          setUser(undefined);
        }
      }
    );

    return unsubscribeFromAuthStatusChanged;
  }, []);

  const signInWithGoogle = useCallback(async () => {
    if (!user) {
      try {
        const result = await signInWithPopup(auth, googleAuthProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log("useAuthentication", { result, credential });
        if (credential?.accessToken) {
          sessionStorage.setItem("credential", JSON.stringify(credential));
          gapi.client.setToken({
            access_token: credential.accessToken,
          });
        }
        setCredential(credential);
        return result;
      } catch (error) {
        console.error({ error });
      }
    }
  }, [user]);

  return {
    user,
    signInWithGoogle,
    credential,
  };
}
