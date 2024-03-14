import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductPut } from '../model/ProductPut';
import { FakeApiService } from '../service/fake-api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-put',
  templateUrl: './form-put.component.html',
  styleUrls: ['./form-put.component.css']
})
export class FormPutComponent implements OnInit {
  datosProducto!: FormGroup;
  listProduct: ProductPut[] = [];

  constructor(
    private fb: FormBuilder,
    private fakeApi: FakeApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormPutComponent>  // Referencia al MatDialogRef
  ) {}



  ngOnInit() {
    // Corregir el nombre del campo 'tittle' a 'title'
    //Lo que suce es que la api al parecer tiene un error tipografico ya que puso tittle, lo que hago aquí es tomar ese tittle y poner como title para que se
    //Adapte a la ortografía de mi código por así decirlo y por último se agrega a listProduct que al finar será ciclado para proporcionar en la vista
    //Los productos
    this.data.title = this.data.tittle;
    delete this.data.tittle; // Eliminar el campo incorrecto
  
    this.listProduct = this.data;
  
    // Crear el FormGroup después de que `data` esté completamente disponible
    this.createForm(this.data.title, this.data.price);
    console.log(this.data);
  }
  

  createForm(data:string, id:number) {
    this.datosProducto = this.fb.group({
      editTitle: data,
      editPrice: id
    });

  }

  actualizarProducto(): void {
    try {
      const imagesArray = this.data.images[0].split(',');

      const datos: ProductPut = {
        title: this.datosProducto.get('editTitle')!.value,
        price: this.datosProducto.get('editPrice')!.value,
      };

      console.log(datos)

      this.fakeApi.putProduct(datos, this.data.id).subscribe(response => {
        this.dialogRef.close();
        location.reload()
      });
    } catch (err) {
      console.log("Error al actualizar: ", err)
    }
  }
}

