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
const { hhTerminalCommands } = require('./datasets/terminal-commands.dataset.js');
const { mod2information } = require('./datasets/eric-fitz2.js');
const { flexboxData } = require('./datasets/flexbox.js');
const { fishingVocab } = require('./datasets/js_fishing.js');
const { gabeCards } = require('./datasets/gabe-dataset.js');
const { arrayPrototypeMethods, stringPrototypeMethods, objectPrototypeMethods } = require('./datasets/elly-torres.js');
const { arrayMethods, stringMethods } = require('./datasets/matt-foxwell.js');
const { jQueryData } = require('./datasets/theoBean.js');
const { FlashCardDataSet } = require('./datasets/tom-w-data.js');


// 1811 Datasets

const { ANdata } = require('./datasets/1811/adamN.js');
const { dcFlashCards } = require('./datasets/1811/davidC.js');
const { dkData } = require('./datasets/1811/devinK.js');
const { duyData } = require('./datasets/1811/duyTV.js');
const { EMpracticeQuestions } = require('./datasets/1811/edgarM.js');
const { isData } = require('./datasets/1811/isaacS.js');
const { JAprototypes, JAFlashCards } = require('./datasets/1811/jakeA.js');
const { JHprotoPractice } = require('./datasets/1811/jessicaH.js');
const { pioneersData } = require('./datasets/1811/joshL.js');
const { jpQuestions } = require('./datasets/1811/justinP.js');
const { KMstringAndArrayPrototypeMethods } = require('./datasets/1811/kimM.js');
const { handbook } = require('./datasets/1811/kristenH.js');
const { lizTerminalAndGit } = require('./datasets/1811/lizA.js');
const { MFcodeQuestions } = require('./datasets/1811/masonF.js');
const { mkCards } = require('./datasets/1811/mikeK.js');
const { nirajData } = require('./datasets/1811/niraj.js');
const { rdCards } = require('./datasets/1811/rachaelD.js');
const { roTestCards } = require('./datasets/1811/raechelO.js');
const { SHmethods } = require('./datasets/1811/sallyH.js');
const { TSquizzes } = require('./datasets/1811/taylorS.js');
const { TMQuestionDataset } = require('./datasets/1811/timM.js');
const { TWFlashCardDataSet } = require('./datasets/1811/tomW.js');





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
  { name: 'interviewQuestions', data: interviewQuestions },
  { name: 'ewQuestions', data: ewQuestions },
  { name: 'aTypes', data: aTypes },
  { name: 'adamData', data: adamData },
  { name: 'questionData', data: questionData },
  { name: 'pvGitCommands', data: pvGitCommands },
  { name: 'hhTerminalCommands', data: hhTerminalCommands },
  { name: 'mod2information', data: mod2information },
  { name: 'flexboxData', data: flexboxData },
  { name: 'fishingVocab', data: fishingVocab },
  { name: 'gabeCards', data: gabeCards },
  { name: 'arrayPrototypeMethods', data: arrayPrototypeMethods },
  { name: 'stringPrototypeMethods', data: stringPrototypeMethods },
  { name: 'objectPrototypeMethods', data: objectPrototypeMethods },
  { name: 'arrayMethods', data: arrayMethods },
  { name: 'stringMethods', data: stringMethods },
  { name: 'jQueryData', data: jQueryData },
  { name: 'FlashCardDataSet', data: FlashCardDataSet },

  // 1811
  { name: 'ANdata', data: ANdata },
  { name: 'dcFlashCards', data: dcFlashCards },
  { name: 'dkData', data: dkData },
  { name: 'duyData', data: duyData },
  { name: 'EMpracticeQuestions', data: EMpracticeQuestions },
  { name: 'isData', data: isData },
  { name: 'JAprototypes', data: JAprototypes },
  { name: 'JAFlashCards', data: JAFlashCards },
  { name: 'JHprotoPractice', data: JHprotoPractice },
  { name: 'pioneersData', data: pioneersData },
  { name: 'jpQuestions', data: jpQuestions },
  { name: 'KMstringAndArrayPrototypeMethods', data: KMstringAndArrayPrototypeMethods },
  { name: 'handbook', data: handbook },
  { name: 'lizTerminalAndGit', data: lizTerminalAndGit },
  { name: 'MFcodeQuestions', data: MFcodeQuestions },
  { name: 'mkCards', data: mkCards },
  { name: 'nirajData', data: nirajData },
  { name: 'rdCards', data: rdCards },
  { name: 'roTestCards', data: roTestCards },
  { name: 'SHmethods', data: SHmethods },
  { name: 'TSquizzes', data: TSquizzes },
  { name: 'TMQuestionDataset', data: TMQuestionDataset },
  { name: 'TWFlashCardDataSet', data: TWFlashCardDataSet }

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