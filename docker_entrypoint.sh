#!/bin/sh

export DB_DATA_PATH="/var/lib/mysql"
export DB_ROOT_PASS=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
export DB_NAME="aldente"
export DB_USER="aldente-backend"
export DB_PASS="gibbiX12345"

# Start mariadb
echo Setting up. please wait...
nohup /usr/bin/mysqld_safe --datadir=${DB_DATA_PATH} >/dev/null 2>&1 &

# Wait for everything to start up
sleep 10s

# Mysql conf
mysqladmin -u root password "${DB_ROOT_PASS}"

echo "CREATE DATABASE ${DB_NAME};" > /tmp/sql
echo "GRANT ALL ON ${DB_NAME}.* TO '${DB_USER}'@'127.0.0.1' IDENTIFIED BY '${DB_PASS}' WITH GRANT OPTION;" >> /tmp/sql
echo "GRANT ALL ON ${DB_NAME}.* TO '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}' WITH GRANT OPTION;" >> /tmp/sql
echo "GRANT ALL ON ${DB_NAME}.* TO '${DB_USER}'@'::1' IDENTIFIED BY '${DB_PASS}' WITH GRANT OPTION;" >> /tmp/sql
echo "DELETE FROM mysql.user WHERE User='';" >> /tmp/sql
echo "DROP DATABASE test;" >> /tmp/sql
echo "FLUSH PRIVILEGES;" >> /tmp/sql
cat /tmp/sql | mysql -u root --password="${DB_ROOT_PASS}"

# Migrate & seed db
npm run migrate
npm run seed

# Start app
npm run dev