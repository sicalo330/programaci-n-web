import { Component } from '@angular/core';
import { FakeApiService } from '../service/fake-api.service';
import { MatDialog } from '@angular/material/dialog';
import { FormPutComponent } from '../form-put/form-put.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  idProducto:number = 0;
  categoryIdProducto:number = 0;
  descriptionProducto:string = '';
  imagesProducto: string[] = ['']

  constructor(private fakeApi: FakeApiService, public dialog: MatDialog){}

  info: any

  idProductoEditar: number = 0;

  datosProductos:any;

  ngOnInit(){
    this.fakeApi.getProduct().subscribe((data: any) => {
      console.log(data)
      this.info = data
    })
  }

  openEdit(producto: any): void {
    try{
      const dialogRef = this.dialog.open(FormPutComponent, {
        data: {
          id: producto.id,
          categoryId: producto.categoryId,
          description: producto.description,
          images: producto.images
        }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Aquí puedes realizar acciones después de que se cierre el diálogo, por ejemplo, refrescar la lista de productos
      });
    }
    catch(err){
      console.log(err)
    }
  }
  

}
