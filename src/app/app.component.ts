import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio_v2';

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  constructor(private observer: BreakpointObserver, private router: Router) {

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) =>{
      if (res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
        
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }

  onProfile(){
    this.router.navigateByUrl("/profile")
  }
  onHome(){
    this.router.navigateByUrl("/")
  }
}
