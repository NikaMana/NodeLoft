const yargs = require('yargs');
const path = require('path');
const fs = require('fs');
const del = require('del');


const argv = yargs
  .usage('Usage: $0 [option]')
  .help('help')
  .alias('help', 'h')
  .version('0.0.1')
  .alias('version', 'v')
  .example('$0 --entry ./filesDir -D', '--> Sorting of files in folders')
  .option('entry', {
    alias: 'e',
    describe: 'The path of the sourse directory',
    demandOption: true
  })
  .option('output', {
    alias: 'o',
    describe: 'The path of the output directory',
    default: '/output'
  })
  .option('delete', {
    alias: 'D',
    describe: 'Delete sourse directory',
    default: false
  })
  .epilog('my first homework node.js')
  .argv
​
  console.log(argv)

paths.sourse = path.normalize(path.join(__dirname, argv.entry));
paths.dist = path.normalize(path.join(__dirname, argv.output));

const sortFiles = (src) => {
  fs.readdir(src, (error, files) => {
    if (error) {
      process.exit(500);
    }

    if (!files.length) {
      process.exit(404);
    }

    for (let index = 0; index < files.length; index++) {
      
    }
  }
}
