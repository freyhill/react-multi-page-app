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
React-multi-page-app is a multi-page application architecture based on react and webpack. Through compiling and generating static pages with clear corresponding directory structure, multi-page development and maintenance can be realized conveniently.



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

dev

```
$ npm run dev
```

build

```
$ npm run build
```

start project

```
$ npm start
```

Automatically open browser with development: http://localhost:3100 / production: http://localhost:3118 

## Usage
create a new page in the pages directory of src. and run ```npm run dev``` in the root directory of project
```
|-- src
    |-- index/
    |-- page2/
        |-- index.js
        |-- page2.scss
        |-- pageinfo.json
```

## [Wiki](https://github.com/leinov/react-multi-page-app/issues/1)

* How to implement
* How to structure 
* Use in detail

## Version

version | desc
---|---
1.3.0 | add cli<br> add demo page <br> refactoring and optimize 
1.2.0 | add html template 
1.1.0 | init 

## License

[MIT](https://opensource.org/licenses/MIT)