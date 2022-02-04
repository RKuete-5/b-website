import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailEngineerComponent } from './detail-engineer/detail-engineer.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CloudEngineerComponent } from './cloud-engineer.component';

const routes: Routes = [
  { path: "" , component: CloudEngineerComponent },
  { path: "read-view", component: DetailEngineerComponent }
];

@NgModule({
  declarations: [DetailEngineerComponent, CloudEngineerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CloudEngineerModule { }
