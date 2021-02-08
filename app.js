//weather app code
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')


geocode(process.argv[2],(err,data)=>{
    if (err){
        return console.log(err)
    }
    forecast(data.latitude, data.longitude, (error, forecastdata) => {
        if(error){
            return console.log(error)
        }
        console.log("The minimum and maximum temperature of "+data.place+" is "+forecastdata.minTemp+" and "+forecastdata.maxTemp)
    })
})