const yargs = require('yargs');
const path = require('path');
const fs = require('fs');
const paths = { sourse:null, dist: null };

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
  .argv;
console.log(argv)

paths.sourse = path.normalize(path.join(__dirname, argv.entry));
paths.dist = path.normalize(path.join(__dirname, argv.output));

function createDir(path, callback) {
  fs.exists(path, () => {
    fs.mkdir(path, () => {
      callback()
    });
  });
}

const sortFiles = (src) => {
  fs.readdir(src, (error, files) => {
    if (error) {
      process.exit(500);
    }

    if (!files.length) {
      process.exit(404);
    }

    for (let index = 0; index < files.length; index++) {
      const currentUrl = path.join(src, files[index]);
      fs.stat(currentUrl, (error, state) => {
        if (error) throw error;

        if (state.isDirectory()) {
          sortFiles(currentUrl);
        } else {
          const pathNewDir = path.join(paths.dist, path.parse(files[index]).name.charAt(0).toUpperCase());
  
          createDir(paths.dist, () => {
            createDir(pathNewDir);
          });
          fs.copyFile(currentUrl, path.join(pathNewDir, files[index]), () => {

          });
          console.info(path.parse(path.join(pathNewDir, files[index])));
          console.log(' ');
        }
      });
        fs.stat(src, (error) => {
          if (error) throw error;
          console.log(`stats: ${JSON.stringify(stats)}`);
        });
    }
  });
}

sortFiles(paths.sourse);

process.on('exit', code => {
  switch (code) {
    case 500:
      console.error('Directory is failed');
      break;
    case 404:
      console.error('Directory is clear');
      break;
  }  
});
 