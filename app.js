const express = require('express');
const path = require('path');
const nasa_data = require('./data/data.json');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/get_photos",function (req, res) {
  if(req.headers["token"] === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3IiOiJzaWRoYW50IiwidmVyc2lvbiI6InYxIiwicGFzc2tleSI6IjEzMTIzMTIzMTIzMTQiLCJpYXQiOjE1MTYyMzkwMjJ9.mRc50nfxsZ5myyaJfZc0RKyd9xLi6QvgIvKa-sa-azo"){
    let response_model = {
      "message":"Nasa images with description",
      "data":nasa_data
    };
    res.send(
        response_model,
        201
    );
  }else{
    let response_model = {
      "message":"Unauthorized",
    };
    res.send(
        response_model,
        401
    );
  }
});

module.exports = app;
