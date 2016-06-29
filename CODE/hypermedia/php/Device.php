<?php

	class Device{

		var $id;
		var $name;
		var $category;
		var $description;
		var $price;
		var $os;
		var $screen;
		var $capacity;
		var $ram;
		var $speed;
		var $network;

		public function Device($id,$name,$category,$description,$price,$os,$screen,$capacity,$ram,$speed,$network){
		
			$this->id=$id;
			$this->name=$name;
			$this->category=$category;
			$this->description=$description;
			$this->price=$price;
			$this->os=$os;
			$this->screen=$screen;
			$this->capacity=$capacity;
			$this->ram=$ram;
			$this->speed=$speed;
			$this->network=$network;
		}
	}

?>