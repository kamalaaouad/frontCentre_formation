import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { IndexComponent } from './components/principalpage/index/index.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"", component:IndexComponent},
  {path:"login", component:LoginComponentComponent},
  {path:"contact", component:ContactComponent, canActivate: [AuthGuard]},
  {path:"register", component:RegisterComponent},
  {path: "admin",component:AdminComponent , canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
