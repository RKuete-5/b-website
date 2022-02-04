import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { LayoutService } from 'src/app/shared/services/layout.service';

declare var $: any;

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  wikibedia = [];
  trainings = [];
  cloudengs = [];

  spin = true;


  constructor(private appService: AppService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initSlick();
    this.getPosts();
  }


  getPosts() {
    this.appService.getPosts().subscribe(
      (_) => {
        console.log(_);
        this.wikibedia = _.posts.filter((p) => p.tags[0].name == 'wikibedia');
        this.trainings = _.posts.filter((p) => p.tags[0].name == 'trainings');
        this.cloudengs = _.posts.filter((p) => p.tags[0].name == 'cloud-engineering');
        // this.news = _.posts.filter((p) => p.tags[0].name == 'wikibedia');
        // this.cno = _.posts.filter((p) => p.tags[0].name == 'wikibedia');
        this.spin = false;
      },
      (err) => {
        this.spin = false;
      }
    );
  }

  initSlick(): void {
    $(document).ready(function(){ 
      $('.bd-1 .line').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '50px',
        arrows: false
      });
    });
  }

  goToTrain(article: any) {
    this.router.navigate(['trainings/read-view'],{relativeTo: this.route,queryParams:{article}});
  }
  goToCloudEng(article: any) {
    this.router.navigate(['cloud-engineering/read-view'],{relativeTo: this.route,queryParams:{article}});
  }
  goToWiki(article: any) {
    this.router.navigate(['wikibedia/read-view'],{relativeTo: this.route,queryParams:{article}});
  }

}
