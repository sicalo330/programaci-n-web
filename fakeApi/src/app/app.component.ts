import { Component } from '@angular/core';
import { FakeApiService } from './service/fake-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fakeApi';
  info: any

  constructor(){}
}
