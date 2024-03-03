import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/Product';
import { FakeApiService } from '../service/fake-api.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-form-put',
  templateUrl: './form-put.component.html',
  styleUrls: ['./form-put.component.css']
})
export class FormPutComponent implements OnInit {
  datosProducto: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fakeApi: FakeApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.datosProducto = this.fb.group({
      editTitle: [data.title, Validators.required],
      editPrice: [data.price, Validators.required]
    });
  }

  ngOnInit() {
    console.log('Datos del producto:', this.data);
  }


  actualizarProducto(): void {
    try{
  // Separar la cadena de imágenes en un array de URLs
  const imagesArray = this.data.images[0].split(',');

  const datos: Product = {
    title: this.datosProducto.get('editTitle')!.value,
    price: this.datosProducto.get('editPrice')!.value,
    categoryId: this.data.categoryId,
    description: this.data.description,
    images: imagesArray // Usar el array de URLs corregido
  };

  console.log(datos);

  this.fakeApi.putProduct(datos, this.data.id).subscribe(response => {
    console.log(datos);
    // Aquí puedes realizar alguna acción adicional si es necesario
  });
    }
    catch(err){
      console.log("Error al actualizar: ", err)
    }
  }
  
  

}