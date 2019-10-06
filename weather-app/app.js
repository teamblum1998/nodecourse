const request = require ('request')
const geocode = require ('./utils/geocode')
const weather = require ('./utils/forecast')

const location = 'Philadelphia'
    geocode(location + '.json', (error, data) => {
        if(error){ 
            console.log(error)}
        else
            weather(data , (error, summary) => {
                if(error){ 
                    console.log(error)}
                else{    
                console.log(summary) }})})
    
    console.log('Weird that this prints first')
    