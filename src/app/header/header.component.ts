import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private displayHeader: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoHome(){
    this.router.navigate(["/"]);
  }

}
