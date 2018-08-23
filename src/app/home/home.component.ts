import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wikiList: AngularFireList<any>;
  wikis: any[];

  constructor(db: AngularFireDatabase) {
    this.wikiList = db.list('User1');
    console.log("wikiList = ", this.wikiList);
  }

  ngOnInit() {
    this.wikiList.snapshotChanges().pipe(
      map(actions => { 
        return actions.map(json => ({ key: json.key, value: json.payload.val() }));
      })
    ).subscribe(items => {
      this.wikis = items;
    });
  }

}
