<?php
include '../functions.php';
include '../home.html';

$db=getDbConnection();
if ($db->connect_error) {
echo '<p>connection failed</p>';
}
$langAllignment=getLangAllingment($db, $browserLanguage);
if ($langAllignment=='R2L') {
	$class='hebrew';
}
else {
	$class='english';
}
$browserLanguage='en';
$username=$_COOKIE["user"];
$userfarm=$_COOKIE["farm"];
$details=  getUserFamily($db, $username);
$program=" fitness farm";
$dailyPhrase=getMsg($db, $browserLanguage, 'daily activity');
$cowsPhrase=getMsg($db, $browserLanguage, 'cows');
$bullsPhrase=getMsg($db, $browserLanguage, 'bulls');
$settingsPhrase=getMsg($db, $browserLanguage, 'settings');
$updatePhrase=getMsg($db, $browserLanguage, 'system updated');
$lastupdatePhrase=getMsg($db, $browserLanguage, 'last update');
$daysPhrase=getMsg($db, $browserLanguage, 'days ago');
?>
<!DOCTYPE html>
<html>
   <body>
<head>
    <meta http-equiv="Content-Type" content="text/html/php" charset='utf-8' >
    <link rel="stylesheet" type="text/css" href="navigationBar.css" />
<title>
Xmatch-Genetics new_user </title>

 
  <div class="header" id="header">
    
       <img src="/assets/logo.jpg">
         <div class="menu" id="menu">
<a href="dailyActivity.php" id="Dailyactivity"><?php echo $dailyPhrase ;?></a>

<a href="cows1.php" id="Cows"><?php echo $cowsPhrase ;?></a>

<a href="bulls.php" id="Bulls"><?php echo $bullsPhrase ;?></a>

<a href="settings1.php" id="Settings"><?php echo $settingsPhrase ;?></a>
</div>

       <div class="sucess">
      
  <p><?php echo $updatePhrase;?></p>
       <p id="update"><?php echo $lastupdatePhrase;?> 7 <?php echo $daysPhrase;?></p>
     </div>  
  </div>
</head>
<div class="details">
   <label>
          <?php echo ' '.$details." ".","." ".$userfarm;
          echo '   '."|"." Active Program:".$program;?> 
   </label></div>
</body>
<div class="right"></div>
</html>

