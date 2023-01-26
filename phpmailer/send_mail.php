<?php



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader


if (isset($_POST)) {

   #Cleaning Html,Script Tags and special characters
   function postTextClean($text) {
      $text            = trim(addslashes(htmlspecialchars(strip_tags($_POST[$text]))));
      return $text;
   }

   function getTextClean($text) {
      $text            = trim(addslashes(htmlspecialchars(strip_tags($_GET[$text]))));
      $search          = array('Ç','ç','Ğ','ğ','ı','İ','Ö','ö','Ş','ş','Ü','ü');
      $replace         = array('c','c','g','g','i','i','o','o','s','s','u','u');
      $new_text        = str_replace($search,$replace,$text);
      return $new_text;
   }

   #Let's get the data from the form   
   $contact_name     = $contact_name = $_POST['reservation_name'];
   $contact_email    = 'diego.pedroso15@usp.br';
   $contact_subject  = 'Solicitação na mesa';
   $contact_message  = $_POST['reservation_special_request'];
   $contact_phone    = $_POST['reservation_phone'];
   $mail_content     = "<div>
                           <strong>Name:</strong>
                           <span>{$contact_name}</span>
                        </div>
                        <div>
                           <strong>Phone:</strong>
                           <span>{$contact_phone}</span>
                        </div>
                        <div>
                           <strong>Message:</strong>
                           <p>".nl2br($contact_message)."</p>
                        </div>";

   // Hosting SMTP Settings
   $smtp_host        = 'smtp.hostinger.com';             // Enter the smtp server address you got from your hosting here
   $smtp_port        = 465;                                 // TCP port to connect to
   $smtp_username    = 'diego.pedroso15@whistle.com.br';                // SMTP username
   $smtp_password    = '97362292Diego@';                         // SMTP password

   // Instantiation and passing `true` enables exceptions
   $mail = new PHPMailer(true);

   try {
      //Server settings
      $mail->isSMTP();                                                 
      $mail->SMTPAuth   = true;                        
      $mail->Host       = $smtp_host;                     
      $mail->Username   = $smtp_username;                   
      $mail->Password   = $smtp_password;               
      $mail->SMTPSecure = 'tls';
      $mail->Port       = $smtp_port;                                    
      $mail->CharSet    = "UTF-8";    
      $mail->SMTPAutoTLS = false;                             
      $mail->setFrom($smtp_username, $contact_subject);
      $mail->addAddress('diego.pedroso15@whistle.com.br');            // Enter the email address you want to send here
      $mail->addReplyTo($contact_email, $contact_name);
      // Content
      $mail->isHTML(true);                                  
      $mail->Subject = $contact_subject;
      $mail->Body    = $mail_content;
      $mail->AltBody = strip_tags($mail_content);
      $mail->send();
      $message       = true;
      echo $message;   
   } catch (Exception $e) {
      $message       = false;
      echo $message;
      echo "Mailer Error: {$mail->ErrorInfo}";
      exit;
   }
}




?>