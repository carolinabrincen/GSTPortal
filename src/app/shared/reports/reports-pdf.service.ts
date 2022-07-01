import { reportResources } from './reportResources';
import { RptCotizacion } from './rptCotizacion';
import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { NumeroLetras } from '../services/convertirNumLetra';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({
  providedIn: 'root'
})
export class ReportsPDFService {

  

  constructor(private numLetras: NumeroLetras) {

  }

  obtenerReporte(folio:number, nombreCliente: string, precioVenta: number, ruta: string) {

    const pdfDefinition: any = {
      content: [
        { text: 'Hola Mundo' }
      ]

    };


    

    const otroPDF = pdfMake.createPdf(this.buildReport(folio, nombreCliente, precioVenta, ruta));
    otroPDF.open();





  }




  buildReport(folio:number, nombreCliente: string, precioVenta: number, ruta: string) {


    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    var mmS;
    var ddS;

    if (dd < 10) 
    {  
      ddS = '0' + dd;
    }
    else
    {
      ddS = dd.toString();
    }

    if (mm < 10)
    {
      mmS = '0' + mm;
    }
    else
    {
      mmS = mm.toString();
    }

    const today2 = ddS + '/' + mmS + '/' + yyyy;



    

    let pesoMXLocale = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
  });
   


    const pdfDefinition: any = {
      info: {
        title: 'Cotizacion de Viaje',
        author: 'GST Transportes',
        subject: 'Cotizacion de Viaje',
        keywords: 'GST',
      },
      pageSize: 'LETTER',
      pageMargins: [0, 0, 0, 25],

      defaultStyle: {
        fontSize: 11,
        columnGap: 19
      },
      // Layout del reporte
      content: {
        table: {
          headerRows: 3,
          widths: ['*'],
          body: [
            // FRANJA AMARILLA --->> ROW 1 DEL HEADER DEL REPORTE <<---
            [
              {
                border: [false, false, false, false],
                fillColor: '#D3A007',
                text: '.',
                columns: [
                  {
                    margins: [0, 0, 0, 0],
                    text: 'hola', fontSize: 12, bold: true, color: '#D3A007'
                  }
                ]
              }
            ],
            // LOGO, ENCABEZADO Y FOLIO --->> ROW 2 DEL HEADER DEL REPORTE <<---
            [
              {
                border: [false, false, false, false],
                columns: [
                  {
                    width: '*',
                    margin: [20, 5, 0, 0],
                    image: reportResources.logoGST,
                    fit: [100, 100],
                    alignment: 'left'
                  },
                  {
                    width: '*',
                    margin: [0, 10, 0, 0],
                    alignment: 'center',
                    text: [
                      {
                        text: 'Cotizacion de Viajes\n',
                        bold: true
                      },
                      { text: 'Grupo Servicios de Transporte' }]
                  },
                  {
                    margin: [0, 20, 10, 0],
                    width: '*',
                    alignment: 'right',
                    text: 'Folio: ' + folio, bold: true, fontSize: 12
                  },
                ]
              }
            ],
            // FRANJA GRIS --->> ROW 3 DEL HEADER DEL REPORTE <<---
            [
              {
                border: [false, false, false, false],
                fillColor: '#8c8c8c',
                text: '.',
                columns: [
                  {
                    margins: [0, 0, 0, 0],
                    text: 'hola', fontSize: 2, bold: true, color: '#8c8c8c'
                  }
                ]
              }
            ],
            // ROWS DE CONTENIDO --->> TABLA DE CONTENIDO DEL REPORTE <<---
            [
              {
                border: [false, false, false, false],
                margin: [40, 0, 40, 0],
                table: {

                  headerRows: 1,
                  heights: [30, 30, 40, 70, 10, 10, 10, 10, 40],
                  widths: ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*'],
                  body: [
                    //Espacio en blanco
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: ''
                      }
                    ],
                    //Fecha de cotizacion
                    [
                      {
                        border: [false, false, false, false],
                        alignment: 'right',
                        colSpan: 12,
                        text: today2
                      }
                    ],
                    //Nombre del cliente
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: [
                          { text: 'Atención:  ' },
                          { text: nombreCliente, bold: true }
                        ]
                      }
                    ],
                    //Primer parrafo
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: 'Por medio de este conducto le informo que en base a la plática  sostenida y de común acuerdo entre ambas partes  le hago llegar el presente documento para su autorización de las siguientes tarifas en base a las rutas solicitadas:'
                      }
                    ],
                    //Tabla de rutas
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        margin: [0, 0, 15, 0],
                        table: {
                          headerRows: 1,
                          widths: ['auto', 90, 'auto'],
                          body: [
                            //Encabezado
                            [
                              {
                                alignment: 'center',
                                text: 'Ruta',
                                bold: true,
                                fillColor: '#d9d9d9'
                              },
                              {
                                alignment: 'center',
                                text: 'Costo',
                                bold: true,
                                fillColor: '#d9d9d9'
                              },
                              {
                                alignment: 'center',
                                text: 'Importe en letra',
                                bold: true,
                                fillColor: '#d9d9d9'
                              }
                            ],
                            //Ruta 1
                            [
                              {
                                text: ruta
                              },
                              {
                                alignment: 'right',
                                text: pesoMXLocale.format(precioVenta)
                              },
                              {
                                text: this.numLetras.getNumeroLetras(precioVenta),
                                fontSize: 10
                              }
                            ]
                          ]
                        }
                      }
                    ],
                    //Obervaciones
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: '\n\nEl costo de la tarifa es más IVA, libre de maniobras de carga y descarga.'
                      }
                    ],
                    //Despedida
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: '\n\n\nSin más quedo a sus órdenes.'
                      }
                    ],
                    //Atentamente
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: '\n\n\nAtentamente',
                        alignment: 'center'
                      }
                    ],
                    //Nombre
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 4,
                        text: ''
                      }, {}, {}, {},
                      {
                        border: [false, false, false, true],
                        colSpan: 4,
                        text: '',
                        alignment: 'center'
                      },
                      {}, {}, {},
                      {
                        border: [false, false, false, false],
                        colSpan: 4,
                        text: ''
                      }, {}, {}, {}
                    ],
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: 'Ing. Pablo Noé Rodríguez González',
                        alignment: 'center'
                      }
                    ],
                    [
                      {
                        border: [false, false, false, false],
                        colSpan: 12,
                        text: 'Director Comercial',
                        alignment: 'center'
                      }
                    ]
                  ]
                }
              }
            ]
          ]//FIN body
        }//FIN tabla principal del reporte


      },//FIN content

      // Footer del reporte
      footer: {
        columns: [
          {
            table: {
              headerRows: 0,
              widths: ['*'],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    fillColor: '#D3A007',
                    text: 'Hola',
                    color: '#D3A007',
                    fontSize: 15
                  }
                ]
              ]
            }
          }
        ],
      }

    };
    return pdfDefinition;
  }


}
