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

export const deleteCalenderEvent = (eventId, updateClient) => {
  //console.log(eventId);
  try {
    gapi.client.load("calendar", "v3", () => {
      var request = gapi.client.calendar.events.delete({
        calendarId: "primary",
        eventId: eventId,
      });

      request.execute(function () {
        console.log("Event Deleted: ");
      });
    });
  } catch (error) {
    console.log(error);
  }
};


