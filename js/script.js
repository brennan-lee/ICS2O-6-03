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

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
      '<img src="' + jsonData.url + '" alt="API image" class="center" ' + ">"
    if (jsonData.artist_url != "none") {
      document.getElementById("image-artist").innerHTML =
        "<p>Artist: " +
        '<a href="' +
        jsonData.artist_url +
        '">' +
        jsonData.artist +
        "</a>"
    } else {
      document.getElementById("image-artist").innerHTML =
        "<p>Artist: unknown</p>"
    }
  } catch (err) {
    console.log(err)
  }
}

getImage(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5/img"
)
