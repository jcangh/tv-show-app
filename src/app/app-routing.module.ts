import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from "./user/add-user/add-user.component";
import { ListUserComponent } from "./user/list-user/list-user.component";
import { IndexComponent } from "./index/index.component";
import { ListShowComponent } from './show/list-show/list-show.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'index', component: IndexComponent},
  { path: 'list-show', component: ListShowComponent},
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
