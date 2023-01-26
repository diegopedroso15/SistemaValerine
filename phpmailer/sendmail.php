<!-- 

$nome = addcslashes($_POST['reservation_name']);
$mesa = addcslashes($_POST['reservation_phone']);
$mensagem = addcslashes($_POST['reservation_special_request']);


$to = "contato@whistle.com.br";
$subject = "Mesa Chamando";
$body = "Mesa: ".$mesa "\r\n".
        "Solicitando: ".$mensagem "\r\n".
        "Cliente: ".$nome;

$header = "From:diego.pedroso15@whistle.com.br". "\r\n"
            . "Reply-To:diego.pedroso15@gmail.com". "\r\n"
            ."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    echo("solicitado com sucesso");
}else{
    echo("Não solicitado");
}



?> -->
<?php

include("class.php.mailer.php");

function email($para_email, $para_nome, $assunto, $html){

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail2->From      = "diego.pedroso15@whistle.com.br";
    $mail2->FromName      = "Diego";
    
    
    
    $mail2->Host       = $smtp_host;   
    $mail2->Host       = $smtp_host;   
    $mail2->SMTPAuth   = true;               
    $mail2->Username   = $smtp_username;                   
    $mail2->Password   = $smtp_password;
}


?>