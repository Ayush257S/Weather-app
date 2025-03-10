const apikey="cb20bed2034e3ce2c4d26e5304d40db5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const WeatherIcon=document.querySelector(".Weather-icon");

async function checkweather(city) {
    // const resposne=await fetch(`apiurl+city+&appid=${apikey}`);
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    if(!response.ok){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        var data=await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML=data.name; 
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"ºc"; 
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%"; 
        document.querySelector(".wind").innerHTML=data.wind.speed +"km/h"; 
    
        if(data.weather[0].main=="Clouds"){
            WeatherIcon.src = "Images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            WeatherIcon.src="Images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            WeatherIcon.src="Images/rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            WeatherIcon.src="Images/drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            WeatherIcon.src="Images/mist.png"
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
   
}
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
});