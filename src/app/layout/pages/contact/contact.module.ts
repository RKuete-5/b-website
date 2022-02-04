import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { AfterSubmitComponent } from './after-submit/after-submit.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "" , component: ContactComponent },
  { path: "request-sent" , component: AfterSubmitComponent }
];

@NgModule({
  declarations: [
    ContactComponent,AfterSubmitComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ContactModule { }
