import {
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { LayoutService } from "src/app/shared/services/layout.service";

declare var $: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  open = false;

  @Input() status: boolean;

  currentUrl = '/';

  constructor(private router: Router, public layoutService: LayoutService) {
    this.getCurrentPage();
  }

  ngOnInit(): void {
    
  }

  getCurrentPage(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_: any) => {
        this.currentUrl = _?.url;
          this.layoutService.informHeader(0);
      });
  }

  redirectTo(ref: string): void {
    this.router.navigate([ref]);
  }

  toggleMobileNav() {
    this.open = !this.open;
  }

  toggleCollapse(i: any): void {
    if (this.open == true) {
      if (i != undefined) {
        $(`#${i}`).collapse("toggle");
      }
    }
  }

  redirection() {
    window.location.href = "https://gocno.io";
  }
}
