// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)

    const img = jsonData.weather[0].icon
    document.getElementById("api-image").innerHTML =
      '<img src="http://openweathermap.org/img/wn/' +
      img +
      '@2x.png" alt="weather image">'

    const tempInC = jsonData.main.temp - 273.15
    document.getElementById("tempurature").innerHTML =
      "<p> Tempurature: " + tempInC.toFixed(1) + " °C</p>"

    document.getElementById("weather").innerHTML =
      "<p> Weather: " + jsonData.weather[0].main + "</p>"
  } catch (err) {
    console.log(err)
  }
}
getWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
