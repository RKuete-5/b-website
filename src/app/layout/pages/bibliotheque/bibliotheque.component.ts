import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.scss']
})
export class BibliothequeComponent implements OnInit {

  open = false;

  constructor(private appService: AppService, private router : Router) { }

  ngOnInit(): void {
    
  }

  toggleMobileNav(): void {
    this.open = !this.open;
  }

  directTo(path: string) {
    this.open = false;
    this.router.navigate([path]);
  }

}
