
// Post by Prakash Gujarati
// Prakash Gujarati
// Created 18 Sept18 Sept (Edited 18 Sept)
// sequalize with mysql in nodejs

// seqaulize library in detail
// https://dev.to/projectescape/the-comprehensive-sequelize-cheatsheet-3m1m
// Displaying studentModel.png
// studentModel.png

// studentController.png

// studentRoute.png

// db.jpg

// index.png

// Add class comment…


// Post by Mehul Makwana
// Mehul Makwana
// Created 18 Sept18 Sept
// sequelize

// indexsql.js

// sequelize.js

// Add class comment…


// Post by Mehul Makwana
// Mehul Makwana
// Created 9 Sept9 Sept
// CRUD

// index.js

// studentController.js

// Song.js

// studentRoute.js

// studentValidatator.js

// Add class comment…


// Post by Prakash Gujarati
// Prakash Gujarati
// Created 14 Jul14 Jul
// Node JS with Github

// 1st - Do basic Nodejs program

// node init -y
// node index.js


// use github for make your code remote storage
// git clone yourrepo

// changes upload
// git add .
// git commit -m "update msg"
// git push

// get changes
// git pull

// Basic_Programming_Logic_Problems-1.pdf

// NodeJS & Github.mp4

// index.js

// Add class comment…

const Song = require("./songmodel");

exports.index = (req, res) => {
  Song.find()
    .then((allSongs) => {
      console.log("All songs retrieved successfully:", allSongs);
      res.send({ message: "Songs retrieved successfully", data: allSongs });
    })
    .catch((error) => {
      console.error("Error retrieving songs:", error);
    });
};
exports.show = (req, res) => {
  //Song.find({ _id: req.params.id })
  Song.findById(req.params.id)
    .then((song) => {
      console.log("All songs retrieved successfully:", song);
      res.send({ message: "Songs retrieved successfully", data: song });
    })
    .catch((error) => {
      console.error("Error retrieving songs:", error);
    });
};

exports.store = (req, res) => {
  const newSong = new Song({
    title: req.body.title,
    artist: req.body.artist,
    category: req.body.category,
    album: req.body.album,
    year: req.body.year,
  });

  newSong
    .save()
    .then(() => {
      console.log("New song added successfully");
    })
    .catch((error) => {
      console.error("Error adding new song:", error);
    });

  res.send({ message: "Data stored successfully", data: newSong });
};

exports.update = (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedSong) => {
      console.log("Song updated successfully:", updatedSong);
      res.send({ message: "Song updated successfully", data: updatedSong });
    })
    .catch((error) => {
      console.error("Error updating song:", error);
    });
};

exports.delete = (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("Song deleted successfully");
      res.send({ message: "Song deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting song:", error);
    });
};