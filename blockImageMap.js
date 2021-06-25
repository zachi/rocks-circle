
var fs = require('fs');



class blockImageMap {
  constructor(path) {
    var self = this;
    this.path = path + '/map.csv';
    //self.file = fs.createWriteStream(this.path, {flags: 'a'});
    fs.writeFileSync(this.path, 'Image Exct Name,Position_1,Position_2,Position_3,Position_4,Position_5,Position_6\r\n', 'utf8', function(){});
    //console.log('creating file: ' + this.path)
    // fs.open(path, 'w', function (err, file) {
    //   if (err) throw err;
    //   self.file = file;
    //   console.log('Saved!');
    // });
    }

  addImage(targetIndex, distractorIndex, imageName) {
    
    let text = `image${imageName},`;
    text += [0, 1, 2, 3, 4, 5].map(index => {
      if (index === targetIndex)
        return "t";
      if (index === distractorIndex)
        return "d";
      return "n";
    }) + '\r\n'
    try{
      //this.file.writeSync( text)
      //console.log(fs.existsSync(this.path)) 
      fs.appendFileSync(this.path, text);
      //console.log('exists: ' + fs.existsSync(this.path) + 'added: ' + text + ' to: ' + this.path)
      console.log(text);
    }
    catch(e){
     console.log(e)
    }
  }

}

module.exports = {
  blockImageMap
}