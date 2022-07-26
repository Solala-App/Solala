import React from "react";
import AddCalendarPopup from "./CalendarPopup";

const EventPopup = (props) => {
    return (
        <AddCalendarPopup
            isModalVisible={props.isModalVisible}
            displayRepeat={true}
            displayPriority={false}
            displayCategory={false}
            displayComplexity={false}
            displayNotes={true}
        />
    );

}

export default EventPopup;