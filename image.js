var fs = require('fs');
const { painter } = require('./painter');
const dotenv = require('dotenv');
dotenv.config();
const outputFolder = process.env.outputFolder;
const canvasWidth = +process.env.canvasWidth;
const canvasHeight = +process.env.canvasHeight;
const stimulusSide = +process.env.stimulusSide;
const diameter = +process.env.diameter + stimulusSide;
const radius = diameter / 2;
const centerX = canvasWidth / 2;
const centerY = canvasHeight / 2;
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

class image {
  constructor(targetIndex, distractorIndex) {
    var self = this;

    self.targetIndex = targetIndex;
    self.distractorIndex = distractorIndex;

  }

  save(path) {
    var self = this;
    return new Promise((resolve, reject) => {
      const paint = new painter();
      //console.log(JSON.stringify(self.colors));
      for (let index = 0; index < positions.length; index++) {
        const position = positions[index];
        if (index === self.targetIndex) {
          paint.drawTarget(position);
          continue
        }
        if (index === self.distractorIndex) {
          paint.drawDistractor(position);
          continue
        }
        paint.drawCircle(position);
      }

      var out = fs.createWriteStream(path)
      var stream = paint.pngStream();
      stream.on('data', function (chunk) {
        out.write(chunk);
      });

      stream.on('end', resolve);
    });
  }

  shuffleColors(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array;
  }

  get distractorColor() {
    return this.colors[this.distractorIndex];
  }

}


module.exports = {
  image
}