const path = require('path')
const express = require('express')

//console.log(path.join(__dirname,'../public'))

const app=express()



const publicDirpath = path.join(__dirname, '../public')
app.set('view engine', 'hbs') 

const viewspath=path.join(__dirname,'../templates')
app.set('views',viewspath)
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
        name:'About Page'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'help page'
    })
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