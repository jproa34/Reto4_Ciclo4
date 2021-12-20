
function traerInformacionProducts(){
    $.ajax({
        url:"http://localhost:8080/api/vegetarian/all",
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
    myTable+="<td>"+"#"+"</td>";
    myTable+="<td>"+"Reference"+"</td>";
    myTable+="<td>"+"brand"+"</td>";
    myTable+="<td>"+"Category"+"</td>";
    myTable+="<td>"+"Description"+"</td>";
    myTable+="<td>"+"Availability"+"</td>";
    myTable+="<td>"+"Price"+"</td>";
    myTable+="<td>"+"Quantity"+"</td>";
    myTable+="<td>"+"photography"+"</td>";
    myTable+="<td colspan='2' class='text-center'>"+"Acciones"+"</td>";
    myTable+="</tr>";
    for(i=0;i<respuesta.length;i++){
        posicion = i + 1;
        myTable+="<tr>";
        myTable+="<td>"+posicion+"</td>";
        myTable+="<td>"+respuesta[i].reference+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].category+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].availability+"</td>";
        myTable+="<td>"+respuesta[i].price+"</td>";
        myTable+="<td>"+respuesta[i].quantity+"</td>";
        myTable+="<td>"+respuesta[i].photography+"</td>";
        myTable+="<td> <button onclick='actualizarInformacionBikes("+respuesta[i].id+")' class='btn btn-warning botonos '>Actualizar</button>";
        myTable+="<td> <button onclick='borrarBikes("+respuesta[i].id+")'  class='btn btn-danger botonos'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoProducts").html(myTable);
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
       