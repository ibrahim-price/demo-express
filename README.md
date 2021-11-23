# First Web Server
Using express for a simple web server.

## Basic NPM Commands

### Initialize New Node Project 
```bash
npm init -y
```
- npm - the node package manager
- init - initialize a new project and package.json file
- -y - `npm init` without the `-y` flag will have the command asking you questions, the `-y` flag answers with the defaults.

## Install Express
From the terminal enter:
```bash
npm install express
```

OR the shorthand
```
npm i express
```
You will see that the express dependency was automatically written to the manifest at `package.json`.  
When you install the wrong package, say due to a spelling error, say `espress` over `express`, that happens to be a big security concern, so watch your spelling.
To uninstall said incorrect package, use the command:
```bash
npm uninstall espress
``` 

## Create Application Entry Point
Node runs an application starting with one file, referred to as an entry point.  
Next we will create that entry point from the terminal using two commands, one for the directory we will make to house our app code, and the other to create the file.  

### Create Source Directory
From the terminal:
```bash
mkdir src
```

### Create Entry Point File
From the terminal:
```bash
touch ./src/app.js
```

### Entry Point Content
Inside `./src/app.js` add the following content:
```js
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const response = {
    message: "This API works."
  };
  res.status(200).json(response);
});

app.listen(3000, () => {
  console.log("application listening on localhost:3000"));
};
```

## Create NPM Start Script
Add the following line to the `package.json` file in the `scripts` block:
```js
"scripts": {
  "dev": "node ./src/app",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Run The Server
From the terminal:
```bash
npm run dev
```
The `console.log` message should print the message to the terminal:
```bash
application listening on localhost:3000
```
At which point we open in our browser at [localhost:3000](http://localhost:3000)

## Stop The Server
While in the terminal running the process, CTRL + C stops any node process running in the terminal.  Sometimes this freezes and doesn't stop the process, in this case just close the terminal and open another one.

## Nodemon
Opening and closing the application gets old, there is a popular way of autoreloading on save using [nodemon](https://www.npmjs.com/package/nodemon).