<?php

$name = $_POST['name']; 
$email = $_POST['email'];
$message = $_POST['message'];


$comment = $d->InsertComment($name, $email, $message);

while ($row = $comment->fetch_assoc()) {
    echo '<div class="cell">';
    echo '<div class="product">';
    echo '<div class="product-image">';
    echo '<img src="/images/products/'.$row["id"].'.jpg"> ';
    echo '</div>';
    echo '<span class="name">'. $row["name"].'</span>';
    echo '<span class="price">'. $row["price"].' €</span>';
    echo '<a class="btn btn-white" href="/products/product.php?pid='.$row["id"].'">Details</a>';
    echo '</div>';
    echo '</div>';
}

?>