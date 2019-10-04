const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(txt){
    return  'YourNotes' + txt
}


const addNote = (title, body) =>{

    const notes = loadNotes()

    const duplicateNotes = notes.filter((note)=> note.title === title)

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

const removeNote = (title)=>{

    // Load the Notes
    const notes = loadNotes()

    // Save teh value of the Orignal Note
    const originalLength = notes.length 
    
    const notesToKeep = notes.filter(function(note){
          return note.title !== title
      })

      const purgeLength = notesToKeep.length 

      if(purgeLength === originalLength){
        console.log(chalk.red.inverse('Not Found'))
      }else{
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Removed'))
      }
}

const listNotes = () =>{

    // Load the Notes
    const notes = loadNotes()

    notes.forEach((note) =>  console.log(note.title))

    }


const saveNotes = (notes) => {
    
    const newData= JSON.stringify(notes)
    fs.writeFileSync('notes.json',newData)
}

const loadNotes = () => {
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
    removeNote: removeNote,
    listNotes: listNotes
}
