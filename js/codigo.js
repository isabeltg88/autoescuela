
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

var oXML = loadXMLDoc("datos.xml");

window.addEventListener("load",inicio,false);

function inicio(){
    cargarDatosIniciales();

    var oLI=document.querySelectorAll(".dropdown ul li");//Todos los li de la barra de navegacion (18)

    //Menu Alta Profesor
    oLI[0].addEventListener("click",mostrarAltaProfesor,false);
    //Menu Modificacion Profesor
    oLI[1].addEventListener("click",mostrarModificarProfesor,false);
    //Menu Listado Profesor
    oLI[2].addEventListener("click",mostrarListadoProfesor,false);

    //Menu Alta Cliente
    oLI[3].addEventListener("click",mostrarAltaCliente,false);
    //Menu Modificacion Cliente
    oLI[4].addEventListener("click",mostrarModificarCliente,false);
    //Menu Listado Cliente
    oLI[5].addEventListener("click",mostrarListadoCliente,false);

    //Menu Alta Vehiculo
    oLI[6].addEventListener("click",mostrarAltaVehiculo,false);
    //Menu Modificacion Vehiculo
    oLI[7].addEventListener("click",mostrarModificarVehiculo,false);
    //Menu Listado Vehiculo
    oLI[8].addEventListener("click",mostrarListadoVehiculo,false);

    //Menu Alta Clase
    oLI[9].addEventListener("click",mostrarAltaClase,false);
    //Menu Listado Clase
    oLI[10].addEventListener("click",mostrarListadoClase,false);

    //Menu Alta Matricula
    oLI[11].addEventListener("click",mostrarAltaMatricula,false);
    //Menu Modificacion Matricula
    oLI[12].addEventListener("click",mostrarModificarMatricula,false);
    //Menu Listado Matricula
    oLI[13].addEventListener("click",mostrarListadoMatricula,false);


    //Evento de los radios de clase
    document.getElementsByName("radioAltaClase")[0].addEventListener("change",mostrarTipoClase,false);
    document.getElementsByName("radioAltaClase")[1].addEventListener("change",mostrarTipoClase,false);
    //document.frmClaseAlta.radioAltaClase.addEventListener("change",mostrarTipoClase,false);

    //Eventos de los botones



}

//--------------------------------------------------------
//----- Funciones mostrar y ocultar ----------------------
//--------------------------------------------------------

//------Funcion mostrar tipo clase------------
function mostrarTipoClase(){
    if(this.value=="practica"){
        document.getElementById("altaClasePractica").classList.remove("oculto");
        document.getElementById("altaClaseTeorica").classList.add("oculto");
    }else {
        document.getElementById("altaClaseTeorica").classList.remove("oculto");
        document.getElementById("altaClasePractica").classList.add("oculto");
    }
}

//------Funcion para ocultar todos los formularios--------
function ocultarTodosFormularios2(){
    var oCapasFormularios=document.querySelectorAll("#formularios>div");//capas de los formularios

    for(var i=0;i<oCapasFormularios.length;i++){
        if(oCapasFormularios[i].classList.contains("capaVisible")){
            oCapasFormularios[i].classList.remove("capaVisible");
            oCapasFormularios[i].classList.add("oculto");
        }
    }

    var oCapaTabla = document.getElementById("listadosTablas");

    if(oCapaTabla.childElementCount>0){
        oCapaTabla.removeChild(oCapaTabla.firstElementChild);
    }
}

function ocultarTodosFormularios(){
    var oCapasFormularios=document.querySelectorAll(".capaVisible");//capas de los formularios visibles

    for(var i=0;i<oCapasFormularios.length;i++){
        oCapasFormularios[i].classList.remove("capaVisible");
        oCapasFormularios[i].classList.add("oculto");
    }

    var oCapaTabla = document.getElementById("listadosTablas");

    if(oCapaTabla.childElementCount>0){
        oCapaTabla.removeChild(oCapaTabla.firstElementChild);
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

    oCapa.querySelector("input[type=button]").disabled = true;

    cargarSelectModificarProfesor();
}
function mostrarListadoProfesor(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    oCapa.appendChild(tablaProfesores());
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

    oCapa.querySelector("input[type=button]").disabled = true;

    cargarSelectModificarCliente();
}
function mostrarListadoCliente(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    oCapa.appendChild(tablaClientes());

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

    oCapa.querySelector("input[type=button]").disabled = true;

    cargarSelectModificarVehiculo();
}
function mostrarListadoVehiculo(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    oCapa.appendChild(tablaVehiculos());

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

    oCapa.appendChild(tablaClases());

}
//------Funciones mostrarClase--------

//------Funciones mostrarMatricula--------
function mostrarAltaMatricula(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("altaMatricula");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");
}
function mostrarModificarMatricula(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("modificarMatricula");
    limpiarCampos(oCapa);
    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    oCapa.querySelector("input[type=button]").disabled = true;

    cargarSelectModificarMatricula();
}
function mostrarListadoMatricula(){
    ocultarTodosFormularios();

    var oCapa = document.getElementById("listadosTablas");

    limpiarCampos(oCapa);

    oCapa.classList.remove("oculto");
    oCapa.classList.add("capaVisible");

    oCapa.appendChild(tablaMatriculas());

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
//----- Funciones cargar select  -------------------------
//--------------------------------------------------------
function cargarSelectModificarProfesor(){
    var arrayProfesores=autoescuela.profesores;
    //todo cargarSelectProfesor
    //coger el select
    //insertar option value=0 "Seleccione..."
    //insertar option con profesores

    //en un evento change:
    //--Cargar datos
    //--habilitar boton
    //      oCapa.querySelector("input[type=button]").disabled = false;

}

function cargarSelectModificarCliente(){
    var arrayClientes=autoescuela.clientes;
    //todo cargarSelectCliente

}

function cargarSelectModificarVehiculo(){
    var arrayVehiculos=autoescuela.vehiculos;
    //todo cargarSelectVehiculo

}

function cargarSelectModificarMatricula(){
    var arrayMatriculas=autoescuela.matriculas;
    //todo cargarSelectMatricula

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
    }else if(autoescuela.buscaPersona(sDni)){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[2].focus();
        }

        sErrores += "Persona ya existe\n";

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
    //sMatricula,sMarca,sModelo,sTipo
    var bValido = true;
    var sErrores = "";  //se almacenan aqui todos los errores

    var oInputs=oCapa.querySelectorAll("input[type=text]");
    //0-> matricula
    //1-> marca
    //2-> modelo
    var oSelectTipo=oCapa.querySelector("select");


    //Campo matricula
    var sMatricula = oInputs[0].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[0].value=oInputs[0].value.trim();

    var oExpReg = /^\d{4}[a-zA-Z]{3}$/;

    if(oExpReg.test(sMatricula) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[0].focus();
        }

        sErrores += "Matricula incorrecta\n";

        //Marcar error
        oInputs[0].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[0].classList.remove("error");
    }


    //Campo marca
    var sMarca = oInputs[1].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[1].value=oInputs[1].value.trim();

    var oExpReg2 = /^[\w\s]{3,20}$/;

    if(oExpReg2.test(sMarca) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[1].focus();
        }

        sErrores += "Marca incorrecta\n";

        //Marcar error
        oInputs[1].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[1].classList.remove("error");
    }


    //Campo modelo
    var sModelo = oInputs[2].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[2].value=oInputs[2].value.trim();

    var oExpReg3 = /^[\w\s]{3,25}$/;

    if(oExpReg3.test(sModelo) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[2].focus();
        }

        sErrores += "Modelo incorrecto\n";

        //Marcar error
        oInputs[2].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[2].classList.remove("error");
    }


    //Campo Tipo
    var sTipo = oSelectTipo.value; //sin espacios por delante ni por detras

    if(sTipo=="0"){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oSelectTipo.focus();
        }

        sErrores += "Seleccione un tipo de vehiculo\n";

        //Marcar error
        oSelectTipo.classList.add("error");
    }else{
        //Desmarcar el error
        oSelectTipo.classList.remove("error");
    }



    //Resultado
    if(bValido == false){
        //Mostrar errores
        alert(sErrores);
    }

    return bValido;
}

function validarClase(){
    //Teorica -> fDuracion,dFecha,sHora,iAforo
    //Practica -> fDuracion,dFecha,sHora,fTarifa_hora
    var bValido = true;
    var sErrores = "";  //se almacenan aqui todos los errores

    var oCapa= document.getElementById("altaClase");
    var oInputs=oCapa.querySelectorAll("input[type=text]");
    //0-> Duracion     float
    //1-> fecha        date   dd/mm/aaaa | d/m/yyyy   comprobarFecha(sFecha)
    //2-> hora         string HH:MM  comprobarHora(sHora)
    //3-> tarifa/hora  float
    //4-> aforo        int


    //Campo duracion
    var sDuracion = oInputs[0].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[0].value=oInputs[0].value.trim();


    if(comprobarFloat(sDuracion)){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[0].focus();
        }

        sErrores += "Duracion incorrecta\n";

        //Marcar error
        oInputs[0].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[0].classList.remove("error");
    }


    //Campo fecha
    var sFecha = oInputs[1].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[1].value=oInputs[1].value.trim();

    var oExpReg = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if(oExpReg.test(sFecha) == false || !comprobarFecha(sFecha)){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[1].focus();
        }

        sErrores += "Fecha incorrecta\n";

        //Marcar error
        oInputs[1].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[1].classList.remove("error");
    }



    //Campo hora
    var sHora = oInputs[2].value.trim(); //sin espacios por delante ni por detras
    //Campo corregido con trim
    oInputs[2].value=oInputs[2].value.trim();

    var oExpReg2 = /^(((0|1)[0-9])|2[0-3]):[0-5][0-9]$/;

    if(oExpReg2.test(sHora) == false){
        if(bValido){  //Si es el primero en fallar,coge el foco
            bValido = false;
            //Este camo obtiene el foco
            oInputs[2].focus();
        }

        sErrores += "Hora incorrecta (HH:MM)\n";

        //Marcar error
        oInputs[2].classList.add("error");
    }else{
        //Desmarcar el error
        oInputs[2].classList.remove("error");
    }

    var sRadioTipo=frmClaseAlta.radioAltaClase.value;
    if(sRadioTipo=="practica"){
        //Campo tarifa/hora
        var sTarifa = oInputs[3].value.trim(); //sin espacios por delante ni por detras
        //Campo corregido con trim
        oInputs[3].value=oInputs[3].value.trim();

        if(comprobarFloat(sTarifa) ){
            if(bValido){  //Si es el primero en fallar,coge el foco
                bValido = false;
                //Este camo obtiene el foco
                oInputs[3].focus();
            }

            sErrores += "Tarifa incorrecta\n";

            //Marcar error
            oInputs[3].classList.add("error");
        }else{
            //Desmarcar el error
            oInputs[3].classList.remove("error");
        }
    }else{
        //Campo aforo
        var sAforo = oInputs[4].value.trim(); //sin espacios por delante ni por detras
        //Campo corregido con trim
        oInputs[4].value=oInputs[4].value.trim();

        var oExpReg3 = /^\d{1,3}$/;

        if(oExpReg3.test(sAforo)){
            if(bValido){  //Si es el primero en fallar,coge el foco
                bValido = false;
                //Este camo obtiene el foco
                oInputs[4].focus();
            }

            sErrores += "Aforo incorrecto\n";

            //Marcar error
            oInputs[4].classList.add("error");
        }else{
            //Desmarcar el error
            oInputs[4].classList.remove("error");
        }
    }

    //Resultado
    if(bValido == false){
        //Mostrar errores
        alert(sErrores);
    }

    return bValido;
}

function validarMatricula(oCapa){
    //iAsistenciaExamen,fCantidadAbonada,bExPracticoPass,bExTeoricoPass,dFecha,sIdentificador,iNumeroPracticas,fPrecio,sTipo
    var bValido = true;
    var sErrores = "";  //se almacenan aqui todos los errores

    var oInputs=oCapa.querySelectorAll("input[type=text]");
    //0-> N asistencas al examen      int
    //1-> cantidad abonada            float
    //2-> fecha                       date   dd/mm/aaaa | d/m/yyyy   comprobarFecha(sFecha)
    //3-> N practicas                 int
    //4-> identificador               string  333333aaaa
    //5-> precio                      float
    var oSelects=oCapa.querySelector("select");
    //0-> Examen practico aprobado    "si","no" / "0"  fallo
    //1-> Examen teorico aprobado     "si","no" / "0"  fallo
    //2-> Tipo                        string

    //todo validar matricula



    //Resultado
    if(bValido == false){
        //Mostrar errores
        alert(sErrores);
    }

    return bValido;
}

//--------------------------------------------------------
//----- Funciones auxiliares -----------------------------
//--------------------------------------------------------

function borrarTodosOption(oSelect){
    var oOptions=oSelect.getElementsByTagName("option");

    while(oOptions.length>0){
        oOptions[0].parentNode.removeChild(oOptions[0]);
    }
}

function comprobarFloat(sNumero){
    var bNumero=false;
    var fNumero=parseFloat(sNumero);

    if(!isNaN(fNumero)){
        bNumero=true;
    }

    return bNumero;
}


function comprobarFecha(sFecha){ //devuelve true si la fecha es correcta
    var bRes=false;

    // "DD/MM/YYYY"
    var arrayDatos=sFecha.slice("/");

    var iDia=parseInt(arrayDatos[0]);
    var iMes=parseInt(arrayDatos[1])-1;
    var iAnyo=parseInt(arrayDatos[2]);

    if(diasDelMes(iMes,iAnyo) >= iDia){
        bRes=true;
    }

    return bRes;
}

function diasDelMes(iMes, iAnyo){ //devuelve los dias del mes, v2.0
    var arrayDias=Array(31,28,31,30,31,30,31,31,30,31,30,31);
    var iDias=arrayDias[iMes];

    if (iMes == 1 && iAnyo % 4 == 0 && (iAnyo % 100 != 0 || iAnyo % 400 == 0))
        iDias=29;

    return iDias;
}

function fechaStringADate(sFecha){
    // "DD/MM/YYYY"
    var arrayDatos=sFecha.split("/");

    var iDia=parseInt(arrayDatos[0]);
    var iMes=parseInt(arrayDatos[1])-1;
    var iAnyo=parseInt(arrayDatos[2]);

    var dFecha=new Date(iAnyo,iMes,iDia);

    return dFecha;

}

function cargarDatosIniciales(){
    var sCif = oXML.getElementsByTagName("cif")[0].firstChild.nodeValue;
    var sDireccion= oXML.getElementsByTagName("direccion")[0].firstChild.nodeValue;
    var sNombre= oXML.getElementsByTagName("nombre")[0].firstChild.nodeValue;
    var iTelefono= parseInt(oXML.getElementsByTagName("telefono")[0].firstChild.nodeValue);

    autoescuela=new Autoescuela(sCif,sDireccion,sNombre,iTelefono);

    //introducir profesores
    var oProfesores=oXML.getElementsByTagName("profesor");

    for(var i=0;i<oProfesores.length;i++){
        var oProfesorActual=oProfesores[i];

        var sApellidos=oProfesorActual.getElementsByTagName("apellidos")[0].firstChild.nodeValue;
        var sDireccion=oProfesorActual.getElementsByTagName("direccion")[0].firstChild.nodeValue;
        var sDni=oProfesorActual.getElementsByTagName("dni")[0].firstChild.nodeValue;
        var sEmail=oProfesorActual.getElementsByTagName("email")[0].firstChild.nodeValue;
        var sNombre=oProfesorActual.getElementsByTagName("nombre")[0].firstChild.nodeValue;
        var iTelefono=parseInt(oProfesorActual.getElementsByTagName("telefono")[0].firstChild.nodeValue);

        var sId=iIdProfesor+"P";

        var oProfesor=new Profesor(sApellidos,sDireccion,sDni,sEmail,sNombre,iTelefono,sId);

        autoescuela.altaProfesor(oProfesor);

        iIdProfesor++;
    }

    //introducir clientes
    var oClientes=oXML.getElementsByTagName("cliente");

    for(var i=0;i<oClientes.length;i++){
        var oClienteActual=oClientes[i];

        var sApellidos=oClienteActual.getElementsByTagName("apellidos")[0].firstChild.nodeValue;
        var sDireccion=oClienteActual.getElementsByTagName("direccion")[0].firstChild.nodeValue;
        var sDni=oClienteActual.getElementsByTagName("dni")[0].firstChild.nodeValue;
        var sEmail=oClienteActual.getElementsByTagName("email")[0].firstChild.nodeValue;
        var sNombre=oClienteActual.getElementsByTagName("nombre")[0].firstChild.nodeValue;
        var iTelefono=parseInt(oClienteActual.getElementsByTagName("telefono")[0].firstChild.nodeValue);

        var sNumeroRegistro=iNRegCliente+"C";

        var oCliente=new Cliente(sApellidos,sDireccion,sDni,sEmail,sNombre,iTelefono,sNumeroRegistro);

        autoescuela.altaCliente(oCliente);

        iNRegCliente++;
    }

    //introducir clases
    var oClasesPracticas=oXML.getElementsByTagName("clase_practica");

    for(var i=0;i<oClasesPracticas.length;i++) {
        var oClasesPracticasActual = oClasesPracticas[i];

        var fDuracion = parseFloat(oClasesPracticasActual.getElementsByTagName("duracion")[0].firstChild.nodeValue);
        var dFecha = fechaStringADate(oClasesPracticasActual.getElementsByTagName("fecha")[0].firstChild.nodeValue);
        var sHora = oClasesPracticasActual.getElementsByTagName("hora")[0].firstChild.nodeValue;
        var fTarifa_hora = parseFloat(oClasesPracticasActual.getElementsByTagName("tarifa_hora")[0].firstChild.nodeValue);

        var oClaseP=new Practica(fDuracion,dFecha,sHora,fTarifa_hora);

        autoescuela.altaClase(oClaseP);

    }

    var oClasesTeoricas=oXML.getElementsByTagName("clase_teorica");

    for(var i=0;i<oClasesTeoricas.length;i++) {
        var oClasesTeoricasActual = oClasesTeoricas[i];

        var fDuracion = parseFloat(oClasesTeoricasActual.getElementsByTagName("duracion")[0].firstChild.nodeValue);
        var dFecha = fechaStringADate(oClasesTeoricasActual.getElementsByTagName("fecha")[0].firstChild.nodeValue);
        var sHora = oClasesTeoricasActual.getElementsByTagName("hora")[0].firstChild.nodeValue;
        var iAforo = parseInt(oClasesTeoricasActual.getElementsByTagName("aforo")[0].firstChild.nodeValue);

        var oClaseT=new Teorica(fDuracion,dFecha,sHora,iAforo);

        autoescuela.altaClase(oClaseT);

    }

    //introducir vehiculos
    var oVehiculosContenedor=oXML.getElementsByTagName("vehiculos")[0];
    var oVehiculos=oVehiculosContenedor.getElementsByTagName("vehiculo");

    for(var i=0;i<oVehiculos.length;i++) {
        var oVehiculoActual = oVehiculos[i];

        var sMatricula = oVehiculoActual.getElementsByTagName("matricula")[0].firstChild.nodeValue;
        var sMarca = oVehiculoActual.getElementsByTagName("marca")[0].firstChild.nodeValue;
        var sModelo = oVehiculoActual.getElementsByTagName("modelo")[0].firstChild.nodeValue;
        var sTipo = oVehiculoActual.getElementsByTagName("tipo")[0].firstChild.nodeValue;

        var oVehiculo=new Vehiculo(sMatricula,sMarca,sModelo,sTipo);

        autoescuela.altaVehiculo(oVehiculo);

    }


    //introducir matriculas
    var oMatriculasContenedor=oXML.getElementsByTagName("matriculas")[0];
    var oMatriculas=oMatriculasContenedor.getElementsByTagName("matricula");

    for(var i=0;i<oMatriculas.length;i++) {
        var oMatriculaActual = oMatriculas[i];

        var iAsistenciaExamen = parseInt(oMatriculaActual.getElementsByTagName("asistenciaExamen")[0].firstChild.nodeValue);
        var fCantidadAbonada = parseFloat(oMatriculaActual.getElementsByTagName("cantidadAbonada")[0].firstChild.nodeValue);

        var bExPracticoPass=false;
        if(oMatriculaActual.getElementsByTagName("exPracticoPass")[0].firstChild.nodeValue=="si"){
            bExPracticoPass=true;
        }

        var bExTeoricoPass = false;
        if(oMatriculaActual.getElementsByTagName("exTeoricoPass")[0].firstChild.nodeValue=="si"){
            bExTeoricoPass=true;
        }

        var dFecha = fechaStringADate(oMatriculaActual.getElementsByTagName("fecha")[0].firstChild.nodeValue);
        var sIdentificador = oMatriculaActual.getElementsByTagName("identificador")[0].firstChild.nodeValue;
        var iNumeroPracticas = parseInt(oMatriculaActual.getElementsByTagName("numeroPracticas")[0].firstChild.nodeValue);
        var fPrecio = parseFloat(oMatriculaActual.getElementsByTagName("precio")[0].firstChild.nodeValue);
        var sTipo = oMatriculaActual.getElementsByTagName("tipo")[0].firstChild.nodeValue;

        var oMatricula=new Matricula(iAsistenciaExamen,fCantidadAbonada,bExPracticoPass,bExTeoricoPass,dFecha,sIdentificador,iNumeroPracticas,fPrecio,sTipo);

        autoescuela.altaMatricula(oMatricula);

    }

}



//-------funcion listado de profesores--------
//lista todos los profesores disponibles devuelve una tabla
function tablaProfesores(){
    var oTabla=document.createElement("Table");

    var fila = document.createElement("tr");
    var celda = document.createElement("th");
    var oTexto=document.createTextNode("Id");
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("th");
    var oTexto2=document.createTextNode("Dni");
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("th");
    var oTexto3=document.createTextNode("Nombre");
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("th");
    var oTexto4=document.createTextNode("Apellidos");
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("th");
    var oTexto5=document.createTextNode("Direccion");
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("th");
    var oTexto6=document.createTextNode("Email");
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);
    var celda7 = document.createElement("th");
    var oTexto7=document.createTextNode("Telefono");
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
    var oTabla=document.createElement("Table");

    var fila = document.createElement("tr");
    var celda3 = document.createElement("th");
    var oTexto3=document.createTextNode("Dni");
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda5 = document.createElement("th");
    var oTexto5=document.createTextNode("Nombre");
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda = document.createElement("th");
    var oTexto=document.createTextNode("Apellidos");
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("th");
    var oTexto2=document.createTextNode("Direccion");
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);

    var celda4 = document.createElement("th");
    var oTexto4=document.createTextNode("Email");
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);

    var celda6 = document.createElement("th");
    var oTexto6=document.createTextNode("Telefono");
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);

    var celda7 = document.createElement("th");
    var oTexto7=document.createTextNode("Num Registro");
    celda7.appendChild(oTexto7);
    fila.appendChild(celda7);

    oTabla.appendChild(fila);

    for(var i=0;i<autoescuela.clientes.length;i++){
        oTabla.appendChild(autoescuela.clientes[i].fila());
    }
    return oTabla;
}

//----------------funcion tabla de vehiculos

function tablaVehiculos(){
    var oTabla=document.createElement("Table");

    var fila = document.createElement("tr");
    var celda = document.createElement("th");
    var oTexto=document.createTextNode("Matricula");
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("th");
    var oTexto2=document.createTextNode("Marca");
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("th");
    var oTexto3=document.createTextNode("Modelo");
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("th");
    var oTexto4=document.createTextNode("Tipo");
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);

    oTabla.appendChild(fila);

    for(var i=0;i<autoescuela.vehiculos.length;i++){
        oTabla.appendChild(autoescuela.vehiculos[i].fila());
    }
    return oTabla;
}

//-----Funcion tablaClases

function tablaClases(){
    var oTabla=document.createElement("Table");

    var fila = document.createElement("tr");
    var celda = document.createElement("th");
    var oTexto=document.createTextNode("Duracion");
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("th");
    var oTexto2=document.createTextNode("Fecha");
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("th");
    var oTexto3=document.createTextNode("Hora");
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("th");
    var oTexto4=document.createTextNode("Tarifa/Hora");
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("th");
    var oTexto5=document.createTextNode("Aforo");
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);

    oTabla.appendChild(fila);

    for(var i=0;i<autoescuela.clases.length;i++){
        oTabla.appendChild(autoescuela.clases[i].fila());
    }
    return oTabla;
}


//---------funcion tablasMatriculas
function tablaMatriculas(){
    var oTabla=document.createElement("Table");
    //oTabla.classList.add("table-bordered");

    var fila = document.createElement("tr");
    var celda = document.createElement("th");
    var oTexto=document.createTextNode("AsistenciaExamen");
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("th");
    var oTexto2=document.createTextNode("CantidadAbonada");
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("th");
    var oTexto3=document.createTextNode("ExPracticoPass");
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("th");
    var oTexto4=document.createTextNode("ExTeoricoPass");
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("th");
    var oTexto5=document.createTextNode("Fecha");
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("th");
    var oTexto6=document.createTextNode("Identificador");
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);
    var celda7 = document.createElement("th");
    var oTexto7=document.createTextNode("NumeroPracticas");
    celda7.appendChild(oTexto7);
    fila.appendChild(celda7);
    var celda8 = document.createElement("th");
    var oTexto8=document.createTextNode("Precio");
    celda8.appendChild(oTexto8);
    fila.appendChild(celda8);
    var celda9 = document.createElement("th");
    var oTexto9=document.createTextNode("Tipo");
    celda9.appendChild(oTexto9);
    fila.appendChild(celda9);

    oTabla.appendChild(fila);

    for(var i=0;i<autoescuela.matriculas.length;i++){
        oTabla.appendChild(autoescuela.matriculas[i].fila());
    }
    return oTabla;
}


///-------------------objeto autoescuela

var autoescuela;

var iIdProfesor=1; // iIdProfesor+"P";
var iNRegCliente=1; // iNRegCliente+"C";

