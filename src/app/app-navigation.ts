export const navigation = [
  {
    text: 'Inicio',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Gerenciales',
    icon: 'datafield',
    items: [

      {
        text: 'Ingresos',
        path: '/ingresosAnuales',
        icon: 'money'
      },
      {
        text: 'Ingresos Detalle',
        path: '/ingresos',
        icon: 'money'
      },
      // {
      //   text: 'Kilómetros',
      //   path: '/kilometros',
      //   icon: 'map'
      // },
      // {
      //   text: 'Rent. Gerencial',
      //   path: '/rentabilidadgerencial',
      //   icon: 'fieldchooser'
      // }, 
    ]
  },
  {
    text: 'Utilidad',
    icon: 'datafield',
    items: [
      {
        text: 'Utilidad Contable',
        icon: 'columnchooser',
        path: '/costos-anuales-new'
      },
      {
        text: 'Proyección Utilidad',
        icon: 'columnchooser',
        path: '/proyeccion-costos'
      }
    ]
  },
  {
    text: 'Indicadores',
    icon: 'columnchooser',
    path: '/indicadores'
  },
  {
    text: 'Cartera Clientes',
    icon: 'columnchooser',
    path: '/cartera-clientes'
  },
  {
    text: 'Cotizador',
    icon: 'columnchooser',
    path: '/cotizador' 
  },
  {
    text: 'Rent. Contable',
    path: '/rentabilidadcontable',
    icon: 'columnproperties'
  }
  // {
  //   text: 'Costos',//Mensuales
  //   icon: 'columnchooser',
  //   path: '/costos'
    
  // },

  // {
  //   text: 'Ciclo Viaje',
  //   icon: 'columnchooser',
  //   path: '/ciclo-viaje'
  // },
  // {
  //   text: 'Rentabilidad',
  //   icon: 'columnchooser',
  //   path: '/renta'
  // },
  // {
  //   text: 'Permisos/Bitacora',
  //   icon: 'columnchooser',
  //   path: '/permiso-bitacora'
  // },
  // {
  //   text: 'Balanza Comprobación',
  //   icon: 'columnchooser',
  //   path: '/balanza'
  // },

  // {
  //   text: 'Validación-Ingreso',
  //   icon: 'columnchooser',
  //   path: '/validacion-ingreso'
  // },
];
