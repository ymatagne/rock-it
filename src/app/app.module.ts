import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
