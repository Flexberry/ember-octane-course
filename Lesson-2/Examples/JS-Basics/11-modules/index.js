// const express = require('express');
// const core = require('./core');

import express from 'express';
import { message, add } from './core/index.js';
// import message from './core/index.js';


const app = express();
app.get('/', (req, res) => {
  res.send(message);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
