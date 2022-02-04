import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailWikiComponent } from './detail-wiki/detail-wiki.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { WikibediaComponent } from './wikibedia.component';

const routes: Routes = [
  { path: "", component: WikibediaComponent },
  { path: "read-view", component: DetailWikiComponent }
];

@NgModule({
  declarations: [DetailWikiComponent, WikibediaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class WikibediaModule { }
