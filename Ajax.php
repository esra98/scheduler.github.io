<?php
//Including Database configuration file.
include "db.php";
//Getting value of "search" variable from "script.js".
if (isset($_POST['search'])) {
//Search box value assigning to $Name variable.
   $Name = $_POST['search'];
//Search query.
   $Query = "SELECT * FROM course_info_db WHERE course_code LIKE '%$Name%' ";
//Query execution
   $ExecQuery = MySQLi_query($con, $Query);
//Creating unordered list to display result.
   echo '
<div class="list-group">
   ';
   //Fetching result from database.
   while ($Result = MySQLi_fetch_array($ExecQuery)) {
       ?>
   <a class="list-group-item list-group-item-action flex-column align-items-start" id='<?php echo $Result['CRN']; ?>' name='<?php echo $Result['course_code']; ?>' >
       <div class="d-flex w-100 justify-content-between" >
        <button  id='btn_add' class="btn btn-success pull-left" value='<?php echo $Result['course_time_code']; ?>' name='<?php echo $Result['CRN']; ?>btn'>Dersi Ekle</button>    
       </div>  
        <h4 class="first_name"><?php echo $Result['course_code']; ?> | <?php echo $Result['course_title']; ?></h4>
        <h5 class="last_name">CRN: <?php echo $Result['CRN']; ?></h5>
        <h5 class="mb-1">Instructor: <?php echo $Result['instructor']; ?></h5>
        <small>günler: <?php echo $Result['course_day']; ?> | saatler: <?php echo $Result['course_time']; ?> | kampüs: <?php echo $Result['campus']; ?> | oda: <?php echo $Result['room']; ?></small>
   </a>   
   <?php
}
}
?>
</div> 