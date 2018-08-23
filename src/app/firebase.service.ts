import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class FirebaseService {

    wikiList: AngularFireList<any>;
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.wikiList = db.list('wikis');
    }

//     getWikiList(): Observable<any[]> {
//         return this.wikiList.snapshotChanges().map(actions => {
//             return actions.map(action => ({ key: action.key, value: action.payload.val() }));
//         });
//     }
 }