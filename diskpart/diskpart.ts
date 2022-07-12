// import { spawn } from 'child_process';
// import process from 'process';

var sudo = require('sudo-prompt');
var options = {
  name: 'Brownfield migrator',
};

sudo.exec('diskpart /s script.txt', options,
  function(error, stdout, stderr) {
    if (error) throw error;
    console.log('stdout: ' + stdout);
  }
);



// let child = spawn('pwd')
// child.stdout.pipe(process.stdout)
