import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EInfoComponent } from './e-info/e-info.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { IntroComponent } from './Components/intro/intro.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TextcomponentComponent,
    EmpInfoComponent,
    FormComponentComponent,
    EInfoComponent,
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
