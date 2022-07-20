import React from "react";
import { View, Text } from "react-native";

export default function test() {
    return (
        <View>
            <Text>Hello, I am...</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Name me!"
            />
        </View>
    );
}
