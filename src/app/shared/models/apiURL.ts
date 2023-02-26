export enum API_URLS{
    LOGEO = 'api/Login',
    GET_INGRESOS_ANUALES = 'api/Ingresos/IngresosAnuales',
    GET_INGRESOS_ANUALES_DETALLADO_enero = 'api/Ingresos/IngresosAnualesDetalladoMensual/2023/202301/01',
    GET_INGRESOS_ANUALES_DETALLADO_febrero = 'api/Ingresos/IngresosAnualesDetalladoMensual/2023/202302/02',
    
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
    POST_COSTOS_UDN = 'api/Costos/PostUdns',
    POST_CENTRO_COSTOS = 'api/Costos/GetCC',
    GET_TPS = 'api/Costos/GetTPS/',
    GET_TIPO_USUARIOS = 'api/Login/TiposUsuarios',
    GET_COSTOS_CC = 'api/Costos/GetCC',
    GET_COSTOS_COMPANIAS = 'api/Costos/GetCompanias',
    GET_COSTOS_TIPOS = 'api/Costos/GetTipos',
    GET_COSTOS_CLASES = 'api/Costos/GetClases'
    
}
