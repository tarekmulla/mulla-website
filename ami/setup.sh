echo "-------------- Updating packages --------------"
sudo dnf update -y

echo "-------------- Installing Apache server --------------"
sudo dnf install -y httpd wget

echo "-------------- Installing PHP --------------"
sudo dnf install -y php-fpm php-mysqli php-json php php-devel

echo "-------------- Installing mysql --------------"
sudo dnf install -y mysql-community-server

echo "-------------- Start the apache server --------------"
sudo systemctl start httpd
sudo systemctl enable httpd
sudo systemctl is-enabled httpd

echo "-------------- Installing git --------------"
sudo dnf install -y git
