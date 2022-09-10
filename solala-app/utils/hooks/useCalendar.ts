import { useState, useEffect, useCallback } from "react";

import "../../../config/gapi";
import { AccountType, apiBaseUrl, FetchStatus } from "../../constants";
import { useAuthentication } from "./useAuthentication";

interface Event {
  summary: string;
  location: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  recurrence: [string];
  attendees: [{ email: string }, { email: string }];
  reminders: {
    useDefault: false;
    overrides: [
      { method: string; minutes: number },
      { method: string; minutes: number }
    ];
  };
}

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
  const { accessToken } = JSON.parse(credential ?? "{}");

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
        const getResponse = await fetch(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (getResponse.ok) {
          setCalendar(await getResponse.json());
          setFetchStatus(FetchStatus.Done);
        }
        console.log("useCalendar.ts reloadCalendar", { getResponse });
      }
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

