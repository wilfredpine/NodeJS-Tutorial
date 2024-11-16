const fs = require('fs');

// read the file
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
  });

// writing files (replace existing text inside the file, create file if not exist)
fs.writeFile('./docs/blog1.txt', 'Hello', () => {
    console.log('file was written');
});

// create directories
//if not exist
if(!fs.existsSync('./assets')){
    // then create
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });
}

// remove directories
// check if existing
if(fs.existsSync('./assets')){
    // then remove
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// deleting files 
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}