/* jshint esversion: 6 */

var winstond = require('winstond');
const fse = require('fs-extra');
const conf = require('./conf');

process.stdout.write('Starting...');

var http = winstond.http.createServer({
  services: ['collect', 'query', 'stream'],
  host: conf.host || 'localhost', 
  port: conf.port || 4114
});

var log_dir = ((conf.log_dir || '/log')+'/').replace(/\/\/$/, '/');
fse.ensureDirSync(log_dir);

if(conf.files){
  Object.keys(conf.files).forEach(function(level){
    http.add(winstond.transports.File, {
      name: level,
      level: level,
      filename: log_dir + conf.files[level]
    });
  });  
}
else{
  http.add(winstond.transports.File, {
    name: 'info',
    level: 'info',
    filename: log_dir + 'info.log'
  });  
}

http.listen();

process.stdout.write('done\n');
