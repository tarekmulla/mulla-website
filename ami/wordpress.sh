WORDPRESS_DIR=/var/www/html
SITE_DOMAIN=mulla.au
WORDPRESS_USERNAME=tarekmulla
WORDPRESS_PASSWORD=P@ssw0rd
DB_NAME=mulla
DB_USER=mullaadmin
DB_PASSWORD=P@ssw0rd
ADMIN_EMAIL=admin@mulla.au


echo "-------------- Create database and user --------------"
sudo mysql -sfu root <<EOS
CREATE DATABASE IF NOT EXISTS $DB_NAME;
CREATE USER IF NOT EXISTS '$DB_USER'@localhost IDENTIFIED BY '$DB_PASSWORD';
GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@localhost;
-- make changes immediately
FLUSH PRIVILEGES;
EOS

sudo mysql -sfu root <<EOS
SELECT '-----DATABASES-----' as '';
SHOW DATABASES;
SELECT '-----USERS-----' as '';
SELECT user FROM mysql.user;
EOS

echo "-------------- Install Wordpress --------------"
cd $WORDPRESS_DIR
wp core download --locale=en_AU
wp config create \
    --allow-root \
    --dbname=$DB_NAME \
    --dbuser=$DB_USER \
    --dbpass=$DB_PASSWORD \
    --locale=en_AU

sudo mysql -sfu root <<EOS
SELECT '-----DATABASES-----' as '';
SHOW DATABASES;
SELECT '-----USERS-----' as '';
SELECT user FROM mysql.user;
EOS

wp core install \
    --allow-root \
    --url=https://$SITE_DOMAIN \
    --title=$SITE_DOMAIN  \
    --admin_user=$WORDPRESS_USERNAME \
    --admin_password=$WORDPRESS_PASSWORD \
    --admin_email=$ADMIN_EMAIL \
    --locale=en_AU

wp core update
wp core update-db
wp plugin update --all
wp theme update --all

echo "-------------- Currect wordpress version is: $(wp core version) --------------"
