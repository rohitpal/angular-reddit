import { Component, OnInit, Input } from '@angular/core';
import { RedditService } from '../reddit.service';

const REDDIT_DOMAIN = "https://www.reddit.com";
const REDDIT_PATH = "/r/aww";
const LIMIT = 25;

@Component({
  selector: 'app-reddit-card-list',
  templateUrl: './reddit-card-list.component.html',
  styleUrls: ['./reddit-card-list.component.css']
})

export class RedditCardListComponent implements OnInit {

  posts = [];
  after = null;
  loadingData = false;
  private _option = "";

  get option(): any {
    return this._option;
  }

  @Input()

  set option(val: any){
    this._option = val;
    this.after = "";
    this.posts = [];
    this.ngOnInit();
  }

  constructor(private reddit: RedditService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    if(!this.loadingData){
      this.loadingData = true;
      let url = this.buildURL();
      this.reddit.getData(url)
      .subscribe({
        next: (res: any) => {
          if(this.after == res.data.after){
            return;
          }
          this.after = res.data.after;
          for(var post of res.data.children){
            let obj = {
              thumbnail: post.data.thumbnail,
              title: post.data.title,
              subreddit: post.data.subreddit,
              url: REDDIT_DOMAIN + post.data.permalink
            };
            this.posts.push(obj)
          }
          this.loadingData = false;
        }
      });
    }
  }

  buildURL(){
    let params = {after: this.after, limit: LIMIT};
    let path = REDDIT_PATH;
    if(this.option == "new" || this.option == "top" || this.option == "hot" ){
      path += `\/${this.option}`;
    }
    path += ".json";
    let url = `${REDDIT_DOMAIN + path}?${Object.keys(params).map(k => k + "=" + params[k]).join('&')}`;
    return url;
  }

}
