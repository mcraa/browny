echo "STARTED Brownfield migrator";

cd diskpart
npm start
cd ..

#FLASH
cd diskpart
ts-node multi-destination.ts ../../balena-cloud-ide49-amd64-intel-nuc-2.98.33-v13.1.11.img.zip '\\\\.\\PhysicalDrive1'
cd ..

#SET partitiion active
cd diskpart
npm run active
cd ..

read -p "Press enter to exit. Then reboot"