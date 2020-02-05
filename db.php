<?php
//Database connection.
$con = MySQLi_connect(
   "localhost", //Server host name.
   "scraping_sample_user", //Database username.
   "I7ZZGUpaHOHJIIZo", //Database password.
   "itu_sis_db" //Database name or anything you would like to call it.
);
//Check connection
if (MySQLi_connect_errno()) {
   echo "Failed to connect to MySQL: " . MySQLi_connect_error();
}
?>