import React, { useRef } from "react";
import { View, FlatList } from "react-native";
import BodyButton from "./BodyButton";
import { theme } from "../constants";

const { light, size, text, shadowProp } = theme;

function Item({ title }) {
  return <BodyButton title={title} style={{ flex: 1 }} />;
}
const itemSeparator = () => {
  return (
    <View style={{ width: size.margin, backgroundColor: light.secondary }} />
  );
};
export default function BodyCheckList() {
  const DATA = [
    { title: "Joyful", id: "0" },
    { title: "Sad", id: "1" },
    { title: "Powerful", id: "2" },
    { title: "Peaceful", id: "3" },
    { title: "Mad", id: "4" },
    { title: "Scared", id: "5" },
  ];
  const renderItem = ({ item }) => <Item title={item.title} />;
  const flatList = useRef();
  return (
    <FlatList
      data={DATA}
      ref={flatList}
      horizontal
      initialScrollIndex={0}
      //onViewableItemsChanged={onViewRef.current}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={itemSeparator}
    />
  );
}
