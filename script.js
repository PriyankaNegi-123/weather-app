let inputEl = document.getElementById("input");
let searchEl = document.getElementById("btn");
let outputEl = document.getElementById("output");
let cityEl = document.getElementById("city");
let weatherEl = document.getElementById("weather");
let tempEl = document.getElementById("temp");
let imgEl = document.querySelector("img");

let getWeather = ()=>{
    let city = inputEl.value;
    cityEl.innerText = inputEl.value;
    if(city.length == ""){
        cityEl.innerHTML = `Please Enter City name`;
    }
    else{
        let apiKey = "cd2fe1426149cb41b1b83a31be21112e";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
        .then((resp)=> resp.json())
        .then((data) => {
            console.log(data);
            console.log(data.name);
            cityEl.innerHTML = `${data.name}`;
            console.log(data.weather[0].description);
            weatherEl.innerHTML = `${data.weather[0].description}`;
            console.log(data.weather[0].icon);
            // document.getElementById("crypto").innerHTML = `<img src=${data.weather[0].icon}>`;
            // document.getElementById("crypto").style.backgroundImage = `url(${data.weather[0].icon})`;
            console.log(data.main.temp);
            tempEl.innerHTML = `${data.main.temp}&deg;C`;
            inputEl.value = "";
        })
        .catch(() => {
            if(cityEl.innerHTML== "undefined"){
                cityEl.innerHTML= `City not found`
            }
        })
        }
    }


searchEl.addEventListener("click", getWeather)
