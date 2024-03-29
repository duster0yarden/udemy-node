const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c6c10c5ce19619d35002e0750b3b2e27/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        debugger
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. That`s it')
        }
    })
}

module.exports = forecast