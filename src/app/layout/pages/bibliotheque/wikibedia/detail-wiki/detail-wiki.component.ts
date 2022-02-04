import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';

declare var $: any;

@Component({
  selector: 'app-detail-wiki',
  templateUrl: './detail-wiki.component.html',
  styleUrls: ['./detail-wiki.component.scss']
})
export class DetailWikiComponent implements OnInit {

  post: any;
  spin = true;
  posts = [];

  constructor(private route: ActivatedRoute,private router: Router, private appService: AppService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((_) => {
      this.getArticle(_?.article);
    },(err) => {
      console.log(err);
    });
    this.initSlick();
    this.getArticles();
  }


  getArticle(id: string): void {
    this.appService.getPost(id).subscribe((_) => {
      this.post = _?.posts[0];
      this.spin = false;
    },(err) => {
      this.spin = false;
    });
  }

  getArticles(): void {
    this.appService.getPosts().subscribe(
      (_) => {
        this.posts = _.posts.filter(
          (p: any) => p.tags[0].name == "trainings"
        );
      },
      (err) => {}
    );
  }

  goToArticle(article: any) {
    this.router.navigate(["/bebliotheque/trainings/read-view"], {
      queryParams: { article },
    });
  }

  initSlick(): void {
    $(document).ready(function () {
      $(".ctn-card").slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "60px",
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              swipe: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "60px",
              arrows: false,
            },
          },
        ],
      });
    });
  }
}
