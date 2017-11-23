import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { fadeAnimation } from '../animations/fadein.animation';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class ArticleComponent implements OnInit {

  public article: any;
  
  constructor(public db: AngularFireDatabase, private route: ActivatedRoute, private dom: DomSanitizer) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.db.object('/articles/' + params['id']).valueChanges().subscribe((result) => this.article = result);
    });
  }

}
