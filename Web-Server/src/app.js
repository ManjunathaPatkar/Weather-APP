const path = require('path')
const express = require('express')

//console.log(path.join(__dirname,'../public'))

const app=express()

app.set('view engine','hbs')

const publicDirpath = path.join(__dirname, '../public')
app.use(express.static(publicDirpath))

app.get('',(req,res)=>{
    res.send('<h1>Weather </h1>')
})
app.get('',(req,res)=>{
    res.send({
        name:'manja',
        age:21
    })
})
app.get('',(req,res)=>{
    res.send('<h1>About page</h1>')
})
app.get('/weather',(req,res)=>{
    res.send({
        forecast:'It is snowing',
        location:'Udupi karnataka'
    })
})

app.listen(3000,()=>{
    console.log("server started.....")
})