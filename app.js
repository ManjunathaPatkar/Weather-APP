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
const url ='https://data.climacell.co/v4/locations?apikey=VJkiT8gJ2c68MCwm3BSG6MkDOlu1YBBv'
request({url:url},(error,response)=>{
    // const data = JSON.parse(response.body)
    // console.log(data)
    console.log(response.currently)
})
const url1 ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFuanVuYXRoYXBhdGthciIsImEiOiJja2t0NzU5cDUwa2lrMnFwNjlldmR0Ymc4In0.T3OhyQ0q1bG_IWYsd2mpxg'
request({ url: url1, json: true }, (err,response)=>{
    // console.log(response)
    const res=response.body
    console.log(res.features[0].center[0])
    console.log(res.features[0].center[1])
})