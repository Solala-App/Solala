import { getAuth } from "firebase/auth";
import { child, getDatabase, push, ref, update } from "firebase/database";
import { gapi } from "gapi-script";

export const publishTheCalenderEvent = (event) => {
  try {
    gapi.client.load("calendar", "v3", () => {
      var request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute(function (event) {
        const user = getAuth().currentUser;

        if (user != null) {
          const database = getDatabase();

          const taskData = {
            id: event.id,
            title: event.summary,
            time: event.start.dateTime,
            dateTime: event.start.dateTime,
            notes:
              typeof event.description != "undefined" ? event.description : "",
          };
          const updates = {};
          updates["/users/" + user.uid + "/events/" + taskData.id] = taskData;
          update(ref(database), updates);
        }
        console.log(event.htmlLink);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCalenderEvent = (eventId) => {
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
