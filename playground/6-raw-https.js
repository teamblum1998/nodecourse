const https = require ('https')
const url =   'https://api.darksky.net/forecast/85fad8b7613c3005d2fe3e43561d6f6c/37.8267,-122.4233'

const request = https.request(url, (response) =>{
 let data = ''
    response.on('data', (chunk) =>{
        data = data + chunk.toString()

    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.end()