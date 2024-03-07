import { Component } from '@angular/core';
import { FakeApiService } from '../service/fake-api.service';
import { MatDialog } from '@angular/material/dialog';
import { FormPutComponent } from '../form-put/form-put.component';
import { Product } from '../model/Product';
import { faPlus, faEdit, faRemove } from '@fortawesome/free-solid-svg-icons';

//NOTA IMPORTANTE: preguntarle al profesor si es válido lo que estoy haciendo, ya que al hacer cualquier método debo actualizar la página o debo hacer algo para que se evidencia de una vez

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  iconPlus = faPlus
  iconEdit = faEdit
  iconRemove = faRemove
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
          tittle: producto.title,
          price:producto.price,
          categoryId: producto.categoryId,
          description: producto.description,
          images: producto.images
        }
      });
    

    }
    catch(err){
      console.log(err)
    }
  }

  eliminarProducto(producto: Product, id:number){
    try{
      this.fakeApi.deleteProduct(producto, id).subscribe(data => {
        console.log(data)
      })
    }
    catch(err){
      console.log('Error al eliminar el producto: ', err)
    }
  }
  

}
