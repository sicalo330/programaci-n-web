import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {

  constructor(private http: HttpClient) { }

  URL = 'https://api.escuelajs.co/api/v1'

  getProduct(){
    return this.http.get(`${this.URL}/products`)
  }

}
