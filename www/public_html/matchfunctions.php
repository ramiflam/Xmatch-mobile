<?php


    // Check for blood relation between cow and bull
    // return 0 for false, 1 for true (bull and cow are blood related) and -1 for db issues      
function bgfCheckForConsanguinity($db, $vrsCurrentCow, $vrsCurrentBull)    
{
        $bullQuery = "SELECT * FROM `bulls_details` WHERE bull_no='$vrsCurrentBull';" ;     
        $bullResult = mysqli_query($db, $bullQuery);
        If ($bullResult ->num_rows > 0)    {
        	$bullRow = mysqli_fetch_assoc($bullResult );
        }
        else  {
        	return -1;
        }
        
        $cowQuery = "SELECT * FROM `local_cows` WHERE cow_no='$vrsCurrentCow';" ;     
        $cowResult = mysqli_query($db, $cowQuery );
        If ($cowResult ->num_rows > 0)    {
        	$cowRow = mysqli_fetch_assoc($cowResult );
        }
        else  {
        	return -1;
        }
        
        // check if accumulated CVM values are more then 1
        $cowParam = $cowRow['CVM'];
        if ($cowParam > 1) {
        $cowParam = 1;
        }
	$bullParam= $bullRow['CVM'];
	if (($bullParam + $cowParam) > 1) {
	return 1;
	}
		
	// check parents
	$cowParam = $cowRow['father']; 
	$bullParam= $bullRow['SE'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	// check cow grandfathers vs bull father
	$cowParam = $cowRow['fatherfather'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	$cowParam = $cowRow['fathermother'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	$cowParam = $cowRow['father']; 
	$bullParam= $bullRow['father'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	$cowParam = $cowRow['fatherfather'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	$cowParam = $cowRow['fathermother'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	$cowParam = $cowRow['father']; 
	$bullParam= $bullRow['fatherfather'];
	if ($bullParam == $cowParam) {
	return 1;
	}

	$cowParam = $cowRow['fatherfather'];
	if ($bullParam == $cowParam) {
	return 1;
	}

	$cowParam = $cowRow['fathermother'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	$cowParam = $cowRow['father']; 
	$bullParam= $bullRow['motherfather'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	$cowParam = $cowRow['fatherfather'];
	if ($bullParam == $cowParam) {
	return 1;
	}

	$cowParam = $cowRow['fathermother'];
	if ($bullParam == $cowParam) {
	return 1;
	}
	
	// if arrived here then there is no blood relation - return 0 for false
	return 0;
}  // bgfCheckForConsanguinity


   
function bgfCheckSensitivity ($db, $vrsCurrentCow, $vrsCurrentBull, $vnSensitivity )    
{
        $bullQuery = "SELECT * FROM `bulls_details` WHERE bull_no='$vrsCurrentBull';" ;     
        $bullResult = mysqli_query($db, $bullQuery);
        If ($bullResult ->num_rows > 0)    {
        	$bullRow = mysqli_fetch_assoc($bullResult );
        }
        else  {
        	return false;
        }
        
        $cowQuery = "SELECT * FROM `local_cows` WHERE cow_no='$vrsCurrentCow';" ;     
        $cowResult = mysqli_query($db, $cowQuery );
        If ($cowResult ->num_rows > 0)    {
        	$cowRow = mysqli_fetch_assoc($cowResult );
        }
        else  {
        	return false;
        }
        
        $tekenQuery = "SELECT * FROM `tblTeken` where RecordType='1';" ;     
        $tekenResult = mysqli_query($db, $tekenQuery );
        If ($tekenResult ->num_rows > 0)    {
        	$tekenRow = mysqli_fetch_assoc($tekenResult );
        }
        else  {
        	return -1;
        }
        
        If (($bullRow['HeiferStatus'] == 0) and ($cowRow['PelvisStructure'] <  $tekenRow['TEKEN_AGAN2'])) {
	      	$nPelvis2 = 1;
	      	return false;
	      	}
	   	else {
	      	$nPelvis2 = 2;
  	}

    	// rest of check happends if $nPelvis2 == 2
   	
      	If ($cowRow['KGMILK'] == null)  {
            $dKGMilk = 0;
            }
      	 else {
            $dKGMilk = $cowRow['KGMILK'];
         }     	
      	
      	// next check is dependent in the VB code on frmMain.chkMatchProductionKGMilk.Value (if it was checked)
      	if ($dKGMilk <> 0) {
      	$dKGMilk = ($dKGMilk + $bullRow['KGMILK']) / 2;
      	}
      	else {
      	$dKGMilk =9999;
      	}
      	
      	if ($cowRow['Fertility'] == null) {
      	$dFertility = 0;
      	}
      	else {
      	$dFertility = $cowRow['Fertility'];
      	}
      	
      	// next check is dependent in original VB code on frmMain.chkMatchProductionFertility.Value  (if it is checked)
      	if ($dFertility <> 0) {
      	$dFertility = ($dFertility + $bullRow['Fertility']) / 2;
      	}
      	else {
      	$dFertility = 0;
      	}
      	
      	If ($cowRow['FatPercentage'] == null) {
        $dFatPercentage = 0;
        }
        else {
        $dFatPercentage = $cowRow['FatPercentage'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchProductionFatPercentage (that it is checked)
	if ($dFatPercentage  == 0) {
	$dFatPercentage = ($dFatPercentage + $bullRow['FatPercentage']) / 2;
	}
	else {
	$dFatPercentage = 9999;
	}
	
	If ($cowRow['KGProtein'] == null) {
        $dKGProtein = 0;
        }
        else {
        $dKGProtein = $cowRow['KGProtein'];
        }
        
 	if ($dKGProtein == 0) {
	$dKGProtein = ($dKGProtein + $bullRow['dKGProtein ']) / 2;
	}
	else {
	$dKGProtein = 9999;
	}
       
	If ($cowRow['ProteinPercentage'] == null) {
        $ProteinPercentage= 0;
        }
        else {
        $ProteinPercentage= $cowRow['ProteinPercentage'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchProductionProteinPercentage.Value  (if it is checked)
 	if ($ProteinPercentage== 0) {
	$ProteinPercentage= ($ProteinPercentage+ $bullRow['ProteinPercentage']) / 2;
	}
	else {
	$ProteinPercentage = 9999;
	}
	
	If ($cowRow['SCC'] == null) {
        $dSCC = 0;
        }
        else {
        $dSCC = $cowRow['SCC'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchProductionSCC.Value (if it is checked)
 	if ($dSCC == 0) {
	$dSCC = ($dSCC + $bullRow['SCC']) / 2;
	}
	else {
	$dSCC = 9999;
	}
	
	If ($cowRow['GeneralSize'] == null) {
        $dGeneralSize = 0;
        }
        else {
        $dGeneralSize = $cowRow['GeneralSize'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchJudgmentGeneralSize.Value (if it is checked)
 	if ($dGeneralSize == 0) {
	$dGeneralSize = ($dGeneralSize + $bullRow['GeneralSize']) / 2;
	}
	else {
	$dGeneralSize = 9999;
	}
	
	If ($cowRow['GeneralUdder'] == null) {
        $dGeneralUdder = 0;
        }
        else {
        $dGeneralUdder = $cowRow['GeneralUdder'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchJudgmentGeneralUdder.Value (if it is checked)
 	if ($dGeneralUdder == 0) {
	$dGeneralUdder = ($dGeneralUdder + $bullRow['GeneralUdder']) / 2;
	}
	else {
	$dGeneralUdder = 9999;
	}

	If ($cowRow['NippleLocation'] == null) {
        $dNippleLocation = 0;
        }
        else {
        $dNippleLocation = $cowRow['NippleLocation'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchJudgmentNippleLocation.Value (if it is checked)
 	if ($dNippleLocation == 0) {
	$dNippleLocation = ($dNippleLocation + $bullRow['NippleLocation']) / 2;
	}
	else {
	$dNippleLocation = 9999;
	}

	If ($cowRow['UdderDepth'] == null) {
        $dUdderDepth = 0;
        }
        else {
        $dUdderDepth = $cowRow['UdderDepth'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchJudgmentUdderDepth.Value (if it is checked)
 	if ($dUdderDepth == 0) {
	$dUdderDepth = ($dUdderDepth + $bullRow['UdderDepth']) / 2;
	}
	else {
	$dUdderDepth = 9999;
	}

	If ($cowRow['GeneralLegs'] == null) {
        $dGeneralLegs = 0;
        }
        else {
        $dGeneralLegs = $cowRow['GeneralLegs'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchJudgmentGeneralLegs.Value (if it is checked)
 	if ($dGeneralLegs == 0) {
	$dGeneralLegs = ($dGeneralLegs + $bullRow['GeneralLegs']) / 2;
	}
	else {
	$dGeneralLegs = 9999;
	}

	If ($cowRow['OverallGrade'] == null) {
        $dOverallGrade = 0;
        }
        else {
        $dOverallGrade = $cowRow['OverallGrade'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchJudgmentGeneralLegs.Value (if it is checked)
 	if ($dOverallGrade == 0) {
	$dOverallGrade = ($dOverallGrade + $bullRow['OverallGrade']) / 2;
	}
	else {
	$dOverallGrade = 9999;
	}

	If ($cowRow['PelvisStructure'] == null) {
        $dPelvisStructure = 0;
        }
        else {
        $dPelvisStructure = $cowRow['PelvisStructure'];
        }
        
        // next check is dependent in original VB code on frmMain.chkMatchJudgmentPelvisStructure.Value (if it is checked)
 	if ($dPelvisStructure == 0) {
	$dPelvisStructure = ($dPelvisStructure + $bullRow['PelvisStructure']) / 2;
	}
	else {
	$dPelvisStructure = 9999;
	}

	// Now comes a long condition to decide if sensitivity is true or not
	if ( ($dKGMilk >= ($tekenRow['TEKEN_MILK'] * $tekenRow['HIGH_SENS'])) and 
	     ($dFertility >= ($tekenRow['TEKEN_FAT'] * $tekenRow['HIGH_SENS'])) and 
	     ($dFatPercentage >= ($tekenRow['TEKEN_FATP'] * $tekenRow['HIGH_SENS'])) and 
	     ($dKGProtein >= ($tekenRow['TEKEN_PRT'] * $tekenRow['HIGH_SENS'])) and
	     ($dProteinPercentage >= ($tekenRow['TEKEN_PRTP'] * $tekenRow['HIGH_SENS'])) and
	     ($dSCC >= ($tekenRow['TEKEN_SCC'] * $tekenRow['LOW_SENS'])) and
	     ($dGeneralSize >= $tekenRow['SHIPUT_HIGH_SENS'] ) and
	     ($dGeneralUdder >= $tekenRow['SHIPUT_HIGH_SENS'] ) and
	     ($dNippleLocation >= $tekenRow['SHIPUT_HIGH_SENS'] ) and
	     ($dUdderDepth >= $tekenRow['SHIPUT_HIGH_SENS'] ) and
	     ($dGeneralLegs >= $tekenRow['SHIPUT_HIGH_SENS'] ) and
	     ($dOverallGrade >= $tekenRow['SHIPUT_HIGH_SENS'] ) and
	     ($dPelvisStructure >= $tekenRow['TEKEN_AGAN'] )
	)  {
	return true;  // return true for check sensitivity
	}
	else {
	return false;
	}
   
}  // bgfCheckSensitivity 

function gsMatchDailyActivitiesBulls($db, $vrsCurrentCow)
{

	$bullsList = array("");
	$bBullsFound = 0;
        $cowQuery = "SELECT * FROM `local_cows` WHERE cow_no='$vrsCurrentCow';" ;     
        $cowResult = mysqli_query($db, $cowQuery );
        If ($cowResult ->num_rows > 0)    {
        	$cowRow = mysqli_fetch_assoc($cowResult );
        }
        else  {
        	return $bullsList;
        }
        
        

} // gsMatchDailyActivitiesBulls



?> 