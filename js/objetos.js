//objeto Vehiculo------------------------------------------------------
    function Vehiculo(sMatricula,sMarca,sModelo){
        this.matricula=sMatricula;
        this.marca=sMarca;
        this.modelo= sModelo;
    }

//métodos


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


//objeto Clases------------------------------------------------------

function Clases(fDuracion,dFecha,sHora){
    this.duracion=fDuracion;
    this.fecha=dFecha;
    this.hora=sHora;
}

//métodos

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


//objeto Examen------------------------------------------------------

function Examen(dFecha,sHora,sLugar,bAptitud){
    this.fecha=dFecha;
    this.hora=sHora;
    this.lugar=sLugar;
    this.aptitud=bAptitud;
}

//métodos

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


//objeto Autoescuela------------------------------------------------------

function Autoescuela(sCif,sDireccion,sNombre,sTelefono){
    this.cif=sCif;
    this.direccion=sDireccion;
    this.nombre=sNombre;
    this.telefono=sTelefono;
}

//métodos

///modificado, línea  de comprobación

