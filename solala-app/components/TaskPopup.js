import React from "react";

import AddCalendarPopup from "./CalendarPopup";

const TaskPopup = (props) => {
  return (
    <AddCalendarPopup
      isModalVisible={props.isModalVisible}
      presetData={props.presetData}
      edit={props.edit}
      type="Task"
      displayRepeat
      displayPriority
      displayCategory
      displayComplexity
      displayNotes
      currentDay={props.currentDay}
    />
  );
};

export default TaskPopup;
