const request = require('request')

const geo = (place, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=pk.eyJ1IjoiemVuaHV6YWluaSIsImEiOiJjanlzeXRobTQwMTZ3M2JwMXFsdXFlbDdsIn0.-MWjWymxxtz1_1BbMPmmRg`
    request({ url, json: true }, (error, response) => {
        if (error) {
            // return console.log('no internet')
            //to return the value then we must use callback
            callback('check your internet', undefined)
        } else if (response.body.features.length == 0) {
            //to return the value then we must use callback
            // return console.log('try other keywords')
            callback('check your keywords or try another keyword', undefined)
        } else {
            const longitude = response.body.features[0].center[0]
            const latitude = response.body.features[0].center[1]
            const exactLocation = response.body.features[0].place_name

            const data = {
                location: exactLocation,
                lat: latitude,
                long: longitude
            }

            // console.log(data)
            //to return the value then we must use callback
            callback(undefined, data)
        }
    })
}

// geo('plac grundwaldzki', (err, res) => {
//     if (err == undefined) {
//         console.log('get the result', res)
//     } else {
//         console.log(err)
//     }
// })

module.exports = { geo: geo }