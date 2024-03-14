import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';
import { ProductPut } from '../model/ProductPut';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }

  URL = 'https://api.escuelajs.co/api/v1';
  event:any

  //Al parecer debo poner 470 para poder ver los productos creados(Como son muchos)
  getProduct(){
    return this.http.get(`${this.URL}/products?offset=0&limit=20`);
  }

  getSingleProduct(){
    return this.http.get(`${this.URL}/products/id`);
  }

  postProduct(product:Product){
    console.log(product)
    console.log(product.images)
    /*
    product = {
      title:"asdasd",
      price:1232,
      description:"asdasdasd",
      categoryId: 1,
      images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Eiche_bei_Graditz.jpg/1920px-Eiche_bei_Graditz.jpg"]
    }
    */
    return this.http.post(`${this.URL}/products/`, product);
  }

  putProduct(productPut: ProductPut, id:number){
      return this.http.put(`${this.URL}/products/${id}`, productPut)
  }

  deleteProduct(product: Product, id:number){
    return this.http.delete(`${this.URL}/products/${id}`)
  }
  
}
