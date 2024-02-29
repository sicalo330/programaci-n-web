import { Component } from '@angular/core';
import { FakeApiService } from '../service/fake-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private fakeApi: FakeApiService){}

  info: any

  ngOnInit(){
    this.fakeApi.getProduct().subscribe((data: any) => {
      console.log(data)
      this.info = data
    })
  }

}
