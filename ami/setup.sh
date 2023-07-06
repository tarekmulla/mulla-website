echo "-------------- Update packages --------------"
dnf update -y

echo "-------------- Install Apache server --------------"
dnf install -y httpd wget

echo "-------------- Install PHP --------------"
dnf install -y php-fpm php-mysqli php-json php php-devel

echo "-------------- Install mariadb --------------"
dnf install -y mariadb105-server

echo "-------------- Start the apache server --------------"
systemctl start httpd
systemctl enable httpd
systemctl is-enabled httpd

echo "-------------- Start the mariadb server --------------"
systemctl start mariadb
systemctl enable mariadb
systemctl is-enabled mariadb

echo "-------------- Install git --------------"
dnf install -y git

echo "-------------- Install wp-cli --------------"
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
# php wp-cli.phar --info    # check if it works
chmod +x wp-cli.phar
mv wp-cli.phar /usr/local/bin/wp

echo "-------------- Give the normal user the ownership of www directory --------------"
chown -R ec2-user /var/www
