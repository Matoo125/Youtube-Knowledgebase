<?php

use m4\m4mvc\core\App;

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once('../vendor/autoload.php');

require_once('controllers/api/Home.php');
require_once('controllers/api/Categories.php');
require_once('model/Category.php');
require_once('controllers/api/Channels.php');
require_once('model/Channel.php');
//require_once('controllers/api/User.php');
//require_once('controllers/api/Code.php');
//require_once('model/User.php');

define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(__FILE__));

header('Access-Control-Allow-Origin: http://localhost:8080'); 
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Content-Type');

session_start();
header("Cache-Control: no-cache");
header("Pragma: no-cache");

$config = parse_ini_file('config/app.ini');

$app = new App;
$app->settings = [
	'namespace'	=>	'youtubebase'
];

$app->paths = [
	'controllers'	=>	ROOT . DS . 'controllers'
];


$app->db([
	'DB_HOST'		=>	$config['DB_HOST'],
	'DB_PASSWORD'	=>	$config['DB_PASS'],
	'DB_NAME'		=>	$config['DB_NAME'],
	'DB_USER'		=>	$config['DB_USER']
]);

$app->run();
