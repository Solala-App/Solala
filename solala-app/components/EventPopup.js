import React from "react";

import AddCalendarPopup from "./CalendarPopup";

const EventPopup = (props) => {
  return (
    <AddCalendarPopup
      isModalVisible={props.isModalVisible}
      edit={props.edit}
      presetData={props.presetData}
      type="Event"
      displayRepeat
      displayPriority={false}
      displayCategory={false}
      displayComplexity={false}
      displayNotes
      currentDay={props.currentDay}
    />
  );
};

export default EventPopup;
