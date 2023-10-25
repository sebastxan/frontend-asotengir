export var Escalafon: any[] = [
    {
      form: [
        {
          field: 'nivel',
          text: "Nombre del nivel",
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
          field: 'salario',
          text: "Salario del docente",
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
          idAlias:"idEscalafon"
        },
    ],
    columns: [
        {
          title: "Editar Escalafon",
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
          title: "Elimniar Escalafon",
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
        { title: "Escalafon", field: "nivel", headerFilter: "input", width: 250 },
        { title: "Salario", field: "salario", headerFilter: "input", width: 250 },
      ],
      tituloVentana: "Ingreso escalafon",
      nomTabla:"tabla-escalafon",
      boton:true,
      link: {consulta:"escalafones/",save:"escalafon"},
      tituloBoton: "Adicionar Escalafon",
      columName: null,
    
      primaryTable:true,
      payload:{nivel:"",id:"",salario:""}
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