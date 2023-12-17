// create web server with express
// express is a framework for nodejs
const express = require('express');
const app = express();
// to parse the body of the request
const bodyParser = require('body-parser');
// to work with mongodb
const MongoClient = require('mongodb').MongoClient;
// to convert string id to object id
const ObjectID = require('mongodb').ObjectID;
// to work with mongodb
const dbURL = 'mongodb://localhost:27017';
// to work with mongodb
const dbName = 'blog';
// to work with mongodb
const collectionName = 'comments';
// to work with mongodb
const client = new MongoClient(dbURL, { useUnifiedTopology: true });
// to work with mongodb
let db;
// to work with mongodb
let collection;
// to work with mongodb
client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected successfully to server');
  db = client.db(dbName);
  collection = db.collection(collectionName)});


