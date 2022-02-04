import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

declare var hbspt: any;

@Component({
  selector: 'hspot-form',
  templateUrl: './hspot-form.component.html',
  styleUrls: ['./hspot-form.component.scss']
})
export class HspotFormComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
  
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
      formId: "f55bf30a-1806-4fb7-90dc-226a7a7b9bfa",
      target: "#hubspotForm",
      onFormSubmit: function() {
          seft.router.navigate(['/request-sent']);    
      } 
    });

  }

}
