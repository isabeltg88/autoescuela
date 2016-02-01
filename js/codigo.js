
//Funcion para cargar el archivo XML
function loadXMLDoc(filename) {
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

function ocultarTodosFormularios2(){ //todo ¿mejor?
    var oCapasFormularios=document.querySelectorAll(".capaVisible");//capas de los formularios visibles

    for(var i=0;i<oCapasFormularios.length;i++){
        oCapasFormularios[i].classList.remove("capaVisible");
        oCapasFormularios[i].classList.add("oculto");
    }
}

//------Funciones mostrarProfesor--------
function mostrarAltaProfesor(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("altaProfesor");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarModificarProfesor(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("modificarProfesor");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarBajaProfesor(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("bajaProfesor");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoProfesor(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de profesores

}
//------Fin Funciones mostrarProfesor--------

//------Funciones mostrarCliente--------
function mostrarAltaCliente(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("altaCliente");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarModificarCliente(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("modificarCliente");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarBajaCliente(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("bajaCliente");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoCliente(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de clientes

}
//------Fin Funciones mostrarCliente--------

//------Funciones mostrarVehiculo--------
function mostrarAltaVehiculo(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("altaVehiculo");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarModificarVehiculo(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("modificarVehiculo");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarBajaVehiculo(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("bajaVehiculo");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoVehiculo(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de vehiculos

}
//------Funciones mostrarVehiculo--------

//------Funciones mostrarClase--------
function mostrarAltaClase(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("altaClase");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarListadoClase(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de clases

}
//------Funciones mostrarClase--------

//------Funciones mostrarMatricula--------
function mostrarAltaMatricula(){
    ocultarTodosFormularios();

    //var oCapa = document.getElementById("altaMatricula");
    //limpiarCampos(oCapa);
    //oCapa.classList.remove("oculto");
    //oCapa.classList.add("capaVisible");
}
function mostrarModificarMatricula(){
    ocultarTodosFormularios();

    //var oCapa = document.getElementById("modificarMatricula");
    //limpiarCampos(oCapa);
    //oCapa.classList.remove("oculto");
    //oCapa.classList.add("capaVisible");
}
function mostrarBajaMatricula(){
    ocultarTodosFormularios();

    //var oCapa = document.getElementById("bajaMatricula");
    //limpiarCampos(oCapa);
    //oCapa.classList.remove("oculto");
    //oCapa.classList.add("capaVisible");
}
function mostrarListadoMatricula(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");

    limpiarCampos(oCapa);

    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    //todo mostrar la tabla de matricula

}
//------Fin Funciones mostrarMatricula--------


//--------------------------------------------------------
//----- Funciones limpiar campos -------------------------
//--------------------------------------------------------

function limpiarCampos(oCapa){
    //limpia los campos de texto
    var oInputText = oCapa.querySelectorAll("form input[type=text]");

    if(oInputText!=null){
        for(var i=0;i<oInputText.length;i++){
            oInputText[i].value="";
        }
    }


    //marca el primer radio
    var oRadio = oCapa.querySelectorAll("form input[type=radio]");

    if(oRadio.length>0){
        oRadio[0].checked=true;
    }

    //marcar el primer select
    var oSelect = oCapa.querySelectorAll("form select");

    if(oSelect.length>0){
        for(var i=0;i<oSelect.length;i++){
            oSelect[i].value=0;
        }
    }

    //limpia el color amarillo
    var oCamposAmarillo = oCapa.querySelectorAll(".error");

    if(oCamposAmarillo!=null){
        for(var i=0;i<oCamposAmarillo.length;i++){
            oCamposAmarillo[i].classList.remove("error");
        }
    }

}


//--------------------------------------------------------
//----- Funciones validar campos -------------------------
//--------------------------------------------------------

function validarPersona(oCapa){
    var bValido = true;
    var sErrores = "";  //se almacenan aqui todos los errores
    var oInputs=oCapa.querySelectorAll("input[type=text]");

    //Validaciones

    //0-> nombre
    //1-> apellidos
    //2-> dni
    //3-> email
    //4-> direccion
    //5-> telefono

    //Campo nombre
    var sNombre = oInputs[0].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[0].value=oInputs[0].value.trim();

    var oExpReg = /^[\w\s]{3,30}$/;

    if(oExpReg.test(sNombre) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[0].focus();
        }

        sErrores += "Nombre incorrecto\n";

        //Marcar error
        oInputs[0].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[0].classList.remove("error");
    }


    //Campo apellidos
    var sApellidos = oInputs[1].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[1].value=oInputs[1].value.trim();

    var oExpReg2 = /^[\w\s]{3,50}$/;

    if(oExpReg2.test(sApellidos) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[1].focus();
        }

        sErrores += "Apellidos incorrectos\n";

        //Marcar error
        oInputs[1].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[1].classList.remove("error");
    }


    //Campo dni
    var sDni = oInputs[2].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[2].value=oInputs[2].value.trim();

    var oExpReg3 = /^(X(-|\.)?0?\d{7}(-|\.)?[A-Z]|[A-Z](-|\.)?\d{7}(-|\.)? [0-9A-Z]|\d{8}(-|\.)?[A-Z])$/;

    if(oExpReg3.test(sDni) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[2].focus();
        }

        sErrores += "DNI incorrectos\n";

        //Marcar error
        oInputs[2].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[2].classList.remove("error");
    }



    //Campo email
    var sEmail = oInputs[3].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[3].value=oInputs[3].value.trim();

    var oExpReg4 = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    if(oExpReg4.test(sEmail) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[3].focus();
        }

        sErrores += "Email incorrecto\n";

        //Marcar error
        oInputs[3].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[3].classList.remove("error");
    }


    //Campo direccion
    var sDireccion = oInputs[4].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[4].value=oInputs[4].value.trim();

    var oExpReg5 = /^[\w\s]{3,60}$/;

    if(oExpReg5.test(sDireccion) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[4].focus();
        }

        sErrores += "Direccion incorrecta\n";

        //Marcar error
        oInputs[4].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[4].classList.remove("error");
    }


    //Campo telefono
    var sTelefono = oInputs[5].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[5].value=oInputs[5].value.trim();

    var oExpReg6 = /^\d{9}$/;

    if(oExpReg6.test(sTelefono) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[5].focus();
        }

        sErrores += "Telefono incorrecto\n";

        //Marcar error
        oInputs[5].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[5].classList.remove("error");
    }



    //Resultado
    if(bValido == false){
        //Mostrar errores
        alert(sErrores);
    }

    return bValido;
}


function validarVehiculo(oCapa){

}

function validarClase(){

}

function validarMatricula(oCapa){

}

//--------------------------------------------------------
//----- Funciones auxiliares -----------------------------
//--------------------------------------------------------




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
