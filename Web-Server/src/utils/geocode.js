const request=require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFuanVuYXRoYXBhdGthciIsImEiOiJja2t0NzU5cDUwa2lrMnFwNjlldmR0Ymc4In0.T3OhyQ0q1bG_IWYsd2mpxg'
    request({url, json: true }, (err, {body}={}) => {
        console.log(body.features)
        if (err) {
            callback('unable to connect to Mapbox API', undefined)
        }
        else if (body.features.length===0){
            callback('Please enter valid place name', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place: body.features[0].place_name
            })
        }
    })
}
module.exports=geocode