# Doodles App
This is a repo for a Doodles App to show the features of Cordova

This project requires to have installed:
- NPM (Node Package Manager)
- Bower
- Cordova
- GIT
- Android SDK with las Android version installed (SDK 7)
- XCode

This also uses:
- AngularJS
- Material Angular

To prepare the project, you need to run these commands from the Terminal or CMD:
```sh
$ git clone https://github.com/pabcubus/doodles-app.git
$ cd /folder/donde/se/clono/el/proyecto
$ cd www
$ npm run prepare-mac (or prepare-win)
$ npm install
$ bower install
$ cd ..
$ cordova platform add ios (if you want to run it on iOS)
$ cordova platform add android (if you want to run it on Android)
```

## Android
If you want to run it from an Android device or emulator, you'll need to run these commands:
```sh
$ adb devices (to search for Android devices connected to your PC or Mac including emulators)
$ cordova run android
```
## iOS
For iOS you'll need a MacBook Pro.
If you want to run it from an iOS emulator, you'll need to run these commands:
```sh
$ cordova run ios (to run it from an emulator)
```
If you want to run it from an iOS device, you'll need to install [XCode](https://developer.apple.com/xcode/) and also configure you project and iOS device on it.
