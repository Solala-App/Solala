import React, { useState } from "react";
import { Pressable, Platform, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import * as Favicon from "../../assets/favicons_js";
import Check from "../../assets/favicons_light/Check.png";
import CheckBox from "../../assets/favicons_light/CheckBox.png";

const CheckBoxComponent = (props) => {
  const { defaultChecked, onChange } = props;

  const [checked, setChecked] = useState(!!defaultChecked);

  const handleImageChange = () => {
    const newState = !checked;
    setChecked(newState);
    onChange(newState);
  };

  const getFavicon = () => {
    if (checked) {
      return <Favicon.Check iconColor="light" style={{ width: RFValue(10) }} />;
    }
    return (
      <Favicon.CheckBox iconColor="light" style={{ width: RFValue(10) }} />
    );
  };
  return (
    <Pressable onPress={handleImageChange}>
      {getFavicon()}
      {(Platform.OS === "ios" || Platform.OS === "android") && (
        <Image
          source={checked ? Check : CheckBox}
          style={{ width: RFValue(15), height: RFValue(15) }}
        />
      )}
    </Pressable>
  );
};

export default CheckBoxComponent;
