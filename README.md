# project-todo-list

A todo-list, but nested with a list of projects in that todo list

How to run (For development purposes):

1. Do npm run dev to run a live server

Google fonts:

1. npm install webfontloader --save-dev;
2. Then in your index.js file or main file in src, do "import WebFont from "webfontloader" and do load command
3. Now you should be able to use these fonts in your styleheet with those specific
   names

Webpack dev server:

1. In package.json do "dev: webpack serve". Then do npm run dev, which will
   then prompt you to install the webpack dev server. You should be able to
   run a liveserver now and make changes easily live, without having to run build
   each time.
2. Create a 'devServer' attribute in your webpack.config.js
3. Add some attributes: - directory: Indicates where your output file 'index.html' is to run, makes
   it more specific as maybe you have multiple index html files, or you want
   to specify where the project is. - port: 3000; indicates the port on the local host that the - open: true; now when you run 'npm run dev' it opens the browser automatically - hot: true; Implements a feature called 'Hot Module Replacement', which means
   that you can update parts of the application without requiring a full-page
   reload. It just enhances the development experience by making code updates
   faster. - compress: true; Controls whether content served by webpack dev server should be
   compressed (g-zip compression) before being sent to the browser. This can
   significantly reduce amount of data transferred over the network. Gives you
   faster load times, reduced bandwidth, and improved performance because it's compressing the size of the files. - historyApiFallback: Used to handle URL routing in single-page applications
   that use HTML5 History API for navigation. Ensures that requests for
   routes in the application are handled correctly even when the user enters
   a url directory or refreshes the browser. Not really needed in this
   applciation
   NOTE: You could also continue to use webpack watch since it does the same thing
   of loading your changes as you do it. Also note that you can even run the
   server without the files from dist, the dev server runs it from memory, not
   from dist files.

Source map:

-   Definition: Good for debugging because a lot of teh time it doesn't actually
    show you what line number when something messed up. Using a source-map is good
    since it shows what line where you code when wrong in your source files, which is
    better than having to look at an error at some line number in your bundle.js file.

1. add devtool: 'source-map' into your webpack.config file

Babel loader:

-   Definition: Transpiler, meaning it compiles your modern code into older code that
    older browsers can understand. Allowing older browsers to be able to run your
    websites.

1. Do 'npm i -D babel-loader @babel/core @babel/preset-env' to install babel as
   a dev dependency.
2. Then in webpack config, under module and rules. Add a new rule object for
   babel.
3. We make it so it hits all of our .js files, however we don't want it messing with the .js files in 'node_modules' so we exclude babel from touching those.

Assets loader:

1. Create a folder called 'assets' in your src folder
2. Then in webpack config add a new rule; you can see this assets resource
   loader rule below babel loader.
3. Then it'd consider common practice to import the image files in your javascript
   code and then interact with the image sources that way.

Htmlwebpack plugin:

1. install it as a save dev and follow what I did in webpack config by adding
   it to plugins
2. Some attribute meanings and settings
   title: Title of the html page in dist
   filename: name of the html file in dist
   template: the html file that it's copying from to put in dist

Caching:

-   Definition: Idea of storing frequently used resources locally, so that they
    can be accessed more quickly. Browsers cache files like CSS, js, and images to
    avoid unnecessary downloads everytime a user visits a webpage. In turn, this
    improves the performance and load times of websites.

1. Browser cache: Browsers storing files locally in a cache. So when a user
   revisits a page, the browser can use the cached version of a file, let's
   say an image, if the file hasn't changed
2. Server cache: Servers can tell browsers to cache certain files using
   HTTP headers like 'Cache-Control'
3. Content Delivery Networks (CDNs): Distribute content across multiple
   servers around the world to deliver it faster to users.

-   Contenthash: A unique hash based on the contents of a file. Used to generate
    unique file names for assets such as JavaScript and CSS files when they're
    made during the build process. Useful for browser caching as when the contents
    of a file changes, its hash changes, and the browser will see it as a new
    file, preventing users from using the old outdated cached versions

Webpack config:

-   entry: Where you specify what your code is going to be called
-   output: Where your output files are going to be generated
    1.  filename: made it so whatever .js file I named it whether 'bundle' or
        'main', etc. it outputs the same .js file name in dist
    2.  clean: true; ensures output directory only contains files generated during
        the most recent build. So it takes away outdated files from old builds of
        your project, and this keeps things clean.
