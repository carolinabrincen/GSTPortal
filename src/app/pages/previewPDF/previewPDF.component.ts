import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DxSelectBoxComponent, DxFormComponent, DxDataGridComponent} from 'devextreme-angular';
import { Cartera } from '../../shared/models/carteraClientes/cartera';
import { PermisosService } from 'src/app/services/permisos/permisos.service';
import { CarteraInterCompanias } from '../..//shared/models/carteraIntercompanias/carteraIntercompanias.model';
import { CarteraTerceros } from '../../shared/models/carteraIntercompanias/carteraTerceros.model';
import { Permisos } from 'src/app/shared/models/permisos/clientesAsignados.model';

import { StorageService } from '../../shared/services/storage.service';
import themes from 'devextreme/ui/themes';
import notify from 'devextreme/ui/notify';
import { ActivatedRoute, Router } from '@angular/router';
import SelectBox from "devextreme/ui/select_box";
import { DxiDataGridColumn } from 'devextreme-angular/ui/nested/base/data-grid-column-dxi';
import { DxoGridComponent } from 'devextreme-angular/ui/nested';
import { reduce } from 'rxjs/operators';

@Component({
  templateUrl: './previewPDF.component.html',
  styleUrls: ['./previewPDF.component.scss'],
})
export class PreviewPDFComponent implements OnInit {
@ViewChild('inputElement', {static: false}) el: ElementRef;
  loadingVisible = false;

  isVisible = false;


  pdfSrc = "htto:\\192.168.20.233\Program Files (x86)\Nom20001.Net\Imagenes\PDF\LICENCIA FERNANDO GALVAN HDZ.pdf"
  formCierre: any = {
    usuario: "",
    contrasenia: "",

  }


  constructor(
    private permisosService: PermisosService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    ) {

    }

    previewFile(event) {
      const filePDF = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      
      // var file = new Blob([filePDF], {type: 'application/pdf'});
      // var fileURL = URL.createObjectURL(file);
      // window.open(fileURL);
      //PARA DESCARGAR DOCUMENTOS
      // const a = document.createElement('a');
      // document.body.appendChild(a);
      // a.style.display = 'none';
          
      // const file = new Blob([event.target.files[0]], {type: 'aplicación/pdf'});
      // const url = window.URL.createObjectURL(file);
      // a.href = url;
      // a.download = "test.pdf";
      // a.click();
      // window.URL.revokeObjectURL(url);
      //window.open(url)
    };
    var url = reader.readAsDataURL(event.target.files[0]);

  } 

  ngOnInit(): void {
 
  }

  ngAfterViewInit(): void {

  }


  onShown() {
    // setTimeout(() => {
    //   this.loadingVisible = false;
    // }, 3000);
  }

  onHidden() {
  }

}


