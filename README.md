# Personal Website
For live hosting, please visit: https://qiugu.herokuapp.com/

# Get started
- Install node js on your machine
- cd to root directory, type "npm install" for dependencies
- type "npm run start" to start the server
- Go to http://localhost:3000

# Main server file
src/app.js

# Routing
All front end and static requests go through / (root)

Meaning if you go to localhost:3000/project it will take you to the software page with html, css, javascript etc..

# HTML Pages
All html pages are in the /templates/directory. These are hbs files which call partials and views in hbs to include html in other pages.

# Static Files (CSS, Javascript)
/public/directory

When an html page links to a stylesheet or some script, express serves the Static files in the /static/ directory within the same direcory it is called inside of the /templates/direcory.

For example:

/templates/views/project.hbs has a stylesheet href="css/software.css"

Since express serves our static files for us it actually grabs the css from

/public/css/software.css

This makes it easy to use relative addresses in hrefs of html files, so long as you continue this directory structure of placing static files in /public directory and the html in the templates/views/ directory and the reusable html in the /templates/partial/ directory
