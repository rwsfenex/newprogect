<?php

if ( ! empty( $_POST["user_name"] ) && ! empty( $_POST["user_email"] ) && ! empty( $_POST["user_phone"] ) ) {
	$email = $_POST['user_email'];
	$name  = $_POST['user_name'];
	$phone = $_POST['user_phone'];
	$mes = $_POST['mes'];


	$to      = "burakov.s@internet.ru";
	$subject = 'Посетитель оставил отзыв на сайте "Онлайн-курсы Международной академии менеджмента"';

		$message = $name . "\r\n" . $email . "\r\n".$phone . "\r\n Отзыв: \r\n".$mes;



	$headers = "From: user <info@mam-unex.ru>\r\n" .
	           "MIME-Version: 1.0" . "\r\n" .
	           "Content-type: text/html; charset=UTF-8" . "\r\n";

	mail( $to, $subject, $message, implode( "\r\n", $headers ) ); //Отправка письма с помощью функции mail

}


?>

