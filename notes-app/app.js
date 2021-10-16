const validator=require('validator')
const chalk=require('chalk')
const yargs=require('yargs')
const notesUtils=require('./notes.js')
const { command, argv, string } = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'adding a new notes',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'

        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(notesUtils.getNotes())
        notesUtils.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'Notes title',
            demamdOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        console.log(notesUtils.getNotes())
        console.log(chalk.blue.inverse('Removing Note'))
        notesUtils.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler: function(){
        notesUtils.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading notes',
    builder:{
        title: {
            describe: 'Note title',
            demamdOption: true,
            type: 'string'
        }
    },
    handler: function(){
        notesUtils.readNote(argv.title)
    }
})


yargs.parse()
// add remove list read