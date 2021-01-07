import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { IndexComponent } from './components/principalpage/index/index.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"", component:IndexComponent},
  {path:"login", component:LoginComponentComponent},
  {path:"contact", component:ContactComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
