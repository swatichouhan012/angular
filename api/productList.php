<?php
include "config.php";
$sql = ("SELECT * FROM `product`");
$result = mysqli_query($connection,$sql);
$data=array();
while($row=mysqli_fetch_assoc($result)){
	$data[]=$row;
}
print_r(json_encode($data));

?>
