<div align="center">
    <img width="120px" src="https://raw.githubusercontent.com/leinov/react-multi-page-app/master/react-multi.png" /><br>
    <div>
        <img src="https://img.shields.io/github/license/leinov/react-multi-page-app.svg" />&nbsp
        <img src="https://img.shields.io/github/forks/leinov/react-multi-page-app.svg" />&nbsp
        <img src="https://img.shields.io/github/stars/leinov/react-multi-page-app.svg">&nbsp
        <img src="https://img.shields.io/npm/dt/rppx-cli.svg" />&nbsp
        <img src="https://img.shields.io/npm/v/rppx-cli.svg?style=flat" />
    </div>
    <h1>react-multi-page-app</h1>
</div>
<br>

English | [中文](README-ZH.md)
<br><br>
Webpack is widely used for single-page packaging.Scaffolding, led by create-react-app, is numerous.Single-page packaging usually refers to the business js, CSS packaging into the same HTML file, the whole project has only one HTML file entry.However, there are many businesses that require multiple entries to different pages, such as different h5 activities, or official websites that support seo, which require multiple different HTML,The webpack-react-multi-page architecture enables you to automate the packaging of newly created pages on multiple pages during project development and ensures that each page is hot replacement,and the build package has a clear hierarchy of files.



## Overview

key | value
---|---
name | react-multi-page-app
desc | a scaffold of create react multi page app
cli | [rppx](https://github.com/leinov/rppx-cli)
author | leinov
version | 1.3.0


## Demo 
www.h5cool.com/react-multi-page-app/demo
* home page - a simple overview page
* react-redux todo list
* a link to github

## Feature
* 👩‍👩‍👧‍👧 Support multiple pages simultaneously hot loading development
* 📇 Automatically identifies newly created pages
* 📝 Each page generates personalized information
* 🚻 Classification of packaging
* 🔗 Flexible extend

## Install
```
npm install rppx-cli -g

```

## Quick Start
install rppx-cli in global and create your new project ,use npm start the project 

install 
```
$ npm install rppx-cli -g
```
create your multi page

```
$ rppx init my-react
```

install dependencies

```
$ npm install 
```
build

```
$ npm run build
```

start project
```
$ npm start
```

Automatically open browser with http://localhost:3100 

## Usage
create a new page in the src directory. and run ```npm run dev``` in the root directory of project
```
|-- src
    |-- index/
    |-- page2/
        |-- index.js
        |-- page2.scss
        |-- pageinfo.json
```

## [wiki](https://github.com/leinov/react-multi-page-app/issues/1)
* How to implement
* How to structure 
* Use in detail
## version

version | desc
---|---
1.3.0 | add cli<br> add demo page <br> refactoring and optimize 
1.2.0 | add html template 
1.1.0 | init 

## License
[MIT](https://opensource.org/licenses/MIT)