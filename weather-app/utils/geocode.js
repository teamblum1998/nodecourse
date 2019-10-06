const request = require ('request')
const url2 =  'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const token = '?access_token=pk.eyJ1IjoidGVhbWJsdW0xOTk4IiwiYSI6ImNrMWJmZDNzNDBodGQzYm52Y3dzeG5nM2UifQ.Oqqdj7CuihqMia0P6OVcag'


const geocode =  (location, mycallback) => {
    console.log('Getting the Latitude')
    
    //Build the Url
    const url = url2 + location + token

 // destructure respoonse...   
 //   request({url, json:true},(error,{response}) => {
    request({url, json:true},(error,{body}) => {
        
        if(error){
            mycallback(error,undefined)

 //       }else if (response.body.error){          
        }else if (body.error){
            mycallback("URL Error",undefined)

        }
        else{
//            const lat = response.body.features[0].center[1]
//            const long = response.body.features[0].center[0]
            const lat = body.features[0].center[1]
            const long =body.features[0].center[0]

            // Build the object... Note, if you name the object properties
            // with existing constants, it takes the values.
            const data = { lat, long}
            mycallback(undefined,data)
        }
        })
  }

  module.exports = geocode

