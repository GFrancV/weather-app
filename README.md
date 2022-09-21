<h1 align="center">Weather app</h1>
<div align="center">
  <h3>
    <a href="https://gfrancv.github.io/weather-app/">
      Demo
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
  - [Desktop view](#desktop-view)
  - [Mobile view](#mobile-view)
- [Built With](#built-with)
  - [Framework](#framework)
  - [Libraries](#framework)
  - [Api's](#framework)
- [Features](#features)
- [Design](#design)
- [External use](#external-use)
  - [Design](#design)
  - [README structure](#readme-structure)
- [Useful links](#useful-links)

## Overview

### Desktop view

![screenshot-desktop](https://user-images.githubusercontent.com/35277540/190456099-b06414b2-f2b0-44f7-999c-d3dfb5c80b63.jpg)

### Mobile view

<p float="left">
  <img src="https://user-images.githubusercontent.com/35277540/190456608-1dbbb6ec-2bda-4543-86ad-7d05a2443872.jpeg" width="250" />
  <img src="https://user-images.githubusercontent.com/35277540/190456621-43ecdde7-477d-4414-8389-1fb014e299a7.jpeg" width="250" /> 
</p>

This is a simple frontend web application to see the weather from different cities through the consumption of two independen api's.  
The first is responsible for obtaining the geographical coordinates (latitude and altitude) of a location that the user requests.  
The second obtains all the weather data of the locations that the user wants.

This project is deployed on <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> and you can view and use the demo in the following <a href="https://gfrancv.github.io/weather-app/" target="_blank">link.</a>

## Built With

### Framework:

- **[Vue.js](https://vuejs.org/)**

### Libraries:

- **<a href="https://github.com/michalsnik/aos" target="_blank">AOS.js:</a>** For the animations.
- **<a href="https://github.com/axios/axios" target="_blank">Axios:</a>** For consume the api's
- **<a href="https://getbootstrap.com/" target="_blank">Bootstrap:</a>** To the css
- **<a href="https://www.chartjs.org/" target="_blank">Chart.js:</a>** To the charts.
- **<a href="https://github.com/webpack-contrib/stylus-loader" target="_blank">stylus-loader:</a>** To the load animations.
- **<a href="https://github.com/Maronato/vue-toastification" target="_blank">vue-toastification:</a>** To the toast notifications.

### Api's

- **<a href="https://opencagedata.com/" target="_blank">OpenCage :</a>** To get the geographic coordinates of a different locations.
- **<a href="https://openweathermap.org/" target="_blank">OpenWeather :</a>** To get weather information for different locations.

## Features

In this we can view the weather of diferrent cities, you can search for the weather of any city just by entering the name of the city, abbreviation or geographic coordinates in the search engine.

The application has different graphs in which you can visualize the climate of the different cities.

## External use

### Design

The design of this application was based on the design of <a href="https://dribbble.com/yevled" target="_blank">Yev Ledenov</a>, all design and intellectual property rights belong to him.

In the following <a href="https://dribbble.com/shots/19113627-Weather-Dashboard" target="_blank">link</a> you can access the original design.

### README structure

The structure of this README file is inspired by the generic structure that [DevChallenges](https://devchallenges.io/) uses in their README files.on their challenges.

> Important: Only the structure of the readme file was used as inspiration for this file, only that. At the time this project was developed, there was no knowledge of the existence of a similar challenge in DevChallenges, this project is completely independent of that challenge.

## Useful links

- Deploy Vue.js project on GitHub Pages with script. <a href="https://www.youtube.com/watch?v=i_XbW-FsLKk" target="_blank">Link.</a>
- Deploy any nmp project with the gh-pages library. <a href="https://www.youtube.com/watch?v=9sxxcuyrfZA" target="_blank">Link.</a>
