# WeatherForecast-by-Json
Meowiee's Weather Forecast

# Weather Forecast Project

This is a simple weather forecast project that uses the OpenWeatherMap API to display current weather data and a 5-day forecast for a given city. It is a responsive web app built using HTML, CSS, and JavaScript (with Axios and jQuery for API calls).

## Features

- Current Weather Data: Displays the current temperature, humidity, wind speed, and atmospheric pressure for a city.
- 5-Day Forecast: Provides a 5-day forecast for the selected city, showing the temperature and weather icon for each day.
- Search by City: Users can search for weather information by entering a city name.

## Technologies Used

- HTML: Structure and layout of the web page.
- CSS: Styling, using TailwindCSS and Bootstrap for responsive design.
- JavaScript: For dynamic content updates and API calls.
- Axios: To handle HTTP requests to the OpenWeatherMap API.
- Font Awesome: For weather-related icons.

## API

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to get weather data. You will need an API key from OpenWeatherMap to use the weather and forecast endpoints.

### Example API Call

- Current Weather: https://api.openweathermap.org/data/2.5/weather?units=metric&appid=YOUR_API_KEY&q=CITY_NAME
- 5-Day Forecast: https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=YOUR_API_KEY&id=CITY_ID

## How to Run

1. Clone this repository to your local machine:
    
    git clone https://github.com/347743/WeatherForecast-by-Json.git
    

2. Open the index.html file in your web browser.

3. If you're deploying online, use any platform like Render, GitHub Pages, or Netlify to host the static files.

## Contributions

Feel free to fork the repository and submit pull requests. If you find any bugs or issues, please open an issue in the Issues tab.

## License

This project is licensed under the MIT License.
