import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "src/app/shared/services/app.service";
import { LayoutService } from "src/app/shared/services/layout.service";
import { cards, imgs } from "../../../shared/utils/data.store";

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  cards = cards;
  texts = [
    "Expertise 360° : DevSecOps, Cybersécurité, Data ML & IA",
    "Développement de logiciels pour les cas d’usage complexes",
    "Formations Kubernetes certifiées et certifiantes",
  ];
  banner = this.texts[0];
  imgs = imgs;

  fixed: boolean = false;

  wikibedia = [];
  trainings = [];
  cloudengs = [];

  constructor(private layoutService: LayoutService, private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    this.getBanner();
    this.initSlick();
    this.getIndex();
    this.getPosts();
  }


  getIndex() {
    document.documentElement.querySelector("#input-jauge-1").setAttribute("readonly", "true");
    document.documentElement.querySelector("#input-jauge-2").setAttribute("readonly", "true");
    $("#input-jauge-1").val(1+"/4");
    $("#input-jauge-2").val(1+"/8");
    $('.slider-ctn').on('afterChange', function(event, slick, currentSlide:number){
      $("#input-jauge-2").val((currentSlide+1) + "/8");
      let jauge = document.querySelector<HTMLElement>("#jauge-2");
      jauge.style.width = (currentSlide*100)/7 +'%';
    });

    $('.slick-io').on('afterChange', function(event, slick, currentSlide: number){
      $("#input-jauge-1").val((currentSlide+1) + "/4");
      let jauge = document.querySelector<HTMLElement>("#jauge-1");
      jauge.style.width = (currentSlide*100)/3 +'%';
    });
  }

  getBanner() {
    setInterval(() => {
      let i = Math.floor(Math.random() * Math.floor(3));
      this.banner = this.texts[i];
    }, 4000);
  }

  getPosts() {
    this.appService.getPosts().subscribe(
      (_) => {
        this.wikibedia = _.posts.filter((p) => p.tags[0].name == 'wikibedia');
        this.trainings = _.posts.filter((p) => p.tags[0].name == 'trainings');
        this.cloudengs = _.posts.filter((p) => p.tags[0].name == 'cloud-engineering');
        // this.news = _.posts.filter((p) => p.tags[0].name == 'wikibedia');
        // this.cno = _.posts.filter((p) => p.tags[0].name == 'wikibedia');
      }
    );
  }

  initSlick() {
    $(document).ready(function () {
      $(".slider-ctn").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "40px",
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "40px",
              arrows: false,
            }
          }
        ]
      });
      $(".slick-o").slick({
        slidesToShow: 3,
        arrows: false,
        swipe:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '50px',
              arrows: false,
              swipe: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '50px',
              arrows: false,
              swipe: true
            }
          }
        ]
      });
      $(".slick-i").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: "ondemand",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              vertical: true,
              verticalSwiping: true,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              vertical: true,
              verticalSwiping: true,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          }
        ]
      });
      $(".slick-io").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      });
    });
  }

  onScroll(event: any) {
    let winScroll = document.querySelector(".comh").scrollTop;
    let height =  document.querySelector(".comh").scrollHeight - document.querySelector(".comh").clientHeight;
    const parallaxArr = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
    let intElemScrollTop = winScroll * 0.2;

    parallaxArr.forEach((parallax) => {
      parallax.style.transform = `translateY(${intElemScrollTop}px)`;
    });

    if (document.querySelector(".comh").scrollTop >= 50) {
      this.fixed = true;
    }

    if (document.querySelector(".comh").scrollTop < 50) {
      this.fixed = false;
    }
    let scrolled = (winScroll / height) * 100;
    this.layoutService.informHeader(scrolled);
  }

  scrollTo(section: string) {
    document.querySelector(`#${section}`).scrollIntoView({block: 'start'});
  }


  redirectTo(ref: string): void {
    if( ref == "gocno") {
      window.location.href = "";
    }
    this.router.navigate([ref]);
  }

}
