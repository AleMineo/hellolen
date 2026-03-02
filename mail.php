<?php

if(!isset($_POST)) die('access denied');

//Recuperiamo tutte le variabili
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$suggerimento = $_POST['suggerimento'];
	$ip = $_SERVER['REMOTE_ADDR'];

//Qui andrà inserito il tuo indirizzo e-mail
$to = "ronnin@libero.it";

//Creazione del mesaggio da inviare
$message = "Hai ricevuto una e-mail da: ".$name." <br/><br/>  la sua e-mail: ".$mail."<br /><br/> ";
$message .= "Costume suggerito: ".$suggerimento."<br /><br /><br/> ";
$message .= "IP: ".$ip."<br />";
$subject = "Suggerimento costume";
$headers = "From: $mail \n";
$headers .= "Reply-To: $mail \n";
$headers .= "MIME-Version: 1.0 \n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1 \n";

//Se l'e-mail viene spedita correttamente, compare un messaggio di avvenuto invio
 if(mail($to, $subject, $message, $headers)){
	echo "<p>Message successful sent</p>";
}
//Altrimenti un messaggio di errore
else{ 
	echo "<p>There were problems sending your message...</p>";
}
?>

