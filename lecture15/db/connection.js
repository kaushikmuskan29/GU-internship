const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("DB Connected")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = connectToDB;