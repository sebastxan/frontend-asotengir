export var Facultad: any[] = [
    {
      form: [
        {
          field: 'nomFacultad',
          text: "Nombre de la facultad",
          type: 'input',
          mask:"(000) 000-0000",
          validar: "campo requerido de 4 a 100 letras",
          validarPattern:"Debe ser solo letras de 4 a 100",
          id: "id",
          pattern:'^[a-zA-Z ]{4,100}$',
          indice: 0,
          disabled:false,
          posi: 0
        },
        {
          idAlias:"idFacultad"
        },
    ],
    columns: [
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
        { title: "Facultad", field: "nomFacultad", headerFilter: "input", width: 250 },

      ],
      tituloVentana: "Ingreso Facultad",
      nomTabla:"tabla-facultad",
      link: {consulta:"facultadess/",save:"facultad"},
      tituloBoton: "Adicionar Facultad",
      columName: null,
      boton:true,
      primaryTable:true,
      payload:{nomPais:"",id:""}
    },
    {
      form: [
        {

        }
        // Configuración del segundo objeto aquí
      ],
      columns: [

       
      ],
      tituloventana: null,
      link: null,
      tituloBoton: null,
      columName: null,
      payload:null

    },



  ]