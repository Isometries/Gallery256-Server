"use strict";

const Photo = require("../models/photo"),
  getPhotoParams = photo => {
      return {
          photoLocation: body.photoLocation,
          name: body.name,
          thumbnail: body.thumbnail
      };
  };

const createPhoto = (req, res, next) => {
    let newPhoto = new Photo(getPhotoParams(req.body));
    newPhoto.save(error => {
        if (error) {
            console.log("Error saving photo");
          //handle error
        }
        console.log("Saved new photo");
        });
}

module.exports = {

    createPhotos = (req, res, next) => {
        
    },

    getPhotos: (req, res, next) => {
        let photoName = req.params.name;
        Photo.find({name: photoName})
          .then(photo => {
              res.json(photo);
              next();
          })
          .catch(error => {
              console.log("Error getting photos");
              //handle error
          })
    }
};