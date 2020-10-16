import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Component({
  selector: "app-base",
  templateUrl: "./base.component.html",
  styleUrls: ["./base.component.scss"],
})
export class BaseComponent {
  public menuItems: object[] = [
    { name: 'home', url: 'home' },
    { name: 'about us', url: 'about-us' },
    { name: 'contact', url: 'contact' },
  ];

  routerLinkActiveOptions = {
    exact: true,
  };

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
  }

}
