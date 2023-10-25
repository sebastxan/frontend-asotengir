export var Sede: any[] = [
    {
      form: [
        {
          field: 'nomSede',
          text: "Nombre de la seccional",
          type: 'input',
          pattern:'^[a-zA-Z ]{4,100}$',
          validar: "Campo seccional requerida",
          validarPattern:"Debe ser solo letras de 4 a 100",
          id: "id",
          indice: 0,
          disabled:false,
          posi: 0
        },
          {
            field: 'telefono',
            text: "Teléfono Sede",
            type: 'input',
            pattern:'^[a-zA-Z ]{4,100}$',
            validar: "Campo teléfono requerido",
            validarPattern:"Debe ser números de teléfono válido",
            id: "id",
            indice: 2,
            disabled:false,
            posi: 1
          },
        
        {
            field: 'direccion',
            text: "Dirección Sede",
            type: 'input',
            pattern:'^(?=.*(?:cr|carrera|calle|cll|diagonal|-|transversal|diag|trans|No|No.|#|no|no|torre|manzana|mz|manz|etapa|apto|apartamento|interior|int|esquina))(?=.*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,-])[-a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,]+$',
            validar: "Campo sed requerida",
            validarPattern:"Debe ser direcciones válidas",
            id: "id",
            indice: 1,
            disabled:false,
            posi: 2
          },
          {
            type: 'select',
            // si es un nivel es decir si una consulta depende de otra 
            //  entonces el nivel 0 seria la 1 consulta 
            //  this.conf.form[posi-nivel].length
            indice: 1,
            parametros:
              [
                { text: "Seccional", field: 'nomSeccional', id: 'idSeccional', objeto: "seccional", nivel: 0, posi: 3, urlOrigen: 'seccionalessede', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idSeccional: null, nomSeccional: null }, relacion: { seccional: { idSeccional: '' } } },
               
              ],
          },
       
  
        {
          idAlias: "idSede"
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
        { title: "Sede", field: "nomSede", headerFilter: "input", width: 250 },
        { title: "Direccion", field: "direccion", headerFilter: "input", width: 250 },
        { title: "telefono", field: "telefono", headerFilter: "input", width: 250 },
  
      ],
      tituloVentana: "Ingreso sede",
      link: { consulta: "sedeseccional/", save: "sede" },
      tituloBoton: "Adicionar Sede",
      nomTabla:"sede",
      boton:true,
      primaryTable:true,
      columName: null,
      payload: { nomSeccional: "", idSeccional: "", id: "",nomSede: "yy",direccion: "xx", telefono: ""},
      relacion: { nomSeccional: "" },
      leerTabla: "Leyendo datos de la tabla sede"
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