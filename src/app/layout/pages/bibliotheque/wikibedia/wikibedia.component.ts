import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-wikibedia',
  templateUrl: './wikibedia.component.html',
  styleUrls: ['./wikibedia.component.scss']
})
export class WikibediaComponent implements OnInit {

  posts = [];
  p = 1;

  spin = true;



  constructor(private router: Router, private appService: AppService) { }

  ngOnInit(): void {
    this.getArticles();
  }

  goToArticle(article: any) {
    this.router.navigate(['/bebliotheque/wikibedia/read-view'],{queryParams:{article}});
  }

  getArticles(): void {
    this.appService.getPosts().subscribe(
    (_) => {
      this.posts = _.posts.filter((p: any) => p.tags[0].name == 'wikibedia');
      this.spin = false;
    },
    (err) => {
      this.spin = false;
      this.posts = [];
    }
    );
  }

}
