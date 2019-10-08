console.log('Client Side Java script is loaded')

 fetch('http://localhost:3000/weather?location=Philadelphia').then((response) => {
     response.json().then((data) =>{
         
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.temperature)

        }
     })
 })

 const weatherForm =  document.querySelector('form')
 weatherForm.addEventListener('submit', () => {
     
    console.log('testing')
    
    })
