import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
const routes: Routes = [{
  path:'',
  component:MessagesComponent,
}];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
