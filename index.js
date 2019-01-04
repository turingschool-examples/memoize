const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');


// DATASETS
const { youTubeVideos } = require('./datasets/youtube-videos.js');
const { priceQuestions } = require('./datasets/cody-price.js');
const { arrayPrototypes } = require('./datasets/array-prototypes.js');
const { terminalCommands, gitCommands } = require('./datasets/touch-terminal.js');
const { jQuery } = require('./datasets/jquery-data.js');
const { flashStudyQuestions } = require('./datasets/LM-data.js');
const { prototypeData } = require('./datasets/levi-prototypes.js');
const { questions, answers } = require('./datasets/kylie-stanley.js');
const { codeWizCategories } = require('./datasets/codewiz-data.js');
const { gitQuestions } = require('./datasets/gitGithubQuestions.js');
const { usefulJavascript } = require('./datasets/kevin-ryan.js');
const { allTheMethods } = require('./datasets/eric-fitzsimons.js');
const { javascripty } = require('./datasets/javascripty.js');
const { jsfunQuestions } = require('./datasets/JSFunTrivia.js');
const { cssFlashcardsData } = require('./datasets/joel-smith.js');


const { flashcardData } = require('./datasets/whitney-burton-data.js');
const { fundamentalsQuestions } = require('./datasets/tb-fundamentals-data.js');
const { snapshot } = require('./datasets/libby-yeh.js');
const { codeQuizQ_A } = require('./datasets/kristen-hallstrom.js');
const { problems } = require('./datasets/jsProtoFunTime.js');
const { interviewQuestions } = require('./datasets/interviewQuestions.js');
const { ewQuestions } = require('./datasets/ew_dataset.js');
const { aTypes } = require('./datasets/aType.js');
const { adamData } = require('./datasets/adam.js');
const { questionData } = require('./datasets/shannon-data.js');
const { pvGitCommands } = require('./datasets/paul-gitcommands.js');




const datasets = [ 
  { name: 'youTubeVideos', data: youTubeVideos },
  { name: 'priceQuestions', data: priceQuestions },
  { name: 'terminalCommands', data: terminalCommands },
  { name: 'gitCommands', data: gitCommands },
  { name: 'arrayPrototypes', data: arrayPrototypes },
  { name: 'jQuery', data: jQuery },
  { name: 'flashStudyQuestions', data: flashStudyQuestions },
  { name: 'prototypeData', data: prototypeData },
  { name: 'questions', data: questions },
  { name: 'answers', data: answers },
  { name: 'codeWizCategories', data: codeWizCategories },
  { name: 'gitQuestions', data: gitQuestions },
  { name: 'allTheMethods', data: allTheMethods },
  { name: 'usefulJavascript', data: usefulJavascript },
  { name: 'javascripty', data: javascripty },
  { name: 'jsfunQuestions', data: jsfunQuestions },
  { name: 'cssFlashcardsData', data: cssFlashcardsData },

  { name: 'flashcardData', data: flashcardData },
  { name: 'fundamentalsQuestions', data: fundamentalsQuestions },
  { name: 'snapshot', data: snapshot },
  { name: 'codeQuizQ_A', data: codeQuizQ_A },
  { name: 'problems', data: problems },
  { name: 'interviewQuestions', interviewQuestions },
  { name: 'ewQuestions', data: questions },
  { name: 'aTypes', data: aTypes },
  { name: 'adamData', data: adamData },
  { name: 'questionData', data: questionData },
  { name: 'pvGitCommands', data: pvGitCommands }


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