jQuery(document).ready(function(){
    $(".btnLogin").click(function(){
        if($(".inputEmail").val() == ''){
            alert("Por favor preencha o campo de e-mail!");
        }else{
            if($(".inputPassword").val() == ''){
                alert("Por favor preencha o campo de senha!");
            }else {
                if($(".inputPassword").val() == '1234'){
                    alert("Usuario logado com sucesso!");
                    $(".inputEmail").val("");
                    $(".inputPassword").val("");
                }else {
                    alert("Houve problema no login, verifique os dados!");
                }
            }   
        }
    });
});