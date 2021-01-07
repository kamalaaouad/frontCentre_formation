import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/principalpage/index/index.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // HttpClientModule,
    NavbarComponent,
    IndexComponent,
    FooterComponent,
    LoginComponentComponent,
    ContactComponent,
    LayoutClientComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClient
],
  bootstrap: [AppComponent]
})
export class AppModule { }
