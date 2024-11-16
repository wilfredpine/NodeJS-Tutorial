const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// using Stream

readStream.on('data', (chunk) => {
    console.log('--- NEW CHUNCK---');
    console.log(chunk);
    writeStream.write('\nNEW CHUNCK\n')
    writeStream.write(chunk)
});

// OR using PIPING

readStream.pipe(writeStream);

