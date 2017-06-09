<?php 

namespace youtubebase\controllers\api;

use m4\m4mvc\core\Controller;
use m4\m4mvc\helper\Response;

class Categories extends Controller
{
	public function __construct ()
	{
		$this->model = $this->getModel('Category');
	}

	public function add ($title)
	{
		$this->model->create($title);
	}

	public function update ($id, $title)
	{
		$this->model->update($id, $title);
	}

	public function list ()
	{
		$this->data['categories'] = $this->model->getAll('id, title');
	}
}