export enum API_URLS{
    LOGEO = 'api/Login',
    GET_INGRESOS_ANUALES = 'api/Ingresos/IngresosAnuales',
    GET_INGRESOS_ANUALES_DETALLADO = 'api/Ingresos/IngresosAnualesDetallado/2022/0',
    GET_INGRESOS_ANUALES_DETALLADO_MARZO = 'api/Ingresos/IngresosAnualesDetalladoMarzo/2022/0',
    GET_INGRESOS_ANUALES_DETALLADO_ABRIL = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202204/04',
    GET_INGRESOS_ANUALES_DETALLADO_MAYO = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202205/05',
    GET_INGRESOS_ANUALES_DETALLADO_JUNIO = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202206/06',
    GET_INGRESOS_ANUALES_DETALLADO_JULIO = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202207/07',
    GET_INGRESOS_ANUALES_DETALLADO_AGO = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202208/08',
    GET_INGRESOS_ANUALES_DETALLADO_SEP = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202209/09',
    GET_INGRESOS_ANUALES_DETALLADO_OCT = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202210/10',
    GET_INGRESOS_ANUALES_DETALLADO_NOV = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202211/11',
    GET_INGRESOS_ANUALES_DETALLADO_DIC = 'api/Ingresos/IngresosAnualesDetalladoMensual/2022/202212/12',
    GET_INGRESOS_ANUALES_CHART = 'api/Ingresos/IngresosAnualesChart',

    GET_TONELADAS_ANUALES = 'api/Ingresos/ToneladasAnuales',
    GET_TONELADAS_ANUALES_CHART = 'api/Ingresos/ToneladasAnualesChart',

    GET_VIAJES_ANUALES = 'api/Ingresos/ViajesAnuales',
    GET_VIAJES_ANUALES_CHART = 'api/Ingresos/ViajesAnualesChart',

    GET_KMS_ANUALES = 'api/Ingresos/KmsAnuales',
    GET_KMS_ANUALES_CHART = 'api/Ingresos/KmsAnualesChart',

    GET_Rentabilidad_Contable = 'api/Rentabilidad/RentbilidadContable',

    GET_UNIDADES_NEOGCIO = 'api/General/UnidadesNegocio',
    POST_RENTABILIDAD_CONTABLE = 'api/Rentabilidad/RentbilidadContable',
    POST_TRACTOS = 'api/Rentabilidad/RCTractos',

    GET_TIPOS_OPERACION = 'api/General/TiposOperacion',
    GET_TIPOS_OPERACION_UDN = 'api/Cotizador/GetOperaciones/',
    POST_CLIENTES_RUTAS = 'api/Rentabilidad/RGClientesRutas',
    POST_RENTABILIDAD_RUTA = 'api/Rentabilidad/RentabilidadRuta',

    POST_COTIZADOR_OBTENER_VARIABLES = 'api/Cotizador/ObtenerVariables',
    POST_COTIZADOR_NUEVA_COTIZACION = 'api/Cotizador/NvaCotizacion',
    GET_COTIZADOR_OBTENER_PRECOTIZACIONES = 'api/Cotizador/GetCotizacionesActivas/PRECOTIZACION',
    GET_COTIZADOR_OBTENER_APROBADAS = 'api/Cotizador/GetCotizacionesActivas/APROBADA',
    GET_COTIZADOR_OBTENER_COTIZACION = 'api/Cotizador/GetCotizacion/',
    POST_COTIZADOR_EDITAR_COTIZACION = 'api/Cotizador/ModCotizacion',
    POST_COTIZADOR_ELIMINAR_COTIZACION = 'api/Cotizador/EliminarCotizacion',
    POST_COTIZADOR_APROBAR_COTIZACION = 'api/Cotizador/AprobarCotizacion',
    GET_COTIZADOR_RENTABILIDAD = 'api/Cotizador/ObtenerRendimientos/',

    GET_KMS_ACTUALES = 'api/Kilometros/KmsMensuales',
    GET_KMS_ACTUALES_MANT = 'api/Kilometros/KmsMensualesAnt',

    GET_COSTOS_MES = 'api/Costos/GetCostosMensuales/',

    POST_RESULT_COSTO_ANUAL = 'api/Costos/GetEdoResultados',
    POST_DETALLE_CUENTA = 'api/Costos/GetDetalleCuenta',
    POST_BALANZA = 'api/costos/PostBalanza',
    GET_TPS = 'api/Costos/GetTPS/',
    GET_TIPO_USUARIOS = 'api/Login/TiposUsuarios',
    GET_COSTOS_CC = 'api/Costos/GetCC',
    
}
