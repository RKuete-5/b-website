import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollDirective } from './directives/scroll.directive';
import { HspotFormComponent } from './components/hspot-form/hspot-form.component';
import { SafePipe } from './pipes/safe.pipe';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SplitPipe } from './pipes/split.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmptyComponent } from './components/empty/empty.component';


@NgModule({
  declarations: [ScrollDirective, HspotFormComponent, SafePipe, CatalogueComponent, HeaderComponent, FooterComponent, SplitPipe, EmptyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ScrollDirective,
    HspotFormComponent,
    SafePipe,
    CatalogueComponent,
    HeaderComponent,
    FooterComponent,
    SplitPipe,
    NgxPaginationModule,
    EmptyComponent
  ]
})
export class SharedModule { }
