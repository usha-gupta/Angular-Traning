import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { DemocompComponent } from './democomp/democomp.component'

const routes: Routes = [
  {path: "", component: FooterComponent },
  {path: "", component: DemocompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
Routes

 }
