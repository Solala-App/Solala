<<<<<<< HEAD
import { getAuth } from "firebase/auth";
import { child, getDatabase, push, ref, update } from "firebase/database";
=======
>>>>>>> main
import { gapi } from "gapi-script";

export const publishTheCalenderEvent = (event) => {
  try {
    gapi.client.load("calendar", "v3", () => {
      var request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute(function (event) {
<<<<<<< HEAD
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
=======
        console.log("Event created: " + event.htmlLink);
>>>>>>> main
      });
    });
  } catch (error) {
    console.log(error);
  }
};

<<<<<<< HEAD
export const deleteCalenderEvent = (eventId) => {
=======
export const deleteCalenderEvent = (eventId, updateClient) => {
>>>>>>> main
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
<<<<<<< HEAD
=======


>>>>>>> main
