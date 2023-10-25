export var Usuarios: any[] = [
    {
      form: [
        {
          field: 'nombre',
          text: "Nombre del usuario",
          type: 'input',
          validar: "Campo seccional requerida",
          id: "id",
          indice: 0,
          posi: 0,
          disabled: false
        },
        {
          field: 'apellidos',
          text: "Apellidos",
          type: 'input',
          validar: "Campo seccional requerida",
          id: "id",
          indice: 0,
          posi: 0,
          disabled: false
        },
        {
          field: 'email',
          text: "E-mail",
          type: 'input',
          validar: "Campo seccional requerida",
          id: "id",
          indice: 0,
          posi: 0,
          disabled: false
        },
        {
          field: 'username',
          text: "Username",
          type: 'input',
          validar: "Campo seccional requerida",
          id: "id",
          indice: 0,
          posi: 0,
          disabled: false
        },
        {
          field: 'password',
          text: "Password",
          type: 'input',
          validar: "Campo seccional requerida",
          id: "id",
          indice: 0,
          posi: 0,
          disabled: false
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
          idAlias: "idSeccional"
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
        /*   {
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
           },*/
        {
          title: "Asociar investigador",
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
  
        { title: "Seccional", field: "nomSeccional", headerFilter: "input", width: 250 },
        { title: "Username", field: "username", headerFilter: "input", width: 250 },
        { title: "Nombre", field: "nombre", headerFilter: "input", width: 250 },
        { title: "Apellidos", field: "apellidos", headerFilter: "input", width: 250 },
        { title: "E-mail", field: "email", headerFilter: "input", width: 250 },
  
      ],
      tituloVentana: "Ingreso Usuarios",
      link: { consulta: "user_asignacion/", save: "users" },
      tituloBoton: "Agregar usuarios",
      columName: "usuarios",
      payload: { nomSeccional: "", idSeccional: "", id: "", nombre: "", email: "", apellidos: "", username: "", password: "" },
      relacion: { nomSeccional: "" },
      primaryTable: true,
      leerTabla: "Leyendo datos de la tabla seccional"
    },
    {
      form: [
        {
          type: 'select',
          // si es un nivel es decir si una consulta depende de otra 
          //  entonces el nivel 0 seria la 1 consulta 
          //  this.conf.form[posi-nivel].length
          indice: 1,
          parametros:
            [
              { text: "Sede", field: 'nomSede', id: 'idSede', objeto: "sede", nivel: 0, posi: 0, urlOrigen: 'allsede', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idSede: null, nomSede: null }, relacion: { sede: { idSede: '' } } },
  
  
  
            ],
        },
        {
          type: 'select',
          // si es un nivel es decir si una consulta depende de otra 
          //  entonces el nivel 0 seria la 1 consulta 
          //  this.conf.form[posi-nivel].length
          indice: 1,
          parametros:
            [
              
              { text: "Programa", field: 'nomPrograma', id: 'idPrograma', objeto: "programa", nivel: 0, posi: 1, urlOrigen: 'programa_user', type: false, label: "Buscar el Estado", error: "País no encontrado", validar: "campo país requerido", model: { idPrograma: null, nomPrograma: null }, relacion: { programa: { idPrograma: '' } } },
  
  
            ],
        },
        {
          type: 'select',
          // si es un nivel es decir si una consulta depende de otra 
          //  entonces el nivel 0 seria la 1 consulta 
          //  this.conf.form[posi-nivel].length
          indice: 1,
          parametros:
            [
              { text: "Escalafon", field: 'nivel', id: 'idEscalafon', objeto: "escalafon", nivel: 0, posi: 2, urlOrigen: 'escalafon', type: false, label: "Buscar el país", error: "País no encontrado", validar: "campo país requerido", model: { idEscalafon: null, nivel: null }, relacion: { escalafon: { idEscalafon: '' } } },
  
  
  
            ],
        },
        // Configuración del segundo objeto aquí
  
      ],
      columns: [
        {
          title: "Editar Sede",
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
          //   headerVertical:true,
          headerSort: false,
          hozAlign: "center",
          headerHozAlign: "center",
        },
        {
          title: "Elimniar Sede",
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
          // headerVertical:true,
          hozAlign: "center",
          headerHozAlign: "center",
        },
        { title: "Sede", field: "nomSede", headerFilter: "input", width: 250 },
        { title: "Programa", field: "nomPrograma", headerFilter: "input", width: 200 },
        { title: "Escalafon", field: "nivel", headerFilter: "input", width: 200 },
  
      ],
      tituloVentana: "Asignación como investigador",
      link: { consulta: "suser_asignacion/", save: "usuarios" },
      tituloBoton: "Adicionar Sede",
      payload: { nomSede: "", idSede: "", id: "", nomPrograma: "", idPrograma: "", nivel: "", idEscalafon: "", user: { idUSer: "" } },
      objeto: "user",
      idForaneo: "idUser",
      primaryTable: false,
      relacion: { users: { idForaneo: '' } },
      leerTabla: "Leyendo datos de la usuarios",
      columName: null,
      /*   tituloventana: null,
         link: null,
         tituloBoton: null,
         columName: null,
         payload:null,
         leerTabla:null*/
  
  
    },
  
  ];