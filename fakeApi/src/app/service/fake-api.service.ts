import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/Product';
import { ProductPut } from '../model/ProductPut';
import { environment } from '../Environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  myAppUrl:string
  myApiUrl:string
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/v1'
  }

  URL = 'https://api.escuelajs.co/api/v1';
  event:any

  //Al parecer debo poner 470 para poder ver los productos creados(Como son muchos)
  deleteProduct(id:number){
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`)
  }
  
  putProduct(productPut: any){
    return this.http.put(this.myAppUrl + this.myApiUrl + '/putProducts', productPut)
  }

  postProduct(product:Product){
    return this.http.post(this.myAppUrl + this.myApiUrl + '/postProducts', product);
  } 

  getProducts(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + '/products')  
  } 
}
