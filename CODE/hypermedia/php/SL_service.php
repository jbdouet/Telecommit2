<?php

	class SL_service{

		var $id;
		var $name;
		var $activation;
		var $description;
		var $category;
	

		public function SL_service($id,$name,$activation,$description,$category){
		
			$this->id=$id;
			$this->name=$name;
			$this->activation=$activation;
			$this->description=$description;
			$this->category=$category;
		}
	}

?>