<?php
include "config.php";
$data = json_decode(file_get_contents("php://input"));
$name = ucwords($data->name);
$category = ucwords($data->category);
$price = $data->price;
$image = $data->image;
$sql = ("INSERT INTO `product`(`name`, `category`, `price`, `image`) VALUES ('$name','$category','$price','$image')");
$result = mysqli_query($connection,$sql);
if($result==true){
	echo "success";
}
?>
