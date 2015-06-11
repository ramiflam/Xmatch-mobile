<?php
include 'functions.php';
$db=getDbConnection();
if ($db->connect_error) {
echo '<p>connection failed</p>';
return;
}


//print_r($_FILES);
$target_path = 'uploads/';
$uploadFileName = $_FILES['fileToUpload']['name']; 
$message="SORRY, NOT FILE SELECTED.";
    //Checks if a file is selected
if(!$_FILES['fileToUpload']['name'])
{
    echo 'No file selected<br>';
       //header('Location: fileLoad.php');
       return;
}
 $uploadOk = 1;

// Check if file already exists
if(isset($_POST["submit"])) {
	$uploadOk = 1;
	if (file_exists($target_path.$uploadFileName )) {
	    echo 'Sorry, file &nbsp;' .  $uploadFileName . '&nbsp; already exists.';
	    $uploadOk = 0;
	}

$user=$_COOKIE["user"];
//echo '<br> User is &nbsp;'.$user;
$format="%Y%m%d%H%M%S";
//  echo '<br>Format is &nbsp;'.$format;
$strf=strftime($format);
//  echo '<br>date and time is &nbsp;'.$strf;
   
//upload the file
if($uploadOk){
         
	// set file name to be <timestaem>_origfilename>
	// $processFileName= $strf . '_' .$user. '_' .$origFileName;
	// echo '<br>'.$processFileName;
	
	// copy file to target location
	// echo '<br> Moving &nbsp;'.$uploadFileName. '&nbsp; to &nbsp;'.$target_path;
	
	$result = move_uploaded_file($_FILES["fileToUpload"]["tmp_name"],$target_path.$uploadFileName);
	if($result) {
	    echo "<br>The file has been uploaded";
	    // insert record into file_audit table
	    	$sql="INSERT INTO `file_audit` (FileName, FilePath, TimeLoaded, NumberOfRecords, RunStatus, User) 
	    	VALUES ('$uploadFileName', '$target_path', NOW(), 0, 'NotRun', '$user');" ;
	    	
		// echo '<br>'.$sql;
		$result = mysqli_query($db, $sql);
		
		// checking result
		
		 if($result)
		   {
		     echo '<br> File data loaded in file_audit table';
		     // return true;
		   }
		   else
		   {
			echo '<br> failed to load File data in file_audit table';
			// return false;
		   }
	
		}
		else {
		    echo "<br>There was an error uploading the file, please try again!";
		}
	  }
}

?>