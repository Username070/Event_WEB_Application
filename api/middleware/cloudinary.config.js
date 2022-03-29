const multer = require("multer");
var express = require("express");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const {
  CLOUDINARY_HOST,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_HOST,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    if(!req.body.title) {
      express.response.status(400)
      throw new Error('Please add a title field');
  }

  if(!req.body.date) {
    express.response.status(400)
    throw new Error('Please add a date field');
  }

  if(!req.body.time) {
    express.response.status(400)
    throw new Error('Please add a time field');
  }

  if(!req.body.description) {
    express.response.status(400)
    throw new Error('Please add a description field');
  }

    return {
      // transformation: {width: 1920, height: 1080, crop: "fill"},
      folder: 'Projektinis',
      format: "png",
      public_id: file.filename,
    };
  },
});

const parser = multer({ storage: storage });

module.exports = parser;
