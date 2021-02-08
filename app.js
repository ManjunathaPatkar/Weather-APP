//weather app code
const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
forecast(13.33222, 74.74611,(error,data)=>{
    console.log(error)
    console.log(data)
})

// geocode('nitte',(err,data)=>{
//     console.log(err)
//     console.log(data)

// })