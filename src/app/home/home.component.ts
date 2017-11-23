import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { fadeAnimation } from '../animations/fadein.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class HomeComponent implements OnInit {

  public search: String;
  public articles: Observable<any[]>

  constructor(public db: AngularFireDatabase, private router: Router) {
    this.articles = db.list('/articles').valueChanges();
  }

  openArticle(articleId) {
    this.router.navigate(['/articles', articleId]);
  }

  filter(search) {
    if (search !== "") {
      this.articles = this.db.list('/articles', ref => ref.orderByChild("title").startAt(search)).valueChanges();
    }else{
      this.articles = this.db.list('/articles').valueChanges();
    }
  }
  ngOnInit() {
  }

}
