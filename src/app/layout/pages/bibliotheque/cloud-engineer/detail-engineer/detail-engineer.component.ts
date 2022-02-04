import { Component, ElementRef, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "src/app/shared/services/app.service";

declare var $: any;

@Component({
  selector: "app-detail-engineer",
  templateUrl: "./detail-engineer.component.html",
  styleUrls: ["./detail-engineer.component.scss"],
})
export class DetailEngineerComponent implements OnInit {
  post: any;
  current: any;
  posts = [];

  spin = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (_) => {
        this.getArticle(_?.article);
      },
      (err) => {
        console.log(err);
      }
    );

    this.initSlick();
    this.getArticles();
  }

  getArticle(id: string): void {
    this.appService.getPost(id).subscribe(
      (_) => {
        this.post = _?.posts[0];
        this.spin = false;
      },
      (err) => {
        this.spin = false;
      }
    );
  }

  getArticles(): void {
    this.appService.getPosts().subscribe(
      (_) => {
        this.posts = _.posts.filter(
          (p: any) => p.tags[0].name == "cloud-engineering"
        );
      },
      (err) => {}
    );
  }

  goToArticle(article: any) {
    this.router.navigate(["/bebliotheque/cloud-engineering/read-view"], {
      queryParams: { article },
    });
  }

  initSlick(): void {
    $(document).ready(function () {
      $(".mob-ctn").slick({
        infinite: true,
        slidesToShow: 3,
        swipe: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              swipe: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "40px",
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
              centerPadding: "40px",
              arrows: false,
            },
          },
        ],
      });
    });
  }
}
