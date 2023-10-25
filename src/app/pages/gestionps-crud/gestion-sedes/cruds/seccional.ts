export var Seccional: any[] = [
  {
    form: [
      {
        field: 'nomSeccional',
        text: "Nombre de la seccional",
        type: 'input',
        pattern:'^[a-zA-Z ]{4,100}$',
        validar: "Campo seccional requerida",
        validarPattern:"Debe ser solo letras de 4 a 100",
        id: "id",
        disabled:false,
        indice: 0,
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
            { text: "País", field: 'nomPais', id: 'idPais', objeto: "pais", nivel: 0, posi: 1, urlOrigen: 'paises', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idPais: null, nomPais: null }, relacion: { pais: { idPais: '' } } },
            { text: "Departamento", field: 'nomEstado', id: 'idEstado', objeto: "estado", nivel: 1, posi: 2, urlOrigen: 'estadopaises', type: false, label: "Buscar el Estado", error: "País no encontrado", validar: "campo país requerido", model: { idEstado: null, nomEstado: null }, relacion: { estado: { idEstado: '' } } },
            { text: "Ciudad", field: 'nomCiudad', id: 'idCiudad', objeto: "ciudad", nivel: 2, posi: 3, urlOrigen: 'ciudades', type: false, label: "Buscar la Ciudad", error: "País no encontrado", validar: "campo país requerido", model: { idCiudad: null, nomCiudad: null }, relacion: { ciudad: { idCiudad: '' } } },

          ],
      },

      {
        idAlias: "idSeccional"
      },
    ],
    columns: [
      {
        title: "Editar Seccional",
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
        title: "Elimniar Seccional",
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
      { title: "Seccional", field: "nomSeccional", headerFilter: "input", width: 250 },
      { title: "Departamento", field: "nomPais", headerFilter: "input", width: 250 },
      { title: "Estado", field: "nomEstado", headerFilter: "input", width: 250 },
      { title: "Ciudad", field: "nomCiudad", headerFilter: "input", width: 250 },

    ],
    tituloVentana: "Ingreso Seccional",
    link: { consulta: "seccionaless/", save: "seccional" },
    tituloBoton: "Adicionar Seccional",
    nomTabla:"tabla-seccional",
    columName: null,
    boton:true,
    primaryTable:true,
    payload: { nomSeccional: "", nomEstado: "", id: "", nomPais: "", idPais: "", nomCiudad: "", idEstado: "", idCiudad: "" },
    relacion: { nomSeccional: "" },
    leerTabla: "Leyendo datos de la tabla seccional"
  },
  {
    form: [
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

];