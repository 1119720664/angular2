import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import {AppRoutesModule} from "./app-routes.module";
import { AchildComponent } from './achild/achild.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MobileValidatorDirective } from './directive/mobile-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    AComponent,
    BComponent,
    AchildComponent,
    MyFormComponent,
    MyReactiveFormComponent,
    MobileValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
