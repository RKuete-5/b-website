import { Component, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/shared/services/layout.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private zone: NgZone, private router: Router, private layoutService: LayoutService) { }
  

  ngOnInit(): void {
  
  }

  onScroll(event: any) {
    let winScroll = document.querySelector(".comh").scrollTop;
    let height =
      document.querySelector(".comh").scrollHeight - document.querySelector(".comh").clientHeight;
    let scrolled = (winScroll / height) * 100;
    const parallaxArr = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
    let intElemScrollTop = winScroll * 0.2;

    parallaxArr.forEach((parallax) => {
      parallax.style.transform = `translateY(${intElemScrollTop}px)`;
    });
    this.layoutService.informHeader(scrolled);
  }


  redirection(link: string) {
    window.location.href = link;
  }


}
