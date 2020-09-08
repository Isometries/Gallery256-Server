"use strict";

const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    photoLocation: {
        type: String,
        required: true,
        unique: true
    },
    //album ID
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: Schema.Types.Buffer,
        required: true
    }
});

module.exports = mongoose.model("Album", photoSchema);