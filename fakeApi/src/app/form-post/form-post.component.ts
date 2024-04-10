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
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      images: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  postMethod() {
        const datos: Product = {
          title: this.datosUsuario.get('title')!.value,
          price: this.datosUsuario.get('price')!.value,
          description: this.datosUsuario.get('description')!.value,
          images: this.datosUsuario.get('images')!.value,
        };
      this.fakeApi.postProduct(datos).subscribe((data: any) => {
        this.router.navigate(['/home']);
      });
  }
  
  
  
}
