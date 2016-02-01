
//Funcion para cargar el archivo XML
function loadXMLDoc(filename)
{
    if (window.XMLHttpRequest)
    {
        xhttp=new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET",filename,false);

    xhttp.send();

    return xhttp.responseXML;
}

//var oXML = loadXMLDoc("archivo.xml");

window.addEventListener("load",inicio,false);

function inicio(){
    var oLI=document.querySelectorAll(".dropdown ul li");//Todos los li de la barra de navegacion (18)

    //todo no añade los eventos, pero desde la consola del navegador si los añade

    //Menu Alta Profesor
    oLI[0].addEventListener("click",mostrarAltaProfesor,false);
    //Menu Modificacion Profesor
    oLI[1].addEventListener("click",mostrarModificarProfesor,false);
    //Menu Baja Profesor
    oLI[2].addEventListener("click",mostrarBajaProfesor,false);
    //Menu Listado Profesor
    oLI[3].addEventListener("click",mostrarListadoProfesor,false);

    //Menu Alta Cliente
    oLI[4].addEventListener("click",mostrarAltaCliente,false);
    //Menu Modificacion Cliente
    oLI[5].addEventListener("click",mostrarModificarCliente,false);
    //Menu Baja Cliente
    oLI[6].addEventListener("click",mostrarBajaCliente,false);
    //Menu Listado Cliente
    oLI[7].addEventListener("click",mostrarListadoCliente,false);

    //Menu Alta Vehiculo
    oLI[8].addEventListener("click",mostrarAltaVehiculo,false);
    //Menu Modificacion Vehiculo
    oLI[9].addEventListener("click",mostrarModificarVehiculo,false);
    //Menu Baja Vehiculo
    oLI[10].addEventListener("click",mostrarBajaVehiculo,false);
    //Menu Listado Vehiculo
    oLI[11].addEventListener("click",mostrarListadoVehiculo,false);

    //Menu Alta Clase
    oLI[12].addEventListener("click",mostrarAltaClase,false);
    //Menu Listado Clase
    oLI[13].addEventListener("click",mostrarListadoClase,false);

    //Menu Alta Matricula
    oLI[14].addEventListener("click",mostrarAltaMatricula,false);
    //Menu Modificacion Matricula
    oLI[15].addEventListener("click",mostrarModificarMatricula,false);
    //Menu Baja Matricula
    oLI[16].addEventListener("click",mostrarBajaMatricula,false);
    //Menu Listado Matricula
    oLI[17].addEventListener("click",mostrarListadoMatricula,false);

}

//--------------------------------------------------------
//----- Funciones mostrar y ocultar ----------------------
//--------------------------------------------------------

//------Funcion para ocultar todos los formularios--------
function ocultarTodosFormularios(){
    var oCapasFormularios=document.querySelectorAll("#formularios>div");//capas de los formularios

    for(var i=0;i<oCapasFormularios.length;i++){
        if(oCapasFormularios[i].classList.contains("capaVisible")){
            oCapasFormularios[i].classList.remove("capaVisible");
            oCapasFormularios[i].classList.add("oculto");
        }
    }
}

//------Funciones mostrarProfesor--------
function mostrarAltaProfesor(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("altaProfesor");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarModificarProfesor(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("modificarProfesor");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarBajaProfesor(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("bajaProfesor");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoProfesor(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("listadosTablas");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de profesores

}
//------Fin Funciones mostrarProfesor--------

//------Funciones mostrarCliente--------
function mostrarAltaCliente(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("altaCliente");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarModificarCliente(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("modificarCliente");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarBajaCliente(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("bajaCliente");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoCliente(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("listadosTablas");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de clientes

}
//------Fin Funciones mostrarCliente--------

//------Funciones mostrarVehiculo--------
function mostrarAltaVehiculo(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("altaVehiculo");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarModificarVehiculo(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("modificarVehiculo");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarBajaVehiculo(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("bajaVehiculo");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoVehiculo(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("listadosTablas");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de vehiculos

}
//------Funciones mostrarVehiculo--------

//------Funciones mostrarClase--------
function mostrarAltaClase(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("altaClase");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoClase(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("listadosTablas");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de clases

}
//------Funciones mostrarClase--------

//------Funciones mostrarMatricula--------
function mostrarAltaMatricula(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    //var oCapa = document.getElementById("altaMatricula");
    //oCapa.classList.remove("oculto");
    //oCapa.classList.add("capaVisible");
}
function mostrarModificarMatricula(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    //var oCapa = document.getElementById("modificarMatricula");
    //oCapa.classList.remove("oculto");
    //oCapa.classList.add("capaVisible");
}
function mostrarBajaMatricula(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    //var oCapa = document.getElementById("bajaMatricula");
    //oCapa.classList.remove("oculto");
    //oCapa.classList.add("capaVisible");
}
function mostrarListadoMatricula(){
    ocultarTodosFormularios();
    //metodo que limpia todos los campos

    var oCapa = document.getElementById("listadosTablas");
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de matricula

}
//------Fin Funciones mostrarMatricula--------

//-------funcion listado de profesores--------
//lista todos los profesores disponibles devuelve una tabla
function tablaProfesores(){
    var oTabla=new Element("Table");

    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode("Id");
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode("dni");
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode("nombre");
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode("apellidos");
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode("direccion");
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("td");
    var oTexto6=document.createTextNode("email");
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);
    var celda7 = document.createElement("td");
    var oTexto7=document.createTextNode("telefono");
    celda7.appendChild(oTexto7);
    fila.appendChild(celda7);
    oTabla.appendChild(fila);

    for(var i=0;i<autoescuela.profesores.length;i++){
        oTabla.appendChild(autoescuela.profesores[i].fila());

    }
    return oTabla;


}

///-----funcion listado de clientes
//-----dvuelve una tabla con todos los clientes

function tablaClientes(){
    var oTabla=new Element("Table");

    var fila = document.createElement("tr");
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.dni);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.nombre);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.apellidos);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.direccion);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);

    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.email);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);

    var celda6 = document.createElement("td");
    var oTexto6=document.createTextNode(this.telefono);
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);

    oTabla.appendChild(fila);

    for(var i=0;i<autoescuela.clientes.length;i++){
        oTabla.appendChild(autoescuela.clientes[i].fila());
    }
    return oTabla;
}







///-------------------objeto autoescuela

var autoescuela=new Autoescuela("1111","calle","el multazo","111111");


