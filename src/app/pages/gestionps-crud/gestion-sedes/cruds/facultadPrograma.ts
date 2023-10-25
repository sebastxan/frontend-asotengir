export var FacultadPrograma: any[] = [
    {
      form: [
        {
            field: 'nomFacultad',
            text: "Nombre de la Facultad",
            type: 'input',
            pattern:'^[a-zA-Z ]{4,100}$',
            validar: "Campo Facultad requerida",
            id: "id",
            indice: 0,
            disabled:false,
            posi: 0
          },
          {
            idAlias: "idFacultad"
          },
         
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
            title: "Editar Facultad",
            field: "Editar",
            formatter: function () {
              return "<span class='material-icons'>edit</span>";
    
            },
            width: function (column) {
              const titleLength = column.title.length;
              const minWidth = 100; // Ancho mínimo deseado para la columna
              const width = minWidth + (titleLength * 10); // Ajustar el factor de multiplicación según tus preferencias
              return width + 'px';
            },
            headerSort: false,
            hozAlign: "center",
            headerHozAlign: "center",
          },
       
          {
            title: "Elimniar Facultad",
            field: "Eliminar",
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
            hozAlign: "center",
            headerHozAlign: "center",
          },
          
        

       {
          title: "Agregar Programa",
          field: "Agregar",
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
  
        { title: "Facultad", field: "nomFacultad", headerFilter: "input", width: 250 },
        
  
      ],
      tituloVentana: "Agreagar Facultad",
      link: { consulta: "facultadprograma", save: "programa" },
      tituloBoton: "Adicionar Facultad",
      primaryTable:true,
      nomTabla:"facultad-programa",
      columName: "programas",
      payload: { nomPrograma: "",  id: ""},
      relacion: { nomSeccional: "" },
      leerTabla: "Leyendo datos de la tabla Facultad"
    },
    {
      form: [
        {
          field: 'nomPrograma',
          text: "Nombre del programa",
          type: 'input',
          pattern:'^[a-zA-Z ]{4,100}$',
          validar: "Campo programa requerido",
          id: "id",
          indice: 0,
          posi: 0,
          disabled:false
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
        // Configuración del segundo objeto aquí
        
      ],
      columns: [
        {
            title: "Editar Programa",
            field: "Editar2",
            formatter: function () {
              return "<span class='material-icons'>edit</span>";
    
            },
            width: function (column) {
              const titleLength = column.title.length;
              const minWidth = 100; // Ancho mínimo deseado para la columna
              const width = minWidth + (titleLength * 10); // Ajustar el factor de multiplicación según tus preferencias
              return width + 'px';
            },
            headerSort: false,
            hozAlign: "center",
            headerHozAlign: "center",
          },
       
          {
            title: "Elimniar Programa",
            field: "Eliminar2",
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
            hozAlign: "center",
            headerHozAlign: "center",
          },
          
        
        { title: "programa", field: "nomPrograma", headerFilter: "input", width: 600 },
       
      ],
      tituloVentana: "Agregar Programa",
      link: { consulta: "facultadprograma", save: "programa" },
      tituloBoton: "Adicionar Programa",
      idAlias:"idPrograma",
      idForaneo:"idFacultad",
      boton:false,
      objeto:"facultad",
      payload: { nomPrograma: "", id: "",nomFacultad:"",idFacultad:""},
      relacion:{facultad:{idFacultad:''}},
      leerTabla: "Leyendo datos de la facultad",
      nomTabla:"facultad-programa",
      asignar:false,
      columName: null,
   /*   tituloventana: null,
      link: null,
      tituloBoton: null,
      columName: null,
      payload:null,
      leerTabla:null*/
  
      
    },
  
  ];