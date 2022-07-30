import React from "react";

import AddCalendarPopup from "./CalendarPopup";

const TaskPopup = (props) => {
  return (
    <AddCalendarPopup
      isModalVisible={props.isModalVisible}
      type="Task"
      displayRepeat
      displayPriority
      displayCategory
      displayComplexity
      displayNotes
    />
  );
};

export default TaskPopup;
