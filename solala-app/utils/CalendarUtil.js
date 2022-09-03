import { gapi } from "gapi-script";

export const publishTheCalenderEvent = (event) => {
  try {
    gapi.client.load("calendar", "v3", () => {
      var request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute(function (event) {
        console.log("Event created: " + event.htmlLink);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export function getEvents() {
  try {
    gapi.client.load("calendar", "v3", () => {
      gapi.client.calendar.events
        .list({
          // Fetch events from user's primary calendar
          calendarId: "primary",
          showDeleted: false,
        })
        .then(function (response) {
          let events = response.result.items;

          if (events.length > 0) {
            console.log(events);
          }
        });
    });
  } catch (error) {
    console.log(error);
  }
}

export const formatEvents = (list) => {
  return list.map((item) => ({
    title: item.summary,
    start: item.start.dateTime || item.start.date,
  }));
};
