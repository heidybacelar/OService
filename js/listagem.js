$(document).ready(function(){
    
    carregaOS();  
    
    $('#logout').click(function(){
        document.cookie = "os-login=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        location.href = "/login.html";
    });
});

var abreOS = function(){
    
    var os = {"num": $(this).attr('os-num')}
    $.getJSON('/model/exibir-os.php',os, function(dados){
        
        $('#modal-os .campo-numero').html(dados[0].numero);
        $('#modal-os .campo-solicitante').html(dados[0].solicitante);
        $('#modal-os .campo-data').html(dados[0].data);
        $('#modal-os .campo-departamento').html(dados[0].departamento);
        $('#modal-os .campo-solicitacao').html(dados[0].solicitacao);        
        
        $('#modal-os').modal({
        show: true
        }); 
    });
};

function carregaOS(){
    
    $('#lista-os tbody').empty();
    
    $.getJSON('/model/listar-os.php', function(dados){
        
        for(var i in dados){
            
            var status = 'default';
                    
            if(dados[i].status == 'Aberta'){
                status = 'danger';
            }else if (dados[i].status == 'Execução'){
                status = 'warning';
            }
            
            var data = new Date(dados[i].data);           
        
            var tr = $('<tr os-num="'+dados[i].numero+'">'
                            +'<td>'+ dados[i].numero +'</td>'
                            +'<td>'+ dados[i].solicitante +'</td>'
                            +'<td>'+ data.getDate() +'/'+ data.getMonth() +'/'+ data.getFullYear() +' '+ data.getHours() +':'+ data.getMinutes() +'</td>'
                            +'<td>'+ dados[i].departamento +'</td>'
                            +'<td><span class="label label-'+status+'">'+ dados[i].status +'</span>'
                            +'</td>'                                       
                        +'</tr>');
                
            $(tr).click(abreOS);       
            
            $('#lista-os tbody').append(tr);        
        }         
    });      
}