

export var AsignarSede: any[] = [
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
        title: "Agregar facultad",
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

      { title: "Sede", field: "nomSede", headerFilter: "input", width: 250 },
      { title: "direccion", field: "direccion", headerFilter: "input", width: 250 },
      { title: "telefono", field: "telefono", headerFilter: "input", width: 250 },
      

    ],
    tituloVentana: "Asignación de Facultades",
    link: { consulta: "facultadsede/", save: "seccional" },
    tituloBoton: "Adicionar Seccional",
    columName: "facultad",
    payload: { nomSede: "", direccion: "", id: "", telefono: ""},
    relacion: { nomSeccional: "" },
    leerTabla: "Leyendo datos de la tabla seccional"
  },
  {
    form: [
      {
        field: 'nomSede',
        text: "Nombre de la Sede",
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo Sede requerida",
        id: "id",
        indice: 0,
        posi: 0,
        disabled:true
      },
      {
        field: 'direccion',
        text: "Dirección Sede",
        
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo direccion requerida",
        id: "id",
        indice: 0,
        posi: 1,
        disabled:true
      },
      {
        field: 'telefono',
        text: "Teléfono Sede",
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo teléfono requerido",
        id: "id",
        indice: 0,
        posi: 2,
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
            { text: "Facultad", field: 'nomFacultad', id: 'idFacultad', objeto: "facultad", nivel: 0, posi: 3, urlOrigen: 'sedefacultades',urlConsulta:'sedefacultades', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idFacultad: null, nomFacultad: null }, datos:[],relacion: { facultad:[{idFacultad:''}] }},
           
          ],
      },
      // Configuración del segundo objeto aquí
      
    ],
    columns: [
      {
        title: "Quitar facultad",
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
      { title: "facultad", field: "nomFacultad", headerFilter: "input", width: 600 },
     
    ],
    tituloVentana: "Agregar Facultad",
    link: { consulta: "facultadsede/", save: "sedefacultad" },
    tituloBoton: "Adicionar Sede",
    idAlias:"idFacultad",
    nomTabla:"asignar-sede",
    idForaneo:"idSede",
    objeto:"facultad",
    boton:false,
    payload: { nomSede: "", direccion: "", id: "", telefono: "",nomFacultad:"",idFacultad:"",idSede:""},
    relacion:{seccional:{idSeccional:''}},
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