const request=require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=' + encodeURIComponent(latitude) + '%2C' + encodeURIComponent(longitude)
    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('Unable to connect to Accuweather', undefined);
        }
        else if (body.Message) {
            callback(body.Message, undefined)
        }
        else {
            const locationkey = body.Key
            const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationkey + '?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX'
            request({ url, json: true }, (error, {body}) => {
                callback(undefined, {
                    minTemp: body.DailyForecasts[0].Temperature.Minimum.Value,
                    maxTemp: body.DailyForecasts[0].Temperature.Maximum.Value
                })
            })
        }
    })
}
module.exports=forecast