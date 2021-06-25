const { createCanvas, loadImage } = require('canvas');
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const canvasWidth = +process.env.canvasWidth;
const canvasHeight = +process.env.canvasHeight;
const canvasColor = process.env.canvasColor;
const stimulusSide = +process.env.stimulusSide;
const stimulusPrefix = process.env.stimulusPrefix;
const targetMultiplier = +process.env.targetMultiplier;

class painter {
  constructor() {
    
    this.canvas = createCanvas(canvasWidth, canvasHeight);
    this.context = this.canvas.getContext('2d');
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.moveTo(0, '00');
    this.context.lineTo(0, canvasHeight);
    this.context.lineTo(canvasWidth, canvasHeight);
    this.context.lineTo(canvasWidth, 0);
    this.context.closePath();
    this.context.fillStyle = canvasColor;
    this.context.fill();
  }

  drawTarget(position, color) {
    const side = stimulusSide * targetMultiplier
    loadImage(`resources/${stimulusPrefix}_target.jpg`).then(image => {
      //console.log(`drawing target ${position.x - (side / 2)} ${position.y - (side / 2)} ${side}`)
      this.context.drawImage(image, position.x - (side / 2), position.y - (side / 2), side, side)
    })
  }

  drawCircle(position, color) {
    loadImage(`resources/${stimulusPrefix}_grey.jpg`).then(image => {
      //console.log(`drawing image ${position.x - (stimulusSide / 2)} ${position.y - (stimulusSide / 2)} ${stimulusSide}`)
      this.context.drawImage(image, position.x - (stimulusSide / 2), position.y - (stimulusSide / 2), stimulusSide, stimulusSide)
    })

  }

  drawDistractor(position, color) {

    loadImage(`resources/${stimulusPrefix}.jpg`).then(image => {
      //console.log(`drawing distractor ${position.x - (stimulusSide / 2)} ${position.y - (stimulusSide / 2)} ${stimulusSide}`)
      this.context.drawImage(image, position.x - (stimulusSide / 2), position.y - (stimulusSide / 2), stimulusSide, stimulusSide)
    })

  }
  pngStream(){
    return this.canvas.pngStream()
  }

}



module.exports = {
  painter
}