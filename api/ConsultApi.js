export default async function getCurrentWeather(locationCoords) {
    
    const axios = require('axios')

    const lat = locationCoords.latitude

    const lon = locationCoords.longitude

    const API_KEY = '4e0bfa417d1d2e2e02899dddcdab1cd8'

    let results = []

    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then( (response) => {
        const data = response.data
        const locationName = (data.sys.country + ', ' + data.name)
        const temperatureMin = data.main.temp_min
        const temperatureMax = data.main.temp_max
        const wind = data.wind.speed
        const humidity = data.main.humidity
        const currentTemperature = data.main.temp

        results = [currentTemperature, temperatureMax, temperatureMin, wind, humidity, locationName]
    })
    .catch((error) => {
        console.error(error)
    })

    return results;
}