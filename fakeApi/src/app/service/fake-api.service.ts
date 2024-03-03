import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }

  URL = 'https://api.escuelajs.co/api/v1';
  event:any

  //Al parecer debo poner 470 para poder ver los productos creados(Como son muchos)
  getProduct(){
    return this.http.get(`${this.URL}/products?offset=40&limit=20`);
  }

  getSingleProduct(){
    return this.http.get(`${this.URL}/products/id`);
  }

  postProduct(product:Product){
    console.log(product)
    return this.http.post(`${this.URL}/products/`, product);
  }

  putProduct(product: Product, id:number){
    console.log(product)
    console.log(id)
      return this.http.put(`${this.URL}/products/${id}`, product)
  }

  deleteProduct(product: Product, id:number){
    return this.http.delete(`${this.URL}/products/${id}`)
  }
  
}
