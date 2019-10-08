const path = require ('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')

// To view the documentation go to expressjs.com
// The API reference page has 
//  - express, Application, Request, Response, Router
const app= express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')

// Setting up Handlebars engine
// Note to use this you need the views folder in the root directory of
// the root 
app.set('view engine', 'hbs')

// Custimize that we want our Handlebar views in the templates folder
// If we don't do this, then handlebars expect all of our templates to
// be in the Root/views folder
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views', viewsPath)

const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)


//Setup the static Directory to server
//In this way.. when we use or css or img that is the base directory
//ie.. "./css/styles.css" 
app.use(express.static(publicDirectoryPath))

app.get('',(req, res) =>{

        res.render('index', {
            title: 'Welcome',
            name: 'Derek Blum'            
        })
    })
    
    
    // Build a Route handler for about
    app.get('/about',(req, res) =>{

        res.render('about', {
            title: 'About',
            name: 'Derek Blum'            
        })
    })
    
    // Build a Route handler for help
    app.get('/help',(req, res) =>{

        res.render('help', {
            title: 'Help',
            message: 'Come here for help',
            name: 'Derek Blum'            
        })
    })

    app.get('/weather',(req, res) =>{
        if(!req.query.location){
            return res.send({
                error: 'You must provide a location'  
            })
        }

        geocode(req.query.location + '.json', (error, data) => {
        if(error){
            return res.send({
                error: error  
            })}
        else
            forecast(data , (summary, error) => {
                if(error){ 
                    return res.send({
                        error: error })}
                else{
                    return res.send({
                        temperature: summary.temperature,
                        summary: summary.summary,
                        location:req.query.location
                    })    
            }
        })})
    })

    app.get('/products',(req, res) =>{
        
        if(!req.query.search){
            return res.send({
                error: 'You must provide a search term'  
            })
        }
        console.log(req.query)

        res.send({
                products: []
        })
    })


    // Build a Route handler for everything not explicately defined
    app.get('/help/*',(req, res) =>{        
        res.render('404', {
            title: 'Help Error',
            name: 'Derek Blum' ,
            message: 'Help Article Not Found'          
        })
    })

        // Build a Route handler for everything not explicately defined
        app.get('/*',(req, res) =>{        
            res.render('404', {
                title: 'Generic Error',
                name: 'Derek Blum' ,
                message: '404 Error - Page not Found'          
            })
        })

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})


//app.com
//app.com/help
//app.com/about


