sudo fallocate -l 2048M /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

sudo cp /etc/fstab /etc/fstab.back

echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab