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

  getProduct(){
    return this.http.get(`${this.URL}/products`);
  }

  postProduct(product:Product){
    console.log('Llego al servicio post')
    return this.http.post(`${this.URL}/postProduct`, product);
  }
}
