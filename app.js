'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));
const movies = require('./movieData');

// app.use(function validateBearerToken(req, res, next) {
//   const apiToken = process.env.API_TOKEN;
//   const authToken = req.get('Authorization');
//   if (!authToken || authToken.split(' ')[1] !== apiToken) {
//     return res.status(401).json({ error: 'Unauthorized request' });
//   }
//   next();
// });

app.get('/movie', (req, res) => {
  const { search = ' ', genre, country,avg_vote } = req.query;
  
//   if () {
//     if (!['title', 'rank'].includes()) {
//       return res
//         .status(400)
//         .send(' must be one of title or rank');
//     }
//   }

//   let results = books
//     .filter(book =>
//       book
//         .title
//         .toLowerCase()
//         .includes(search.toLowerCase()));

//   if () {
//     results.sort((a, b) => {
//       return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
//     });
//   }
  res
    .json(movies);
});

app.listen(8000, () => {
  console.log('server started on port 8000');
});
