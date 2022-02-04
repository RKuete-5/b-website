import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

declare var hbspt: any;

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit, AfterViewInit {

  @Output() onSubmit = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.initForm();
  }

  initForm():void {
    let seft = this;
    hbspt.forms.create({
      region: "na1",
      portalId: "8613364",
      formId: "b59dcefb-1a64-4b25-adc6-0b54cc3fdcfc",
      target: "#hubspotForm-catalogue",
      onFormSubmit: function() {
          seft.onSubmit.emit(true);     
      } 
    });

  }

}
