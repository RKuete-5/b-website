import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-submit',
  templateUrl: './after-submit.component.html',
  styleUrls: ['./after-submit.component.scss']
})
export class AfterSubmitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onScroll(event:any) {
    let winScroll = document.querySelector(".comh").scrollTop;
    const parallaxArr = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
    let intElemScrollTop = winScroll * 0.2;

    parallaxArr.forEach((parallax) => {
      parallax.style.transform = `translateY(${intElemScrollTop}px)`;
    });
  }

}
