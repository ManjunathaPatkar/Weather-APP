// console.log("Starting...")
// setTimeout(()=>{
// console.log("Inside function")
// },2000)
// setTimeout(()=>{
// console.log("inside sencond timeout")
// },0)

// console.log("Stopping...")
//weather app code
const request=require('request')
const url ='http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX&q=34.0544%2C-118.2439'
request({url:url,json:true},(error,response)=>{
    // const data = JSON.parse(response.body)
    // console.log(data)
    const locationkey=response.body.Key
    const url1 ='http://dataservice.accuweather.com/forecasts/v1/daily/1day/'+locationkey+'?apikey=SDhu1AbAnfwcdEeo9m1y67jA3p1AqXXX'
    request({url:url1,json:true},(error,response)=>{
        console.log("Minimum temperature "+response.body.DailyForecasts[0].Temperature.Minimum.Value)
        console.log("Maximum temperature " + response.body.DailyForecasts[0].Temperature.Maximum.Value)
    })
})
const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFuanVuYXRoYXBhdGthciIsImEiOiJja2t0NzU5cDUwa2lrMnFwNjlldmR0Ymc4In0.T3OhyQ0q1bG_IWYsd2mpxg'
request({ url: url1, json: true }, (err,response)=>{
    // console.log(response)
    const res=response.body
    console.log("latitude "+res.features[0].center[0])
    console.log("longitude "+res.features[0].center[1])
})