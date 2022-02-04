import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailTrainingComponent } from './detail-training/detail-training.component';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  { path: "", component: TrainingsComponent },
  { path: "read-view", component: DetailTrainingComponent }
];


@NgModule({
  declarations: [DetailTrainingComponent, TrainingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TrainingsModule { }
