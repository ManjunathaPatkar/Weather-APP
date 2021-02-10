const path = require('path')
const express = require('express')
const hbs=require('hbs')
const geocode=require('../src/utils/geocode')
const forecast=require('../src/utils/forecast')

//console.log(path.join(__dirname,'../public'))

const app=express()

const publicDirpath = path.join(__dirname, '../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs') 
app.set('views',viewspath)
hbs.registerPartials(partialspath)
// app.set('views', path.join(__dirname, '../views'));

app.use(express.static(publicDirpath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name:'Manja'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        text:'some helpfull text',
        title:'About page',
        name:'Manjunatha'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        forecase:'Its snowing here',
        title:'help page',
        name:'manju'
    })
})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({
            error:"Please add address"
        })
    }
    geocode(req.query.address, (err, { latitude, longitude, place }={}) => {
        if (err) {
            return res.send({err})
        }
        forecast(latitude, longitude, (error, { minTemp, maxTemp }={}) => {
            if (error) {
                return res.send({err})
            }
            res.send({
                forecast: 'It is snowing',
                //address: req.query.address,
                minTemp,
                maxTemp,
                place
            })
            //console.log("The minimum and maximum temperature of " + place + " is " + minTemp + " and " + maxTemp)
        })
    })

})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        text:'Help article not found',
        title: 'help page',
        name: 'manju'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        text:'Page not found',
        title: '',
        name: 'manju'
    })
})

app.listen(3000,()=>{
    console.log("server started.....")
})