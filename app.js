//weather app code
const request=require('request')
const geocode=require('./utils/geocode')
// const url ='http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=34.0544%2C-118.2439'
// //const url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=34.0544'
// request({url:url,json:true},(error,response)=>{
//     // const data = JSON.parse(response.body)
//     // console.log(data)
//     // console.log(error)
//     if(error){
//         console.log("Unable to connect to weather data")
//     }
//     else if(response.body.Message){
//         console.log(response.body.Message)
//     }
//     else {
        
//             const locationkey = response.body.Key
//             const url1 = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationkey + '?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX'
//             request({ url: url1, json: true }, (error, response) => {
//                 console.log("Minimum temperature " + response.body.DailyForecasts[0].Temperature.Minimum.Value)
//                 console.log("Maximum temperature " + response.body.DailyForecasts[0].Temperature.Maximum.Value)
//             })
        
//     }
// })
const temperature=(latitude,longitude,callback)=>{
    // const url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=34.0544%2C-118.2439'
    //const url ='http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q='+encodeURIComponent(latitude,longitude)
    const url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=' + encodeURIComponent(latitude) + '%2C' + encodeURIComponent(longitude)
    request({url:url, json:true},(error,response)=>{
        //console.log(response)
        if(error){
            callback('Unable to connect to Accuweather',undefined);
        }
        
        // else if(response===null){
        //     callback('Please enter valid coordinates',undefined)
        // }
        else if(response.body.Message){
            callback(response.body.Message,undefined)
        }
        else{
            const locationkey = response.body.Key
            const url1 = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationkey + '?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX'
            request({ url: url1, json: true }, (error, response) => {
                callback(undefined,{
                    minTemp: response.body.DailyForecasts[0].Temperature.Minimum.Value,
                    maxTemp: response.body.DailyForecasts[0].Temperature.Maximum.Value
                })
            })
        }
    })
}

temperature(13.33222, 74.74611,(error,data)=>{
    console.log(error)
    console.log(data)
})
//const url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=34.0544%2C-118.2439'
// latitude = 40.8
// longitude = -77.8
// const url = 'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=' + encodeURIComponent(latitude)+'%2C'+encodeURIComponent(longitude)
// console.log(url)

// geocode('nitte',(err,data)=>{
//     console.log(err)
//     console.log(data)

// })