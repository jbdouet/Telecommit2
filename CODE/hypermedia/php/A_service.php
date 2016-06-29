<?php

	class A_service{

		var $id;
		var $name;
		var $description;
		var $category;
		

		public function A_service($id,$name,$description,$category){
		
			$this->id=$id;
			$this->name=$name;
			$this->description=$description;
			$this->category=$category;
		}
	}

?>