[![Build Status](https://travis-ci.org/AlexBrownX/makeup-pwa.svg?branch=master)](https://travis-ci.org/AlexBrownX/makeup-pwa)
[![Dependency Status](https://img.shields.io/david/AlexBrownX/makeup-pwa.svg?style=flat-square)](https://david-dm.org/AlexBrownX/makeup-pwa)
[![devDependency Status](https://img.shields.io/david/dev/AlexBrownX/makeup-pwa.svg?style=flat-square)](https://david-dm.org/AlexBrownX/makeup-pwa#info=devDependencies)
[![Maintainability](https://api.codeclimate.com/v1/badges/db237c25bc3b5424d02b/maintainability)](https://codeclimate.com/github/AlexBrownX/makeup-pwa/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![HitCount](http://hits.dwyl.io/AlexBrownX/AlexBrownX/makeup-pwa.svg)](http://hits.dwyl.io/AlexBrownX/AlexBrownX/makeup-pwa)

# Personal Project - Makeup Artist Website (Angular PWA)

## Development

### Setup

Install [Node Package Manager](https://www.npmjs.com/get-npm), then open command prompt or terminal, navigate to the project directory and run `npm install` to install all the required project packages.

To build the project use NPM to install Angular Command Line Interface `npm install -g @angular/cli`

### Build

Use the Angular CLI to build the development version of the project `ng build`. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Run

Run `ng serve` for a development server.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Continuous Integration / Deployment

This project uses [Travis CI](https://travis-ci.org/) to build the project, runs quality analysis tools in [Code Climate](https://codeclimate.com/) and deploys the application to [Firebase](https://firebase.google.com/).

### Travis CI

The Travis [configuration](./.travis.yml) configures Travis to run the following actions on the remote Travis build server:

* Tells Travis that the Node environment version is 10.3.0
* Sets a CC_TEST_REPORTER encrypted environment variable that allows test reports to be sent to Code Climate
* Caches the node_modules directory for faster builds
* Downloads and configures the Chrome browser for automated testing
* Installs Angular CLI and Code Climate Test Reporter
* Runs the following scripts:
  * Typescript linting
  * Karma unit tests with coverage report
  * Protractor end to end tests
  * Build timestamp script appends timestamp to index.html
* Sends the coverage report Code Climate
* If the current build is running on the Master branch the build is deployed to Firebase using another encrypted token

Deployed application URL: https://makeup-website.firebaseapp.com

### Code Climate 

The Code Climate [configuration](./.codeclimate.yml) configures runs:

* Typescript and Javascript linting
* Method Complexity checking
* Method Length checking

## TODO

* Use analytic data from original website to design this version
* Build lazy loading home screen
* To something different to website when people add to homescreen
* Evaluate Angular Material, is this the right tool to add design elements
* Evaluate other photo browser plugins PhotoSwipe is out of date
* Theme switcher, think of a way to load themes dynamically
* Periodically update out of date dependencies
* Configure BrowserStack to run parallel testing and report results in Code Climate 
* Add google analytics

