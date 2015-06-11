<?php
include '../functions.php';
include '../home.html';
$db=getDbConnection();
if ($db->connect_error) {
echo '<p>connection failed</p>';}
$username=$_COOKIE["user"];
?>
<html>
<body>
<head>
    <link rel="stylesheet" type="text/css" href="main.css" />
 <br> <br> 
<title>
Xmatch-Genetics new_user </title>
<div class="register-form">
<h1>select_a_farm please</h1>
<form method="post" action="">

<p><label>select_a_farm&nbsp;&nbsp;&nbsp; : </label>

<?php
$query = "SELECT * FROM `users_details`"; 
$result = mysqli_query($db, $query);
?>
<select required name="select_a_farm"><option selected disabled value=" "> select_a_farm:</option>
<?php
while($fetch_options = mysqli_fetch_array($result)) { //Loop all the options retrieved from the query
?>
 //Added Id for Options Element 
<option value ="<?php echo $fetch_options['Farm']; ?>"><?php echo $fetch_options['Farm']; ?></option><!--Echo out options-->
<?php } ?>
 </select>

  <?php
  $selectFarm = $_POST['select_a_farm'];
  ?>
 <br><br> <input type="submit" value="Submit" name="submit" />
  <?php
  if(isset($_POST['submit'])){checck();}
  function checck(){
  $selectFarm = $_POST['select_a_farm'];
  if(!$selectFarm){
  echo nl2br("\n \n you are not select a farm");}
  else
  {
  header("location:menu.php");
  }
}
  ?>
</form>
</body>
</html>