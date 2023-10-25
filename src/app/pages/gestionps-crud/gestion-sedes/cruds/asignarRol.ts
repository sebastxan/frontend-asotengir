

export var AsignarRole: any[] = [
  {
    form: [
      ],
    columns: [
     {
        title: "Expand",
        field: "expandir",
        formatter: function () {
          return "<span class='material-icons'>chevron_right</span>";
        },
        width: function (column) {
          const titleLength = column.title.length;
          const minWidth = 100; // Ancho mínimo deseado para la columna
          const width = minWidth + (titleLength * 10); // Ajustar el factor de multiplicación según tus preferencias
          return width + 'px';
        },
        headerSort: false,
        hozAlign: "center",
        headerHozAlign: "center"
      },
     {
        title: "Asignar Rol",
        field: "Asignar",
        formatter: function () {
          return "<span class='material-icons'>add_circle_outline</span>";
        },
        width: function (column) {
          const titleLength = column.title.length;
          const minWidth = 100; // Ancho mínimo deseado para la columna
          const width = minWidth + (titleLength * 5); // Ajustar el factor de multiplicación según tus preferencias
          return width + 'px';
        },
        headerSort: false,
        hozAlign: "center",
        headerHozAlign: "center",
      },

      { title: "Seccional", field: "seccional", headerFilter: "input", width: 250 },
      { title: "Nombre", field: "nombre", headerFilter: "input", width: 250 },
      { title: "Apellidos", field: "apellidos", headerFilter: "input", width: 250 },
      { title: "Username", field: "username", headerFilter: "input", width: 250 },
      

    ],
    tituloVentana: "Asignación de Roles",
    link: { consulta: "rol_asignacion/", save: "roluser" },
    tituloBoton: "Adicionar roles",
    primaryTable:true,
    columName: "roles",
    payload: { nomSede: "", direccion: "", id: "", telefono: ""},
    relacion: { nomSeccional: "" },
    leerTabla: "Leyendo datos de la tabla seccional"
  },
  {
    form: [
      {
        field: 'seccional',
        text: "Seccional",
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo Sede requerida",
        id: "id",
        indice: 0,
        posi: 0,
        disabled:true
      },
      {
        field: 'nombre',
        text: "Nombre",
        
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo direccion requerida",
        id: "id",
        indice: 0,
        posi: 1,
        disabled:true
      },
      {
        field: 'apellidos',
        text: "Apellidos",
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo teléfono requerido",
        id: "id",
        indice: 0,
        posi: 2,
        disabled:true
      },
      {
        field: 'username',
        text: "Username",
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo teléfono requerido",
        id: "id",
        indice: 0,
        posi: 3,
        disabled:true
      },
  /*    {
        type: 'select',
        // si es un nivel es decir si una consulta depende de otra 
        //  entonces el nivel 0 seria la 1 consulta 
        //  this.conf.form[posi-nivel].length
        indice: 1,
        parametros:
          [
            { text: "facultad", field: 'nomFacultad', id: 'idFacultad', objeto: null, nivel: 0, posi: 3, urlOrigen: 'parametros/facultadesid',urlConsulta:'parametros/facultadesid', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idFacultad: null, nomFacultad: null }, relacion: { idFacultad: null }},
           
          ],
      },*/
      {
        type: 'multiSelect',
        // si es un nivel es decir si una consulta depende de otra 
        //  entonces el nivel 0 seria la 1 consulta 
        //  this.conf.form[posi-nivel].length
        indice: 1,
        parametros:
          [
            { text: "Roles", field: 'nomRole', id: 'idRole', objeto: "roles", nivel: 0, posi: 3, urlOrigen: 'role_user',urlConsulta:'role_user', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idRole: null, nomRole: null }, datos:[],relacion: { roles:[{idRole:''}] }},
           
          ],
      },
      // Configuración del segundo objeto aquí
      
    ],
    columns: [
      {
        title: "Quitar Rol",
        field: "asignar",
        formatter: function () {
          return "<span class='material-icons'>auto_delete</span>";
        },
        width: function (column) {
          const titleLength = column.title.length;
          const minWidth = 100; // Ancho mínimo deseado para la columna
          const width = minWidth + (titleLength * 10); // Ajustar el factor de multiplicación según tus preferencias
          return width + 'px';
        },
        headerSort: false,
       // headerVertical:true,
        hozAlign: "center",
        headerHozAlign: "center",
      },
      { title: "Rol", field: "nomRole", headerFilter: "input", width: 600 },
     
    ],
    tituloVentana: "Agregar Facultad",
    link: { consulta: "rol_asignacion/", save: "roluser" },
    tituloBoton: "Adicionar Sede",
    idAlias:"idRole",
    nomTabla:"asignar-sede",
    idForaneo:"idUser",
    objeto:"roles",
    boton:false,
    payload: { nomRol: "", nombre: "", id: "", seccional: "",apellidos:"",idRole:"",idUser:""},
    relacion:{user:{idUser:''}},
    leerTabla: "Leyendo datos de la tabla sede",
    asignar:true,
    columName: null,
 /*   tituloventana: null,
    link: null,
    tituloBoton: null,
    columName: null,
    payload:null,
    leerTabla:null*/

    
  },

];