const yargs = require('yargs');

const argv = yargs
  .usage('Usage: $0 [option]')
  .help('help')
  .alias('help', 'h')