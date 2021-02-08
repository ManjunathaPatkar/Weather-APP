//weather app code
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const address=process.argv[2]

if(address===undefined){
    console.log("Please provide an address")
}
else{
    geocode(address, (err, {latitude,longitude,place}) => {
        if (err) {
            return console.log(err)
        }
        forecast(latitude, longitude, (error, {minTemp,maxTemp}) => {
            if (error) {
                return console.log(error)
            }
            console.log("The minimum and maximum temperature of " + place + " is " + minTemp + " and " + maxTemp)
        })
    })
}