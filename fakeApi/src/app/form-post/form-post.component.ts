import { Component } from '@angular/core';
import { FakeApiService } from '../service/fake-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../model/Product';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent {
  iconLeft = faCircleArrowLeft
  datosUsuario: FormGroup
  constructor(private fakeApi: FakeApiService, private fb: FormBuilder, private router:Router ){
    this.datosUsuario = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.datosUsuario = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required]
    });
  }

  postMethod(){
    console.log('asdasdas')
    const datos: Product = {
      categoryId: 1,
      title: this.datosUsuario.get('title')!.value,
      price: this.datosUsuario.get('price')!.value,
      description: this.datosUsuario.get('description')!.value,
      images: ["https://i.imgur.com/wXuQ7bm.jpeg"]
    }
    console.log(datos)
    this.fakeApi.postProduct(datos).subscribe((data:any) => {
      console.log(data.id)
      this.router.navigate(['/home']);
    });

  }
}
