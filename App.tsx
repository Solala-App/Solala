import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View } from 'react-native';
import { Test } from "./solala-app/screens/Test";
import { Card } from "./solala-app/components";


export default function App() {
  //add a splashscreen
  return (
    <Test />
  );
}
