# Solala-App

## About Solala

Solala was originally a desk pet robot! Similar to Vector in function, it runs off AI image visualization, microphones, and interactive design. Unfortunately we haven't yet found anyone available for hardware development, so for now we are building just the app portion, which can be used on its own. Unlike Vector, Solala's goals aren't to just be a cute little guy at your desk. Solala is specifically a mental health management tool, designed to help develop emotional intelligence skills, track moods and stress levels, and encourage valuable tools to maintain work/life balance and prevent burn out. They are sort of like a personal assistant for your desk. Solala looks like a plant because they are here for your personal growth!

## Contributing

It is highly recommended you use VSCode to work on the frontend.

### Prerequisites

- Nodejs v16+
- git
- yarn
- VScode extensions (recommended). VSCode will show you recommended extensions to install on the extensions panel.

To start the repo and install needed packages, use the following:

### Install global dependencies

```bash
npm install --global expo-cli yarn
```

### Install project dependencies

```bash
yarn
```

It is important you do not run anything other than yarn for dependencies, and expo for expo packages.

### Committing changes

Before committing and pushing your changes, please be sure to run the code formatting scripts:

```bash
yarn lint:fix
yarn prettier
```

These will ensure a consistent code style throughout the project and give you warnings and errors if there are any easy to catch bugs.

You can then commit your changes on your own feature branch. Do not commit directly to the main branch since there are protections in place that will prevent any code being added without a Pull Request. Start a pull request on github towards the main (or whatever target branch you prefer) so a code review can be done.

## Local debugging

If you do not have a lot of RAM available, run these 2 or 3 at a time and not the whole package, they can take quite a bit out of your PC.

Run `yarn start` or `expo start`

Follow the instructions in the terminal to start the app on web or android and allow expo to install react DOM and react web for you.

And you did it! Congrats!
