<?php 

namespace youtubebase\model;

use m4\m4mvc\core\Model;

class Channel extends Model
{

	public static $table = 'channels';
	public static $tableCategoryMatcher = 'categoriesmatcher';

	public function create ($data)
	{
		$query = $this->query->insert(...array_keys($data))
							 ->into(self::$table)
							 ->build();

		return $this->save($query, $data, 1);
	}

	public function update ($id, $data)
	{
		$query = $this->query->update(self::$table)
							 ->set(array_keys($data))
							 ->where('id = :id')
							 ->build();
		$data['id'] = $id;

		return $this->save($query, $args);
	}

	public function getAll ($items = '*')
	{
		$query = $this->query->select($items)
		                     ->from(self::$table)
		                     ->build();

		return $this->fetchAll($query, []);
	}

	public function getByCategory ($id, $items = null)
	{
		if (!$items) {
			$items = ['ch.title', 'ch.thumbnail', 'ch.y_id'];
		}

		$query = $this->query->select(...$items)
							 ->from(self::$table . ' as ch')
							 ->join('left', 'categoriesmatcher as ca', 'ca.channel_id = ch.id')
							 ->where('category_id = :id')
							 ->build();
		return $this->fetchAll($query, ['id' => $id]);
	}

	public function getById ($id, $items = '*')
	{
		$query = $this->query->select($items)
							 ->from(self::$table)
							 ->where('id = :id')
							 ->build();

		return $this->fetch($query, ['id' => $id]);
	}

	public function addCategoryMatcher ($channel_id, $category_id)
	{
		$query = $this->query->insert('channel_id', 'category_id')
							 ->into(self::$tableCategoryMatcher)
							 ->build();
		return $this->save(
			$query, 
			['channel_id' => $channel_id, 'category_id' => $category_id]
		);
	}
}