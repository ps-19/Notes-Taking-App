const fs = require("fs")
const chalk=require("chalk")

const getNotes=function(){
    return chalk.yellow.inverse("Your Notes.....")
}

const addNotes = function(title,body){
    const notes=loadNotes()
    const duplicateNotes=notes.filter(function(curr){
        return curr.title === title
    })
    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Notes Created')
   }
   else{
       console.log('Title already taken')
   }
}

const removeNotes=function(title){
    console.log('Removing '+title+' Notes')
    const notes=loadNotes()
    console.log(notes)
    const modifiedNotes=notes.filter(function(curr){
        if(curr.title==title){
            return false
        }
        else{
            return true
        }
    })
    if(modifiedNotes.length==notes.length){
        console.log(chalk.red.inverse('No such note found'))
    }
    else{
        saveNotes(modifiedNotes)
        console.log(chalk.green.inverse('Note Removed'))
    }
}

const listNotes=function(){
    const notes =loadNotes()

    console.log(chalk.red("All Of Your Notes: "))

    notes.forEach(element => {
        console.log(chalk.yellow.inverse(element.title))
    });

    // notes.filter(function(note){
    //     console.log(chalk.red.inverse(note.title))
    // })
}

const readNote=function(title){
    const notes=loadNotes()
    const note=notes.find(function(notes){
        return notes.title===title
    })
    if(note.title===title){
        console.log(note.title)
        console.log(note.body)
    }
    else{
        console.log('No such Note found')
    }
}

const saveNotes=function(notes){
    const to_save=JSON.stringify(notes)
    fs.writeFileSync("notes.json",to_save)
}

const loadNotes=function(){
    try{
        const Buffer=fs.readFileSync('notes.json')
        const string_val=Buffer.toString()
        return JSON.parse(string_val)
    }
    catch(e){
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}