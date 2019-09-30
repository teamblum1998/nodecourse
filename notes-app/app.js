const fs=require('fs')
const validator = require('validator')
notes = require('./notes')
const chalk = require('chalk')
//const txt = App
//console.log(chalk.red.italic(txt))

///
//console.log(process.argv.length)
//console.log(process.argv[2] )
//console.log(process.argv[3] + '\n')


///
//const command = process.argv[2]
//if (command=='add'){
//   console.log('Adding')
//
//}else{
//    console.log('Not Found')
//}

const yargs = require('yargs')

    yargs.version('1.1.1')

    yargs.command({

        command : 'add',
        description: 'Add new Note',
        builder: {
            title:{
                describe: 'Note title',
                demandOption:true, 
                type: 'string'
            },
            body:{
                describe: 'Note body',
                demandOption:true, 
                type: 'string'
            }
        },
        handler: function(argv){
            notes.addNote(argv.title, argv.body)
        }

    })
    yargs.command({
        command : 'remove', description: 'Removing Note',
        builder: {
            title:{
                describe: 'Note title',
                demandOption:true, 
                type: 'string'
            }
        },
        handler: function(argv){
            notes.removeNote(argv.title)
        }

    })

    yargs.command({

        command : 'list',
        description: 'Listing Notes',
        handler: function(){
            console.log('Listing all new note')
        }

    })

    yargs.command({

        command : 'read',
        description: 'Reading Note',
        handler: function(){
            console.log('Reading a new note')
        }

    })

    yargs.parse()


