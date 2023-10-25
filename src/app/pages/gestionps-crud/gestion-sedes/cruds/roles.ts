export var Role: any[] = [
    {
      form: [
        {
          field: 'nomRole',
          text: "Nombre del rol",
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
          idAlias:"idRole"
        },
    ],
    columns: [
        {
          title: "Editar Rol",
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
          title: "Elimniar Rol",
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
        { title: "Nombre del Rol", field: "nomRole", headerFilter: "input", width: 250 }
       
      ],
      tituloVentana: "Ingreso de los roles",
      nomTabla:"roles",
      boton:true,
      link: {consulta:"role/",save:"role"},
      tituloBoton: "Adicionar Rol",
      columName: null,
    
      primaryTable:true,
      payload:{nomRol:"",id:""}
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