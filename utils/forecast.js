const request=require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=' + encodeURIComponent(latitude) + '%2C' + encodeURIComponent(longitude)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Accuweather', undefined);
        }
        else if (response.body.Message) {
            callback(response.body.Message, undefined)
        }
        else {
            const locationkey = response.body.Key
            const url1 = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationkey + '?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX'
            request({ url: url1, json: true }, (error, response) => {
                callback(undefined, {
                    minTemp: response.body.DailyForecasts[0].Temperature.Minimum.Value,
                    maxTemp: response.body.DailyForecasts[0].Temperature.Maximum.Value
                })
            })
        }
    })
}
module.exports=forecast