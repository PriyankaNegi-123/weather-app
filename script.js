'use strict'

let btnEl = document.getElementById("btn");
let inputEl = document.getElementById("city");
let resultEl = document.getElementById("result");

btnEl.addEventListener("click", ()=>{
    let cityName = inputEl.value;
    let apiKey = `cd2fe1426149cb41b1b83a31be21112e`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        resultEl.innerHTML = `
        <img src= "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="img">
        <h2>${data.name}</h2>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Weather: </h4>
            <span>${data.weather[0].description} </span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Temp max: </h4>
            <span>${data.main.temp_max
            } &degC</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
            <h4>Temp min: </h4>
            <span>${data.main.temp_min
            } &degC</span>
        </div>
        </div>
        `;
    }).catch(()=>{
        if(cityName == ""){
            resultEl.innerHTML = `<h3 style="color:#ff465a; margin-top: 2rem; text-align: center" > Please enter a city name</h3>`
        }
        else{
            resultEl.innerHTML = `<h3 style="color:#ff465a;  margin-top: 2rem; text-align: center"> Please enter a VALID city name</h3>`
        }
    })
})

