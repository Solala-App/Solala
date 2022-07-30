README

Solala was originally a desk pet robot! Similar to Vector in function, it runs off AI image visualization, microphones, and interactive design. Unfortunately we haven't yet found anyone available for hardware development, so for now we are building just the app portion, which can be used on its own. Unlike Vector, Solala's goals aren't to just be a cute little guy at your desk. Solala is specifically a mental health management tool, designed to help develop emotional intelligence skills, track moods and stress levels, and encourage valuable tools to maintain work/life balance and prevent burn out. They are sort of like a personal assistant for your desk. Solala looks like a plant because they are here for your personal growth!

To start the repro and install needed packages, use the following:
```
yarn add babel-cli --dev
yarn add expo
yarn add react-native
yarn add react
yarn add @types/react-native
yarn add typescript --dev
yarn add --dev --exact prettier
yarn add enlist
yarn add --dev react-native-svg-transformer
yarn add @react-navigation/native
yarn add @react-navigation/stack
yarn add @react-native-picker/picker
yarn add @react-native-community/slider
yarn add react-native-responsive-fontsize
yarn add @react-navigation/bottom-tabs
yarn add react-native-gesture-handler
expo install expo-splash-screen
expo install expo-status-bar
expo install expo-system-ui
expo install react-native-svg
expo install react-native-safe-area-context
expo install expo-app-loading
expo install react-native-screens
expo doctor --fix-dependencies
```

It is important you do not run anything other than yarn for dependencies, and expo for expo packages.

If you do not have a lot of RAM available, run these 2 or 3 at a time and not the whole package, they can take quite a bit out of your PC.

After this run expo start

run the app on web and allow expo to install react DOM and react web for you.

And you did it! Congrats!
