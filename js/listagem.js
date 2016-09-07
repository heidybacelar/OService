$(document).ready(function(){
    
    $.getJSON('/model/listar-os.php', function(dados){
        
        for(var i in dados){
            
            var status = 'default';
                    
            if(dados[i].status == 'Aberta'){
                status = 'danger';
            }else if (dados[i].status == 'Execução'){
                status = 'warning';
            }
            
            var data = new Date(dados[i].data);           
        
            var tr = $('<tr>'
                            +'<td>'+ dados[i].solicitante +'</td>'
                            +'<td>'+ data.getDate() +'/'+ data.getMonth() +'/'+ data.getFullYear() +'/'+ data.getHours() +':'+ data.getMinutes() +'</td>'
                            +'<td>'+ dados[i].departamento +'</td>'
                            +'<td><span class="label label-'+status+'">'+ dados[i].status +'</span>'
                            +'</td>'                                       
                        +'</tr>');
            $('lista-os tbody').append(tr);        
        }       
        
    });        
});

