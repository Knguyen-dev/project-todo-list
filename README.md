# project-todo-list

A todo-list, but nested with a list of projects in that todo list

How to run (For development purposes):

1. Do npm run watch, make sure it's running a server, akin to django. then open the index.html in live server

-   Google fonts:

1. npm install webfontloader --save-dev;
2. webpack.config.js; add "const WebFont = require("webfontloader") at the top;
3. go to module.exports "plugins", add newWebFontWebpackPlugin and some other stuff and indicate your font families
4. Then in your index.js file or main file in src, do "import WebFont from "webfontloader" and do load command
5. Now you should be able to use these fonts in your styleheet with those specific names

-   Done:

1. Adding projects
2. Editing projects
3. Deleting projects
4. Adding todos
5. edit todos (finished): Fixed the indicing issue
6. Todo details
7. Deleting todos
8. Marking todos as incomplete and complete

-   Issues:

1. Form buttons are not styled, also form's size is kind of small and not uniformed
2. Dark mode is needed
3. Need some responsiveness
