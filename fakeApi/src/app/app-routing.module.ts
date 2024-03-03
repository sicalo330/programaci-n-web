import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPostComponent } from './form-post/form-post.component';
import { ProductComponent} from './product/product.component';
import { FormPutComponent } from './form-put/form-put.component';

const routes: Routes = [
  { path:'home', component:ProductComponent },
  { path:'agregarProducto', component:FormPostComponent},
  { path:'actualizarProducto', component:FormPutComponent},
  { path:'', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
