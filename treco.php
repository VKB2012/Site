<?php  
         
     $usuario=$_POST["ch_usuario"];
     $senha=$_POST["ch_senha"];
     
     if ($senha != ''){
         $json = json_encode("cadastrado");

     }

     else
     {
      
         $json = json_encode("nao cadastrado");
         echo $json;
       
     }
?>
     
