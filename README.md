# DIVA: Exploration and Validation of Hypothesized Drug-Drug Interactions.

This is a web-based visual analytics tool to analyze drug-drug interaction (DDI) signals extracted from [FAERS](https://www.fda.gov/drugs/surveillance/questions-and-answers-fdas-adverse-event-reporting-system-faers) data using association rule mining. The three views are designed based on the workflow of FDA drug-safety evaluators to allow analysts screen, triage and investigate hypthesized machine-generated DDI signals.

For more details on the design of DIVA please read the [paper](/DIVA_paper.pdf)

![DIVA Interface](resources/images/interface.png)
[DEMO](http://diva.wpi.edu:3000/)


### Install dependencies for client and server application

Open your favorite Terminal and run the following command. Make sure you have the latest npm and node version. In the root directory of the application, run these commands to get started.
```js static
$ npm install
$ npm install -g gulp
$ npm install -g nodemon
```

### How to ensure the server keeps running after your session ends

Before running the server or building the front-end react app, use the following command to create a new terminal instance that will remain after you terminate your session:
```js static
$ screen
```

### How to build the front-end React app 

The following commands build and bundle react app into plain js (choose one of the following). The compiled javascript file will be in public/ directory

When quickly compiling locally run this:
```js static
$ npm run fdev
```
When working locally, run this to continually update saved changes:
```js static
$ npm run fwatch
```
When deploying and NOT DEBUGGING, build it as production app as this will minify and otherwise optimize the app:
```js static
$ npm run fproduction
```

### How to run the server

To build typescript files into javascript files use
```js static
$ npm run build
```

To watch the changes of typescript files in server directory use
```js static
$ npm run tsc-watch
```

To start the server and watch changes made to javascript files run
```js static
$ npm run watch
```
You normally want to run those two commands above at the same time. One is to watch and compile typescript files and the other is to watch if there are any changes to compiled javascript files, rerun the server.

### How to generate documentation

To watch for changes and dynamically build interactive react documentation
```js static
$ npm run styleguide
```

To build a static version of the interactive react documentation
```js static
$ npm run styleguide:build
```

To build a markdown version of the react documentation
```js static
$ npm run react-docs
```

To build a markdown version of the JavaScript documentation
```js static
$ npm run js-docs
```

To build a markdown version of the TypeScript documentation
```js static
$ npm run ts-docs
```

To build markdown versions of all documentation (Note: they can be found in the /documentation/ directory)
```js static
$ npm run docs
```
