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
      categoryId: ['', Validators.required]
    })
  }
  ngOnInit(): void {
  }

  postMethod() {
    console.log("asdasdkjaskldhajsd");
      // La URL es válida, puedes continuar con la lógica para enviar la solicitud POST
      /*
      const datos: Product = {
        title:"asdasd",
        price:1232,
        description:"asdasdasd",
        categoryId: 1,
        images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg"]

        console.log(datos.images)
      }
      const datos: Product = {
        title: this.datosUsuario.get('title')!.value,
        price: this.datosUsuario.get('price')!.value,
        description: this.datosUsuario.get('description')!.value,
        categoryId: this.datosUsuario.get('categoryId')!.value,
        images: [this.datosUsuario.get('images')!.value.replace(/'/g, '"')],
      };   

      console.log([this.datosUsuario.get('images')!.value.replace(/'/g, '"')])
      console.log(datos.images)
      */

      
      /*
        {
    title: 'asdasd',
    price: 1232,
    description: 'asdasdasd',
    categoryId: 1,
    images: [
      
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg'
    ]
  }
  {
    title: 'asdas',
    price: 14,
    description: 'asd',
    categoryId: 241,
    images: [
      
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg'
    ]
  }
      */
        const datos: Product = {
          title: this.datosUsuario.get('title')!.value,
          price: this.datosUsuario.get('price')!.value,
          description: this.datosUsuario.get('description')!.value,
          categoryId: this.datosUsuario.get('categoryId')!.value,
          images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg"]
        };   
  

        console.log(datos)

      this.fakeApi.postProduct(datos).subscribe((data: any) => {
        console.log(data.id);
        this.router.navigate(['/home']);
      });
  }
  
  
  
}
