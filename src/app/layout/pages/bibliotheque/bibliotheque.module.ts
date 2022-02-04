import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BibliothequeComponent } from "./bibliotheque.component";
import { CnoComponent } from "./cno/cno.component";
import { NewsComponent } from "./news/news.component";

import { WelcomeComponent } from "./welcome/welcome.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
 { path: "" , component: BibliothequeComponent, 
  children: [
    { path: "", component: WelcomeComponent },
    { path: "trainings", loadChildren: () => import('./trainings/trainings.module').then(m => m.TrainingsModule) },
    { path: "cloud-engineering", loadChildren: () => import('./cloud-engineer/cloud-engineer.module').then(m => m.CloudEngineerModule) },
    { path: "wikibedia", loadChildren: () => import('./wikibedia/wikibedia.module').then(m => m.WikibediaModule) },
    { path: "news", component: NewsComponent },
    { path: "cno", component: CnoComponent }
  ]
 }
];

@NgModule({
  declarations: [
    BibliothequeComponent,
    NewsComponent,
    WelcomeComponent,
    CnoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class BibliothequeModule {}
