# Responsive HTML Email Template
========

This template is designed to work on all major email platforms and it is built with media query, making it responsive for smartphones that supports media query. It serves as a foundation that has been tested and thoroughly reviewed for compatibility, very easy to customize and make changes.

Using MailChimp's html email template (blue-print) as the foundation, this template is an improved version with more row options, re-defined structure and many fixes for Outlook, Yahoo, Hotmail, Gmail e.t.c.

## Development

MGH Give Email Blueprints use [gulp](http://gulpjs.com/) as their build system

### Install gulp

Building a template requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm: `npm install -g npm@latest`.

From the command line:

1. Install [gulp](http://gulpjs.com)
2. Navigate to the project directory, then run `npm install`

You now have all the necessary dependencies to run the build process.

### Available gulp commands

* `build-dev` — Compile the files in your assets directory for development & testing
* `build` — Compile and optimize the scripts and styles in your assets directory for deployment to production
* `watch` — Compile the files in your assets directory for development & testing when file changes are made
* `scripts-dev` — Concatenate the scripts in your JS directory for development & testing
* `scripts` — Concatenate and optimize the scripts in your JS directory
* `less` — Compile the Less files in your Less directory
* `styles` — Optimize the stylessheet (run after "less")