import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path: 'home', component: UsersListComponent},
  {path:'user/:id', component:UserDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
