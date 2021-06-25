var fs = require('fs');
const { blockImageMap } = require('./blockImageMap');
const { image } = require('./image');

const dotenv = require('dotenv');
dotenv.config();

var outputFolder = process.env.outputFolder;

start()

async function start() {
  var images = [];
  ///create all images in chronologic order

  for (let targetIndex = 0; targetIndex < 6; targetIndex++) {
    for (let distractorDistance = 1; distractorDistance < 6; distractorDistance++) {
      const distractorIndex = ( targetIndex + distractorDistance ) % 6;
      
      images.push(new image(targetIndex, distractorIndex));
      if (distractorDistance == 3)
        images.push(new image(targetIndex, distractorIndex));

    }
  }

  //shuffle images in blocks so target position is not in chronologic order
  // for (let blockIndex = 0; blockIndex < numberOfBlocks; blockIndex++) {
  //   shuffleArray(blocks[blockIndex]);
  // }

  if (!fs.existsSync('./' + outputFolder)) {
    fs.mkdirSync('./' + outputFolder);
  }


  const blockPath = './' + outputFolder;
  if (!fs.existsSync(blockPath)) {
    fs.mkdirSync(blockPath);
  }
  const blockImageMap1 = new blockImageMap(blockPath)
  for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
    const currentImage = images[imageIndex];
    const imageName = `image${(imageIndex + 1)}_${(currentImage.targetIndex + 1)}_${(currentImage.distractorIndex + 1)}.png`;
    const imagePath = `${__dirname}/${outputFolder}/${imageName}`;
    await currentImage.save(imagePath);

    await currentImage.save(imagePath);
    blockImageMap1.addImage(currentImage.targetIndex, currentImage.distractorIndex, imageName);
  }

}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}