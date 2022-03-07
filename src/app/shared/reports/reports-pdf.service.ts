import { RptCotizacion } from './rptCotizacion';
import { Injectable } from '@angular/core';
import { Cell, ITable, PdfMakeWrapper, Table, Txt } from "pdfmake-wrapper";
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake';

@Injectable({
  providedIn: 'root'
})
export class ReportsPDFService {

  constructor() {
    PdfMakeWrapper.setFonts(pdfFonts)

  }

  obtenerReporte() {
    const pdf = new PdfMakeWrapper();

    pdf.info({
      title: 'COTIZACION F-0001',
      author: 'GST Transportes',
      subject: 'Cotizacion de servicios de transporte',
    });

    pdf.header(this.crearTabla2);

    pdf.add('Hello world!');
    pdf.add('Hello world!');
    pdf.add('Hello world!');
    pdf.add('Hello world!');
    pdf.add('Hello world!');
    pdf.add('Hello world!');
    pdf.add(this.crearTabla());

    // let x = new Table([
    //   [
    //     new Txt('Column 1').bold().end,
    //     new Cell(new Txt('Column 2 with colspan').bold().end).colSpan(2).end
    //   ],
    //   [
    //     new Txt('Column 1').bold().end,
    //     'Column 2',
    //     'Column 3'
    //   ]
    // ]).end;

    // pdf.add(x);




    // pdf.footer(x

    // );


    pdf.create().open()


  }

  crearTabla(): ITable{
    return new Table([
      ['ID', 'UDN', 'CLIENTE'],
      ['ID', 'UDN', 'CLIENTE'],
    ]).end;
  }
  crearTabla2(): ITable{
    return new Table([
      ['GstTransportes', 'FORMATO DE COTIZACION', 'FOLIO: 0001'],
    ]).widths(['*','*','*'])
    .layout('noBorders')
    .end;
  }
}
