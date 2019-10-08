const request = require ('request')
//const url =   'https://api.darksky.net/forecast/85fad8b7613c3005d2fe3e43561d6f6c/37.8267,-122.4233'
  const url2 =   'https://api.darksky.net/forecast/85fad8b7613c3005d2fe3e43561d6f6c/'
  
  const forecast =  (data , mycallback) => {
        console.log('Getting the Summary')
        
        // Deconstruct.. its the same thing but use the new way..
        // const lat = data.lat
        // const long = data.long
        const {lat, long} = data
        const url = url2 + lat + ',' + long

        
        request({url, json:true}, (error,{body}) => {
            if(error,undefined){
               return mycallback(error,undefined)
            }else if (body.error){
                return mycallback("URL Error")
            }
            else{
                console.log(undefined,url)
                return mycallback(body.currently)
            }
            })
      }

module.exports = forecast