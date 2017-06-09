<?php 

namespace youtubebase\controllers\api;

use m4\m4mvc\core\Controller;
use m4\m4mvc\helper\Response;


class Home extends Controller
{
	public function Index ()
	{
		Response::success('Hello World!');
	}
}