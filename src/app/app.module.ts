import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { RedditCardComponent } from './reddit-card/reddit-card.component';
import { RedditCardListComponent } from './reddit-card-list/reddit-card-list.component';
import { RedditOptionsComponent } from './reddit-options/reddit-options.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditCardComponent,
    RedditCardListComponent,
    RedditOptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
