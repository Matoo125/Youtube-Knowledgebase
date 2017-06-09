<?php 

namespace youtubebase\controllers\api;

use m4\m4mvc\core\Controller;
use m4\m4mvc\helper\Response;
use m4\m4mvc\helper\Request;

class Channels extends Controller 
{
	public function __construct ()
	{
		$this->model = $this->getModel('Channel');
	}

	public function index ()
	{
		Response::success('Hello from Channels Controller');
	}


	public function add ()
	{
		Request::forceMethod('post');
		Request::required($_POST, ['y_id', 'title', 'description', 'published_at', 'thumbnail']);

		$id = $this->model->create([
			'y_id'	=>	$_POST['y_id'],
			'title'	=>	$_POST['title'],
			'thumbnail'		=>	$_POST['thumbnail'],
			'description'	=>	$_POST['description'],
			'published_at'	=>  date('Y-m-d H:m:i', strtotime($_POST['published_at']))
		]);

		if ($id) {
			if (isset($_POST['categories'])) {
				if (is_string($_POST['categories'])) {
					$_POST['categories'] = [$_POST['categories']];
				}
				foreach ($_POST['categories'] as $cid) {
					$this->model->addCategoryMatcher($id, $cid);
				}
			}
			Response::success('Channel has been added. ');
		} else {
			Response::error('Something went wrong. Please contact the developer');
		}

	}

	public function update ()
	{
		Request::forceMethod('post');
		Request::required($_POST, ['id']);
	}

	public function list ()
	{
		$this->data['channels'] = $this->model->getAll();
	}

	public function listByCategory ($id)
	{
		$this->data['channels'] = $this->model->getByCategory($id);
	}

}