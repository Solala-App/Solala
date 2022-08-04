import React from "react";

import { useAuthentication } from "../utils/hooks/useAuthentication";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <UserStack />;
}
