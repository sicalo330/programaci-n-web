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
  datosProducto: FormGroup;
  listProduct: ProductPut[] = [];

  constructor(
    private fb: FormBuilder,
    private fakeApi: FakeApiService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormPutComponent>  // Referencia al MatDialogRef
  ) {
    this.datosProducto = this.fb.group({
      editTitle: [data.title, Validators.required],
      editPrice: [data.price, Validators.required]
    });
  }
  
  ngOnInit() {
    console.log('Datos del producto:', this.data);
    console.log(this.data.id)
    this.listProduct = this.data
  }

  actualizarProducto(): void {
    try {
      const imagesArray = this.data.images[0].split(',');

      const datos: ProductPut = {
        title: this.datosProducto.get('editTitle')!.value,
        price: this.datosProducto.get('editPrice')!.value,
      };

      this.fakeApi.putProduct(datos, this.data.id).subscribe(response => {
        this.dialogRef.close();
      });
    } catch (err) {
      console.log("Error al actualizar: ", err)
    }
  }
}
