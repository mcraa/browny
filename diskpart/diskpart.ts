import process from 'process';

var sudo = require('sudo-prompt');
var options = {
  name: 'Brownfield migrator',
};

sudo.exec(`diskpart /s ${process.argv[2]}.txt`, options,
  function(error, stdout, stderr) {
    if (error) throw error;
    console.log('stdout: ' + stdout);
  }
);