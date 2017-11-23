import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  public articles: Observable<any[]>
  
  constructor(private fire: AngularFirestore) {
    this.articles= fire.collection('/articles').valueChanges();
  }

}
