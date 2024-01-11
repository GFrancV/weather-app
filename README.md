<div align="center">
	<img src="public/favicon.ico" height="50px" width="auto" />
	<h1>Weather app</h1>
</div>

<div align="center">
  <h3>
    <a href="https://gfrancv.github.io/weather-app/">
      Demo
    </a>
  </h3>
</div>

<div align="center">
  <a href="#overview">Overview</a>
  •
  <a href="#stack">Stack</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#design">Design</a>
  •
  <a href="#external-use">External use</a>
  •
  <a href="#useful-links">Useful links</a>
</div>

<br>

<div align="center">

![Vue Badge](https://img.shields.io/badge/Vue-BC52EE?style=for-the-badge&logo=vuedotjs&labelColor=34495e&color=34495e)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

</div>

## Overview

This is a simple frontend web application to see the weather from different cities through the consumption of two independen api's.  
The first is responsible for obtaining the geographical coordinates (latitude and altitude) of a location that the user requests.  
The second obtains all the weather data of the locations that the user wants.

This project is deployed on <a href="https://pages.github.com/" target="_blank">GitHub Pages</a> and you can view and use the demo in the following <a href="https://gfrancv.github.io/weather-app/" target="_blank">link.</a>

### Desktop view

![desktop-screenshot](https://user-images.githubusercontent.com/35277540/191469899-0bfa04a7-7237-42f2-8c56-080c197d4354.jpg)

### Mobile view

<p align="center">
  <img src="https://user-images.githubusercontent.com/35277540/191470053-ac6567a6-10b0-456c-bde6-d02907bd59a4.jpeg" width="250" />
  <img src="https://user-images.githubusercontent.com/35277540/191470153-05638e0b-c95d-4dee-97ba-997e8c5b2e90.jpeg" width="250" /> 
</p>

## Stack

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

## Useful links

- Deploy Vue.js project on GitHub Pages with script. <a href="https://www.youtube.com/watch?v=i_XbW-FsLKk" target="_blank">Link.</a>
- How to deploy vite projects into Github Pages. <a href="https://gist.github.com/GFrancV/e4ce2ae0291c2b14ce27d0a6446f2e89" target="_blank">Link.</a>
