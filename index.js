const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');


// DATASETS
const { youTubeVideos } = require('./datasets/youtube-videos.js');
const { priceQuestions } = require('./datasets/cody-price.js');
const { terminalCommands, gitCommands } = require('./datasets/touch-terminal.js');

const datasets = [ 
  { name: 'youTubeVideos', data: youTubeVideos },
  { name: 'priceQuestions', data: priceQuestions },
  { name: 'terminalCommands', data: terminalCommands },
  { name: 'gitCommands', data: gitCommands }
];

// EXPRESS CONFIGURATION
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);

datasets.forEach(dataset => {
  app.get(`/api/v1/${dataset.name}`, (request, response) => {
    response.send({ [dataset.name]: dataset.data });
  });
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Dataset is running on ${app.get('port')}.`);
  });
}

module.exports = app;