//objeto Vehiculo------------------------------------------------------
    function Vehiculo(sMatricula,sMarca,sModelo){
        this.matricula=sMatricula;
        this.marca=sMarca;
        this.modelo= sModelo;
    }

//metodos
Vehiculo.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.matricula);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.marca);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.modelo);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);

    return fila;
}

//objeto Moto------------------------------------------------------
//hereda de Vehiculo
function Moto(sMatricula,sMarca,sModelo,iCilindrada){
    Vehiculo.apply(this,[sMatricula,sMarca,sModelo]);
    this.cilindrada=iCilindrada;
}
//herencia
Moto.prototype = Object.create(Vehiculo.prototype);
Moto.prototype.constructor = Moto;

//métodos
Moto.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.matricula);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.marca);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.modelo);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.cilindrada);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);

    return fila;
}

//objeto Camion------------------------------------------------------
//hereda de Vehiculo
function Camion(sMatricula,sMarca,sModelo,sCategoria){
    Vehiculo.apply(this,[sMatricula,sMarca,sModelo]);
    this.categoria=sCategoria;
}
//herencia
Camion.prototype = Object.create(Vehiculo.prototype);
Camion.prototype.constructor = Camion;

//métodos
Camion.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.matricula);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.marca);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.modelo);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.categoria);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);

    return fila;
}

//objeto Coche------------------------------------------------------
//hereda de Vehiculo
function Coche(sMatricula,sMarca,sModelo,sMotor,iPotencia){
    Vehiculo.apply(this,[sMatricula,sMarca,sModelo]);
    this.motor=sMotor;
    this.potencia=iPotencia;
}
//herencia
Coche.prototype = Object.create(Vehiculo.prototype);
Coche.prototype.constructor = Coche;

//métodos
Coche.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.matricula);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.marca);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.modelo);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.motor);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.potencia);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);

    return fila;
}

//objeto Oferta------------------------------------------------------
function Oferta(iNumConvocatorias,iNumPracticas,fPrecio){
    this.numeroConvocatorias=iNumConvocatorias;
    this.numeroPracticas=iNumPracticas;
    this.precio= fPrecio;
}

//métodos

//objeto Matricula------------------------------------------------------
function Matricula(iAsistenciaExamen,fCantidadAbonada,bExPracticoPass,bExTeoricoPass,dFecha,sIdentificador,iNumeroPracticas,fPrecio,sTipo){
    this.asistenciaExamen=iAsistenciaExamen;
    this.cantidadAbonada=fCantidadAbonada;
    this.exPracticoPass=bExPracticoPass;
    this.exTeoricoPass=bExTeoricoPass;
    this.fecha=dFecha;
    this.identificador=sIdentificador;
    this.numeroPracticas=iNumeroPracticas;
    this.precio= fPrecio;
    this.tipo=sTipo;
}

//métodos
Matricula.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.asistenciaExamen);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.cantidadAbonada);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.exPracticoPass);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.exTeoricoPass);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.fecha);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("td");
    var oTexto6=document.createTextNode(this.identificador);
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);
    var celda7 = document.createElement("td");
    var oTexto7=document.createTextNode(this.numeroPracticas);
    celd7.appendChild(oTexto7);
    fila.appendChild(celda7);
    var celda8 = document.createElement("td");
    var oTexto8=document.createTextNode(this.precio);
    celda8.appendChild(oTexto8);
    fila.appendChild(celda8);
    var celda9 = document.createElement("td");
    var oTexto9=document.createTextNode(this.tipo);
    celda9.appendChild(oTexto9);
    fila.appendChild(celda9);

    return fila;
}
//objeto Persona------------------------------------------------------
function Persona(sApellidos,sDireccion,sDni,sEmail,sNombre,sTelefono){
    this.apellidos=sApellidos;
    this.direccion=sDireccion;
    this.dni= sDni;
    this.email=sEmail;
    this.nombre=sNombre;
    this.telefono=sTelefono;
}

//métodos
Persona.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.apellidos);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.direccion);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.dni);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.email);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.nombre);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("td");
    var oTexto6=document.createTextNode(this.telefono);
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);

    return fila;
}

//objeto Profesor------------------------------------------------------
//hereda de Persona
function Profesor(sApellidos,sDireccion,sDni,sEmail,sNombre,sTelefono,iId){
    Persona.apply(this,[sApellidos,sDireccion,sDni,sEmail,sNombre,sTelefono]);
    this.id=iId;
}
//herencia
Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

//métodos
Profesor.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.apellidos);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.direccion);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.dni);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.email);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.nombre);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("td");
    var oTexto6=document.createTextNode(this.telefono);
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);
    var celda7 = document.createElement("td");
    var oTexto7=document.createTextNode(this.id);
    celd7.appendChild(oTexto7);
    fila.appendChild(celda7);

    return fila;
}

//objeto Cliente------------------------------------------------------
//hereda de Persona
function Cliente(sApellidos,sDireccion,sDni,sEmail,sNombre,sTelefono,iNumeroRegistro){
    Persona.apply(this,[sApellidos,sDireccion,sDni,sEmail,sNombre,sTelefono]);
    this.numeroRegistro=iNumeroRegistro;
}
//herencia
Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

//métodos
Cliente.prototype.fila= function () {
     
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.apellidos);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.direccion);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.dni);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.email);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.nombre);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("td");
    var oTexto6=document.createTextNode(this.telefono);
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);
    var celda7 = document.createElement("td");
    var oTexto7=document.createTextNode(this.numeroRegistro);
    celd7.appendChild(oTexto7);
    fila.appendChild(celda7);

    return fila;
}

//objeto Clases------------------------------------------------------

function Clases(fDuracion,dFecha,sHora){
    this.duracion=fDuracion;
    this.fecha=dFecha;
    this.hora=sHora;
}

//métodos
Clases.prototype.fila= function () {
    
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.duracion);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.fecha);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.hora);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);

    return fila;
}
//objeto Practica------------------------------------------------------
//hereda de Clases
function Practica(fDuracion,dFecha,sHora,fTarifa_hora){
    Clases.apply(this,[fDuracion,dFecha,sHora]);
    this.tarifa_hora=fTarifa_hora;
}
//herencia
Practica.prototype = Object.create(Clases.prototype);
Practica.prototype.constructor = Practica;

//métodos
Practica.prototype.fila= function () {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.duracion);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.fecha);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.hora);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.tarifa_hora);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    

    return fila;
}
//objeto Teorica------------------------------------------------------
//hereda de Clases
function Teorica(fDuracion,dFecha,sHora,iAforo){
    Clases.apply(this,[fDuracion,dFecha,sHora]);
    this.aforo=iAforo;
}
//herencia
Teorica.prototype = Object.create(Clases.prototype);
Teorica.prototype.constructor = Teorica;

//métodos

Teorica.prototype.fila= function () {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.duracion);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.fecha);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.hora);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.aforo);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);


    return fila;
}
//objeto Examen------------------------------------------------------

function Examen(dFecha,sHora,sLugar,bAptitud){
    this.fecha=dFecha;
    this.hora=sHora;
    this.lugar=sLugar;
    this.aptitud=bAptitud;
}

//métodos
Examen.prototype.fila= function () {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.fecha);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.hora);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.lugar);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.aptitud);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);


    return fila;
}
//objeto Teorico------------------------------------------------------
//hereda de Examen
function Teorico(dFecha,sHora,sLugar,bAptitud,iNumErrores){
    Examen.apply(this,[dFecha,sHora,sLugar,bAptitud]);
    this.numErrores=iNumErrores;
}
//herencia
Teorico.prototype = Object.create(Examen.prototype);
Teorico.prototype.constructor = Teorico;

//métodos

Teorico.prototype.fila= function () {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.fecha);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.hora);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.lugar);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.aptitud);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.numErrores);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);


    return fila;
}

//objeto Practico------------------------------------------------------
//hereda de Examen
function Practico(dFecha,sHora,sLugar,bAptitud,iFallosGraves,iFallosLeves){
    Examen.apply(this,[dFecha,sHora,sLugar,bAptitud]);
    this.fallosGraves=iFallosGraves;
    this.fallosLeves=iFallosLeves;
}
//herencia
Practico.prototype = Object.create(Examen.prototype);
Practico.prototype.constructor = Practico;

//métodos
Practico.prototype.fila= function () {
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var oTexto=document.createTextNode(this.fecha);
    celda.appendChild(oTexto);
    fila.appendChild(celda);
    var celda2 = document.createElement("td");
    var oTexto2=document.createTextNode(this.hora);
    celda2.appendChild(oTexto2);
    fila.appendChild(celda2);
    var celda3 = document.createElement("td");
    var oTexto3=document.createTextNode(this.lugar);
    celda3.appendChild(oTexto3);
    fila.appendChild(celda3);
    var celda4 = document.createElement("td");
    var oTexto4=document.createTextNode(this.aptitud);
    celda4.appendChild(oTexto4);
    fila.appendChild(celda4);
    var celda5 = document.createElement("td");
    var oTexto5=document.createTextNode(this.fallosGraves);
    celda5.appendChild(oTexto5);
    fila.appendChild(celda5);
    var celda6 = document.createElement("td");
    var oTexto6=document.createTextNode(this.fallosLeves);
    celda6.appendChild(oTexto6);
    fila.appendChild(celda6);


    return fila;
}

//objeto Autoescuela------------------------------------------------------

function Autoescuela(sCif,sDireccion,sNombre,sTelefono){
    this.cif=sCif;
    this.direccion=sDireccion;
    this.nombre=sNombre;
    this.telefono=sTelefono;
    this.ofertas=new Oferta();
    this.matriculas=new Matricula();
    this.personas=new Persona();
    this.clases=new Clases();
    this.vehiculos=new Vehiculo();
}

//métodos

Autoescuela.prototype.altaProfesor= function (profesor) {
    this.personas.push(profesor);
}


