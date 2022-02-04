import { Component,OnInit } from '@angular/core';

import { fadeAnimation } from '../shared/utils/animation';

declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [fadeAnimation]
})
export class LayoutComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
  }

  // routes prepare and map with animation trigger
  // preparedRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  // }


}
