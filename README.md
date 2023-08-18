# project-todo-list

A todo-list, but nested with a list of projects in that todo list

How to run (For development purposes):

1. Do npm run watch, make sure it's running a server, akin to django. then open the index.html in live server

Todo: Created with a class or factories. Has title, description, dueDate, priority (low, medium high); todos should also what project they're associated with, or just default to a project anyways maybe one called "My todos" that's auto created when you first get in

Checklist: This acts like a home page, or a default page where you put your home section. This has the home tab which shows all default todos, all todos due today, and all todos due this week.
Project: There should be a projects tab that contains projects, this contain's the project's name. Then in each of them it kind of acts like it's own personalized todo list

-   To make these objects you there are a lot of similarities, however there are also differences. We may rather use the composition style of making classes, rather than using inheritance.
-   Also have a header with white/dark mode

1. Should be able to view all projects
2. view all todos in each project
3. Expand a single todo to see/edits its details; should be able to mark a todo as complete, which strikes it through ; note this is different problem jus deleting a todo
4. to be able to delete a todo
5. Keep in mind rules such as solid, everything as one main responsibility, so separate your functionalities. All application logic for creating, deleting todos is separate from dom related stuff. keep those in separate modules

NOTE: For assets folder, make sure to copy it over manually since It's not going to correctly go over.

Html Webpack Plugin: 1.

Google fonts:

1. npm install webfontloader --save-dev;
2. webpack.config.js; add "const WebFont = require("webfontloader") at the top;
3. go to module.exports "plugins", add newWebFontWebpackPlugin and some other stuff and indicate your font families
4. Then in your index.js file or main file in src, do "import WebFont from "webfontloader" and do load command
5. Now you should be able to use these fonts in your styleheet with those specific names

Google material icons (variable icon fonts):

1. npm file-loader or url-loader as dev dep.; to handle font files and copy them to output directory
2. in webpack.config.js add new rule to module.rules
3. Now you can use it in style sheet with .material-icons css rule and do
   <i class="material-icons">code for icon (codepoint)</i>

<!-- Improvements Branch -->

1. Let's first do code separation, remember we're dealing with webpack
2. Then let's add a theme toggling button
3. Then any other things if we need
