import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes  = [
  { path: "", component: LayoutComponent,
    children: [
     { path: "", data: { animation: "home"}, loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
     { path: "expertise", data: { animation: "expertise"}, loadChildren: () => import('./pages/expertise/expertise.module').then(m => m.ExpertiseModule) },
     { path: "formations", loadChildren: () => import('./pages/formations/formations.module').then(m => m.FormationsModule) },
     { path: "contact", loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) },
     { path: "bebliotheque", loadChildren: () => import('./pages/bibliotheque/bibliotheque.module').then(m => m.BibliothequeModule)}
    ]
  }
];

@NgModule({
  declarations: [
    LayoutComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LayoutModule { }
