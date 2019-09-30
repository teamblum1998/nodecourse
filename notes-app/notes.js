const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(txt){
    return  'YourNotes' + txt
}


const addNote = function(title, body){

    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length ===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('saved'))
    }else{
        console.log(chalk.red.inverse('duplicate'))
    }
}

const removeNote = function(title){

    // Load the Notes
    const notes = loadNotes()

    // Save teh value of the Orignal Note
    const originalLength = notes.length 
 //   console.log(originalLength)
    
    const notesToKeep = notes.filter(function(note){
          return note.title !== title
      })

      const purgeLength = notesToKeep.length 
 //     console.log(purgeLength)

      if(purgeLength === originalLength){
        console.log(chalk.red.inverse('Not Found'))
      }else{
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Removed'))
      }
      

    // if (duplicateNotes.length ===0){
    //    notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log('saved')
    // }else{
    //     console.log('duplicate')
    // }
}

const saveNotes = function(notes){
    
    const newData= JSON.stringify(notes)
    fs.writeFileSync('notes.json',newData)
}

const loadNotes = function(){
try{
    const dataBuffer =  fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

} catch(e){

    return[] 
}
}

module.exports = {
    getNotes: getNotes, 
    addNote: addNote,
    removeNote: removeNote
}
