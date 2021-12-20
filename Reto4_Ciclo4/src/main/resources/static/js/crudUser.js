
function traerInformacionCategorias(){
    $.ajax({
        url:"http://localhost:8080/api/user/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){


    let myTable="<table class='table table-success table-bordered'>";
    myTable+="<tr>";
    myTable+="<td>"+"Id"+"</td>";
    myTable+="<td>"+"identification"+"</td>";
    myTable+="<td>"+"name"+"</td>";
    myTable+="<td>"+"address"+"</td>";
    myTable+="<td>"+"cellPhone"+"</td>";
    myTable+="<td>"+"email"+"</td>";
    myTable+="<td>"+"password"+"</td>";
    myTable+="<td>"+"zone"+"</td>";
    myTable+="<td>"+"type"+"</td>";
    myTable+="<td colspan='2' class='text-center'>"+"Acciones"+"</td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].id+"</td>";
        myTable+="<td>"+respuesta[i].identification+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].address+"</td>";
        myTable+="<td>"+respuesta[i].cellPhone+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].zone+"</td>";
        myTable+="<td>"+respuesta[i].type+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionBikes("+respuesta[i].id+")' class='btn btn-warning botonos'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarBikes("+respuesta[i].id+")'  class='btn btn-danger botonos'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}


function guardarInformacionCategorias(){
    let datos = {


        id:$("#iduser").val(),
        identification:$("#identificationuser").val(),
        name:$("#nameuser").val(),
        address:$("#addressuser"),
        cellPhone:$("#cellphoneuser").val(),
        email:$("#emailuser").val(),
        password:$("#passworduser").val(),
        zone:$("#zoneuser").val(),
        type:$("#typeuser").val(),
    };

    //convierte el objeto javascript a json antes de agregarlo a los datos de la petición
    


    
    $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(datos),
        
        url:"http://localhost:8080/api/user/new",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });
}
       