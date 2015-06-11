<?php
 include "navigationBar.php";
 $db=getDbConnection();
if ($db->connect_error) {
echo '<p>connection failed</p>';
}
$browserLanguage='en';
$langAllignment=getLangAllingment($db, $browserLanguage);
if ($langAllignment=='R2L') {
	$class='hebrew';
}
else {
	$class='english';
}
$updatePhrase=getMsg($db, $browserLanguage, 'updateCows');
$createPhrase=getMsg($db, $browserLanguage, 'Create Future Insemination List');
$matchPhrase=getMsg($db, $browserLanguage, 'match');
$clearPhrase=getMsg($db, $browserLanguage, 'Clear');
$showPhrase=getMsg($db, $browserLanguage, 'show all');
$sendPhrase=getMsg($db, $browserLanguage, 'send to');
$set2_title=getMsg($db, $browserLanguage, 'set2_title');
$set2_subtitle1=getMsg($db, $browserLanguage, 'set2_subtitle1');
$set2_subtitle2=getMsg($db, $browserLanguage, 'set2_subtitle2');

$set2_juris1=getMsg($db, $browserLanguage, 'set2_juris1');
$set2_juris2=getMsg($db, $browserLanguage, 'set2_juris2');
$set2_juris3=getMsg($db, $browserLanguage, 'set2_juris3');
$set2_juris4=getMsg($db, $browserLanguage, 'set2_juris4');
$set2_juris5=getMsg($db, $browserLanguage, 'set2_juris5');
$set2_juris6=getMsg($db, $browserLanguage, 'set2_juris6');
$set2_juris7=getMsg($db, $browserLanguage, 'set2_juris7');

$set2_manufacture1=getMsg($db, $browserLanguage, 'set2_manufacture1');
$set2_manufacture2=getMsg($db, $browserLanguage, 'set2_manufacture2');
$set2_manufacture3=getMsg($db, $browserLanguage, 'set2_manufacture3');
$set2_manufacture4=getMsg($db, $browserLanguage, 'set2_manufacture4');
$set2_manufacture5=getMsg($db, $browserLanguage, 'set2_manufacture5');
 ?>
<!DOCTYPE html>
<html>
<body>
<head>
   <meta http-equiv="Content-Type" content="text/html/php" charset='utf-8' >
  <link rel="stylesheet" type="text/css" href="cows.css" />
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>
$(document).ready(function(){
$("#information").hide();
$("#cow_pic").click(function (e) {

    $("#information").toggle();
});
});

/*
$(document).ready(function() {
$("#information").hide();
  // Bind click event to a link
  $("#cow_pic").click(function(e) {
 /*   e.preventDefault();
    //  Show my popup with slide effect, this can be a simple .show() or .fadeToggle()
    $("#information").toggle();
    $("#cow_pic).toggle();
  });
  //Cancel the mouseup event in the popup
  $("#information").mouseup(function() {
    return false
  });
  // Bind mouseup event to all the document
  $(document).mouseup(function(e) {
    // Check if the click is outside the popup
    if($(e.target).parents("#information").length==0 && !$(e.target).is("#information")) {
      // Hide the popup
      $("#information").hide();
    }
  });
});*/
</script>
</head>
<div class="content">
<form  name="n" method="post"  action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']) ; ?>" >
    <ul>
        <li><?php echo $updatePhrase;?></li> 
    </ul>
      <ul>
       <a href="cows2.php"> <li id="createinsem"><?php echo $createPhrase;?></li></a>
    </ul>
</div>
<div class="sidebar">
<h1><?php echo $updatePhrase;?></h1>

        <table style="width:93%" id="heading">
            <tr>
        <td id="first" class="secttl"></td> 
        <td class="secttl">SA number </td>
        <td class="secttl"> burn number </td>
        <td class="secttl"> DFG </td>
        <td class="secttl" id="head">ECM (kg) </td>
        <td class="secttl">Lact. no. </td>
        <td class="secttl" id="head">Insem.no.</td>
        <td class="secttl" >Active?</td>
        <td class="secttl">Forced Bull</td>
    </tr>
            <?php
	 $query="SELECT cow_no,burn_no,Genetic_defect,brd_kg_ecm FROM `local_cows`";
        $row=mysqli_fetch_array($result,MYSQLI_ASSOC);
        $result = mysqli_query($db, $query);
                $result_list = array();
         while($row = mysqli_fetch_array($result))
{
$result_list[] = $row;
$rowcount=mysqli_num_rows($result);
$i=$i+1;
?>
<tr>
<td >
     <input type="checkbox"  value=""><img id="cow_pic" src="/assets/cow.jpg" height="25" width="30">
     </td>
     <td> <?php echo $row["cow_no"] ;?></td>
     <td><?php echo $row["burn_no"] ;?></td>
     <td><?php echo $row["Genetic_defect"] ;?></td>
     <td><?php echo $row["brd_kg_ecm"] ;?></td>
     <td>
<select name="lactno" id="lactno"  onchange="update()">
<?php 
for ($x = 0; $x <= 15; $x++) { ?>
   <option value='<?php echo "$x"; ?>'><?php echo "$x";?></option>
  <?php } ?> 
  </select></td>
       <td>
<select name="Insemno">
<?php 
for ($x = 0; $x <= 20; $x++) { ?>
   <option value="<?php echo "$x";?>"><?php echo "$x";?>
  <?php } ?> 
  </select></td>
    <td>
<select name="active">
  <option value="1">Yes</option>
  <option value="0">No</option>
  </select></td>
 <td> <select name="ForcedBull">
  <option value="Bill">Bill</option>
  <option value="Milk">Milk</option>
  <option value="-">-</option>
  </select></td>
  <td><?php echo $i ?></td>
<?php } ?>
    </tr>
</table>
<div class="button">
    <button class="submit" type="submit" name="submit" value="submit"><?php echo $clearPhrase;?></button>
    <button class="submit" type="submit"><?php echo $matchPhrase;?></button>
    <button class="submit" type="submit"><?php echo $showPhrase;?></button>
    <button class="submit" type="submit"><?php echo $sendPhrase;?></button> 
</div>

<div id="information">

	<div class="tooltip_title">GENERAL INFORMATION</div>
	<div class="tooltip_pic"></div>
	<div class="tooltip_info1">
		<div class="tooltip_col1">
			<div>
				SA NO: <span>4551</span>
			</div>
			<div>
				BURN NO: <span>4551</span>
			</div>
		</div>
		<div class="tooltip_col2">
			<div>
				Parent Violation <span>3661</span>
			</div>
			<div>
				Father of father <span>5157</span>
			</div>
			<div>
				Mother of mother <span>3597</span>
			</div>
			<div>
				Matching availability <span>Forbidden</span>
			</div>
		</div>
	</div>
	<div class="tooltip_info2">
		<div class="tooltip_col1">
			<div>
				General Size <span>90</span>
			</div>
			<div>
				General Udder <span>95</span>
			</div>
			<div>
				Nipple Location <span>99</span>
			</div>
			<div>
				Udder Depth <span>94</span>
			</div>
			<div>
				General Legs <span>96</span>
			</div>
			<div>
				Pelvic Structure <span>88</span>
			</div>
			<div>
				General Rating <span>93</span>
			</div>
		</div>
		<div class="tooltip_col2">
			<div>
				Milk [Kg] <span>90</span>
			</div>
			<div>
				Fat [%] <span>95</span>
			</div>
			<div>
				Protein [%] <span></span>
			</div>
			<div>
				STS <span>94</span>
			</div>
			<div>
				Fertility <span>96</span>
			</div>
		</div>
	</div>
	
</div>

</form>
 </div>
 <p id="qw"></p>
  <script>
    function update()
     {
      /*alert("I am an alert box!");*/
  var data = JSON.stringify({"action":"test"});
  $.ajax({
  type: "POST",
  dataType: "json",
  url: "ajax.php", //Relative or absolute path to response.php file
  data: document.getElementById('lactno').value,
  success: function (data) {
        alert("Form submitted successfully.\nReturned json: " + data);
      }
    });
    }
  /*
     function update()
     {
     alert("I am an alert box!");
     var a='';
      data=document.getElementById('lactno').value;
        document.write(a);
        document.write("<br>the i is<?php echo "$i";?>");
        document.getElementById('qw').innerHTML =
        "The ....is: " + a ;
     }
     function updatelactno(a)
     {
     document.write("nomiiiiiiiiiiiiiii"+a);
     }*/
   </script>
   <form action="" method="post">  
Search: <input type="text" name="term" /><br />  
<input type="submit" value="Submit" />  
</form>  


</body>
</html>
<?php 

    function updatelactn($lactno)
    {
     echo "the name is".$lactno;
    }
    if(isset($_POST['submit'])){
     $a=array();
    for($i=0; $i>5; $i++){
    $a[i]=$_POST["lactno"];
    }
 $selectLactno = $_POST["lactno"]; 
 $selectInsem = $_POST["Insemno"];
 $selectActive = $_POST["active"];
 echo "<br>the lact number is ".$selectLactno;
 echo "<br>the insem number is ".$selectInsem;
 echo "<br>the active number is ".$selectActive;
  } 
  for ($x = 0; $x <= 4; $x++) {
  }
 ?>

 

 
 