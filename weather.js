const request = require('request')

const weather = (longitude, latitude, callback) => {
    const url = `https://api.darksky.net/forecast/8593f986c0f88727f3270a097ee4b90c/${longitude},${latitude}?units=si`
    request({ url, json: true }, (err, response) => {
        if (err) {
            callback('check your internet', undefined)
        } else if (response.body.code == 400) {
            callback('the given location is invalid', undefined)
        } else {
            const data = {
                timezone: response.body.currently.timezone,
                summary: response.body.currently.summary,
                currentTemperature: response.body.currently.temperature,
                humidity: response.body.currently.humidity
            }
            callback(undefined, data)
        }
    })
}


// weather('37.8267', '-122.4233', (err, res) => {
//     if (err == undefined) {
//         console.log(res)
//     } else {
//         console.log(err)
//     }
// })

module.exports = { weather: weather }