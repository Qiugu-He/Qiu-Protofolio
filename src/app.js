const express = require('express') 
const path = require('path')  //path
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000

//define paths
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partial')

//set up handlebar engin and vies folder
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//set up static folder to server
app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
    res.render('index', {
        //title: 'main page',
        name: 'QIUGU HE'
    })  //render for hbs, so not send
})

app.get('/blog', (req, res)=>{
    res.render('blog', {
        //title: 'project page',
        name: 'QIUGU HE'
    })  
})

app.get('/resume', (req, res)=>{
    res.render('resume', {
       // title: 'contact page',
        name: 'QIUGU HE'
    })  
})

app.get('/contact', (req, res)=>{
    res.render('contact', {
       // title: 'contact page',
        name: 'QIUGU HE'
    })  
})

//404 page not found
app.get('*', (req, res)=>{
    res.render('404page', {
        title: '404',
        name: 'QIUGU HE',
        errorMessage: 'page not found.'
    }) 
})




app.listen(port , ()=>{
    console.log('Server is up on port '+ port);
})