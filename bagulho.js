var usuario;
var senha;
var nome;
var sobrenomw;
var idade;

function mudaPagina1() {

    window.location.href = "pandora.html"
}
function acessar(){
  usuario=document.getElementById("usuario").value;
  senha=document.getElementById("senha").value;
  nome=document.getElementById("nome").value;
  sobrenome=document.getElementById("sobrenome").value;
  idade=document.getElementById("idade").value;
  
  if(usuario != '' && senha !=''&& nome !=''&& sobrenome !=''&& idade !='')
     { comunicaServidor();
        //if ($json=json_encode("cadastrado"));
        alert("Cadastrado")
          mudaPagina1()
      
      
    }
  else{
    alert("Algo não foi preenchido")}}
function comunicaServidor(){

    var senha_hash_md5=$.MD5(senha);
    $.ajax({
        type:"POST",
        url:"treco.php",
        dataType:"json",
        data:{
            ch_usuario:usuario,
            ch_senha:senha_hash_md5
        }
    })

}
