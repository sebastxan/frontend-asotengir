export var Estado: any[] = [
    {
      form: [
       
        {
          field: 'nomEstado',
          text: "Nombre del Departamento",
          type: 'input',
          mask:"(000) 000-0000",
          pattern:'^[a-zA-Z ]{4,100}$',
          validar: "Campo requerido de",
          validarPattern:"Debe ser solo letras de 4 a 100",
          id: "id",
          indice: 0,
          disabled:false,
          posi: 0
        },
        {
          type: 'select',
          // si es un nivel es decir si una consulta depende de otra 
          //  entonces el nivel 0 seria la 1 consulta 
          //  this.conf.form[posi-nivel].length
          indice: 1,
          parametros:
            [
              { text: "País", field: 'nomPais', id: 'idPais',objeto:"pais",  nivel: 0, posi: 1,  urlOrigen: 'paises', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idPais: null, nomPais:null },relacion:{pais:{idPais:''}} },
             
            ],
        },

        {
          idAlias:"idEstado"
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
        { title: "Estado", field: "nomEstado", headerFilter: "input", width: 250 },
      

      ],
      tituloVentana: "Ingreso Estado",
      link: {consulta:"estadopais/",save:"estado"},
      tituloBoton: "Adicionar Estado",
      nomTabla:"tabla-estado",
      columName: null,
      boton:true,
      primaryTable:true,
      payload:{nomEstado:"",id:"",nomPais:"",idPais:""},
      relacion:{nomEstado:""},
      leerTabla:"Leyendo datos de la tabla Estado"
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

      payload:null,
      leerTabla:null

    },



  ]