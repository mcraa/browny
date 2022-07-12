import process from 'process';

var sudo = require('sudo-prompt');
var options = {
  name: 'Brownfield migrator',
};

sudo.exec(`ts-node ../etcher-sdk/examples/multi-destination.ts ../balena-cloud-ide49-amd64-intel-nuc-2.98.33-v13.1.11.img.zip '\\\\.\\PhysicalDrive1'`, options,
  function(error, stdout, stderr) {
    if (error) throw error;
    console.log('stdout: ' + stdout);
  }
);