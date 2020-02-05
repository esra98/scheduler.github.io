//Getting value from "ajax.php".
function fill(Value) {
   //Assigning value to "search" div in "search.php" file.
   $('#search').val(Value);
   //Hiding "display" div in "search.php" file.
   $('#display').hide();
}
$(document).ready(function() {
   //On pressing a key on "Search box" in "search.php" file. This function will be called.
   $("#search").keyup(function() {
       //Assigning search box value to javascript variable named as "name".
       var name = $('#search').val();
       //Validating, if "name" is empty.
       if (name == "") {
           //Assigning empty value to "display" div in "search.php" file.
           $("#display").html("");
       }
       //If name is not empty.
       else {
           //AJAX is called.
           $.ajax({
               //AJAX type is "Post".
               type: "POST",
               //Data will be sent to "ajax.php".
               url: "ajax.php",
               //Data, that will be sent to "ajax.php".
               data: {
                   //Assigning value of "name" into "search" variable.
                   search: name
               },
               //If result found, this funtion will be called.
               success: function(html) {
                   //Assigning result to "display" div in "search.php" file.
                   $("#display").html(html).show();
               }
           });
       }
   });
});
$(document).on('click', '#btn_add', function(e){  
          e.target.id='btn_remove';
          e.target.className='btn btn-danger pull-left';
          e.target.innerHTML = 'dersi çıkart';
          var CRN= e.target.parentElement.parentElement.id;
          
          var requested_to_name = e.target.parentElement.parentElement.name;
          var requested_to = e.target.value;
          $.ajax({
               //AJAX type is "Post".
               type: "POST",
               //Data will be sent to "ajax.php".
               url: "ajax.php",
               //Data, that will be sent to "ajax.php".
               data: {requested_to:requested_to,requested_to_name:requested_to_name,CRN:CRN},
               success: function() {
                 var res = requested_to.split(",");
                 var x;
                 
                 for (x of res) {
                    
                    document.getElementById(x).innerHTML+='<div class=' + CRN+'>'+requested_to_name+'</div>';
                  }
  
          var tableRef = document.getElementById('table2').getElementsByTagName('tbody')[0];
          var newRow   = tableRef.insertRow();
          newRow.id=CRN+'t'; 
          var newCell  = newRow.insertCell(0);
          var btnID='remove2';
          newCell.innerHTML='<div> Eklenen ders: '+requested_to_name+' | '+CRN+'</div><div><button id='+btnID+'>dersi çıkart</button></div>';        
          
           
        }, 
      });
   });

$(document).on('click', '#btn_remove', function(e){  
          var CRN= e.target.parentElement.parentElement.id;

          e.target.id='btn_add';
          e.target.className='btn btn-success pull-left';
          e.target.innerHTML = 'dersi ekle';
          var requested_to_name = e.target.parentElement.parentElement.name;
          var requested_to =e.target.value;
          $.ajax({
               //AJAX type is "Post".
               type: "POST",
               //Data will be sent to "ajax.php".
               url: "ajax.php",
               //Data, that will be sent to "ajax.php".
               data: {requested_to:requested_to,requested_to_name:requested_to_name,CRN:CRN},
               success: function() {
                 var elements = document.getElementsByClassName(CRN);
                  while(elements.length > 0){
                      elements[0].parentNode.removeChild(elements[0]);
                  }
                var elem = document.getElementById(CRN+'t');
                elem.parentNode.removeChild(elem);   
                    }, 
      
    });
 });

$(document).on('click', '#remove2', function(e){  
          var CRN=e.target.parentElement.parentElement.parentElement.id;
          CRN=CRN.slice(0, -1);
          //var CRN= e.target.parentElement.parentElement.id;
          $.ajax({
               //AJAX type is "Post".
               type: "POST",
               //Data will be sent to "ajax.php".
               url: "ajax.php",
               //Data, that will be sent to "ajax.php".
               data: {CRN:CRN},
               success: function() {
                 var elements = document.getElementsByClassName(CRN);
                  while(elements.length > 0){
                      elements[0].parentNode.removeChild(elements[0]);
                  }
                 var elem = document.getElementById(CRN+'t');
                 elem.parentNode.removeChild(elem);

                 var str1= CRN+'btn';
                 document.getElementsByName(str1)[0].click();
                    }, 
      
    });
 });

