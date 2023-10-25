export var Ciudad: any[] = [
    {
      form: [
       
        {
          field: 'nomCiudad',
          text: "Nombre de la Ciudad",
          type: 'input',
          mask:"(000) 000-0000",
          pattern:'^[a-zA-Z ]{4,100}$',
          validar: "Campo requerido de 4 a 100 letras",
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
              { text: "País", field: 'nomPais', id: 'idPais',objeto:"pais", nivel: 0, posi: 1, urlOrigen: 'paises', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idPais: null, nomPais:null },relacion:{pais:{idPais:''}} },
             { text: "Estado", field: 'nomEstado', id: 'idEstado',objeto:"estado",  nivel: 1, posi: 2, urlOrigen: 'estadopaises', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idEstado: null, nomEstado:null },relacion:{estado:{idEstado:''}} },
            
            ],
        },

        {
          idAlias:"idCiudad"
        },
    ],
    columns: [
        {
          title: "Editar Ciudad",
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
          title: "Elimniar Ciudad",
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
        { title: "Ciudad", field: "nomCiudad", headerFilter: "input", width: 250 },

      ],
      tituloVentana: "Ingreso Ciudad",
      nomTabla:"tabla-ciudad",
      link: {consulta:"estadociudad/",save:"ciudad"},
      tituloBoton: "Adicionar Ciudad",
      columName: null,
      boton:true,
      primaryTable:true,
      payload:{nomEstado:"",id:"",nomPais:"",idPais:"",nomCiudad:"",idEstado:""},
      relacion:{nomEstado:""},
      leerTabla:"Leyendo datos de la tabla Ciudades"
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