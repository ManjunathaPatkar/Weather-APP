const path = require('path')
const express = require('express')
const hbs=require('hbs')

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
    res.send({
        forecast:'It is snowing',
        location:'Udupi karnataka'
    })
})

app.get('/help/*',(req,res)=>{
    res.send("help article not found")
})

app.get('*',(req,res)=>{
    res.send("404 not found")
})

app.listen(3000,()=>{
    console.log("server started.....")
})