import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertiseComponent } from './expertise.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "", component: ExpertiseComponent },
];

@NgModule({
  declarations: [
    ExpertiseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ExpertiseModule { }
