"use strict";

const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    photoLocation: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: Schema.Types.Buffer,
        required: true
    }
});

module.exports = mongoose.model("Photo", photoSchema);