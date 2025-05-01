async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '6df40038f44c99f54f9dc84ea26488c2'; // Put your real API key here
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    console.log(data); // <<< ADD THIS LINE
  
    if (data.cod === 200) {
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
    }
  }