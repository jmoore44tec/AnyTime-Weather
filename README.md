# AnyTime-Weather
AnyTime Weather is an online weather application made with Wix and JavaScript

About the Project:
Anytime Weather
Anytime Weather is a web application that leverages the OpenWeather API to deliver quick and accurate weather information for the current day and up to a 4 day forecast. This application allows the user to search any city they wish to find information on the current and projected weather, as well as to save their “Favorite” city so that the weather data will be loaded automatically upon visiting the site. 
Motivation:
This project was completed with the purpose of demonstrating my skills as a Web Developer. Completing this application using Wix, a cloud-based, user-friendly website builder platform, helped demonstrate my skills with ProStrategix Consulting’s preferred method of product delivery.  
Getting Started:
First steps always include carefully combing over the user requirements. The “Assessment” document included clear instruction and grading criteria as well as a graphical representation of how the UI should appear in the finished product. 

If I had not already, I would have started by signing up for access to OpenWeather’s API. I have already completed this step so all I had to do was login and gather the necessary information for API calls.

When using Wix, if I am provided with a UI template or blueprint I do my best to implement a well-designed version of what the client desires, otherwise I will begin designing my own rough schematic. Wix allows the use of frontend “elements” which can be customized heavily, therefore, when starting this projects I began placing various elements within the site to closely match the design shared with me. This also included labeling each element with relevant and meaningful titles such as “ #currentWeatherIcon .“
 
Installation:
For this project you will need access to the following:
OpenWeather’s API ( https://openweathermap.org/api ) | This step requires a login. Free registration is available.
Wix ( https://wix.com ) | Wix is free to sign up for an account
JavaScript | You do not need to install any IDE as Wix offers an in-house code editor allowing you to utilize JS to enhance your websites functionality
 
Usage:
This project can be used by the public or for private use. Not only is this weather app useful for everyday life, it is a great place to earn passive income. With its slick and smooth UI/UX the Anytime Weather application can be monetized if desired by allowing advertisers a space to show off their latest products. 
 
Code Example:
Below is an example of how weather information is retrieved and displayed to the user from OpenWeather:

function updateCurrentWeather(weatherData, city) {
    const temp = convertTemperature(weatherData.main.temp);
    const unit = mode === "imperial" ? "°F" : "°C";
    const iconCode = weatherData.weather[0].icon;
    
    $w("#weather").text = `${temp.toFixed(0)}${unit}`;
    $w("#cityDisplayName").text = formatCityName(city);

    const description = weatherData.weather[0].description.toUpperCase();
    $w("#weatherDesc").text = description;
    $w("#weatherDesc").show();
    
    const iconUrl = weatherIcons.getIconUrl(iconCode);
    $w("#currentWeatherIcon").src = iconUrl;
    $w("#currentWeatherIcon").show();
}
function updateForecast(forecastItems) {
    for (let i = 1; i <= 4; i++) {
        $w(`#forcDay${i}`).text = "";
        $w(`#forcDay${i}Icon`).hide();
        $w(`#forcDay${i}`).hide();
    }
    const next4Days = getNextDaysForecast(forecastItems, 4);
    next4Days.forEach((dayData, index) => {
        const dayNum = index + 1;
        const temp = convertTemperature(dayData.main.temp).toFixed(0);
        const iconCode = dayData.weather[0].icon;
        
        $w(`#forcDay${dayNum}`).text = `${temp}°`;
        $w(`#forcDay${dayNum}Icon`).src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;       
        $w(`#forcDay${dayNum}`).show();
        $w(`#forcDay${dayNum}Icon`).show();
    });
}



Tests:
Testing on functions was conducted as code blocks were implemented incrementally. Using industry standard best practices I ensure that error handling was implemented within the code to prevent crashes and other events which may cause the user to have a poor experience. 
 
Screenshot:

 
Roadmap/Features (Optional)
One function missing currently is the display of the current date and the dates of the forecasted days ahead. This could be implemented.
Further functionality can be added at anytime on request. Some functions that may enhance the applications appeal include more detailed weather descriptions such as “wind speed,” “precipitation level,” and “air quality (AQI).” 
Contact
For further information please feel free to contact me:
Jesse Moore | jessemooreis59@gmail.com | (916)895-9023
