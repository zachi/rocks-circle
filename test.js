//const { createCanvas } = require('canvas')
var fs = require('fs');
const { painter } = require('./painter');
const { blockImageMap } = require('./blockImageMap');

const dotenv = require('dotenv');
dotenv.config();

var blockImageMap1;
var outputFolder = process.env.outputFolder;
const numberOfImagesInBlock = +process.env.numberOfImagesInBlock;
const canvasWidth = +process.env.canvasWidth;
const canvasHeight = +process.env.canvasHeight;
const stimulusSide = +process.env.stimulusSide;
const diameter = +process.env.diameter + stimulusSide;
const colors = process.env.colors.split(',');
const distractorColors = process.env.distractorColors.split(',')
//const distractorValidIndexes = [1, 2, 4, 5];
const distractorValidIndexes = process.env.distractorValidIndexes.split(',').map(x => +x)

const radius = diameter / 2;
const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;
const squreSide = Math.ceil(Math.sqrt(stimulusSide * stimulusSide / 2));


const positions = [{
    x: centerX,
    y: centerY - radius
  },
  {
    x: centerX + radius * Math.sqrt(3) / 2,
    y: centerY - (radius / 2)
  },
  {
    x: centerX + radius * Math.sqrt(3) / 2,
    y: centerY + (radius / 2)
  },

  {
    x: centerX,
    y: centerY + radius
  },
  {
    x: centerX - radius * Math.sqrt(3) / 2,
    y: centerY + (radius / 2)
  },
  {
    x: centerX - radius * Math.sqrt(3) / 2,
    y: centerY - (radius / 2)
  }

]

var imageIndex = 0;
var blockIndex = 0;

const blockPath = './' + outputFolder + '/' + (blockIndex + 1);
blockImageMap1 = new blockImageMap(blockPath)
blockImageMap1.addImage(0, 3, 1, 1);
blockImageMap1.addImage(0, 3, 1, 1)
