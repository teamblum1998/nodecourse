const request = require ('request')

//const url =   'https://api.darksky.net/forecast/85fad8b7613c3005d2fe3e43561d6f6c/37.8267,-122.4233'
  const url =   'https://api.darksky.net/forecast/85fad8b7613c3005d2fe3e43561d6f6c/'

const url2 =  'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const token = '?access_token=pk.eyJ1IjoidGVhbWJsdW0xOTk4IiwiYSI6ImNrMWJmZDNzNDBodGQzYm52Y3dzeG5nM2UifQ.Oqqdj7CuihqMia0P6OVcag'


// request({url:url, json:true},(error,response) => {
//     if(error){
//         console.log(error)
//     }else if (response.body.error){
//         console.log("URL Error")
//     }
//     else{
//         console.log(response.body.currently.summary)
//     }
//     })

    // request({url:url2, json:true},(error,response) => {
    //     if(error){
    //         console.log(error)
    //     }else if (response.body.error){
    //         console.log("URL Error")
    //     }
    //     else{
    //         const latitude =response.body.features[0].center[1]
    //         const longitude=response.body.features[0].center[0]
    //         console.log(latitude)
    //         console.log(longitude)
    //     }
    //     })

        
    const geoCode =  (location, mycallback) => {
        console.log('Getting the Latitude')
        const fullUrl = url2 + location + token
        request({url:fullUrl, json:true},(error,response) => {
            if(error){
                console.log(error)
            }else if (response.body.error){
                console.log("URL Error")
            }
            else{
                const data = {
                  lat : response.body.features[0].center[1],
                  long: response.body.features[0].center[0]}
                mycallback(data)
            }
            })
      }
    
      const getCurrently =  (data , mycallback) => {
        console.log('Getting the Summary')
        request({url:url+ data.lat + ',' + data.long, json:true},(error,response) => {
            if(error){
                console.log(error)
            }else if (response.body.error){
                console.log("URL Error")
            }
            else{
                console.log(url)
                mycallback(response.body.currently)
            }
            })
      }

    //getLatAndLong('Newtown.json', (lat,long) => console.log(lat + ' ' + long) )

    geoCode('Orlando.json', (data) =>  getCurrently(data , (summary) => console.log(summary) ))
    
    console.log('Weird that this prints first')
    