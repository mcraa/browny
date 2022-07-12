echo "STARTED Brownfield migrator";

cd diskpart
npm start
cd ..

#FLASH
cd etcher-sdk
echo 'flash'
cd ..

#SET partitiion active
cd diskpart
npm run active
cd ..

read -p "Press enter to exit. Then reboot"