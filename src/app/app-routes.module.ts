import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AComponent } from "./a/a.component";
import { BComponent } from "./b/b.component";


const routes: Routes = [
     {path:':id',component:AComponent},
     {path:'product/:id',component:BComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[],

})
export class AppRoutesModule { }
