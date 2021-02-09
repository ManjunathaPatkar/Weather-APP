const path = require('path')
const express = require('express')

//console.log(path.join(__dirname,'../public'))

const app=express()

app.set('view engine','hbs')

const publicDirpath = path.join(__dirname, '../public')
app.use(express.static(publicDirpath))

app.get('',(req,res)=>{
    res.render('index')
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