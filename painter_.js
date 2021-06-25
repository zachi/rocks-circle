//const { createCanvas, loadImage } = require('canvas');
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const canvasWidth = +process.env.canvasWidth;
const canvasHeight = +process.env.canvasHeight;
const stimulusSide = +process.env.stimulusSide;

class painter {
  constructor() {
    // this.canvas = createCanvas(canvasWidth, canvasHeight);
    // this.context = this.canvas.getContext('2d');
    // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // this.context.beginPath();
    // this.context.moveTo(0, '00');
    // this.context.lineTo(0, canvasHeight);
    // this.context.lineTo(canvasWidth, canvasHeight);
    // this.context.lineTo(canvasWidth, 0);
    // this.context.closePath();
    // this.context.fillStyle = '#3b5876';
    // this.context.fill();
  }

  drawTarget(position, color) {
    // this.context.beginPath();
    // this.context.moveTo(position.x, position.y + stimulusSide / 2);
    // this.context.lineTo(position.x + stimulusSide / 2, position.y);
    // this.context.lineTo(position.x, position.y - stimulusSide / 2);
    // this.context.lineTo(position.x - stimulusSide / 2, position.y);
    // this.context.lineTo(position.x, position.y + stimulusSide / 2);
    // this.context.closePath();
    // this.context.fillStyle = color;
    // this.context.fill();
    const side = stimulusSide * 1.2
    //loadImage('resources/yellow_target.jpg').then(image => {
      //this.context.drawImage(image, position.x - (side / 2), position.y - (side / 2), side, side)
    //})
  }

  drawCircle(position, color) {

    //loadImage('resources/yellow_grey.jpg').then(image => {
      //this.context.drawImage(image, position.x - (stimulusSide / 2), position.y - (stimulusSide / 2), stimulusSide, stimulusSide)
    //})

  }

  drawDistractor(position, color) {

    //loadImage('resources/yellow.jpg').then(image => {
      //this.context.drawImage(image, position.x - (stimulusSide / 2), position.y - (stimulusSide / 2), stimulusSide, stimulusSide)
    //})

  }
  pngStream(){
    return this.canvas.pngStream()
  }

}



module.exports = {
  painter
}