export var Pais: any[] = [
    {
      form: [
        {
          field: 'nomPais',
          text: "Nombre del país",
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
          idAlias:"idPais"
        },
    ],
    columns: [
        {
          title: "Editar País",
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
          title: "Elimniar País",
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
        { title: "Pais", field: "nomPais", headerFilter: "input", width: 250 },

      ],
      tituloVentana: "Ingreso Pais",
      nomTabla:"tabla-pais",
      link: {consulta:"pais/",save:"pais"},
      tituloBoton: "Adicionar Pais",
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