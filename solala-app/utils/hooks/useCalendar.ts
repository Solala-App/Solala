import { useState, useEffect, useCallback } from "react";

import { AccountType, apiBaseUrl, FetchStatus } from "../../constants";
import { useAuthentication } from "./useAuthentication";

export const useCalendar = (
  accountType: AccountType,
  calendarId: string = "primary"
): [
  calendarList: any[],
  fetchStatus: FetchStatus,
  reloadCalendar: () => Promise<void>
] => {
  const [calendar, setCalendar] = useState<any>();
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>(FetchStatus.None);

  const credential = sessionStorage.getItem("credential");
  const { accessToken } = JSON.parse(credential ?? "");

  let baseUrl = "";
  switch (accountType) {
    case AccountType.Google:
    default:
      baseUrl = apiBaseUrl.googleCalendar;
      break;
  }
  const url = `${baseUrl}/users/me/calendars/${calendarId}`;

  const reloadCalendar = useCallback(async () => {
    setFetchStatus(FetchStatus.Fetching);
    console.log("useCalendar.ts reloadCalendar", { accessToken });
    try {
      if (accessToken) {
        gapi.client.setToken({
          access_token: accessToken,
        });
        const request = gapi.client.request({
          path: url,
        });
        console.log({ request, credential });
      }
      // const getResponse = await fetch(url, {
      //   method: "get",
      //   headers: {
      //     authorization: "", // TODO get token
      //   },
      // });
      // if (getResponse.ok) {
      //   setCalendar(await getResponse.json());
      //   setFetchStatus(FetchStatus.Done);
      // }
    } catch (error) {
      setFetchStatus(FetchStatus.Error);
      console.error(error);
    }
  }, [credential]);

  // Initial fetch of list
  useEffect(() => {
    reloadCalendar();
  }, []);

  return [calendar, fetchStatus, reloadCalendar];
};
