const fs = require('fs')

fs.writeFileSync('Notes.txt', 'this file created using node')

fs.appendFileSync('notes.txt','\napended string')