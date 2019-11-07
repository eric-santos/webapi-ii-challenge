const express = require('express');

const database = require('./data/db');

const server = express();

server.use(express.json());
