const mongoose = require('mongoose')

const ShortUrl = mongoose.Schema({
    alias: {
        type: String,
        unique: true,
        rquired: true,
    },
    url: {
        type: String,
        required: true,
    }
})

module.exports =mongoose.model('ShortUrl', ShortUrl)