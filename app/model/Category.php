<?php 

namespace youtubebase\model;

use m4\m4mvc\core\Model;

class Category extends Model 
{

	public static $table = 'categories';

	public function create ($title) 
	{
		$query = $this->query->insert('title')->into(self::$table)->build();
		return $this->save($query, ['title' => $title], 1);
	}

	public function update ($id, $title)
	{    
		$query = $this->query->update(self::$table)
							 ->set('title')
							 ->where('id = :id')
							 ->build();	

		$args = ['id' => $id, 'title' => $title];

		return $this->save($query, $args);
	}

	public function getAll ($items = '*')
	{
		$query = $this->query->select($items)->from(self::$table)->build();

		return $this->fetchAll($query, []);
	}
}