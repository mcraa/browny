echo "STARTED Brownfield migrator";

cd diskpart
ts-node ./diskpart.ts
cd ..

#FLASH
echo 'flash'

#SET partitiion active
echo 'active'

#read -p "Press enter to exit. Then reboot"