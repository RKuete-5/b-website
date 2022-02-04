import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/shared/services/layout.service';
import { expertiseReconnue, expertiseTerrain, partenaires } from '../../../shared/utils/data.store';

declare var $: any;

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {

  currentSection = "banner";

  expertiseTerrain = expertiseTerrain;
  expertiseReconnue= expertiseReconnue;
  partenaires = partenaires;

  constructor(private zone: NgZone, private router: Router,private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.initSlick();
    this.getIndex();
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    document.querySelector(`#${section}`).scrollIntoView({block: 'start'});
  }

  onScroll(event: any) {
    let winScroll = document.querySelector(".comh").scrollTop;
    let height = document.querySelector(".comh").scrollHeight - document.querySelector(".comh").clientHeight;
    let scrolled = (winScroll / height) * 100;
    const parallaxArr = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
    let intElemScrollTop = winScroll * 0.2;
    parallaxArr.forEach((parallax) => {
      parallax.style.transform = `translateY(${intElemScrollTop}px)`;
    });
    this.layoutService.informHeader(scrolled);
  }

  getIndex() {
    document.documentElement.querySelector("#input-svc").setAttribute("readonly", "true");
    document.documentElement.querySelector("#input-method").setAttribute("readonly", "true");
    document.documentElement.querySelector("#input-jauge-3").setAttribute("readonly", "true");
    $("#input-svc").val(1+"/5");
    $("#input-method").val(1+"/4");
    $("#input-jauge-3").val(1+"/4");
    $('.vv-1').on('afterChange', function(event, slick, currentSlide:number){
      $("#input-svc").val((currentSlide+1) + "/5");
    });

    $('.vv-2').on('afterChange', function(event, slick, currentSlide: number){
      $("#input-method").val((currentSlide+1) + "/4");
    });

    $('.sdl-midd').on('afterChange', function(event, slick, currentSlide: number){
      $("#input-jauge-3").val((currentSlide+1) + "/4");
      let jauge = document.querySelector<HTMLElement>("#jauge-3");
      jauge.style.width = (currentSlide*100)/3 +'%';
    });

  }

  initSlick() {
    $(document).ready(function(){
      $('.sdl-midd').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
            }
          }
        ]
      }); 

      $('.slick-client').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('a.client-prev'),
        nextArrow: $('a.client-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              prevArrow: $('a.client-prev'),
              nextArrow: $('a.client-next'),
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false, 
              slidesToShow: 2,
              prevArrow: $('a.client-prev'),
              nextArrow: $('a.client-next'),
            }
          }
        ]
      });
      
      $('.slick-certified').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('a.certified-prev'),
        nextArrow: $('a.certified-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              prevArrow: $('a.certified-prev'),
              nextArrow: $('a.certified-next'),
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false, 
              slidesToShow: 2,
              prevArrow: $('a.certified-prev'),
              nextArrow: $('a.certified-next'),
            }
          }
        ]
      });

      $('.slick-partener').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        prevArrow: $('a.partener-prev'),
        nextArrow: $('a.partener-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
              prevArrow: $('a.partener-prev'),
              nextArrow: $('a.partener-next'),
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false, 
              slidesToShow: 2,
              prevArrow: $('a.partener-prev'),
              nextArrow: $('a.partener-next'),
            }
          }
        ]
      });

      $('.vv-1').slick({
        infinite: true,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        prevArrow: $('a.s-prev'),
        nextArrow: $('a.s-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow:1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow:1
            }
          }
        ]
      });
      $('.vv-2').slick({
        infinite: true,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        prevArrow: $('a.m-prev'),
        nextArrow: $('a.m-next'),
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow:1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow:1
            }
          }
        ]
      }); 
    });
  }





}
