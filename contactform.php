<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "gaureshchavan31@outlook.com";
  $headers = "From: ".$name;
  $txt = "You have received an e-mail from ".$name.".\n\n".$message;


  if(empty($name) || empty($mailFrom) || empty($subject) || empty($message)){
    echo "Please fill the required fields";
  }
  else {
    mail($mailTo, $subject, $txt, $headers);
    echo '<script type="text/javascript">  window.onload = function(){
      window.alert("Thank you! Your message has been received.");
      window.location.href="index.html";
    }</script>';
  }
}
?>
