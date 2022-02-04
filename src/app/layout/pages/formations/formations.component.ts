import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { comments, formations, formationTypes } from '../../../shared/utils/data.store';

declare var $: any;

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  currentSection = "banner";
  formationTypes  = formationTypes;
  formations = formations;

  comments = comments;
  
  

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.initSlick();
  }


  onSectionChange(section: string) {
    this.currentSection = section;
  
  }
  
  scrollTo(section: string) {
    document.querySelector(`#${section}`).scrollIntoView({block: 'start'});
  }


  initSlick() {
    $(document).ready(function(){
      $('.forma-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerPadding: '10px',
            }
          },
          {
            breakpoint: 480,
            settings: {
               infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerPadding: '10px',
            }
          }
        ]
      });
    
      $('.testi-slick').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive:[
          {
            breakpoint: 768,
              settings: {
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });
    });
  }


  choose() {
    $('#staticBackdrop').modal('show');
  }

  close() {
    $('#staticBackdrop').modal('hide'); 
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

  getStatus(event: any) {
    this.close();
  }
}
