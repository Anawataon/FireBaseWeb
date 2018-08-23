import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddWikiComponent } from './add-wiki/add-wiki.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'addWiki', component: AddWikiComponent }, //ในส่วนนี้เป็นการเรียก addwikicomponent เมื่อ path เป็น addWiki
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddWikiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
