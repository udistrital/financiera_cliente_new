export let FORM_TRADUCCION = {
    // titulo: 'Traduccion',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'Traduccion',
    campos: [
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
            nombre: 'Titulo',
            label_i18n: 'titulo_traduccion',
            placeholder_i18n: 'titulo_traduccion',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
            nombre: 'NombreOriginal',
            label_i18n: 'nombre_original',
            placeholder_i18n: 'nombre_original',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-6 col-md-6 col-sm-12 col-xs-12',
            nombre: 'Autor',
            label_i18n: 'autor',
            placeholder_i18n: 'autor',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'TipoTraduccion',
            label_i18n: 'tipo_traduccion',
            placeholder_i18n: 'tipo_traduccion',
            requerido: true,
            tipo: 'TipoTraduccion',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'MedioDivulgacion',
            label_i18n: 'medio_divulgacion',
            placeholder_i18n: 'medio_divulgacion',
            requerido: true,
            tipo: 'MedioDivulgacion',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'IdiomaOriginal',
            label_i18n: 'idioma_original',
            placeholder_i18n: 'idioma_original',
            requerido: true,
            relacion: false,
            tipo: 'Idioma',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'IdiomaTraducido',
            label_i18n: 'idioma_traducido',
            placeholder_i18n: 'idioma_traducido',
            requerido: true,
            relacion: false,
            tipo: 'Idioma',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'Ano',
            label_i18n: 'ano',
            placeholder_i18n: 'ano',
            requerido: true,
            tipo: 'number',
            minimo: 1500,
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'Mes',
            label_i18n: 'mes',
            placeholder_i18n: 'mes',
            requerido: true,
            tipo: 'number',
            key: 'Nombre',
            relacion: false,
            opciones: [
                { Id: 1, Nombre: 'Enero' },
                { Id: 2, Nombre: 'Febrero' },
                { Id: 3, Nombre: 'Marzo' },
                { Id: 4, Nombre: 'Abril' },
                { Id: 5, Nombre: 'Mayo' },
                { Id: 6, Nombre: 'Junio' },
                { Id: 7, Nombre: 'Julio' },
                { Id: 8, Nombre: 'Agosto' },
                { Id: 9, Nombre: 'Septiembre|' },
                { Id: 10, Nombre: 'Octubre' },
                { Id: 11, Nombre: 'Noviembre' },
                { Id: 12, Nombre: 'Diciembre' },
            ],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'Edicion',
            label_i18n: 'edicion',
            placeholder_i18n: 'placeholder_edicion',
            requerido: true,
            tipo: 'number',
            minimo: 1,
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-lg-3 col-md-3 col-sm-12 col-xs-12',
            nombre: 'Serie',
            label_i18n: 'serie',
            placeholder_i18n: 'serie',
            requerido: true,
            tipo: 'number',
            minimo: 1,
        },
    ],
}
