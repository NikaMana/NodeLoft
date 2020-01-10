const fs = require('fs');
const path = require('path');
// const argv = require("minimist")(process.argv.slice(2));

// Developers requires
const readDir = require('./src/files/readDir');
const deleteFolderRecursive = require('./src/files/deleteDir');
const logs = require('./src/logs');

var dir = process.cwd();

program
  .version('1.0.0')
  .option('-s, --source-dir <path>', 'Директория которую надо отсортировать')
  .option('-d, --destination-dir <path>', 'Директория результат работы парсинга', './output')
  .option('-r, --rm [status]', 'Удалить исходную директорию', false)
  .parse(process.argv);

process.on('exit', code => {
  switch (code) {
  case 404:
    logs.error('Нет такого файла или директории:', path.resolve(program.sourceDir));
    break;
  default:
    if (program.rm) {
      deleteFolderRecursive(sourceDir);
      console.log('\nИсходная директория удалена');

    }
    break;
  }
});

// Проверяем была ли введена директория для парсинга
if (program.sourceDir === '-d' || !program.sourceDir || !program.destinationDir) {
  console.info('Не был предан обязательный парамер: ');

  if (!program.sourceDir) {
    logs.error('Параметр -s, --source-dir:', 'пуст');
    program.help();
    process.exit(500);
  }
}

var sourceDir = path.resolve(dir, path.normalize(program.sourceDir));
var destDir = path.resolve(dir, path.normalize(program.destinationDir));

if (!fs.existsSync(sourceDir)) {
  process.exit(404);
}

if (!fs.existsSync(program.destinationDir)) {
  fs.mkdirSync(destDir);
}
readDir(sourceDir, destDir);

// const yargs = require('yargs');
// const path = require('path');
// const fs = require('fs');
// const paths = { sourse:null, dist: null };

// const argv = yargs
//   .usage('Usage: $0 [option]')
//   .help('help')
//   .alias('help', 'h')
//   .version('0.0.1')
//   .alias('version', 'v')
//   .example('$0 --entry ./filesDir -D', '--> Sorting of files in folders')
//   .option('entry', {
//     alias: 'e',
//     describe: 'The path of the sourse directory',
//     demandOption: true
//   })
//   .option('output', {
//     alias: 'o',
//     describe: 'The path of the output directory',
//     default: '/output'
//   })
//   .option('delete', {
//     alias: 'D',
//     describe: 'Delete sourse directory',
//     default: false
//   })
//   .epilog('my first homework node.js')
//   .argv;
// console.log(argv)

// paths.sourse = path.normalize(path.join(__dirname, argv.entry));
// paths.dist = path.normalize(path.join(__dirname, argv.output));

// const sortFiles = (src) => {
//   fs.readdir(src, (error, files) => {
//     if (error) {
//       process.exit(500);
//     }

//     if (!files.length) {
//       process.exit(404);
//     }

//     for (let index = 0; index < files.length; index++) {
//       const currentUrl = path.join(src, files[index]);
//       const state = fs.stat(currentUrl);

//       if (state.isDirectory()) {
//         sortFiles(currentUrl);
//       } else {
//         const pathNewDir = path.join(path.dist, path.parse(files[index]).name.charAt(0).toUpperCase());

//         createDir(paths.dist);
//         createDir(pathNewDir);
//         fs.copyFile(currentUrl, path.join(pathNewDir, files[index]));
//         console.info(path.parse(path.join(pathNewDir, files[index])));
//         console.log(' ');
//       }
//     }
//   });
// }

// readDir(argv.entry, argv.output);

// process.on('exit', code => {
//   switch (code) {
//     case 500:
//       console.error('Directory is failed');
//       break;
//     case 404:
//       console.error('Directory is clear');
//       break;
//   }  
// });
 
