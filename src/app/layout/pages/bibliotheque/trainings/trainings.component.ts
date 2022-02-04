import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {

  posts = [];
  p = 1;
  spin = true;

  // public config: PaginationInstance = {
  //   id: 'custom',
  //   itemsPerPage: 10,
  //   currentPage: 1
  // };

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  goToArticle(article: any) {
    this.router.navigate(['/bebliotheque/trainings/read-view'],{queryParams:{article}});
  }

  getArticles(): void {
    this.appService.getPosts().subscribe(
    (_) => {
      this.posts = _.posts.filter((p: any) => p.tags[0].name == 'trainings');
      this.spin = false;
    },
    (err) => {
      this.spin = false;
    }
    );
  }

}
