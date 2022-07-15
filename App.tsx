import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import styles from './Style'


export default function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={require('./assets/icon.png')} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  );
}
