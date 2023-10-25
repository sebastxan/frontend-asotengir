export var User: any[] = [
    {
      form: [
        {
          field: 'nombre',
          text: "Nombre del usuario",
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
            field: 'apellidos',
            text: "Apellidos del usuario",
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
            field: 'email',
            text: "Email del usuario",
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
            field: 'username',
            text: "Username",
            type: 'input',
            pattern:'^(?=.*(?:cr|carrera|calle|cll|diagonal|-|transversal|diag|trans|No|No.|#|no|no|torre|manzana|mz|manz|etapa|apto|apartamento|interior|int|esquina))(?=.*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,-])[-a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,]+$',
            validar: "Campo sed requerida",
            validarPattern:"Debe ser direcciones válidas",
            id: "id",
            indice: 1,
            disabled:false,
            posi: 3
          },
          {
            field: 'password',
            text: "password",
            type: 'input',
            pattern:'^(?=.*(?:cr|carrera|calle|cll|diagonal|-|transversal|diag|trans|No|No.|#|no|no|torre|manzana|mz|manz|etapa|apto|apartamento|interior|int|esquina))(?=.*[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,-])[-a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,]+$',
            validar: "Campo sed requerida",
            validarPattern:"Debe ser direcciones válidas",
            id: "id",
            indice: 1,
            disabled:false,
            posi: 4
          },
          {
            type: 'select',
            // si es un nivel es decir si una consulta depende de otra 
            //  entonces el nivel 0 seria la 1 consulta 
            //  this.conf.form[posi-nivel].length
            indice: 1,
            parametros:
              [
                { text: "Seccional", field: 'nomSeccional', id: 'idSeccional', objeto: "seccional", nivel: 0, posi: 5, urlOrigen: 'seccionalessede', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idSeccional: null, nomSeccional: null }, relacion: { seccional: { idSeccional: '' } } },
               
              ],
          },
       
  
        {
          idAlias: "idUser"
        },
      ],
      columns: [
        {
          title: "Editar Usuario",
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
          title: "Elimniar Usuario",
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
        { title: "Username", field: "username", headerFilter: "input", width: 250 },
        { title: "Nombre", field: "nombre", headerFilter: "input", width: 250 },
        { title: "Apellidos", field: "apellidos", headerFilter: "input", width: 250 },
        { title: "E-mail", field: "email", headerFilter: "input", width: 250 },
  
      ],
      tituloVentana: "Ingreso Usuarios",
      link: { consulta: "user/", save: "users" },
      tituloBoton: "Agregar usuarios",
      nomTabla:"user",
      boton:true,
      primaryTable:true,
      columName: null,
      payload: { nomSeccional: "", idSeccional: "", id: "",nombre: "",email: "", apellidos: "",username: "",password:""},
      relacion: { nomSeccional: "" },
      leerTabla: "Leyendo datos de la tabla usuarios"
    },
  /*  sed.put("idPrograma", x.getIdPrograma());
					sed.put("nomPrograma", x.getNomPrograma());
					sed.put("idSede", x.getIdSede());
					sed.put("nomSede", x.getNomSede());
					sed.put("idUser", x.getIdUser());
					sed.put("idEscalafon", x.getIdEscalafon());
					sed.put("nivel", x.getNivel());*/
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